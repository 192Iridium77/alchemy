import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "../index.css";
import "../fonts/style.css";
import Navigation from "../components/Navigation";
import Footer from "../Footer";
import ToastContainer from "../components/ToastContainer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
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
      <body className={spaceGrotesk.className}>
        <Navigation />
        {children}
        <ToastContainer />
        <Footer />
      </body>
    </html>
  );
}
