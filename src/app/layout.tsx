import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "../index.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ToastContainer from "./components/ToastContainer";
import { Analytics } from "@vercel/analytics/next";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Matt Martin",
  description:
    "Explore my portfolio showcasing projects with global impact. With technical expertise, I bring a blend of creativity and customer focus to every project.",
  openGraph: {
    title: "Matt Martin",
    description:
      "Explore my portfolio showcasing projects with global impact. With technical expertise, I bring a blend of creativity and customer focus to every project.",
    images: [
      {
        url: "/images/og-image.png", // Update this to your desired image path
        width: 1200,
        height: 630,
        alt: "Matt Martin Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matt Martin",
    description: "Explore my portfolio showcasing projects with global impact.",
    images: ["/images/og-image.png"], // Update this to your desired image path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Analytics />
        <Navigation />
        {children}
        <ToastContainer />
        <Footer />
      </body>
    </html>
  );
}
