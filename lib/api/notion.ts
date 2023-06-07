import { Client } from '@notionhq/client';
import {
  PageObjectResponse,
  PartialPageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { NotionAPI } from 'notion-client';

const { NEXT_PUBLIC_NOTION_SECRET_KEY } = process.env;

export const notionClient = new Client({
  auth: NEXT_PUBLIC_NOTION_SECRET_KEY,
  fetch,
});

interface DatabaseQueryOption {
  filter?: {
    tagName?: string;
  };
}

export const getDatabaseItems = async (
  databaseId: string,
  option?: DatabaseQueryOption
) => {
  const response = await notionClient.databases.query({
    database_id: databaseId,
    filter: {
      and: [
        {
          property: 'Visible',
          checkbox: {
            equals: true,
          },
        },
        {
          property: 'Tags',
          multi_select: {
            contains: option?.filter?.tagName ?? '',
          },
        },
      ],
    },
    sorts: [
      {
        direction: 'descending',
        timestamp: 'created_time',
      },
    ],
  });

  return response.results;
};

export const getSearchItems = async (query: string) => {
  const response = await notionClient.search({
    query,
    filter: {
      property: 'object',
      value: 'page',
    },
    sort: {
      direction: 'descending',
      timestamp: 'last_edited_time',
    },
  });

  return response.results as (PageObjectResponse | PartialPageObjectResponse)[];
};

export const getPageItem = async (pageId: string) => {
  const response = await notionClient.pages.retrieve({
    page_id: pageId,
  });

  return response;
};

/**
 * private인 Page의 이미지가 400으로 깨지는 이슈가 있음
 * react-notion-x issue https://github.com/NotionX/react-notion-x/issues/232
 */
export const unofficialNotionClient = new NotionAPI({});

export const getPageContent = async (pageId: string) => {
  const recordMap = await unofficialNotionClient.getPage(pageId);

  const filteredSignedUrl = Object.keys(recordMap.signed_urls).reduce<
    typeof recordMap.signed_urls
  >((acc, cur) => {
    if (recordMap.signed_urls[cur].indexOf('expirationTimestamp') > -1)
      return acc;

    acc[cur] = recordMap.signed_urls[cur];

    return acc;
  }, {});

  recordMap.signed_urls = filteredSignedUrl;

  return recordMap;
};
