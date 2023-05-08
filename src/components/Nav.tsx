"use client";
import { navLinks } from "@/data/navLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const curPath = usePathname();

  const defaultLinkStyle = `mr-5 text-lg transition hover:scale-125 hover:text-violet-500 duration-250`;

  return (
    <nav>
      {navLinks.map(({ title, link }) => {
        return (
          <Link
            className={
              curPath === link
                ? defaultLinkStyle + " text-violet-500"
                : defaultLinkStyle
            }
            key={title}
            href={link}
          >
            {title}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
