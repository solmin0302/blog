import { ParsedDatabaseItemType } from '@/lib/notionDataHandler';
import Item from './Item';

type ListProps = {
  postList: ParsedDatabaseItemType[];
};

export default function List({ postList }: ListProps) {
  if (postList.length === 0) {
    return (
      <div className="text-center text-2xl font-bold">No items found!</div>
    );
  }
  return (
    <div className="flex flex-col my-5 gap-5">
      {postList.map((post) => (
        <Item key={post.id} post={post} />
      ))}
    </div>
  );
}
