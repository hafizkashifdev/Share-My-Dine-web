import React from "react";
import SingleChefCard from "./singleChef";
import OurPassionateCheffs from "../../components/our-passionate-chef/our-passionate-chef";
import { TalkToUsForm } from "../../components/talk-to-us-form/talk-to-us-form";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";

function SingleChefComponent() {
  const location = useLocation();
  const card = location.state?.card;
  console.log("card", card);
  return (
    <>
      <Box sx={{ marginTop: "150px" }}>
        <SingleChefCard card={card} />
      </Box>
      <Box
        sx={{
          marginTop: "150px",
          "@media screen and (max-width: 900px)": {
            marginTop: "100px",
          },
        }}
      >
        <OurPassionateCheffs />
      </Box>
      {/* <Box sx={{ marginTop: '160px', marginBottom: '100px' }}>
                <TalkToUsForm />
            </Box> */}
    </>
  );
}

export default SingleChefComponent;
