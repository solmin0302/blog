import type { Metadata } from 'next';

const metaData: Metadata = {
  title: 'SOL.dev',
  authors: [{ name: 'SolminSeo', url: 'https://blog-solmin0302.vercel.app/' }],
  description: 'Private blog using NextJs 13',
  category: 'frontend',
  keywords:
    'NextJs, NextJs13, React, Tailwindcss, Notion API, Typescript Frontend',
};
export const getCustomMeta = (meta: Partial<Metadata>) => ({
  ...metaData,
  ...meta,
});

export default metaData;
