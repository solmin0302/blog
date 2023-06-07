import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { getCustomMeta } from '@/data/metadatas';
import 'react-notion-x/src/styles.css';
import '@/styles/globals.css';
import 'katex/dist/katex.min.css';
import { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/styles/notionStyle.css';
import 'prismjs/themes/prism-tomorrow.css';

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
