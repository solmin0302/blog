import Link from "next/link";

type SocialLinkProps = {
  emoji: string;
  title: string;
  url: string;
};

export default function SocialLink({ emoji, title, url }: SocialLinkProps) {
  return (
    <Link href={url}>
      {emoji}
      <span className="ml-2 transition duration-200 hover:text-violet-500">
        {title}
      </span>
    </Link>
  );
}
