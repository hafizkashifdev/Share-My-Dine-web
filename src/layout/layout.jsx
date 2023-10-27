import React from "react";
import { AppHeader } from "./app-header/app-header";
import "./layout.scss";
import { AppFooter } from "./app-footer/app-footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../hooks/ScrollToTop";
export const Layout = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      <AppHeader />
      <Outlet />
      <AppFooter />
    </>
  );
};
