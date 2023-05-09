import List from "@/components/post/List";
import getTasksFromNotionDatabase from "@/lib/api/notion";

async function getData() {
  const data = await getTasksFromNotionDatabase();
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
