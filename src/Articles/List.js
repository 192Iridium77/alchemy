import Card from "./Card";
import articles from "./data";

function ArticlesList() {
  console.log("🚀 ~ file: List.js ~ line 3 ~ articles", articles);
  return (
    <div className="ArticlesList container mt-16">
      <h1 class="text-2xl">Latest Articles</h1>
      <div class="flex flex-wrap mt-16">
        {articles.map((article) => {
          return <Card article={article} />;
        })}
      </div>
    </div>
  );
}

export default ArticlesList;
