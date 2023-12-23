import React, { useState } from "react";
import Card from "./Card";
import { Button } from "alchemy-tech-ui";
import styled from "styled-components";
import { sortBy } from "lodash";

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
    {
      title: "The Lean Startup",
      image: {
        url: "https://m.media-amazon.com/images/I/51CTIr1bJxL._SY445_SX342_.jpg",
      },
      tag: "business",
    },
    {
      title: "The Personal MBA",
      image: {
        url: "https://m.media-amazon.com/images/I/411AhoeewjL._SY445_SX342_.jpg",
      },
      tag: "business",
    },
    {
      title: "Start with Why",
      image: {
        url: "https://m.media-amazon.com/images/I/51XeVKQCuNL._SY445_SX342_.jpg",
      },
      tag: "business",
    },
    {
      title: "The Culture Code",
      image: {
        url: "https://m.media-amazon.com/images/I/415gxAISkiL._SY445_SX342_.jpg",
      },
      tag: "business",
    },
    {
      title: "The Talent Code",
      image: {
        url: "https://m.media-amazon.com/images/I/414-PRbpjKL._SY445_SX342_.jpg",
      },
      tag: "business",
    },
    {
      title: "Leaders Eat Last",
      image: {
        url: "https://m.media-amazon.com/images/I/51N7FEOlx5L._SY445_SX342_.jpg",
      },
      tag: "business",
    },
    {
      title: "Atomic Habits",
      image: {
        url: "https://m.media-amazon.com/images/I/51-nXsSRfZL._SY445_SX342_.jpg",
      },
      tag: "growth",
    },
    {
      title: "Make your bed",
      image: {
        url: "https://m.media-amazon.com/images/I/41mZ3G9bcmL._SY445_SX342_.jpg",
      },
      tag: "growth",
    },
    {
      title: "The Mountain is You",
      image: {
        url: "https://m.media-amazon.com/images/I/41N62t+ANTL._SY445_SX342_.jpg",
      },
      tag: "growth",
    },
    {
      title: "The 5AM Club",
      image: {
        url: "https://m.media-amazon.com/images/I/41alUjROZ5L._SY445_SX342_.jpg",
      },
      tag: "growth",
    },
    {
      title: "Never Split the Difference",
      image: {
        url: "https://m.media-amazon.com/images/I/41XQlCeEUaL._SY445_SX342_.jpg",
      },
      tag: "business",
    },
    {
      title: "Do Hard Things",
      image: {
        url: "https://m.media-amazon.com/images/I/41N+aBO5ouL._SY445_SX342_.jpg",
      },
      tag: "growth",
    },
    {
      title: "Good to Great",
      image: {
        url: "https://m.media-amazon.com/images/I/41OsGfas+FL._SY445_SX342_.jpg",
      },
      tag: "business",
    },
    {
      title: "Zero to One",
      image: {
        url: "https://m.media-amazon.com/images/I/51JkDEpHUQL._SY445_SX342_.jpg",
      },
      tag: "business",
    },
    {
      title: "This is Marketing",
      image: {
        url: "https://m.media-amazon.com/images/I/41fSSCIrnjL._SY445_SX342_.jpg",
      },
      tag: "business",
    },
    {
      title: "Ready, Aim, Fire",
      image: {
        url: "https://m.media-amazon.com/images/I/4106jRy2-IL._SY344_BO1,204,203,200_QL70_ML2_.jpg",
      },
      tag: "business",
    },
    {
      title: "Data Is Everybody's Business",
      image: {
        url: "https://m.media-amazon.com/images/I/51IYDVa-ueL._SY445_SX342_.jpg",
      },
      tag: "business",
    },
    {
      title: "The StorySelling Method",
      image: {
        url: "https://m.media-amazon.com/images/I/41nRbb-AT3L._SY445_SX342_.jpg",
      },
      tag: "business",
    },
    {
      title: "The Oxygen Advantage",
      image: {
        url: "https://m.media-amazon.com/images/I/51PY-bZWJ0L._SY445_SX342_.jpg",
      },
      tag: "health",
    },
    {
      title: "The Four",
      image: {
        url: "https://m.media-amazon.com/images/I/41tf7UsmhsL._SY445_SX342_.jpg",
      },
      tag: "business",
    },
    {
      title: "The Algebra of Happiness",
      image: {
        url: "https://m.media-amazon.com/images/I/41qlrJWdHZL._SY445_SX342_.jpg",
      },
      tag: "growth",
    },
  ];

  const filtered = selectedFilter
    ? books.filter((book) => {
        return book.tag === selectedFilter;
      })
    : sortBy(books, "title");

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
