import {
  MultiSelectPropertyItemObjectResponse,
  PageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { getDatabaseItems } from './api/notion';

export interface ParsedDatabaseItemType {
  id: string;
  cover: string;
  icon: PageObjectResponse['icon'];
  tags: MultiSelectPropertyItemObjectResponse['multi_select'];
  created_dt: string;
  description: string;
  title: string;
  previewImage?: any;
  proxy: {
    cover: string;
    icon: string;
  };
}

export const parseDatabaseItems = (
  items: Awaited<ReturnType<typeof getDatabaseItems>>
) => {
  const parsedItems = items.reduce<ParsedDatabaseItemType[]>((acc, item) => {
    if (!('properties' in item)) return acc;
    if (item.parent.type !== 'database_id') return acc;

    const { id, icon, cover, last_edited_time, created_time } = item;

    const { Tags, Description, Name } = item.properties;

    const parsedCover =
      cover?.type === 'file' ? cover.file.url : cover?.external.url ?? '';

    const created_dt = new Intl.DateTimeFormat('en-US', {
      dateStyle: 'full',
    }).format(new Date(created_time));

    const description =
      (Description.type === 'rich_text'
        ? Description.rich_text[0]?.plain_text
        : '') ?? '';

    const title = Name.type === 'title' ? Name.title[0]?.plain_text : '';

    const tags = Tags.type === 'multi_select' ? Tags.multi_select : [];

    const proxyCoverUrl = `/api/getImageFromNotion?type=cover&pageId=${id}&lastEditedTime=${last_edited_time}`;
    const proxyIconUrl = `/api/getImageFromNotion?type=icon&pageId=${id}&lastEditedTime=${last_edited_time}`;

    const parsedResult: ParsedDatabaseItemType = {
      id,
      icon,
      cover: parsedCover,
      created_dt,
      description,
      title,
      tags,
      proxy: {
        cover: proxyCoverUrl,
        icon: proxyIconUrl,
      },
    };

    return [...acc, parsedResult];
  }, []);

  return parsedItems;
};
