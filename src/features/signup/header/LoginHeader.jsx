import { Container, Box } from "@mui/material";
import { ReactComponent as SMDLogo } from "../../../assets/svg/logo/smd-logo.svg";

import React from "react";
import { Link } from "react-router-dom";
import { pageRoutes } from "../../../routeList";

const LoginHeader = () => {
  return (
    <Box padding={"30px 0"}>
      <Container sx={{ maxWidth: "1440px !important" }}>
        <Box textAlign={"center"}>
          <Link to={pageRoutes.home}>
            <SMDLogo />
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginHeader;
