import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "../index.css";
import Navigation from "../components/Navigation";
import Footer from "../Footer";
import ToastContainer from "../components/ToastContainer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Matt Martin | Software Engineer",
  description:
    "Explore my software engineer portfolio showcasing projects with global and local impact. With expertise in Full Stack software development, I bring a blend of creativity and technical prowess to every project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Navigation />
        {children}
        <ToastContainer />
        <Footer />
      </body>
    </html>
  );
}
