import logo from "@/assets/img/logo.png";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";

export default function Header() {
  return (
    <>
      <Head>
        <title>blog</title>
      </Head>
      <header className="sticky top-0 left-0 w-full z-10 h-20 bg-white dark:bg-[#111111] shadow-[0_5px_7px_0px_#ececec]">
        <div className="flex flex-nowrap max-w-screen-md h-20 items-center justify-between m-auto px-8">
          <Link href="/" className="w-1/4">
            <Image src={logo} alt="blogLogo" />
          </Link>
          <Nav />
        </div>
      </header>
    </>
  );
}
