import Detail from "@/components/post/Detail";
import { getNotionPageContent } from "@/lib/api/notion";

type PostProps = {
  params: {
    slug: string;
  };
};
// post detail page
export default async function Post({ params }: PostProps) {
  const { slug } = params;
  const data = await getNotionPageContent(slug);

  return (
    <div>
      <Detail content={data} />
    </div>
  );
}
