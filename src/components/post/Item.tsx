import Image from "next/image";
import Link from "next/link";

type ItemProps = {
  post: NarrowNotionPageType;
};
export default function Item({ post }: ItemProps) {
  const { pageId, postCoverUrl, title, description, date } = post;
  return (
    <Link href={`/blog/${pageId}`} passHref key={pageId}>
      <div className="w-full my-7 hover:scale-105 transition duration-75">
        {postCoverUrl && (
          <div className="relative">
            <Image
              src={postCoverUrl}
              alt="postCover"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-400"
            />
          </div>
        )}
        <div className={`font-extrabold text-2xl mt-2 hover:text-violet-500`}>
          {title}
        </div>
        <div className={`font-medium text-gray-600 text-xl mt-1`}>
          {description}
        </div>
        <div className="font-medium text-xs text-gray-400 mt-1">{date}</div>
      </div>
    </Link>
  );
}
