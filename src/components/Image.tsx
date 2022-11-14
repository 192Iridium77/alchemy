import { Image } from "../data";

export default function Image({ columns, url }: Image) {
  const columnsClass = columns ? `w-${columns}/12` : "w-full";

  return (
    <div className={`flex ${columnsClass}`}>
      <img src={url} />;
    </div>
  );
}
