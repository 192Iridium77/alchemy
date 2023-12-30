import React, { useEffect, useState, useRef } from "react";

import { useParams } from "react-router-dom";
import Markdown from "../components/Markdown";
import { Modal } from "../components/Modal";
import Review from "../components/Review";
import articlesService from "./articles.service";
import { Article, Component } from "./article.types";
import imagesService from "../images/image.service";
import { Image } from "../types";
import useAuthContext from "../context/useAuthContext";
import styled from "styled-components";
import { spacing, colors, Icon, Button } from "alchemy-tech-ui";
import { toast } from "react-toastify";
import NotFound from "../components/NotFound";
import Loading from "../components/Loading";
import EditArticle from "./EditArticle/ModalContent"; // TODO rename to Edit
import CreateComponent from "./CreateComponent/Index";

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 200px 0;
`;

const AdminTools = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 10;
  top: 40%;
  left: 0;
`;

export default function ArticleComponent() {
  const { isAdmin } = useAuthContext();
  const { slug } = useParams();

  const [article, setArticle] = useState<Article>();
  const [articleComponents, setArticleComponents] = useState<Component[]>([]);
  const [imageId, setImageId] = useState<string>();
  const [image, setImage] = useState<Image>();
  const [loading, setLoading] = useState<boolean>(true);

  const editArticleModalRef = useRef();
  const createComponentModalRef = useRef();

  const openModalEditArticle = () => {
    // @ts-ignore
    editArticleModalRef?.current?.openModal();
  };
  const openCreateComponentModal = () => {
    // @ts-ignore
    createComponentModalRef?.current?.openModal();
  };

  async function fetchArticle() {
    try {
      if (!slug) return;
      console.log("FETCHING ARTICLE");
      const fetchedArticle = await articlesService.getArticleBySlug(slug);
      setImageId(fetchedArticle.imageId);
      setArticle(fetchedArticle);
    } catch (error) {
      toast.error("An unknown error occured while loading the article");
    } finally {
      setLoading(false);
    }
  }

  async function fetchComponents() {
    try {
      if (!article) return;
      const result = await articlesService.getArticleComponents(article.id);
      setArticleComponents(result);
    } catch (error) {
      toast.error("An unknown error occured while loading the article");
    } finally {
      setLoading(false);
    }
  }

  async function saveArticle() {
    // articlesService.updateArticle()
    // TODO update article, pass in components
    // get article should return article with components
  }

  const closeCreateComponentModal = async () => {
    // @ts-ignore
    createComponentModalRef?.current?.closeModal();
    await fetchArticle();
    await fetchComponents();
  };

  useEffect(() => {
    fetchArticle();
  }, [slug]);

  useEffect(() => {
    fetchComponents();
  }, [article]);

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

  const handleComponentCreated = (component: Component) => {
    setArticleComponents((previous) => {
      return [...previous, component];
    });
  };

  if (!loading && !article) return <NotFound></NotFound>;

  return (
    <div className="Article container mt-8">
      {isAdmin() && article ? (
        <AdminTools>
          <Button admin onClick={openModalEditArticle}>
            SETTINGS
          </Button>
          <Button admin onClick={() => {}}>
            SEO
          </Button>
          <Button admin onClick={saveArticle}>
            SAVE
          </Button>
        </AdminTools>
      ) : null}
      {loading ? (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      ) : (
        <>
          <div className="relative bg-black">
            {image?.url ? (
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
            ) : (
              <div
                className="w-full bg-gray-500"
                style={{ height: "400px" }}
              ></div>
            )}
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
            {articleComponents.map((component: Component, index: number) => {
              if (component.type === "markdown") {
                // @ts-ignore
                return (
                  <div
                    className={`mt-4 ${
                      isAdmin ? "relative border border-purple-200" : ""
                    }`}
                  >
                    <Markdown key={index}>{component.text || ""}</Markdown>
                    {isAdmin() ? (
                      <div className="absolute top-0 right-0">
                        <Button admin>EDIT</Button>
                      </div>
                    ) : null}
                  </div>
                );
              }
              if (component.type === "review") {
                // @ts-ignore
                return <Review key={index} {...component} />;
              }
              return "";
            })}
            {isAdmin() ? (
              <div className="flex justify-end">
                <Button
                  className="mt-4"
                  admin
                  onClick={openCreateComponentModal}
                >
                  ADD COMPONENT
                </Button>
              </div>
            ) : null}
          </div>
          <Modal ref={editArticleModalRef}>
            <EditArticle articleId={article!.id}></EditArticle>
          </Modal>
          {/* <Modal ref={createComponentModalRef}>
            <CreateComponent
              articleId={article!.id}
              closeModal={closeCreateComponentModal}
              componentOrder={articleComponents.length + 1}
              handleComponentCreated={handleComponentCreated}
            ></CreateComponent>
          </Modal> */}
        </>
      )}
    </div>
  );
}
