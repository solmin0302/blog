import type { Metadata } from "next";

const metaData: Metadata = {
  title: "SOLMIN_SEO.dev",
  authors: [{ name: "SolminSeo", url: "https://blog-solmin0302.vercel.app/" }],
  description: "Private blog using NextJs 13",
  category: "frontend",
};
export const getCustomMeta = (meta: Partial<Metadata>) => ({
  ...metaData,
  ...meta,
});

export default metaData;
