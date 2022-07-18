import Card from "./Card";
import articles from "./data";

function ArticlesList() {
  return (
    <div className="ArticlesList container mt-16">
      <h1 className="text-2xl text-center">Latest Articles</h1>
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
