import Link from 'next/link';
import Nav from './Nav';

export default function Header() {
  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-white">
        <nav className="flex flex-row justify-between max-w-5xl mx-auto p-4">
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
