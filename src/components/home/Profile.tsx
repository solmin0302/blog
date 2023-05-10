import profilePictureSrc from "@/assets/img/profile_pic.jpeg";
import Image from "next/image";
import Tag from "../Tag";
import SocialLink from "./SocialLink";

// TODO: 추후 User Database 분리 후 props 정리를 해보자
export default function Profile() {
  return (
    <div className="flex flex-row my-5 gap-5">
      <div className="flex-1">
        <Image
          src={profilePictureSrc}
          alt="profilePicture"
          width={0}
          height={0}
          className="w-full h-400 max-w-300"
        />
      </div>
      <div className="flex-1 flex flex-col gap-3 justify-center">
        <h1 className="text-xl">
          <strong>
            안녕하세요 👋
            <br /> 프론트엔드 개발자 서솔민입니다.
          </strong>
        </h1>
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
          <SocialLink emoji="✉️" title="Mail" url="mailto:solgo123@gmail.com" />
        </div>
        <div className="flex gap-2 flex-wrap">
          <Tag innerText="Typescript" />
          <Tag innerText="React.js" />
          <Tag innerText="Next.js" />
        </div>
      </div>
    </div>
  );
}
