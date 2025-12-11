"use client";

import React from "react";
import Card from "./Card";
import articles from "../data/articles";

function ArticlesList() {
  // Filter to only show published articles (draft: false or undefined)
  const publishedArticles = articles.filter(
    (article) => !article.draft
  );

  return (
    <div className="container">
      <div
        className="flex flex-wrap"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        {publishedArticles.map((article) => {
          return <Card key={article.slug} article={article} />;
        })}
      </div>
    </div>
  );
}

export default ArticlesList;
