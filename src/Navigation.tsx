import React from "react";
import { NavLink } from "react-router-dom";
import { TopBar, MobileTopBar } from "alchemy-tech-ui";
import { useMediaQuery } from "react-responsive";
import { NavButton, Button } from "alchemy-tech-ui";
import userAuthContext from "./context/useAuthContext";

interface NavigationProps {
  openLogIn: () => void;
  openSignUp: () => void;
}

function Navigation({ openLogIn, openSignUp }: NavigationProps) {
  const { user, logOut } = userAuthContext();

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
              <a href="/">
                <img src="/AlchemyTechLogo.png" className="h-10" alt="logo" />
              </a>
            </div>
          }
          navigationMenu={
            <div className="flex justify-center gap-4 p-4">
              <NavLink to="/articles">
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
            <div className="flex gap-4">
              {user ? (
                <Button onClick={logOut} text="Log out" />
              ) : (
                <>
                  <Button onClick={openSignUp} text="Sign up" />
                  <Button onClick={openLogIn} text="Log in" />
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
              {user ? (
                <Button onClick={logOut} text="Log out" />
              ) : (
                <>
                  <Button onClick={openSignUp} text="Sign up" />
                  <Button onClick={openLogIn} text="Log in" />
                </>
              )}
            </div>
          }
        />
      )}
    </>
  );
}

export default Navigation;
