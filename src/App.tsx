import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navigation from "./components/Navigation";
import Footer from "./Footer";
import Router from "./Router";

/**
 * application global state and logic
 */
export default function App() {
  return (
    <>
      <Navigation />
      <Router />
      <ToastContainer />
      {/* <Modal
        isOpen={modalIsOpen}
        component={modalComponent}
        closeModal={closeModal}
        disableScroll={disableScroll}
        data={data}
      /> */}
      <Footer />
    </>
  );
}
