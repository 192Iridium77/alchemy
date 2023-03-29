import React from "react";
import { NavLink } from "react-router-dom";
import { TopBar, MobileTopBar } from "alchemy-tech-ui";
import { useMediaQuery } from "react-responsive";
import Modal from "react-modal";
import SignUp from "../User/SignUp";
import { NavButton, Button, Icon } from "alchemy-tech-ui";
import styled from "styled-components";

Modal.setAppElement("#root");

const CloseModalButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  background-color: black;
  border-radius: 100%;
  width: 32px;
  height: 32px;
`;

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

  // built in styling for ReactModal
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
            <div className="flex justify-center gap-4 p-4">
              <NavLink to="/">
                {({ isActive }) => (
                  <NavButton text="Articles" active={isActive} />
                )}
              </NavLink>
              <NavLink to="/apps">
                {({ isActive }) => <NavButton text="Apps" active={isActive} />}
              </NavLink>
              <NavLink to="/about">
                {({ isActive }) => <NavButton text="About" active={isActive} />}
              </NavLink>
            </div>
          }
          userMenu={
            <div className="flex gap-8 p-4">
              <Button onClick={openSignUp} text="Sign Up" />
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
            <div className="flex h-full items-center">
              <a href="/">
                <img src="/AlchemyTechLogo.png" className="h-10" alt="logo" />
              </a>
            </div>
          }
          navigationMenu={
            <div className="flex flex-col gap-8 bg-white drop-shadow-lg p-4">
              <NavLink to="/" className="underline text-bold">
                Articles
              </NavLink>
              <NavLink to="/apps" className="underline text-bold">
                Apps
              </NavLink>
              <NavLink to="/about" className="underline text-bold">
                About
              </NavLink>
            </div>
          }
          userMenu={
            <div className="flex flex-col gap-8 bg-white drop-shadow-lg p-4">
              <button onClick={openSignUp} className="underline text-bold">
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
        <div className="relative">
          <CloseModalButton onClick={closeModal}>
            <Icon type="Close" color="white" />
          </CloseModalButton>
          <SignUp />
        </div>
      </Modal>
    </>
  );
}

export default Navigation;
