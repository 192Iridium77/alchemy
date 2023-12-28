import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Article } from "./article.types";

import articlesService from "./articles.service";

interface Props {
  articleId: string;
}

export default function useFetchArticle({ articleId }: Props) {
  const [loadingArticle, setLoadingArticle] = useState<boolean>(true);
  const [article, setArticle] = useState<Article>();
  const [selectedImageId, setSelectedImageId] = useState<string>();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        if (!articleId) return;
        const fetchedArticle = await articlesService.getArticle(articleId);
        setArticle(fetchedArticle);
        setSelectedImageId(fetchedArticle.imageId);
      } catch (error) {
        toast.error("Error fetching image");
      } finally {
        setLoadingArticle(false);
      }
    };

    fetchArticle();
  }, [articleId]);

  return { article, selectedImageId, loadingArticle };
}
