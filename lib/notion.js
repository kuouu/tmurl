import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getDatabase = async (
  filter = undefined,
  sorts = undefined
) => {
  const databaseId = 'cdd2ee2321eb4b7b94884ac8a9ea57bc';
  const response = await notion.databases.query({
    database_id: databaseId,
    filter,
    sorts
  });
  return response
}

export const getOriginURL = async (short) => {
  return getDatabase({
    property: 'Short',
    text: {
      equals: short,
    },
  })
}
