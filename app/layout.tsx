import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { getCustomMeta } from '@/data/metadatas';
import '@/styles/globals.css';
import { Metadata } from 'next';
import localFont from 'next/font/local';

const Pretendard = localFont({
  src: '../assets/fonts/PretendardVariable.woff2',
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = getCustomMeta({});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={Pretendard.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
