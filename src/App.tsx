import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Router from "./Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * application global state and logic
 * modals here
 */
export default function App() {
  return (
    <>
      <Navigation />
      <Router />
      <ToastContainer />
      <Footer />
    </>
  );
}
