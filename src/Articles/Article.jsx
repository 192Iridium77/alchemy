import articles from "../data";
import { useParams } from "react-router-dom";
import Markdown from "../components/Markdown";
import Review from "../components/Review";

function Article() {
  const { slug } = useParams();
  const article = articles.find((article) => {
    return article.slug === slug;
  });
  console.log("🚀 ~ file: Article.jsx ~ line 8 ~ Article ~ article", article);
  const image = article.image;

  return (
    <div className="Article container mt-8">
      <div className="relative bg-black">
        <div
          className="w-full bg-cover bg-no-repeat bg-bottom"
          style={{
            height: "400px",
            backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.4 ),
            rgba(0, 0, 0, 0.4)
          ), url(/images/${image.filename}.${image.extension})`,
          }}
        ></div>
        <div className="text-white absolute pl-8 pb-8 bottom-0">
          <div className="text-2xl">{article.title}</div>
          <div className="text">by {article.author}</div>
          <div className="text-sm">
            {article.publishedDate.toLocaleString()}
          </div>
        </div>
      </div>
      <div className="mt-16 text px-8">
        <Markdown data={{ html: article.description }} />
        {article.components.map((component, index) => {
          if (component.type === "markdown") {
            return <Markdown key={index} {...component} />;
          }
          if (component.type === "review") {
            return <Review key={index} {...component} />;
          }
          return "";
        })}
      </div>
    </div>
  );
}

export default Article;
