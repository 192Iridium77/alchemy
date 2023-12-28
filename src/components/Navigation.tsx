import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { TopBar, MobileTopBar, Button } from "alchemy-tech-ui";
import { useMediaQuery } from "react-responsive";
import { NavLink as AlchemyLink } from "alchemy-tech-ui";
import userAuthContext from "../context/useAuthContext";
import SignUp from "./user/SignUp";
import LogIn from "./user/LogIn";
import { Modal } from "../components/Modal";

function Navigation() {
  const { user, logOut } = userAuthContext();
  const signUpModalRef = useRef();
  const logInModalRef = useRef();

  const openSignUp = () => {
    // @ts-ignore
    signUpModalRef?.current?.openModal();
  };

  const closeSignUp = () => {
    // @ts-ignore
    signUpModalRef?.current?.closeModal();
  };

  const openLogIn = () => {
    // @ts-ignore
    logInModalRef?.current?.openModal();
  };

  const closeLogin = () => {
    // @ts-ignore
    logInModalRef?.current?.closeModal();
  };

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

  return (
    <>
      {isSmallDesktop ? (
        <TopBar
          logo={
            <div className="flex h-full items-center pl-4">
              <a
                href="/"
                style={{
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                }}
              >
                <img src="/Logo.png" className="h-10" alt="logo" />
              </a>
            </div>
          }
          navigationMenu={
            <div className="flex justify-center gap-4 p-4">
              <NavLink to="/about">
                {({ isActive }) => (
                  <AlchemyLink text="About" active={isActive} />
                )}
              </NavLink>
              <NavLink to="/books">
                {({ isActive }) => (
                  <AlchemyLink text="Books" active={isActive} />
                )}
              </NavLink>
              <NavLink to="/articles">
                {({ isActive }) => (
                  <AlchemyLink text="Articles" active={isActive} />
                )}
              </NavLink>
              <NavLink to="/apps">
                {({ isActive }) => (
                  <AlchemyLink text="Apps" active={isActive} />
                )}
              </NavLink>
            </div>
          }
          userMenu={
            <div className="flex gap-4">
              {user ? (
                <Button onClick={logOut}>Log out</Button>
              ) : (
                <>
                  <Button onClick={openSignUp}>Sign up</Button>
                  <Button onClick={openLogIn}>Log in</Button>
                </>
              )}
            </div>
          }
          maxWidth={maxWidth}
        />
      ) : (
        <MobileTopBar
          logo={
            <div className="flex h-full items-center">
              <a
                href="/"
                style={{
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                }}
              >
                <img src="/Logo.png" className="h-10" alt="logo" />
              </a>
            </div>
          }
          navigationMenu={
            <div className="flex flex-col gap-8 bg-white drop-shadow-lg p-4">
              <NavLink to="/about" className="underline text-bold">
                About
              </NavLink>
              <NavLink to="/books" className="underline text-bold">
                Books
              </NavLink>
              <NavLink to="/articles" className="underline text-bold">
                Articles
              </NavLink>
              <NavLink to="/apps" className="underline text-bold">
                Apps
              </NavLink>
            </div>
          }
          userMenu={
            <div className="flex flex-col gap-8 bg-white drop-shadow-lg p-4">
              {user ? (
                <Button onClick={logOut}>Log out</Button>
              ) : (
                <>
                  <Button onClick={openSignUp}>Sign up</Button>
                  <Button onClick={openLogIn}>Log in</Button>
                </>
              )}
            </div>
          }
        />
      )}
      <Modal ref={logInModalRef}>
        <LogIn onCloseModal={closeLogin}></LogIn>
      </Modal>
      <Modal ref={signUpModalRef}>
        <SignUp onCloseModal={closeSignUp}></SignUp>
      </Modal>
    </>
  );
}

export default Navigation;
