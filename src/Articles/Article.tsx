import React from "react";

import articles from "../data/articles";
import { useParams } from "react-router-dom";
import Markdown from "../components/Markdown";
import Review from "../components/Review";

export default function Article() {
  const { slug } = useParams();
  const article = articles.find((article) => {
    return article.slug === slug;
  });

  if (!article) return <div>404 not found</div>;

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
          <div className="text-sm uppercase tracking-widest">
            {article.author}
          </div>
          <div className="text-sm">
            {article.publishedDate.toLocaleDateString("en-AU")}
          </div>
        </div>
      </div>
      <div className="mt-16 text px-8">
        <Markdown>{article.description}</Markdown>
        {article.components.map((component, index) => {
          if (component.type === "markdown") {
            // @ts-ignore
            return <Markdown key={index}>{component.text || ""}</Markdown>;
          }
          if (component.type === "review") {
            // @ts-ignore
            return <Review key={index} {...component} />;
          }
          return "";
        })}
      </div>
    </div>
  );
}
