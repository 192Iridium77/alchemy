import React from "react";
import Card from "./Card";
import articles from "../data/articles";
import useAuthContext from "../context/useAuthContext";
import { Icon } from "alchemy-tech-ui";
import styled from "styled-components";
import { colors, spacing } from "alchemy-tech-ui";

const AdminTools = styled.div`
  position: fixed;
  top: 40%;
  left: 0;
  border-radius: 0 ${spacing(1)} ${spacing(1)} 0;
  padding: ${spacing(3)};
  background-color: ${colors.system[900]};
`;

interface ArticlesListProps {
  openCreateArticleModal: () => void;
}

function ArticlesList({ openCreateArticleModal }: ArticlesListProps) {
  const { isAdmin } = useAuthContext();

  return (
    <div className="container">
      {isAdmin ? (
        <AdminTools>
          <Icon
            type="Document"
            color="white"
            onClick={openCreateArticleModal}
          />
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
    </div>
  );
}

export default ArticlesList;
