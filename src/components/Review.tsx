import { Review as ReviewProps } from "../data";
import Markdown from "./Markdown";

export default function Review({
  title,
  author,
  image,
  text,
  rating,
  quote,
}: ReviewProps) {
  return (
    <div className="hover:shadow-md border border-gray-100 m-12">
      <div className="flex">
        <div className="w-3/12 p-8">
          <img src={image.url} />
        </div>
        <div className="w-9/12 p-8">
          <h2 className="text-xl">{title}</h2>
          <p className="uppercase tracking-widest text-xs">{author}</p>
          <i className="float-right bg-gray-100 m-4 p-4 text-lg text-center w-7/12">
            {quote}
          </i>
          <Markdown html={text}></Markdown>
        </div>
      </div>
    </div>
  );
}
