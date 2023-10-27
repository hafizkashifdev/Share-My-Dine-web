import React from "react";
import LoginHeader from "../features/signup/header/LoginHeader";
import LoginFooter from "../features/signup/footer/LoginFooter";
import LoginBody from "../features/signup/body/LoginBody";
import { AppFooter } from "../layout/app-footer/app-footer";

const Signup = () => {
  return (
    <>
      <LoginHeader />
      <LoginBody />
      <AppFooter />
    </>
  );
};

export default Signup;
