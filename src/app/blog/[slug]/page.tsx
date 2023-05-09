import Detail from "@/components/post/Detail";
import { testNotionToMd } from "@/lib/api/notion";

// post detail page
export default async function Post() {
  const data = await testNotionToMd("706a6ee7-8208-4294-b39b-e708a2fa395c");

  return (
    <div>
      <Detail content={data} />
    </div>
  );
}
