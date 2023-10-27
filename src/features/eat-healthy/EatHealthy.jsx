import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import RatingCard from "./RatingCard";
import Eat1 from "../../assets/images/eat-healthy/eat-1.jpg";
import Star from "../../assets/images/eat-healthy/Star.svg";
import EatLogo from "../../assets/images/eat-healthy/eat-logo.png";
import ShareIcon from "../../assets/images/eat-healthy/share-icon.png";
import SaveIcon from "../../assets/images/eat-healthy/save-icon.png";
import EatCard1 from "./EatCard1";
import EatCard2 from "./EatCard2";

const EatHealthy = () => {
  return (
    <Container>
      <Box
        sx={{
          width: "100%",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          m: "100px 0",
        }}
      >
        <Grid container alignItems={"center"} spacing={2} p={2}>
          <Grid item sx={{ display: "flex", gap: "20px" }}>
            <img src={Eat1} alt="Eat1" />
          </Grid>
          <Grid item sx={{ ml: "10px" }}>
            <Box>
              <Typography
                className="font-weight-600 font-family-Work"
                sx={{ fontSize: { md: "40px", xs: "20px" } }}
              >
                High Protein Bowl
              </Typography>
              <Typography
                sx={{ m: "0 0 10px 5px" }}
                className="font-weight-600 font-family-Work primary-color"
              >
                in everyday healthy
              </Typography>
              <div className="flex align-center">
                <img src={Star} alt="star" />
                <span
                  style={{ marginLeft: "5px" }}
                  className="font-weight-400 font-family-Work secondary-title"
                >
                  4.9 (2.989 Reviews)
                </span>
              </div>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  m: "10px 0 0 5px",
                }}
              >
                <img src={ShareIcon} alt="ShareIcon" />
                <img src={SaveIcon} alt="SaveIcon" />
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xl={7}
            lg={6.5}
            md={5}
            sm={4.5}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              ml: { md: "0", xs: "20px" },
            }}
          >
            <img src={EatLogo} alt="EatLogo" />
          </Grid>
          <Grid item xs={11.9} sx={{ m: "20px 0" }}>
            <Typography
              sx={{ borderBottom: "1px solid rgba(131, 164, 249, 0.15)" }}
            ></Typography>
          </Grid>
        </Grid>
        <Grid container sx={{ pb: "20px" }}>
          <Grid item lg={7.5} md={7} xs={12}>
            <EatCard1 />
          </Grid>
          <Grid lg={4.5} md={5} xs={12}>
            <EatCard2 />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default EatHealthy;
