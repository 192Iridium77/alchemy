export interface Article {
  id: string;
  question: string;
  title: string;
  slug: string;
  published: boolean;
  description: string;
  author: string;
  publishedDate: Date;
  imageId: string;
}

export enum ComponentType {
  markdown = "markdown",
  image = "image",
  table = "table",
}

export interface MarkdownComponent {
  id: string;
  type: ComponentType.markdown;
  text: string;
}

// to be union of component types
export type Component = MarkdownComponent;
