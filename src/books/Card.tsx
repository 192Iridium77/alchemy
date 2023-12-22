import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Image } from "../types";
import imagesService from "../images/image.service";
import { Book } from "./book.types";
import styled from "styled-components";
import { colors } from "alchemy-tech-ui";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface BookCardProps {
  book: Book;
}

interface BookContentProps {
  published: boolean;
}

const BookContainer = styled.div`
  width: 100%;
  padding: 1rem;
`;

// TODO link to amazon
const BookLink = styled.div`
  display: block;
  color: black;
`;

// const BookContent = styled.div<BookContentProps>`
//   &:hover {
//     box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 1px 0 rgba(0, 0, 0, 0.08),
//       0 2px 1px -1px rgba(0, 0, 0, 0.04);
//   }
//   margin: 16px;
//   min-height: 600px;
// `;

const BookImage = styled(LazyLoadImage)`
  aspect-ratio: 10 / 16;
`;

// const BookTitle = styled.h1`
//   padding: 32px;
//   font-size: 1.5rem;
// `;

function BookCard({ book }: BookCardProps) {
  return (
    <BookContainer>
      <BookLink>
        <BookImage
          aria-label={book.title}
          src={book.image?.url}
          alt={book.image?.alt}
          width="800"
        />
      </BookLink>
    </BookContainer>
  );
}

export default BookCard;
