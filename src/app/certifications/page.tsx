import Certificates from "../../about/Certifications";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certifications | Matt Martin",
  description: "My professional certifications and credentials.",
};

export default function CertificationsPage() {
  return (
    <div className="container pt-14 md:pt-22">
      <Certificates />
    </div>
  );
}

