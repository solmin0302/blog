import Item from "./Item";

type ListProps = {
  postList: NarrowNotionPageType[];
};

export default function List({ postList }: ListProps) {
  return (
    <div>
      {postList.map((post) => (
        <Item key={post.pageId} post={post} />
      ))}
    </div>
  );
}
