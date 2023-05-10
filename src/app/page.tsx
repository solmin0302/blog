import Profile from "@/components/home/Profile";
import Title from "@/components/home/Title";
import List from "@/components/post/List";
import { getMeFromNotion, getPagesFromNotionDatabase } from "@/lib/api/notion";

export default async function Home() {
  const [myData, postData] = await Promise.all([
    getMeFromNotion(),
    (await getPagesFromNotionDatabase()).slice(0, 5),
  ]);

  return (
    <div className="flex flex-col my-10 gap-5">
      <section>
        <Title emoji="💻" innerText={myData.name ?? "Solmin Seo"} />
        <Profile />
      </section>
      <section>
        <Title emoji="📚" innerText="Posts" />
        {/* TODO: // Home -> minified blog list (gallary) */}
        <List postList={postData} />
      </section>
    </div>
  );
}
