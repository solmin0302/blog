import getTasksFromNotionDatabase from "@/lib/api/notion";
import Link from "next/link";

//post list page
export default async function Blog() {
  const data = await getTasksFromNotionDatabase();

  return (
    <div className="flex flex-col">
      {data.map(({ pageId, title }) => (
        <Link key={pageId} href={`/blog/${pageId}`}>
          {title}
        </Link>
      ))}
    </div>
  );
}
