import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import HostImg from "../../assets/images/what-we-do/host.png";
import GuestImg from "../../assets/images/what-we-do/guest.png";
import CookedImg from "../../assets/images/what-we-do/cook.svg";
import EatImg from "../../assets/images/what-we-do/eat.svg";

const WhatWeDoPage = () => {
  return (
    <>
      <Container>
        <Box
          sx={{ backgroundColor: "#FFF7E3", p: "20px", borderRadius: "12px" }}
        >
          <Grid container justifyContent={"center"} alignItem={"center"} spacing={5}>
            <Grid item md={5} xs={12}>
              <img src={HostImg} alt="HostImg"  width={'90%'} />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              sx={{mt:{md:'0',xs:'30px'}}}
              className="flex flex-column justify-center margin-bottom-3"
            >
              <img
                src={CookedImg}
                alt="CookedImg"
                width={"60px"}
                height={"60px"}
              />
              <Typography
                className="font-weight-600 super-heading-42 blackish-color font-family-Work "
                sx={{ py: "10px" }}
              >
                Become a Host
              </Typography>
              <Typography
                className="font-weight-400 secondary-heading secondary-color font-family-Work "
                sx={{ lineHeight: "40px" }}
              >
                Share My Dine is a platform for food lovers to create menus and
                listings for hosting dining experiences. Create a host account
                and showcase your culinary skills to friendly foodies
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            backgroundColor: "rgba(198, 255, 177, 0.15)",
            p: "20px",
            borderRadius: "12px",
            m: "10px 0 40px 0",
          }}
        >
          <Grid
            container
            justifyContent={"center"}
            alignItem={"center"}
            gap={15}
          >
            <Grid
              item
              md={6}
              xs={12}
              className="flex flex-column justify-center margin-bottom-3"
            >
              <img
                src={EatImg}
                alt="CookedImg"
                width={"60px"}
                height={"60px"}
              />
              <Typography
                className="font-weight-600 super-heading-42 blackish-color font-family-Work "
                sx={{ py: "10px" }}
              >
                Become a Guest
              </Typography>
              <Typography
                className="font-weight-400 secondary-heading secondary-color font-family-Work "
                sx={{ lineHeight: "40px" }}
              >
                At Share My Dine, people are at the heart of everything we do.
                Whether you want to surprise a friend or loved one with an
                exclusive meal, or meet new people to dine with and make life
                long friendships, our platform has got you covered. Because,
                let's face it, who doesn't love a good meal?
              </Typography>
            </Grid>
            <Grid item md={4.5} xs={12} sx={{mt:{md:'0',xs:'-40px'}}}>
              <img src={GuestImg} alt="HostImg" width={'90%'} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default WhatWeDoPage;
