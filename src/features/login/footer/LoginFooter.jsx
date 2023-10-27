import { Box, Container, Typography } from "@mui/material";
import React from "react";

const LoginFooter = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%), rgba(0, 0, 0, 0.47)",
        backdropFilter: "blur(2px)",
        height: "30px",
        position: "absolute",
        bottom: "0",
        width: "100%",
        left: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Typography
        sx={{
          fontSize: "12px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: " normal",
          color: "white",
        }}
      >
        Copyright ©2021 All rights reserved by{" "}
        <Typography variant="span" color={"#FF611D"}>
          {" "}
          Orcalo Limited
        </Typography>
      </Typography>
    </Box>
  );
};

export default LoginFooter;
