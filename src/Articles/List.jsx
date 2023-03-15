import Card from "./Card";
import articles from "../data/articles";

function ArticlesList() {
  return (
    <div className="container mt-16">
      <div
        className="flex flex-wrap mt-16"
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
