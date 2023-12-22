import React, { useState } from "react";
import Card from "./Card";
import { Button } from "alchemy-tech-ui";
import styled from "styled-components";

const Tag = styled(Button)`
  border-radius: 8px;
  padding: 4px 8px;
  margin-right: 1rem;
`;

function ArticlesList() {
  const [selectedFilter, setSelectedFilter] = useState("");
  const books: any[] = [
    {
      title: "Psychology of Money",
      image: {
        url: "https://m.media-amazon.com/images/I/71TRUbzcvaL._SL1500_.jpg",
      },
      tag: "wealth",
    },
    {
      title: "Strong Money Australia",
      image: {
        url: "https://m.media-amazon.com/images/I/61rwbLVyU0L._SY522_.jpg",
      },
      tag: "wealth",
    },
    {
      title: "Tax $ecrets of the Rich",
      image: {
        url: "https://m.media-amazon.com/images/I/41ZKeYZKxeL._SY445_SX342_.jpg",
      },
      tag: "wealth",
    },
    {
      title: "Get Started Investing",
      image: {
        url: "https://m.media-amazon.com/images/I/41tqnJfnYGL._SY445_SX342_.jpg",
      },
      tag: "wealth",
    },
    {
      title: "Money Magnet",
      image: {
        url: "https://m.media-amazon.com/images/I/41z7Adw97VL._SY445_SX342_.jpg",
      },
      tag: "wealth",
    },
    {
      title: "Money with Jess",
      image: {
        url: "https://m.media-amazon.com/images/I/51HSRJfjAdL._SX258_BO1,204,203,200_QL70_ML2_.jpg",
      },
      tag: "wealth",
    },
    {
      title: "The Barefoot Investor",
      image: {
        url: "https://m.media-amazon.com/images/I/51ghP8dUZ1L._SY445_SX342_.jpg",
      },
      tag: "wealth",
    },
    {
      title: "Rich Dad Poor Dad",
      image: {
        url: "https://m.media-amazon.com/images/I/51Hfv2MfNGL._SY445_SX342_.jpg",
      },
      tag: "wealth",
    },
  ];

  return (
    <div className="container">
      <div className="flex justify-center mt-8">
        <Tag text="Wealth"></Tag>
        {/* <Tag text="Health"></Tag>
        <Tag text="Business"></Tag>
        <Tag text="Growth"></Tag>
        <Tag text="Performance"></Tag>
        <Tag text="Culture"></Tag>
        <Tag text="Leadership"></Tag>
        <Tag text="History"></Tag> */}
      </div>
      <div className="flex flex-wrap mt-8">
        {books.map((book) => {
          return (
            <div className="w-3/12">
              <Card book={book} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ArticlesList;
