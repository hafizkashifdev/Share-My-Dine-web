import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

export const SignMeUpSection = () => {
  return (
    <Box>
      <Container sx={{ maxWidth: "1405px !important" }}>
        <Grid
          container
          my="20px"
          mb={"50px"}
          sx={{ bgcolor: "#fff", zIndex: 4 }}
          className="position-relative justify-center position-relative"
        >
          <Grid item xs={12} lg={10}>
            <Box
              sx={{
                bgcolor: "#000000",
                borderRadius: "20px",
                padding: { xs: "20px", md: "40px" },

                py: "32px ",
              }}
            >
              <Box
                sx={{ fontSize: "32px" }}
                className="white-color font-weight-600 center-text"
              >
                Don't Miss Out, Join Our List!
              </Box>
              <div className="white-color font-weight-500 center-text heading-18 my-24">
                <Container maxWidth="md">
                  <Typography
                    fontSize={"15px"}
                    maxWidth={"750px"}
                    margin={"auto"}
                  >
                    Be the first to know about our upcoming social dining
                    experiences, chef-hosted dinners, and exclusive culinary
                    events. Sign up for our mailing list and stay connected with
                    foodies like you!
                  </Typography>
                </Container>
              </div>
              <div className="flex justify-center align-center my-24">
                <Container className="flex align-center" maxWidth="sm">
                  <Grid container spacing={2} justifyContent={"center"}>
                    <Grid item xs={12} lg={6}>
                      <TextField
                        fullWidth
                        className="font-family-work"
                        placeholder={"Your email address"}
                        sx={{
                          ".MuiInputBase-root": {
                            bgcolor: "#fff",
                            borderRadius: "10px !important",
                            pl: "15px",
                          },
                          ".MuiInputBase-input": {
                            p: "10px 0px",
                            color: "#6B7280",
                            fontSize: "18px",
                            fontFamily: `'Work Sans'`,
                            "&::placeholder": {
                              color: "#D9D9D9",
                              opacity: 1,
                            },
                          },
                          ".MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #D9D9D9 !important",
                          },
                        }}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      lg={3}
                      textAlign={{ xs: "center", lg: "left" }}
                    >
                      <Button
                        disableElevation
                        sx={{
                          height: "40px",
                          borderRadius: "15px",
                          p: "10px",
                          bgcolor: "transparent",
                          border: "1px solid #fff",
                          "&:hover": { bgcolor: "transparent" },
                        }}
                        className="text-transform primary-title font-weight-600 white-color"
                        variant="contained"
                      >
                        Sign me up!
                      </Button>
                    </Grid>
                  </Grid>
                </Container>
              </div>
              <div className="secondary-title white-color center-text">
                By signing up, I agree to Share My Dine’s Terms & Conditions.
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
