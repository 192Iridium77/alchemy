import React from "react";
import { Link } from "react-router-dom";
import { TopBar, MobileTopBar } from "alchemy-tech-ui";
import { useMediaQuery } from "react-responsive";
import Modal from "react-modal";
import SignUp from "../User/SignUp";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "600px",
  },
};

function Navigation() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  let maxWidth;
  // todo make some kind of responsive hook
  const isLargeDesktop = useMediaQuery({ query: "(min-width: 1536px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });
  const isSmallDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  if (isLargeDesktop) {
    maxWidth = "1536px";
  } else if (isDesktop) {
    maxWidth = "1280px";
  } else if (isSmallDesktop) {
    maxWidth = "1024px";
  }

  const openSignUp = () => {
    setIsOpen(true);
  };

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  }

  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      {isSmallDesktop ? (
        <TopBar
          logo={
            <div className="flex h-full items-center pl-4">
              <a href="/">
                <img src="/AlchemyTechLogo.png" className="h-10" alt="logo" />
              </a>
            </div>
          }
          navigationMenu={
            <div className="flex justify-center gap-8 p-4">
              <Link to="/" className="border-b border-primary-200">
                Articles
              </Link>
              <Link to="/apps" className="border-b border-primary-200">
                Apps
              </Link>
              <Link to="/about" className="border-b border-primary-200">
                About
              </Link>
            </div>
          }
          userMenu={
            <div className="flex gap-8 p-4">
              <button
                onClick={openSignUp}
                className="text-primary-200 border-b border-primary-200"
              >
                Sign Up
              </button>
              {/* <button className="text-primary-200 border-b border-primary-200">
          Log In
        </button> */}
              {/* <button className="text-primary-200 border-b border-primary-200">
          Log Out
        </button> */}
            </div>
          }
          maxWidth={maxWidth}
        />
      ) : (
        <MobileTopBar
          logo={
            <div className="flex h-full items-center ">
              <a href="/">
                <img src="/AlchemyTechLogo.png" className="h-10" alt="logo" />
              </a>
            </div>
          }
          navigationMenu={
            <div className="flex flex-col gap-8 bg-white drop-shadow-lg p-4">
              <Link to="/" className="border-b border-primary-200">
                Articles
              </Link>
              <Link to="/apps" className="border-b border-primary-200">
                Apps
              </Link>
              <Link to="/about" className="border-b border-primary-200">
                About
              </Link>
            </div>
          }
          userMenu={
            <div className="flex flex-col gap-8 bg-white drop-shadow-lg p-4">
              <button
                onClick={openSignUp}
                className="text-primary-200 border-b border-primary-200"
              >
                Sign Up
              </button>
              {/* <button className="text-primary-200 border-b border-primary-200">
            Log In
          </button> */}
              {/* <button className="text-primary-200 border-b border-primary-200">
            Log Out
          </button> */}
            </div>
          }
        />
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        onAfterOpen={disableScroll}
      >
        <SignUp></SignUp>
      </Modal>
    </>
  );
}

export default Navigation;
