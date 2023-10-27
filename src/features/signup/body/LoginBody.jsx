import { Box, Container, Grid, Typography } from "@mui/material";
import image from "../../../assets/login/hero.png";
import styles from "./styles.module.scss";
import React, { useEffect } from "react";
import CustomTabs from "./CustomTabs";
import { Link, useSearchParams } from "react-router-dom";
import SignupForm from "./SignupForm";
import ThemeButton from "../../../components/theme-button/theme-button";
import { pageRoutes } from "../../../routeList";

const LoginBody = () => {
  let [searchParams] = useSearchParams();

  return (
    <Box padding={"30px 0"} className={styles.signupBox}>
      <Container sx={{ maxWidth: "1440px !important" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={6} xl={6} textAlign={"center"}>
            <img src={image} alt="signin-up" />
          </Grid>
          <Grid item xs={12} md={12} lg={6} xl={6}>
            <Typography variant="h1">Get started with your account</Typography>
            <CustomTabs activeID={searchParams.get("id")} />
            <SignupForm />
            <Box textAlign={"center"}>
              <ThemeButton
                title="Sign Up"
                sx={{ maxWidth: "161px", margin: "auto" }}
              />
              <Box sx={{ marginTop: "20px" }} className={styles.routesTopage}>
                <Typography>
                  Already have an account?{" "}
                  <Link to={pageRoutes.login}>
                    <Typography variant="span" ml={"2px"}>
                      Sign In
                    </Typography>
                  </Link>
                </Typography>
              </Box>
              <Box sx={{ marginTop: "24px" }} className={styles.termsPage}>
                <Typography>
                  By Signing up, you are creating a host account, and you agree
                  to <b>Share My Dine</b>{" "}
                  <Link to={pageRoutes.termsConditions}>
                    <Typography variant="span" ml={"2px"}>
                      terms and conditions
                    </Typography>
                  </Link>{" "}
                  &{" "}
                  <Link to={pageRoutes.privacyPolicy}>
                    <Typography variant="span" ml={"2px"}>
                      Privacy statement.
                    </Typography>
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LoginBody;
