import { ParsedDatabaseItemType } from '@/lib/notionDataHandler';
import Image from 'next/image';
import Link from 'next/link';
import Tag from '../Tag';

type ItemProps = {
  post: ParsedDatabaseItemType;
};
export default function Item({ post }: ItemProps) {
  const { id, cover, title, description, created_dt, tags } = post;

  return (
    <Link
      className="flex-grow group border-b-2 border-slate-300 pb-4"
      href={`/blog/${id}`}
      passHref
      key={id}
    >
      <div className="w-full">
        {cover && (
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={cover}
              alt="postCover"
              className="group-hover:scale-105 transition-transform"
              fill
              sizes="100vw"
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
        )}
        <div
          className={`font-extrabold text-2xl mt-2 group-hover:text-violet-500 transition-colors`}
        >
          {title}
        </div>
        <div className={`font-medium text-gray-600 text-xl mt-1`}>
          {description}
        </div>
        <div className={`font-medium text-gray-600 text-xl mt-1`}>
          {tags.map(({ id, name }) => (
            <Tag key={id} innerText={name} />
          ))}
        </div>
        <div className="font-medium text-xs text-gray-400 mt-1">
          {created_dt}
        </div>
      </div>
    </Link>
  );
}
