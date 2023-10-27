import {
  Box,
  Button,
  Container,
  Grid,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React from "react";
import Ingredients from "../../assets/images/eat-healthy/Ingredients.png";
import Allergens from "../../assets/images/eat-healthy/Ingredients.png";
import Dietary from "../../assets/images/eat-healthy/allergens.png";
import Cuisine from "../../assets/images/eat-healthy/cuisine.png";
import NoSpice from "../../assets/images/eat-healthy/spice.png";
import Dot from "../../assets/images/eat-healthy/icon-dot.png";
import ThemeButton from "../../components/theme-button/theme-button";
import Customtextarea from "./CustomTextarea";

const Card1 = [
  {
    id: "1",
    img: Ingredients,
    heading: "Ingredients",
    icon: Dot,
    names: ["Lemon", "Mixed Salad (Fresh)", "Salmon", "Red Beans", "Shrimps"],
  },
  {
    id: "2",
    img: Allergens,
    heading: "Allergens",
    icon: Dot,
    names: ["Salmon", "Shrimps"],
  },
  {
    id: "3",
    img: Dietary,
    heading: "Dietary Info",
    icon: Dot,
    names: ["Organic"],
  },
  {
    id: "4",
    img: Cuisine,
    heading: "Cuisine",
    icon: Dot,
    names: ["Mexican"],
  },
  {
    id: "5",
    img: NoSpice,
    heading: "Spice Level",
    icon: Dot,
    names: ["No Spice"],
  },
];

const EatCard1 = () => {
  return (
    <>
      <Container>
        <Box>
          <Grid container  spacing={5}>
            {Card1?.map((item) => {
              return (
                <Grid item md={2.4} sm={4} xs={6} key={item.id} >
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      <img src={item.img} alt={item.heading} />
                      <Typography className="font-weight-600 font-family-Work margin-bottom-1">
                        {item.heading}
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        sx={{
                          borderRight: "1px solid rgba(131, 164, 249, 0.15)",
                          height: "5vh",
                        }}
                      ></Typography>
                    </div>
                  </Box>
                  <Box>
                    {item.names.map((name, index) => (
                      <Typography
                        sx={{ pb: "5px" }}
                        className="font-weight-400 font-family-Work secondary-title"
                        key={index}
                      >
                        <span style={{ marginRight: "5px" }}>
                          <img src={item.icon} alt={`dot-${index}`} />
                        </span>
                        {name}
                      </Typography>
                    ))}
                  </Box>
                </Grid>
              );
            })}
            <Grid item xs={12}>
              <Typography
                sx={{
                  borderBottom: "1px solid rgba(131, 164, 249, 0.15)",
                }}
              ></Typography>
            </Grid>
            .
          </Grid>
        </Box>
        <Box sx={{pb:'20px'}}>
          <Box>
            <Grid
              container
              justifyContent={"space-between"}
              alignItems={"center"}
              sx={{ mb: "30px" }}
            >
              <Box>
                <Typography
                  sx={{ fontSize: "32px" }}
                  className="font-weight-600 font-family-Work"
                >
                  Instructions
                </Typography>
              </Box>
              <Box sx={{mt:{sm:'0', xs:'10px'}}}>
                <ThemeButton title="Start Cooking" />
              </Box>
            </Grid>
          </Box>
          <Grid container>
          <Grid item xs={12}
            sx={{
              background: "#FBFBFB",
              borderRadius: "8px",
              padding: "16px",
              mt: "15px",
            }}
          >
            <Typography
              sx={{ fontSize: "18px", pb: "10px" }}
              className="font-weight-500 font-family-Work"
            >
              Step 1
            </Typography>
            <Typography className="font-weight-400 font-family-Work">
              Mix soy yogurt, protein powder and water in a bowl.
            </Typography>
          </Grid>
          <Grid item xs={12}
            sx={{
              background: "#FBFBFB",
              borderRadius: "8px",
              padding: "16px",
              mt: "15px",
            }}
          >
            <Typography
              sx={{ fontSize: "18px", pb: "10px" }}
              className="font-weight-500 font-family-Work"
            >
              Step 2
            </Typography>
            <Typography className="font-weight-400 font-family-Work">
              Add your favorite toppings like berries, cereal and nut butter.
            </Typography>
          </Grid>
          <Box sx={{ m: "20px" }}>
            <Button
              className="font-family-Work"
              sx={{
                background: "white",
                border: "1px solid #292D32",
                fontWeight: "14px",
                fontSize: "14px",
                p: "10px",
                color: "#292D32",
              }}
            >
              Make it
            </Button>
          </Box>
          <Typography
            sx={{
              borderBottom: "1px solid rgba(131, 164, 249, 0.15)",
              width: "100%",
            }}
          ></Typography>
          <Grid item xs={12}
            sx={{
              background: "#FFF4F6",
              p: "10px",
            }}
          >
            <Typography
              sx={{ fontSize: "18px", pb: "10px" }}
              className="font-weight-500 font-family-Work"
            >
              Notes
            </Typography>
            <Typography className="font-weight-400 font-family-Work">
              There are no notes yet. Be the first to share your experience!
            </Typography>
            <Typography
              sx={{ fontSize: "18px", py: "10px", color: "#FF611D" }}
              className="font-weight-500 font-family-Work"
            >
              Add Note
            </Typography>
            <Box sx={{pr:'5px'}}>
            <Customtextarea />
            </Box>
          </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default EatCard1;
