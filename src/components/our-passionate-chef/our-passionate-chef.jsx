import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import bg from "../../assets/images/common/bg-passionate-chef.png";
import chef from "../../assets/images/common/chef-1.png";
import { ReactComponent as Spice } from "../../assets/svg/spice.svg";

const OurPassionateCheffs = () => {
  return (
    <Box sx={{ paddingTop: "100px", pb: "50px" }}>
      <Container sx={{ maxWidth: "1254px !important" }}>
        <Box
          sx={{
            backgroundImage: `url(${bg})`,
            minHeight: "426px",
            backgroundRepeart: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "0 57px",
            "@media screen and (max-width:992px)": {
              padding: "40px 20px",
            },
          }}
        >
          <Grid
            container
            spacing={3}
            paddingTop={{ lg: "120px" }}
            alignItems={"center"}
            position={"relative"}
          >
            <Grid item xs={12} md={12} lg={8}>
              <Box>
                <Spice />
                <Typography
                  textTransform={"capitalize"}
                  marginTop={"24px"}
                  lineHeight={"36px"}
                  fontWeight={"400"}
                  fontSize={"18px"}
                  fontFamily={"inherit"}
                  color={"#292D32"}
                  sx={{
                    "@media  (max-width:1200px) and (min-width:991px)": {
                      maxWidth: "500px",
                    },
                  }}
                >
                  <Typography variant="span" color={"#FF611D"} fontWeight={600}>
                    Our passionate chefs
                  </Typography>{" "}
                  not only host but also dine with you, making it an
                  unforgettable experience for you and your loved ones
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <Box
                sx={{
                  position: "absolute",
                  right: "0px",
                  top: "-110px",
                  "@media screen and (max-width:992px)": {
                    position: "relative",
                    top: "initial",
                    right: "initial",
                    textAlign: "center",
                  },
                }}
              >
                <img src={chef} alt="chef" style={{ maxWidth: "100%" }} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default OurPassionateCheffs;
