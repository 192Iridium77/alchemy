import articles from "./data";
import { useParams } from "react-router-dom";

function Article() {
  const { id } = useParams();
  console.log("🚀 ~ file: Article.js ~ line 5 ~ Article ~ id", id);
  const article = articles.find((article) => article.id === id);
  console.log("🚀 ~ file: Article.js ~ line 6 ~ Article ~ article", article);
  const image = article.image;

  return (
    <div className="Article container mt-16">
      <div className="flex">
        <div className="w-6/12 pr-8">
          <h1 className="text-xl">{article.title}</h1>
          <p className="mt-4">{article.publishedDate}</p>
          <p className="mt-4 font-bold">{article.description}</p>
          <h2 className="mt-4">By {article.author}</h2>
        </div>
        <div className="w-6/12">
          <img
            src={`/images/${image.filename}.${image.extension}`}
            alt={image.alt}
            className="aspect-ration-16/9"
          ></img>
        </div>
      </div>
      <div className="mt-16">
        {article.components.map((component) => {
          if (component.type === "paragraph") {
            return <p className="mt-4">{component.data.text}</p>;
          }
          return "";
        })}
      </div>
    </div>
  );
}

export default Article;
