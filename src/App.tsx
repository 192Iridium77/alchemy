import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navigation from "./components/Navigation";
import Footer from "./Footer";
import Router from "./Router";
// import Modal, { ModalTypes } from "./components/Modal";

/**
 * application global state and logic
 * modals here
 */
export default function App() {
  // const [modalIsOpen, setIsOpen] = React.useState(false);
  // const [modalComponent, setModalComponent] = React.useState<ModalTypes>();
  // const [data, setData] = React.useState<any>();

  // const openModal = (type: ModalTypes, data?: any) => {
  //   setIsOpen(true);
  //   setModalComponent(type);
  //   setData(data);
  // };

  // const closeModal = () => {
  //   setIsOpen(false);
  //   setModalComponent(undefined);
  //   document.body.style.overflow = "auto";
  // };

  // const disableScroll = () => {
  //   document.body.style.overflow = "hidden";
  // };

  return (
    <>
      <Navigation
      // openSignUp={() => openModal(ModalTypes.SignUp)}
      // openLogIn={() => openModal(ModalTypes.LogIn)}
      />
      <Router
      // openCreateArticleModal={() => openModal(ModalTypes.CreateArticle)}
      // openEditArticleModal={(data) => openModal(ModalTypes.EditArticle, data)}
      />
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
