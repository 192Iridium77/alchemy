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
  title: "Matt Martin",
  description:
    "Explore my portfolio showcasing projects with global impact. With technical expertise, I bring a blend of creativity and customer focus to every project.",
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
