import Link from 'next/link';

export default function Nav() {
  const defaultLinkStyle = `mr-5 text-base transition hover:text-violet-500 duration-250`;

  const navLinks: Link[] = [
    { title: 'Home', link: '/' },
    { title: 'About', link: '/about' },
  ];

  return (
    <nav className="flex items-center">
      {navLinks.map(({ title, link }) => {
        return (
          <Link className={defaultLinkStyle} key={title} href={link}>
            {title}
          </Link>
        );
      })}
    </nav>
  );
}
