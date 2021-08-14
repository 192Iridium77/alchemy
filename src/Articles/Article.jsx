import articles from "./data";
import { useParams } from "react-router-dom";
import Markdown from "../components/Markdown";

function Article() {
  const { id } = useParams();
  const article = articles.find((article) => article.id === id);
  const image = article.image;

  return (
    <div className="Article container mt-16">
      <div className="flex">
        <div className="w-4/12 pr-8">
          <h1 className="text-2xl">{article.title}</h1>
          <p className="mt-4">{article.publishedDate}</p>
          <div>Tags</div>
          <h2 className="mt-4">By {article.author}</h2>
        </div>
        <div className="w-8/12">
          <img
            src={`/images/${image.filename}.${image.extension}`}
            alt={image.alt}
            className="aspect-ration-16/9"
          ></img>
        </div>
      </div>
      <div className="mt-16">
        {article.description}
        {article.components.map((component) => {
          if (component.type === "markdown") {
            return <Markdown className="mt-4" data={component.data}></Markdown>;
          }
          return "";
        })}
      </div>
    </div>
  );
}

export default Article;
