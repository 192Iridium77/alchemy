import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  const image = article.image;

  return (
    <div className="ArticleCard w-6/12">
      <Link to={`/article/${article.slug}`} className="block text-black">
        <div className="hover:shadow-md border border-gray-100 m-4">
          <img
            src={`/images/${image.filename}.${image.extension}`}
            alt={image.alt}
            className="aspect-ration-16/9"
          ></img>
          <div className="p-8">
            <h1 className="text-xl">{article.title}</h1>
            <p className="mt-8">{`${article.description.slice(0, 198)}...`}</p>
            <div className="flex mt-8">Read More</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ArticleCard;
