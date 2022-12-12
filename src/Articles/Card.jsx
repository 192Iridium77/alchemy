import { Link } from "react-router-dom";
import Markdown from "../components/Markdown";

function ArticleCard({ article }) {
  const image = article.image;

  return (
    <div className="ArticleCard w-full md:w-6/12">
      <Link to={`/article/${article.slug}`} className="block text-black">
        <div className="hover:shadow-md border border-gray-100 m-4">
          <img
            src={`/images/${image.filename}.${image.extension}`}
            alt={image.alt}
            className="aspect-ration-16/9"
          />
          <div className="p-8">
            <h1 className="text-xl">{article.title}</h1>
            <Markdown data={{ html: article.description }}></Markdown>
            <div className="inline mt-8 text-primary-200 border-b border-primary-200">
              Read More
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ArticleCard;
