import React from "react";
import styles from "./styles.module.scss";
import { Box, Container, Grid } from "@mui/material";
import { ourSquadData } from "../../explore-our-chef/chefsCard/cardData";
import ChefCard from "../../explore-our-chef/chefsCard/chefCard";
const OurSquadCard = () => {
  return (
    <Box padding={"50px 0"} zIndex={10} position={"relative"}>
      <Container>
        <Grid container spacing={3} justifyContent={"center"}>
          {ourSquadData.map((item, index) => (
            <Grid item xs={12} md={6} lg={4} xl={2.2}>
              <ChefCard card={item} index={index} margin={true} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OurSquadCard;
