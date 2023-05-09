import {
  APIErrorCode,
  Client,
  ClientErrorCode,
  isNotionClientError,
} from "@notionhq/client";

const { NEXT_PUBLIC_NOTION_SECRET_KEY, NEXT_PUBLIC_DATABASE_KEY } = process.env;

const notion = new Client({
  auth: NEXT_PUBLIC_NOTION_SECRET_KEY,
});

export const getDatabase = async () => {
  try {
    const response = await notion.databases.query({
      database_id: NEXT_PUBLIC_DATABASE_KEY ?? "",
    });
    return response.results;
  } catch (error: unknown) {
    if (isNotionClientError(error)) {
      // error is now strongly typed to NotionClientError
      switch (error.code) {
        case ClientErrorCode.RequestTimeout:
          // ...
          break;
        case APIErrorCode.ObjectNotFound:
          // ...
          break;
        case APIErrorCode.Unauthorized:
          // ...
          break;
        // ...
        default:
      }
    }
    return [];
  }
};
