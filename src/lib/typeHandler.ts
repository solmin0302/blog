import {
  DatabaseObjectResponse,
  PageObjectResponse,
  PartialDatabaseObjectResponse,
  PartialPageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export function isFullPage(
  response: PageObjectResponse | PartialPageObjectResponse
): response is PageObjectResponse {
  return "url" in response;
}

export function isFullDatabase(
  response: DatabaseObjectResponse | PartialDatabaseObjectResponse
): response is DatabaseObjectResponse {
  return "title" in response;
}
