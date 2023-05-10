import Item from "./Item";

type ListProps = {
  postList: NarrowNotionPageType[];
};

export default function List({ postList }: ListProps) {
  return (
    <div className="flex flex-col">
      {postList.map((post) => (
        <Item key={post.pageId} post={post} />
      ))}
    </div>
  );
}
