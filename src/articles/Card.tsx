import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Image } from "../types";
import imagesService from "../images/image.service";
import { Article } from "./article.types";
import styled from "styled-components";
import { colors } from "alchemy-tech-ui";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { toast } from "react-toastify";

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

const ArticleLink = styled(Link)`
  display: block;
  color: black;
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
  const [image, setImage] = useState<Image>();

  useEffect(() => {
    async function fetchImage() {
      try {
        const fetchedImage = await imagesService.getImage(article.imageId);
        setImage(fetchedImage);
      } catch (error) {
        toast.error("Error fetching image");
      }
    }

    fetchImage();
  }, [article]);

  return (
    <ArticleContainer>
      <ArticleLink to={`/articles/${article.slug}`}>
        <ArticleContent published={article.published}>
          <ArticleImage src={image?.url} alt={image?.alt} width="800" />
          <ArticleTitle>{article.title}</ArticleTitle>
        </ArticleContent>
      </ArticleLink>
    </ArticleContainer>
  );
}

export default ArticleCard;
