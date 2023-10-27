import { Box, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Recipe1 from "../../assets/images/explore-recipes/recipe1.jpg";
import Recipe2 from "../../assets/images/explore-recipes/recipe2.jpg";
import Recipe3 from "../../assets/images/explore-recipes/recipe3.jpg";
import Recipe4 from "../../assets/images/explore-recipes/recipe4.jpg";
import RecipeMain from "../../assets/images/explore-recipes/recipe-mai.png";
import "./exploreRecipes.scss";
import { Link, useNavigate } from "react-router-dom";
import { pageRoutes } from "../../routeList";

const GiftData = [
  {
    id: "1",
    image: Recipe1,
    heading: "Eat Healthy",
  },
  {
    id: "2",
    image: Recipe2,
    heading: "Weakday Dishes",
  },
  {
    id: "3",
    image: Recipe3,
    heading: "15 Min Meals",
  },
  {
    id: "4",
    image: Recipe4,
    heading: "Vegan Mania",
  },
];

const ExploreRecipes = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Box>
          <Grid container justifyContent={"center"} gap={6}>
            {GiftData?.map((item, index) => (
              <Grid
                item
                md={2.5}
                sm={5}
                xs={12}
                key={index}
                sx={{
                  mt:
                    item.id === "2" || item.id === "4"
                      ? { md: "100px" }
                      : "0px",
                  position: "relative",
                  zIndex: 10,
                }}
              >
                <Card
                  sx={{
                    p: "10px",
                    boxShadow:
                      "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
                    borderRadius: "8px",
                    cursor:'pointer'
                  }}
                  onClick={() => navigate(pageRoutes.EatHealthyPage)}
                >
                    <img src={item.image} width={"100%"} />
                    <Typography
                      sx={{
                        py: "10px",
                        height: "30px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      className="font-weight-600 font-family heading-color text-change"
                    >
                      {item.heading}
                    </Typography>
                  </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Grid container justifyContent={"center"}>
        <Grid item sx={{ mt: "140px", mb: "100px", px: "10px" }}>
          <img
            src={RecipeMain}
            alt="RecipeMain"
            width={"100%"}
            style={{ maxWidth: "100%" }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ExploreRecipes;
