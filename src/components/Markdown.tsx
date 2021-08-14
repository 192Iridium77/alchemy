import DOMPurify from "dompurify";

function Markdown({ data }: { data: { html: string } }) {
  const safeHtml = { __html: DOMPurify.sanitize(data.html, {}) };
  return <div dangerouslySetInnerHTML={safeHtml}></div>;
}

export default Markdown;
