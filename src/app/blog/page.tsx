import List from "@/components/post/List";
import { getPagesFromNotionDatabase } from "@/lib/api/notion";

async function getData() {
  const data = await getPagesFromNotionDatabase();
  return data;
}

export default async function Page() {
  const data = await getData();

  return (
    <div className="flex flex-col">
      <List postList={data} />
    </div>
  );
}
