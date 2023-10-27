import React from "react";
import { FancyHeadingText } from "../../components/fancy-heading-text/fancy-heading-text";
import { Box, Button, Container, Grid } from "@mui/material";
import { RecipiesCard } from "../../components/recipies-card/recipies-card";
import { ReactComponent as ArrowDown } from "../../assets/svg/arrow-down.svg";
import { ReactComponent as Patte } from "../../assets/svg/home/faqs-section-bg.svg";
import dish1 from "../../assets/images/home/dishes-2/1.png";
import dish2 from "../../assets/images/home/dishes-2/2.png";
import dish3 from "../../assets/images/home/dishes-2/3.png";
import dish4 from "../../assets/images/home/dishes-2/4.png";
import dish5 from "../../assets/images/home/dishes-2/5.png";

import ThemeButton from "../../components/theme-button/theme-button";
import { useNavigate } from "react-router-dom";
import { pageRoutes } from "../../routeList";

export const ReciepiesSection = () => {
  const navigate = useNavigate();
  return (
    <Box py={"10px"} pb={"40px"}>
      <Container>
        <Grid container my="70px">
          <Grid item xs={12}>
            <FancyHeadingText
              description="Visit Our Special Recipes"
              fancyText="Recipes"
              heading="OUR RECIPES"
            />
            <Grid container mt="50px" justifyContent="center">
              <Grid item lg={2} xs={12}>
                <Grid container>
                  <Grid
                    className="flex "
                    justifyContent={{ xs: "center", lg: "flex-end" }}
                    item
                    xs={12}
                  >
                    <RecipiesCard
                      dish={dish1}
                      name="Mexican Salad"
                      price={21}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    className="flex "
                    justifyContent={{ xs: "center", lg: "flex-start" }}
                  >
                    <RecipiesCard
                      dish={dish2}
                      name="Butter chicken"
                      priceColor="#D2A10B"
                      price={19}
                      right={false}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item lg={5} xs={12}>
                <Grid container className="height-100">
                  <Grid
                    className="flex justify-center align-center"
                    item
                    xs={12}
                  >
                    <RecipiesCard dish={dish3} name="Kale Salad " price={21} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item lg={3} xs={12}>
                <Grid container>
                  <Grid
                    className="flex "
                    justifyContent={{ xs: "center", lg: "flex-end" }}
                    item
                    xs={12}
                  >
                    <RecipiesCard
                      dish={dish4}
                      right={false}
                      name="Moroccan lamb tagine"
                      priceColor="#F58F13"
                      price={17}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    justifyContent={{ xs: "center", lg: "flex-start" }}
                    className="flex"
                  >
                    <RecipiesCard
                      dish={dish5}
                      right={false}
                      name="Beef Skirt Steak"
                      priceColor="#537622"
                      price={22}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Box className="position-relative">
              <Patte
                className="position-absolute"
                style={{ bottom: "-50%", left: "13%" }}
              />
              <div className="dark-gray-color tertiary-title center-text">
                let's check out more RECIPES we have
              </div>
              <div className="flex justify-center margin-top-1">
                <ThemeButton
                  title="Explore More Recipes"
                  sx={{ maxWidth: "280px" }}
                  onClick={() => navigate(pageRoutes.ExploreRecipesPage)}
                />
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
