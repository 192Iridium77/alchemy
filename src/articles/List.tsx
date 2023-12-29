import React, { useEffect, useState, useRef } from "react";
import Card from "./Card";
import useAuthContext from "../context/useAuthContext";
import { Icon } from "alchemy-tech-ui";
import styled from "styled-components";
import { colors, spacing } from "alchemy-tech-ui";
import articleService from "./articles.service";
import { Article } from "./article.types";
import GenerateArticle from "./EditArticle/GenerateArticle";
import { Modal } from "../components/Modal";

const AdminTools = styled.div`
  position: fixed;
  top: 40%;
  left: 0;
  border-radius: 0 ${spacing(1)} ${spacing(1)} 0;
  padding: ${spacing(3)};
  background-color: ${colors.system[900]};
`;

function ArticlesList() {
  const { isAdmin } = useAuthContext();
  const [articles, setArticles] = useState<Article[]>([]);

  const modalRef = useRef();

  const openModal = () => {
    // @ts-ignore
    modalRef.current.openModal();
  };

  useEffect(() => {
    const fetchArticles = async () => {
      if (isAdmin()) {
        const fetchedArticles = await articleService.getArticles();
        setArticles(fetchedArticles);
      } else {
        const fetchedArticles = await articleService.getPublishedArticles();
        setArticles(fetchedArticles);
      }
    };
    fetchArticles();
  }, [isAdmin]);

  return (
    <div className="container">
      {isAdmin() ? (
        <AdminTools>
          <Icon type="Document" color="white" onClick={openModal} />
        </AdminTools>
      ) : null}
      <div
        className="flex flex-wrap"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        {articles.map((article) => {
          return <Card key={article.slug} article={article} />;
        })}
      </div>
      <Modal ref={modalRef}>
        <GenerateArticle></GenerateArticle>
      </Modal>
    </div>
  );
}

export default ArticlesList;
