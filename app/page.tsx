import Profile from '@/components/home/Profile';
import Title from '@/components/home/Title';
import List from '@/components/post/List';
import { getDatabaseItems } from '@/lib/api/notion';
import {
  ParsedDatabaseItemType,
  parseDatabaseItems,
} from '@/lib/notionDataHandler';

interface DatabaseItems {
  databaseItems: ParsedDatabaseItemType[];
  totalLength: number;
}

const ITEMS_PER_PAGE = 4;

const { NEXT_PUBLIC_DATABASE_KEY } = process.env;

const getFirstDatabaseItems = async (): Promise<DatabaseItems> => {
  if (!NEXT_PUBLIC_DATABASE_KEY) throw new Error('DATABASE_ID is not defined');
  const databaseItems = await getDatabaseItems(NEXT_PUBLIC_DATABASE_KEY);

  const parsedDatabaseItems = parseDatabaseItems(
    databaseItems.slice(0, ITEMS_PER_PAGE)
  );

  // const parsedDatabaseItemsWithPreview = await insertPreviewImage(
  //   parsedDatabaseItems
  // );

  return {
    databaseItems: parsedDatabaseItems,
    totalLength: databaseItems.length,
  };
};

export default async function Home() {
  const { databaseItems } = await getFirstDatabaseItems();

  return (
    <div className="flex flex-col md:items-start gap-8 py-6 md:py-12 w-4/5 max-w-4xl mx-auto md:text-left">
      <section className="w-full">
        <Title emoji="💻" innerText={'Solmin Seo'} />
        <Profile />
      </section>
      <section className="w-full">
        <Title emoji="📚" innerText="Posts" />
        {/* TODO: // Home -> minified blog list (gallary) */}
        <List postList={databaseItems} />
      </section>
    </div>
  );
}
