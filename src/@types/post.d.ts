declare global {
  interface NarrowNotionPageType {
    pageId: string;
    description: string;
    title: string;
    date: string;
    postCoverUrl?: string;
  }
}

export {};
