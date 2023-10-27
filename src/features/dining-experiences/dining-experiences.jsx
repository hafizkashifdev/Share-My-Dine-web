import { Box, Container, Grid } from "@mui/material";
import { FancyHeadingText } from "../../components/fancy-heading-text/fancy-heading-text";
import { DiningExperiencesCard } from "../../components/dining-experiences-card/dining-experiences-card";
import { DININGEXPERIENCESDATA } from "./dining-experiences-data";

export const DiningExperiences = () => {
  return (
    <>
      <Box>
        <Container>
          <Grid container mb={{ xs: "40px" }} justifyContent="center">
            <Grid item xs={12}>
              <FancyHeadingText
                description="Explore Nearby Popular Social Dining Experiences"
                fancyText="&nbsp;"
                heading="dining experiences"
              />
            </Grid>
            <Grid item my="70px" xs={12}>
              <Grid container columnSpacing={5} rowSpacing={10}>
                {DININGEXPERIENCESDATA.map((item) => (
                  <Grid key={item.title} item lg={4} xl={3} md={6} xs={12}>
                    <DiningExperiencesCard {...item} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
