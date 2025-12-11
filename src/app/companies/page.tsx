import Companies from "../../about/Companies";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Companies | Matt Martin",
  description: "Companies I've founded and worked with.",
};

export default function CompaniesPage() {
  return (
    <div className="container pt-14 md:pt-22">
      <Companies />
    </div>
  );
}

