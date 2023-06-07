import Link from 'next/link';
import Nav from './Nav';

export default function Header() {
  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-white shadow-[0_5px_7px_0px_#ececec]">
        <nav className="flex flex-row justify-between max-w-4xl mx-auto py-4">
          <h1 className="font-black text-2xl">
            <Link href={'/'}>Sol.dev</Link>
          </h1>
          <Nav />
        </nav>
      </header>
      <div className="h-[64px]" />
    </>
  );
}
