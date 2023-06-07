import NotionPageRenderer from '@/components/notion/NotionPageRenderer';
import { getDatabaseItems, getPageContent } from '@/lib/api/notion';

import { Metadata } from 'next';
import { ExtendedRecordMap } from 'notion-types';
import { getPageProperty, getPageTitle } from 'notion-utils';

interface DetailBlogPageParams {
  pageId: string;
}

const { NEXT_PUBLIC_DATABASE_KEY } = process.env;

export const generateStaticParams = async (): Promise<
  DetailBlogPageParams[]
> => {
  if (!NEXT_PUBLIC_DATABASE_KEY) throw new Error('DATABASE_ID is not defined');
  const databaseItems = await getDatabaseItems(NEXT_PUBLIC_DATABASE_KEY);

  const paths = databaseItems.map(({ id: pageId }) => ({
    pageId,
  }));

  return paths;
};

interface DetailBlogPageContent {
  recordMap: ExtendedRecordMap;
}

const getDetailBlogPageContent = async (
  pageId: string
): Promise<DetailBlogPageContent> => {
  const recordMap = await getPageContent(pageId);

  // const previewImage = await insertPreviewImageToRecordMap(recordMap);

  return {
    recordMap,
    // recordMap: {
    //   ...recordMap,
    //   preview_images: previewImage,
    // },
  };
};

interface DetailBlogPageProps {
  params: DetailBlogPageParams;
}

const DetailBlogPage = async ({ params }: DetailBlogPageProps) => {
  const { recordMap } = await getDetailBlogPageContent(params.pageId);

  return (
    <div className="md:py-12">
      <NotionPageRenderer recordMap={recordMap} />
    </div>
  );
};

export default DetailBlogPage;

export const generateMetadata = async ({
  params: { pageId },
}: DetailBlogPageProps): Promise<Metadata> => {
  const recordMap = await getPageContent(pageId);

  const propertyValue = Object.values(recordMap.block)[0].value;

  const title = getPageTitle(recordMap);
  const keywords = getPageProperty<string[]>(
    'Tags',
    propertyValue,
    recordMap
  ).join(', ');
  const description = getPageProperty<string>(
    'Description',
    propertyValue,
    recordMap
  );
  const cover = `/api/getImageFromNotion?type=cover&pageId=${pageId}`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      images: [cover],
    },
  };
};
