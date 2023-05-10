import profilePictureSrc from "@/assets/img/profile_pic.jpeg";
import Tag from "@/components/Tag";
import SocialLink from "@/components/home/SocialLink";
import Title from "@/components/home/Title";
import List from "@/components/post/List";
import { getMeFromNotion, getPagesFromNotionDatabase } from "@/lib/api/notion";
import Image from "next/image";

export default async function Home() {
  const [myData, postData] = await Promise.all([
    getMeFromNotion(),
    (await getPagesFromNotionDatabase()).slice(0, 5),
  ]);

  return (
    <div className="flex flex-col my-10 gap-5">
      <section>
        <Title emoji="💻" innerText={myData.name ?? "Solmin Seo"} />
        <div className="flex flex-row my-5 gap-5">
          <div className="flex-1">
            <div>
              <Image
                src={profilePictureSrc}
                alt="profilePicture"
                width={0}
                height={0}
                className="w-full h-400 max-w-300"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-3 justify-center">
            <div className="">
              <h1 className="text-xl">
                <strong>
                  안녕하세요 👋
                  <br /> 프론트엔드 개발자 서솔민입니다.
                </strong>
              </h1>
            </div>
            <div className="flex flex-col gap-2 w-fit">
              <SocialLink
                emoji="🧑🏻‍💻"
                title="GitHub"
                url="https://github.com/solmin0302"
              />
              <SocialLink
                emoji="🤼‍♂️"
                title="LinkedIn"
                url="https://www.linkedin.com/in/solmin-seo/"
              />
              <SocialLink
                emoji="✉️"
                title="Mail"
                url="mailto:solgo123@gmail.com"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <Tag innerText="Typescript" />
              <Tag innerText="React.js" />
              <Tag innerText="Next.js" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <Title emoji="📚" innerText="Posts" />
        <div className="flex flex-col">
          {/* TODO: // Home -> minified blog list (gallary) */}
          <List postList={postData} />
        </div>
      </section>
    </div>
  );
}
