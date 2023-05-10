"use client";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";

type DetailProps = {
  content: string;
};

export default function Detail({ content }: DetailProps) {
  return (
    <div className="my-7">
      <article className="prose prose-slate">
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          remarkPlugins={[remarkGfm, remarkBreaks, remarkParse]}
        >
          {content}
        </ReactMarkdown>
      </article>
    </div>
  );
}
