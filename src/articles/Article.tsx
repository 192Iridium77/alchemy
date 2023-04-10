import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import Markdown from "../components/Markdown";
import Review from "../components/Review";
import articlesService from "./articles.service";
import { Article } from "./article.types";
import imagesService from "../images/image.service";
import { Image } from "../types";
import useAuthContext from "../context/useAuthContext";
import styled from "styled-components";
import { spacing, colors, Icon } from "alchemy-tech-ui";
import { toast } from "react-toastify";
import NotFound from "../NotFound";
import Loading from "../components/Loading";

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 200px 0;
`;

const AdminTools = styled.div`
  position: fixed;
  top: 40%;
  left: 0;
  border-radius: 0 ${spacing(1)} ${spacing(1)} 0;
  padding: ${spacing(3)};
  background-color: ${colors.system[900]};
`;

interface ArticleComponentProps {
  openEditArticleModal: ({ articleId }: { articleId: string }) => void;
}

export default function ArticleComponent({
  openEditArticleModal,
}: ArticleComponentProps) {
  const { isAdmin } = useAuthContext();
  const { slug } = useParams();

  const [article, setArticle] = useState<Article>();
  const [imageId, setImageId] = useState<string>();
  const [image, setImage] = useState<Image>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchArticle() {
      try {
        if (!slug) return;
        const fetchedArticle = await articlesService.getArticleBySlug(slug);
        setImageId(fetchedArticle.imageId);
        setArticle(fetchedArticle);
      } catch (error) {
        toast.error("An unknown error occured while loading the article");
      }
      setLoading(false);
    }

    fetchArticle();
  }, [slug]);

  useEffect(() => {
    async function fetchImage() {
      try {
        if (!imageId) return;
        const fetchedImage = await imagesService.getImage(imageId);
        setImage(fetchedImage);
      } catch (error) {
        toast.error("An unknown error occured while loading the image");
      }
    }

    fetchImage();
  }, [imageId]);

  if (!loading && !article) return <NotFound></NotFound>;

  // todo add components and load components
  const components: any = [];

  return (
    <div className="Article container mt-8">
      {isAdmin() && article ? (
        <AdminTools>
          <Icon
            type="Edit"
            color="white"
            onClick={() => openEditArticleModal({ articleId: article.id })}
          />
        </AdminTools>
      ) : null}
      {loading ? (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      ) : (
        <>
          <div className="relative bg-black">
            {image ? (
              <div
                className="w-full bg-cover bg-no-repeat bg-bottom"
                style={{
                  height: "400px",
                  minHeight: "400px",
                  backgroundColor: "black",
                  backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.4 ),
          rgba(0, 0, 0, 0.4)
        ), url(${image.url})`,
                }}
              ></div>
            ) : null}
            <div className="text-white absolute px-8 pb-8 bottom-0">
              <div className="text-2xl">{article?.title}</div>
              <div className="text-sm uppercase tracking-widest">
                {article?.author}
              </div>
              <div className="text-sm">
                {article?.publishedDate
                  ? article.publishedDate.toLocaleDateString("en-AU")
                  : null}
              </div>
            </div>
          </div>
          <div className="mt-16 text px-8">
            <Markdown>{article?.description}</Markdown>
            {components.map((component: any, index: number) => {
              if (component.type === "markdown") {
                // @ts-ignore
                return <Markdown key={index}>{component.text || ""}</Markdown>;
              }
              if (component.type === "review") {
                // @ts-ignore
                return <Review key={index} {...component} />;
              }
              return "";
            })}
          </div>
        </>
      )}
    </div>
  );
}
