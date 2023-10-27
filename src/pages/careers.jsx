import React from "react";
import HeroSectionReusable from "../features/hero-section-reusable/hero-section-reuseable";
import OurPassionateCheffs from "../components/our-passionate-chef/our-passionate-chef";
import { Box, Container } from "@mui/material";
import Careermain from "../features/career-page/firstSection/FirstSection";

const Careers = () => {
  return (
    <>
      <HeroSectionReusable
        para={"Creating an inclusive & diverse environment for your success"}
        heading={"Careers"}
        gifTitle={"Welcome"}
      />
      <Careermain />
      <Box height={"100%"} width={"100%"} padding={"40px 0"}>
        <Container>
          <iframe
            src="https://jobs.orcaloholding.co.uk/jobs/companies/3YzGd0q86X2APzkpxVDeoNgyB5"
            width="100%"
            height="100%"
            no-border
            title="Jobs Widget"
            scrolling="no"
            style={{ border: "0", minHeight: "100vh" }}
          ></iframe>
        </Container>
      </Box>
      <OurPassionateCheffs />
    </>
  );
};

export default Careers;
