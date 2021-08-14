import Card from "./Card";
import articles from "./data";

function ArticlesList() {
  return (
    <div className="ArticlesList container mt-16">
      <h1 className="text-2xl">Latest Articles</h1>
      <div className="flex flex-wrap mt-16">
        {articles.map((article) => {
          return <Card key={article.id} article={article} />;
        })}
      </div>
    </div>
  );
}

export default ArticlesList;
