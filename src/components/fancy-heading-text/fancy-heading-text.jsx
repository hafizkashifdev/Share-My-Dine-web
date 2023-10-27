import React from "react";
import "./fancy-heading-text.scss";
import { Box, Grid } from "@mui/material";
export const FancyHeadingText = ({ heading, fancyText, description }) => {
  return (
    <>
      <div className="fancy-text center-text ">
        <div className="primary-color font-weight-600 text-uppercase ">
          {heading}
        </div>
        <div className="outline-text" style={{ marginBottom: "12px" }}>
          {fancyText}
        </div>
        <Grid container mt="-1.5%" className="justify-center">
          <Grid item lg={5} xs={10}>
            <Box
              className="description  blackish-color font-weight-700"
              fontSize={{ xs: "36px", lg: "42px" }}
            >
              {description}
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
