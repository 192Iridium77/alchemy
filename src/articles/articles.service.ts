import axios from "../services/axios";
import { Article } from "./article.types";

const articlesService = {
  generateArticle: async ({ question }: any) => {
    const { data: description } = await axios.post("/articles/generate", {
      prompt: `
          Write an article summary for the following question:
          ${question}
          Identifying the most important details of the topic without critique or analysis.
      `,
    });
    const { data: title } = await axios.post("/articles/generate", {
      prompt: `
          Write a title for the following question in the style of Wired magazine:
          ${question}
          That relates to this article summary:
          ${description}
          Do not quote the result.
      `,
    });
    const { data: slug } = await axios.post("/articles/generate", {
      prompt: `
          Create an article slug that summarises this question:
          ${question}
          and this article summary:
          ${description}
          and article title:
          ${title}
          only return the slug without any other text.
      `,
    });
    return { title, slug, description };
  },
  createArticle: async (article: any) => {
    const { data } = await axios.post("/articles/create", article);
    return data;
  },
  updateArticle: async (id: string, article: any) => {
    const { data } = await axios.post(`/articles/${id}/update`, article);
    return data;
  },
  getArticle: async (id: string): Promise<Article> => {
    const { data } = await axios.get(`/articles/${id}`);
    return data;
  },
  getArticleBySlug: async (slug: string): Promise<Article> => {
    const { data } = await axios.get(`/articles/slug/${slug}`);
    return data;
  },
  getArticles: async (): Promise<Article[]> => {
    const { data } = await axios.get("/articles/admin");
    return data;
  },
  getPublishedArticles: async (): Promise<Article[]> => {
    const { data } = await axios.get("/articles");
    return data;
  },
};

export default articlesService;
