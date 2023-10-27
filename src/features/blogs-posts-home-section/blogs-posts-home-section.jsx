import { Box, Button, Container, Grid } from "@mui/material";
import InstaImg from "../../assets/images/home/smd-insta-img.jpg";
import BlogsBG from "../../assets/images/home/blogs-home-bg.png";
import React from "react";
import { INSTAPHOTOS } from "./blogs-posts-home-section-data";
import { pageRoutes } from "../../routeList";
import { useNavigate } from "react-router-dom";

export const BlogsPostsHomeSection = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Container>
        <Grid
          container
          mb={{ xs: "40px" }}
          justifyContent={"center"}
          spacing={4}
        >
          <Grid item xs={12} lg={6} display={"flex"}>
            <Box>
              <Box
                className="flex  align-center"
                sx={{
                  p: "15px 35px",
                  border: "1.448px solid rgba(217, 217, 217, 0.70)",
                  borderRadius: "28.964px 28.964px 0px 0px",
                  background: "#FFF",
                  flexWrap: "wrap",
                  justifyContent: { xs: "center", md: "space-between" },
                  gap: "20px",
                }}
              >
                <div className="flex align-center">
                  <div>
                    <img
                      src={InstaImg}
                      style={{
                        width: "65px",
                        height: "65px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                      alt="InstaImg"
                    />
                  </div>
                  <div
                    color="#292D32"
                    className="userName font-weight-600 secondary-heading margin-left-0"
                  >
                    sharemy_dine
                  </div>
                </div>
                <a
                  href="https://www.instagram.com/sharemy_dine/"
                  target="_blank"
                >
                  <Button
                    disableElevation
                    sx={{
                      height: "40px",
                      borderRadius: "21.72304344177246px",
                      p: "14px",
                      bgcolor: "#0095F6",
                      border: "1px solid #0095F6",
                      "&:hover": { bgcolor: "#0095F6" },
                    }}
                    className="text-transform primary-title font-weight-400"
                    variant="contained"
                  >
                    Follow us on Instagram
                  </Button>
                </a>
              </Box>
              <Box
                sx={{
                  p: "9px",
                  border: "1.448px solid rgba(217, 217, 217, 0.70)",
                  borderTop: "0",
                  background: "#FFF",
                }}
              >
                <Grid container spacing={1}>
                  {INSTAPHOTOS.map((item, index) => (
                    <Grid item xs={4} key={index}>
                      <img
                        src={item}
                        alt="insta-img"
                        style={{
                          borderRadius: "7.241px",
                          width: "100%",
                          height: "auto",
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6} display={"flex"}>
            <Box
              className="position-relative"
              sx={{
                minWidth: "100%",
                minHeight: "600px",
                borderRadius: "28.964px",
                backgroundImage: `url('${BlogsBG}')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: `center center`,
              }}
            >
              <Box
                className="position-absolute"
                sx={{
                  bottom: "10%",
                  right: 0,
                  p: "30px 25px",
                  background: "#F6854A",
                  borderRadius: "28.964px 0px 0px 28.964px",
                }}
              >
                <div className="margin-bottom-0 secondary-heading font-weight-700 white-color">
                  Share My Dine Stories
                </div>
                <div className="white-color margin-bottom-1">
                  Meet our amazing hosts and fill up on
                  <br /> secret tips, recipes, and travel
                  <br /> inspiration.
                </div>
                <Button
                  disableElevation
                  onClick={() => navigate(pageRoutes.blog)}
                  sx={{
                    height: "40px",
                    borderRadius: "12.482px",
                    p: "15px",
                    bgcolor: "transparent",
                    border: "1px solid #fff",
                    "&:hover": { bgcolor: "transparent" },
                  }}
                  className="text-transform primary-title font-weight-400 white-color"
                  variant="contained"
                >
                  Read our blogs
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
