import { navLinks } from "@/data/navLinks";
import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      {navLinks.map(({ title, link }) => {
        return (
          <Link className="mr-5" key={title} href={link}>
            {title}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
