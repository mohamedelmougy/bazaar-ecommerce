type Slide = {
  imgUrl: string;
  alt: string;
  background: string;
  headings?: string;
  paragraph?: string;
};

type Category = {
  title: string;
  imgUrl: string;
  background: string;
};

export type { Slide, Category };
