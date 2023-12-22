interface BookImage {
  url: string;
  alt: string;
}

export interface Book {
  title: string;
  slug: string;
  published: boolean;
  description: string;
  author: string;
  publishedDate: Date;
  image: BookImage;
}
