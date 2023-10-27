import React from "react";
import ChefsCard from "./chefsCard";
import HeroSectionReusable from "../hero-section-reusable/hero-section-reuseable";
import OurPassionateCheffs from "../../components/our-passionate-chef/our-passionate-chef";
import { Box } from "@mui/material";
import { TalkToUsForm } from "../../components/talk-to-us-form/talk-to-us-form";
import heartGif from "../../assets/images/chef/chefHead/1.png";
import downGif from "../../assets/images/chef/chefHead/2.png";
import gif from "../../assets/images/chef/chefHead/animation_gif.gif";

function ExploreChef() {
  const paraMessage = `We offer a unique dining experience that restaurants can't match. 
  Our passionate chefs not only 
  host also dine with you, making it an 
  unforgettable experience for you and your loved ones.`;

  return (
    <>
      <HeroSectionReusable
        heading={"Explore Our <span class='primary-color' >Chefs</span>"}
        gifTitle={"Our Chefs"}
        gifImage={gif}
        para={paraMessage}
        hearthide={true}
        downhide={true}
      />

      <ChefsCard />
      <Box
        sx={{
          marginTop: "150px",
          "@media screen and (max-width: 990px)": {
            marginTop: "50px",
          },
        }}
      >
        <OurPassionateCheffs />
      </Box>
      {/* <Box sx={{ marginTop: "160px", marginBottom: "100px" }}>
        <TalkToUsForm />
      </Box> */}
    </>
  );
}

export default ExploreChef;
