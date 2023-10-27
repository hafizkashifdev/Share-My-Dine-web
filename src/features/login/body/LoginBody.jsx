import { Box, Container, Grid, Typography } from "@mui/material";
import image from "../../../assets/login/hero2.png";
import { ReactComponent as SMDLogo } from "../../../assets/svg/logo/smd-logo.svg";
import { ReactComponent as Email } from "../../../assets/login/2.svg";
import { ReactComponent as Password } from "../../../assets/login/4.svg";
import styles from "./styles.module.scss";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeButton from "../../../components/theme-button/theme-button";
import { pageRoutes } from "../../../routeList";
import CustomInput from "../../Custom-input/CustomInput";
import LoginFooter from "../footer/LoginFooter";
import { socialIcons } from "../../../layout/app-footer/footer-links/footer-links-data";
import { ReactComponent as Youtube } from "../../../assets/login/footer/youtube.svg";
import { ReactComponent as FaceBook } from "../../../assets/login/footer/facebook.svg";
import { ReactComponent as Instagram } from "../../../assets/login/footer/instagram.svg";
import { ReactComponent as Twitter } from "../../../assets/login/footer/twitter.svg";

const LoginBody = () => {
  const data = [
    {
      id: 0,
      icon: <Twitter />,
      href: "https://twitter.com/sharemydine",
    },
    {
      id: 110,
      icon: <Instagram />,
      href: "https://www.instagram.com/sharemy_dine/",
    },
    {
      id: 12110,
      icon: <FaceBook />,
      href: "https://www.facebook.com/sharemydine",
    },
    {
      id: 122110,
      icon: <Youtube />,
      href: "https://www.youtube.com/channel/UCr69IsWQMhYhUlSwEeRtjAw",
    },
  ];
  return (
    <Box className={styles.signupBox}>
      <Box className={styles.main} position={"relative"}>
        <Box position={"relative"} flex={"0 0 50%"} className={styles.left}>
          <img src={image} alt="signin-up" className={styles.image} />
          <LoginFooter />
        </Box>
        <Box flex={"0 0 50%"} className={styles.right}>
          <Box className={styles.parentBox}>
            <NavLink to={pageRoutes.home}>
              <SMDLogo />
            </NavLink>
            <Box className={styles.card} alignSelf={"center"}>
              <Typography variant="h1">
                Welcome <span style={{ color: "#FF611D" }}> Back! </span>
              </Typography>
              <Typography>Sign In to your Share My Dine Account </Typography>
              <Box className={styles.form}>
                <CustomInput
                  label="Email"
                  parentClass={styles.inputParentClass}
                  Icon={<Email />}
                />
                <CustomInput
                  label="Password"
                  type="password"
                  parentClass={styles.inputParentClass}
                  Icon={<Password />}
                />
              </Box>
              <Box textAlign={"center"}>
                <ThemeButton title="Sign Up" sx={{ margin: "auto" }} />
                <Box sx={{ marginTop: "30px" }} className={styles.routesTopage}>
                  <Typography>
                    Not a member?
                    <Link to={`${pageRoutes.signup}?id=1`}>
                      <Typography variant="span" ml={"5px"}>
                        Signup for an account now.
                      </Typography>
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              height: "30px",
              maxWidth: "100%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 40px",
              maxWidth: "655px",
              flexWrap: "wrap",
              "@media (max-width:1200px)": {
                margin: "auto",
                maxWidth: "auto",
                width: "auto",
                flexDirection: "column",
                height: "auto",
                gap: "20px",
                marginTop: "40px",
              },
            }}
          >
            <Box display={"flex"} alignItems={"center"} gap={"10px"}>
              {" "}
              {data.map((item) => (
                <Box
                  key={item.id}
                  className="social-media-link  cursor-pointer"
                >
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.icon}
                  </a>
                </Box>
              ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              <Link
                style={{
                  fontSize: "12px",
                  color: "#6C757D",
                  fontStyle: "normal",
                  fontWeight: "500",
                }}
                to="/terms-and-condition"
              >
                Terms & Conditions
              </Link>
              <Link
                style={{
                  fontSize: "12px",
                  color: "#6C757D",
                  fontStyle: "normal",
                  fontWeight: "500",
                }}
                to="/privacy-policy"
              >
                <Box
                  sx={{
                    borderLeft: "1px solid #6C757D",
                    borderRight: "1px solid #6C757D",
                    px: "5px",
                  }}
                >
                  Privacy Policy
                </Box>
              </Link>
              <Link
                style={{
                  fontSize: "12px",
                  color: "#6C757D",
                  fontStyle: "normal",
                  fontWeight: "500",
                }}
                to="/cookies-policies"
                className=""
              >
                Cookies Policies
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginBody;
