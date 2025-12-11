"use client";

import React from "react";
import Link from "next/link";
import { Article } from "./article.types";
import styled from "styled-components";
import { colors } from "alchemy-tech-ui";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface ArticleCardProps {
  article: Article;
}

interface ArticleContentProps {
  published: boolean;
}

const ArticleContainer = styled.div`
  position: relative;
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const ArticleLink = styled.a`
  display: block;
  color: black;
  text-decoration: none;
`;

const ArticleContent = styled.div<ArticleContentProps>`
  &:hover {
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 1px 0 rgba(0, 0, 0, 0.08),
      0 2px 1px -1px rgba(0, 0, 0, 0.04);
  }
  ${({ published }) => {
    return published
      ? `border: 1px solid ${colors.gray[200]};`
      : `border: 2px solid ${colors.system[400]};`;
  }}
  margin: 16px;
  min-height: 600px;
`;

const ArticleImage = styled(LazyLoadImage)`
  aspect-ratio: 16 / 9;
`;

const ArticleTitle = styled.h1`
  padding: 32px;
  font-size: 1.5rem;
`;

function ArticleCard({ article }: ArticleCardProps) {
  const imageUrl = article.image
    ? `/images/${article.image.filename}.${article.image.extension}`
    : null;
  const imageAlt = article.image?.alt || article.title;

  return (
    <ArticleContainer>
      <Link href={`/articles/${article.slug}`} passHref legacyBehavior>
        <ArticleLink>
          <ArticleContent published={!article.draft}>
            {imageUrl ? (
              <ArticleImage src={imageUrl} alt={imageAlt} width="800" />
            ) : (
              <div
                className="bg-gray-500 w-full"
                style={{ height: "300px" }}
              ></div>
            )}
            <ArticleTitle>{article.title}</ArticleTitle>
          </ArticleContent>
        </ArticleLink>
      </Link>
    </ArticleContainer>
  );
}

export default ArticleCard;
