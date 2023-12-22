import React, { useState } from "react";
import Card from "./Card";
import { Button } from "alchemy-tech-ui";
import styled from "styled-components";

interface TagProps {
  active: boolean;
}

const Tag = styled(Button)<TagProps>`
  border-radius: 8px;
  padding: 4px 8px;
  margin-right: 1rem;
  ${({ active }) => {
    return active
      ? `
      background-color: black; 
      color: white;
      :hover {
        background-color: #252525;
      }
    `
      : "";
  }}
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
    {
      title: "Be Useful",
      image: {
        url: "https://m.media-amazon.com/images/I/81givEjDHtL._AC_UY436_FMwebp_QL65_.jpg",
      },
      tag: "growth",
    },
    {
      title: "The Diary of a CEO",
      image: {
        url: "https://m.media-amazon.com/images/I/41qOk-K-B2L._SY344_BO1,204,203,200_QL70_ML2_.jpg",
      },
      tag: "business",
    },
    {
      title: "Outlive",
      image: {
        url: "https://m.media-amazon.com/images/I/41PEArjEK-L._SY445_SX342_.jpg",
      },
      tag: "health",
    },
    {
      title: "Lifespan",
      image: {
        url: "https://m.media-amazon.com/images/I/51Uq+wgRJCL._SY445_SX342_.jpg",
      },
      tag: "health",
    },
    {
      title: "Breath",
      image: {
        url: "https://m.media-amazon.com/images/I/41aYi-hfFOL._SY445_SX342_.jpg",
      },
      tag: "health",
    },
    {
      title: "Why we Sleep",
      image: {
        url: "https://m.media-amazon.com/images/I/41qtjHuyIqL._SY445_SX342_.jpg",
      },
      tag: "health",
    },
    {
      title: "The Telomere Effect",
      image: {
        url: "https://m.media-amazon.com/images/I/51sX-q+6XmL._SY445_SX342_.jpg",
      },
      tag: "health",
    },
    {
      title: "The molecule of more",
      image: {
        url: "https://m.media-amazon.com/images/I/41155JzBFmL._SY445_SX342_.jpg",
      },
      tag: "health",
    },
  ];

  const filtered = selectedFilter
    ? books.filter((book) => {
        return book.tag === selectedFilter;
      })
    : books;

  const toggleFilter = (tag: React.SetStateAction<string>) => {
    if (selectedFilter === tag) {
      setSelectedFilter("");
    } else {
      setSelectedFilter(tag);
    }
  };

  return (
    <div className="container">
      <div className="flex justify-center mt-8">
        <Tag
          text="Wealth"
          onClick={() => toggleFilter("wealth")}
          active={selectedFilter === "wealth"}
        ></Tag>
        <Tag
          text="Growth"
          onClick={() => toggleFilter("growth")}
          active={selectedFilter === "growth"}
        ></Tag>
        <Tag
          text="Business"
          onClick={() => toggleFilter("business")}
          active={selectedFilter === "business"}
        ></Tag>
        <Tag
          text="Health"
          onClick={() => toggleFilter("health")}
          active={selectedFilter === "health"}
        ></Tag>
        {/* <Tag text="Performance"></Tag>
        <Tag text="Culture"></Tag>
        <Tag text="Leadership"></Tag>
        <Tag text="History"></Tag> */}
      </div>
      <div className="flex flex-wrap mt-8">
        {filtered.map((book) => {
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
