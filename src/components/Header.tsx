import Logo from "@/assets/img/dummyImage.png";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";

const Header = () => {
  return (
    <>
      <Head>
        <title>blog</title>
      </Head>
      <header className="sticky top-0 left-0 w-full z-10 h-20 bg-white dark:bg-[#111111]">
        <div className="flex flex-nowrap max-w-screen-md h-20 items-center justify-between m-auto px-8">
          <Link href="/" className="w-180 h-30">
            <Image src={Logo} alt="blogLogo" />
          </Link>
          <Nav />
        </div>
      </header>
    </>
  );
};

export default Header;
