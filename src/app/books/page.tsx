import { BooksList } from "../../books/List";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recommended Books | Matt Martin",
  description: "A curated list of recommended books.",
};

export default function BooksPage() {
  return (
    <div className="container pt-14 md:pt-22">
      <h3 className="text-xl flex justify-center my-8">Recommended Books</h3>
      <BooksList />
    </div>
  );
}
