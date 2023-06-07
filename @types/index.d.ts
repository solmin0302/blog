declare global {
  interface Link {
    title: string;
    link: string;
  }
  interface NarrowNotionPageType {
    pageId: string;
    description: string;
    title: string;
    date: string;
    postCoverUrl?: string;
  }
}

export {};
