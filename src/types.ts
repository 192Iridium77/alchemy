interface Component {
  type: "markdown" | "image" | "review";
}

export interface Markdown extends Partial<Component> {
  text: string;
  columns?: number;
}

export interface Image extends Partial<Component> {
  url: string;
  columns?: string;
  alt: string;
}

interface Video {
  url: string;
}

export interface Review extends Partial<Component> {
  image: Partial<Image>;
  columns?: string;
  title: string;
  author: string;
  rating: number;
  quote: string;
  text: string;
  video?: Video;
}

interface LocalImage {
  filename: string;
  extension: string;
  alt: string;
}

export interface Article {
  title: string;
  slug: string;
  description: string;
  components: (Markdown | Image | Review)[];
  author: string;
  published: boolean;
  publishedDate: Date;
  image: LocalImage;
}

export interface ArticleComponent {
  html: string;
  columns: number;
}
