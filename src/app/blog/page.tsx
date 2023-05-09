import getTasksFromNotionDatabase from "@/lib/api/notion";
import Link from "next/link";

//post list page
export default async function Blog() {
  const data = await getTasksFromNotionDatabase();

  return (
    <div className="flex flex-col">
      {data.map(({ pageId, title, description, date }) => (
        <Link href={`/blog/${pageId}`} passHref key={pageId}>
          <div className="w-full my-7 hover:scale-110 transition duration-75">
            <div className="font-medium text-xs text-gray-400">{date}</div>
            <div
              className={`font-extrabold text-2xl mt-2 hover:text-violet-500`}
            >
              {title}
            </div>
            <div className={`font-medium text-gray-600 text-xl mt-1`}>
              {description}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
