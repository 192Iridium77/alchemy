import React from "react";

import { Image as ImageProps } from "../../types";

export default function Image({ columns, url }: ImageProps) {
  const columnsClass = columns ? `w-${columns}/12` : "w-full";

  return (
    <div className={`flex ${columnsClass}`}>
      <img src={url} alt="none" />;
    </div>
  );
}
