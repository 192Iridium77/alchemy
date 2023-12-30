import React from "react";
import ReactMarkdown from "react-markdown";
import "./markdown.css";

export default function Markdown({ children }: { children?: string }) {
  return <ReactMarkdown>{children || ""}</ReactMarkdown>;
}
