import { Client, isFullPage } from "@notionhq/client";
import { PropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionToMarkdown } from "notion-to-md";

const { NEXT_PUBLIC_NOTION_SECRET_KEY, NEXT_PUBLIC_DATABASE_KEY } = process.env;

const notion = new Client({
  auth: NEXT_PUBLIC_NOTION_SECRET_KEY,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

export const getNotionPageContent = async (pageId: string) => {
  const mdblocks = await n2m.pageToMarkdown(pageId);

  return n2m.toMarkdownString(mdblocks);
};

/**
 * If property is paginated, returns an array of property items.
 *
 * Otherwise, it will return a single property item.
 */
async function getPropertyValue({
  pageId,
  propertyId,
}: {
  pageId: string;
  propertyId: string;
}): Promise<PropertyItemObjectResponse | Array<PropertyItemObjectResponse>> {
  let propertyItem = await notion.pages.properties.retrieve({
    page_id: pageId,
    property_id: propertyId,
  });

  if (propertyItem.object === "property_item") {
    return propertyItem;
  }

  // Property is paginated.
  // Tags 필드 참조
  let nextCursor = propertyItem.next_cursor;
  const results = propertyItem.results;

  while (nextCursor !== null) {
    propertyItem = await notion.pages.properties.retrieve({
      page_id: pageId,
      property_id: propertyId,
      start_cursor: nextCursor,
    });

    if (propertyItem.object === "list") {
      nextCursor = propertyItem.next_cursor;
      results.push(...propertyItem.results);
    } else {
      nextCursor = null;
    }
  }

  return results;
}

/**
 * Extract title as string from property value
 */
function getTitlePropertyValue(
  property: PropertyItemObjectResponse | Array<PropertyItemObjectResponse>
): string {
  if (Array.isArray(property)) {
    if (property?.[0].type === "title") {
      return property[0].title.plain_text;
    } else {
      return "No Title";
    }
  } else {
    if (property.type === "title") {
      return property.title.plain_text;
    } else {
      return "No Title";
    }
  }
}
/**
 * Extract rich_text as string from property value
 */
function getRichTextPropertyValue(
  property: PropertyItemObjectResponse | Array<PropertyItemObjectResponse>
): string {
  if (Array.isArray(property)) {
    // TODO: Description 필드는 노션에서 기본으로 제공하는것이 아닌 custom 필드라, 필수값내역이 빠져있음.
    // 추후 getTitlePropertyValue 함수 확장 시 고려 해야함.
    if (property?.[0]?.type === "rich_text") {
      return property[0].rich_text.plain_text;
    } else {
      return "No Description";
    }
  } else {
    if (property.type === "rich_text") {
      return property.rich_text.plain_text;
    } else {
      return "No Description";
    }
  }
}

/**
 * Gets pages from the database.
 */
export default async function getPagesFromNotionDatabase(): Promise<
  Array<NarrowNotionPageType>
> {
  const pages = [];
  let cursor = undefined;

  const shouldContinue = true;
  while (shouldContinue) {
    const { results, next_cursor } = await notion.databases.query({
      database_id: NEXT_PUBLIC_DATABASE_KEY ?? "",
      start_cursor: cursor,
    });
    pages.push(...results);
    if (!next_cursor) {
      break;
    }
    cursor = next_cursor;
  }
  console.log(`${pages.length} pages successfully fetched.`);

  const tasks = [];
  for (const page of pages) {
    // 타입가드로 partial narrow 하기
    if (!isFullPage(page)) continue;
    // TODO: Tag 필드 추후 추가 예정
    const pageId = page.id;

    const descriptionPropertyId = page.properties["Description"].id;
    const descriptionPropertyItems = await getPropertyValue({
      pageId,
      propertyId: descriptionPropertyId,
    });

    const description = getRichTextPropertyValue(descriptionPropertyItems);

    const titlePropertyId = page.properties["Name"].id;
    const titlePropertyItems = await getPropertyValue({
      pageId,
      propertyId: titlePropertyId,
    });
    const title = getTitlePropertyValue(titlePropertyItems);

    const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
      new Date(page.last_edited_time)
    );

    tasks.push({ pageId, description, title, date });
  }

  return tasks;
}
