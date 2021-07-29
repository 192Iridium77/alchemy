function Article({ article }) {
  const image = article.image;
  return (
    <div className="Article bg-white w-6/12">
      <img
        src={`/images/${image.filename}.${image.extension}`}
        alt={image.alt}
        className="aspect-ration-16/9"
      ></img>
      <div className="p-8">
        <h1 className="text-xl">{article.title}</h1>
        <p className="mt-8">{`${article.description.slice(0, 198)}...`}</p>
        {/* TODO link component */}
        <div className="flex mt-8">
          <a className="block py-2 border-b-4 border-primary-200" href="/">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Article;
