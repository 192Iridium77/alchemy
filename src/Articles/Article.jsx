import articles from "./data";
import { useParams } from "react-router-dom";
import Markdown from "../components/Markdown";

function Article() {
  const { id } = useParams();
  const article = articles.find((article) => article.id === id);
  const image = article.image;

  return (
    <div className="Article container mt-8">
      <div className="relative bg-black">
        <div
          className="w-full bg-cover bg-no-repeat bg-bottom"
          style={{
            height: "400px",
            backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.4),
            rgba(0, 0, 0, 0.4)
          ), url(/images/${image.filename}.${image.extension})`,
          }}
        ></div>
        <div className="text-white absolute pl-8 pb-8 text-xl bottom-0">
          {article.title}
        </div>
      </div>
      <div className="mt-16 w-8/12 text">
        {article.description}
        {article.components.map((component, index) => {
          if (component.type === "markdown") {
            return (
              <Markdown
                key={index}
                className="mt-4"
                data={component.data}
              ></Markdown>
            );
          }
          return "";
        })}
      </div>
    </div>
  );
}

export default Article;
