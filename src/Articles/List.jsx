import Card from "./Card";
import articles from "../data/articles";
import useAuthContext from "../context/useAuthContext";
import { Button } from "alchemy-tech-ui";
import styled from "styled-components";

const RoundButton = styled(Button)`
  position: fixed;
  bottom: 12px;
  right: 12px;
  border-radius: 100%;
  width: 64px;
  height: 64px;
`;

function ArticlesList() {
  const { isAdmin } = useAuthContext();

  return (
    <div className="container">
      {isAdmin ? <RoundButton text="Create" /> : null}
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
