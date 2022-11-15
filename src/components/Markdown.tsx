import DOMPurify from "dompurify";
import { Markdown as MarkdownProps } from "../data";

export default function Markdown({ html }: MarkdownProps) {
  // console.log("🚀 ~ file: Markdown.tsx ~ line 11 ~ Markdown ~ html", html);
  const safeHtml = { __html: DOMPurify.sanitize(html, {}) };

  // const columnsClass = columns ? `w-${columns}/12` : "w-full";

  return <div dangerouslySetInnerHTML={safeHtml}></div>;
}
