import { getDatabase } from "@/lib/api/notion";

//post list page
export default async function Blog() {
  const data = await getDatabase();

  return (
    <div>
      <p>Blog</p>
      <p>{data.map((v) => v.id)}</p>
    </div>
  );
}
