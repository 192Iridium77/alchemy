import { Review as ReviewProps } from "../types";
import Markdown from "./Markdown";
import React from "react";
import ReactPlayer from "react-player";

export default function Review({
  title,
  author,
  image,
  text,
  //   rating,
  quote,
  video,
}: ReviewProps) {
  return (
    <div className="hover:shadow-md border border-gray-100 md:m-12">
      <div className="md:flex">
        <div className="md:w-3/12 p-4 md:p-8">
          <img src={image.url} alt="book" />
        </div>
        <div className="md:w-9/12 p-8">
          <h2 className="text-xl">{title}</h2>
          <p className="uppercase tracking-widest text-xs">{author}</p>
          <i className="float-right bg-gray-100 m-4 p-4 text-lg text-center md:w-7/12">
            {quote}
          </i>
          <Markdown>{text}</Markdown>
          {video?.url ? (
            <div className="bg-gray-100 md:m-4 md:p-4 text-lg text-center">
              <ReactPlayer url={video.url} width="100%" />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
