"use client";

import React, { useEffect, useState } from "react";
import Markdown from "../components/Markdown";
import Review from "../components/Review";
import { Component } from "./article.types";
import NotFound from "../components/NotFound";
import articles from "../data/articles";

interface ArticleComponentProps {
  params: Promise<{ slug: string }>;
}

export default function ArticleComponent({ params }: ArticleComponentProps) {
  const [slug, setSlug] = useState<string | undefined>();
  const [article, setArticle] = useState<any>(null);

  useEffect(() => {
    params.then((resolvedParams) => {
      setSlug(resolvedParams.slug);
    });
  }, [params]);

  useEffect(() => {
    if (slug) {
      const foundArticle = articles.find((a) => a.slug === slug);
      setArticle(foundArticle);
    }
  }, [slug]);

  if (!slug) {
    return null;
  }

  if (!article) {
    return <NotFound />;
  }

  const imageUrl = article.image
    ? `/images/${article.image.filename}.${article.image.extension}`
    : null;
  const articleComponents = article.components || [];

  return (
    <div className="Article container mt-8">
      <div className="relative bg-black">
        {imageUrl ? (
          <div
            className="w-full bg-cover bg-no-repeat bg-bottom"
            style={{
              height: "400px",
              minHeight: "400px",
              backgroundColor: "black",
              backgroundImage: `linear-gradient(
                rgba(0, 0, 0, 0.4 ),
                rgba(0, 0, 0, 0.4)
              ), url(${imageUrl})`,
            }}
          ></div>
        ) : (
          <div className="w-full bg-gray-500" style={{ height: "400px" }}></div>
        )}
        <div className="text-white absolute px-8 pb-8 bottom-0">
          <div className="text-2xl">{article.title}</div>
          <div className="text-sm uppercase tracking-widest">
            {article.author}
          </div>
          <div className="text-sm">
            {article.publishedDate
              ? new Date(article.publishedDate).toLocaleDateString("en-AU")
              : null}
          </div>
        </div>
      </div>
      <div className="mt-16 text px-8">
        <Markdown>{article.description}</Markdown>
        {articleComponents.map((component: any, index: number) => {
          if (component.type === "markdown") {
            return (
              <div key={index} className="mt-4">
                <Markdown>{component.text || ""}</Markdown>
              </div>
            );
          }
          if (component.type === "review") {
            return <Review key={index} {...component} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}
