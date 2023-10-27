import {
  Avatar,
  AvatarGroup,
  Box,
  CardMedia,
  Container,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import WelcomGIF from "../../assets/images/welcom-gif.gif";
import { ReactComponent as Star } from "../../assets/svg/home/star.svg";
import { ReactComponent as Fork } from "../../assets/svg/home/fork-and-knives.svg";
import { ReactComponent as MouseMove } from "../../assets/svg/home/mouse-move.svg";
import { TextGifBox } from "../../components/text-gif-box/text-gif-box";
import { SuperTitleAndDescription } from "../../components/super-title-and-description/super-title-and-description";
import { useState } from "react";
import SuperVideo from "../../assets/videos/-71f1-4b05-bee8-1038581c11ed.mp4";
import Chef from "../../assets/images/home/chef-1.png";
import Friends from "../../assets/images/home/friends-posing.png";
import { OrangeDot } from "../../assets/svg/home/orange-dot";
import image from "../../assets/images/home/home-1.png";
export const SuperSectionHome = () => {
  const [cursorPosition, setCursorPosition] = useState({
    top: "0%",
    left: "10%",
  });
  const onMouseMove = (e) =>
    setCursorPosition({ top: e.clientY - 350, left: e.clientX - 350 });
  return (
    <>
      <Box
        // mb={{ xs: "40px", lg: "90px" }}
        mb={{ xs: "40px" }}
        overflow={"hidden"}
        className="position-relativ"
        onMouseMove={onMouseMove}
        onMouseLeave={() => setCursorPosition({ top: "0%", left: "10%" })}
      >
        <MouseMove
          className="position-absolute d-none"
          style={{
            filter: "blur(44px)",
            zIndex: 1,
            transition: "all .5s linear",
            ...cursorPosition,
          }}
        />
        <Container>
          <Grid
            container
            mt="96px"
            zIndex={4}
            className="align-center  justify-center position-relative"
            spacing={3}
          >
            <Grid
              item
              xs={12}
              lg={6}
              className="flex justify-center flex-column"
            >
              <TextGifBox text={"Welcome!"} gif={WelcomGIF} />
              <SuperTitleAndDescription
                heading1="Discover Authentic Culinary Experiences with  Share"
                coloredHeading="My Dine"
                description="With 28.1 million households in the UK, hosts can build a community business on our platform. Our service connects guests with hosts from different backgrounds and cuisines to create a diverse
                            and exciting dining experience."
                mx="0"
                classe="ignore"
              />
              <div className="secondary-color flex align-center">
                <div className="text margin-right-0">Our happy customers</div>
                <Fork />
              </div>
              <div className="super-rating flex margin-top-1 margin-bottom-1">
                <Star />
                <div className="how-much">
                  <span className="margin-left-0-2">4.8</span>{" "}
                  <span className="margin-left-0">(3.5k reviews)</span>
                </div>
              </div>
              <div className="total-rating flex ">
                <AvatarGroup
                  sx={{
                    "& .MuiAvatar-root": {
                      width: "50px",
                      height: "50px",
                      color: "#fff",
                      fontFamily: `'Work Sans'`,
                      fontWeight: "500",
                      bgcolor: "#FFA412",
                      border: "1px solid #FFA4125E",
                    },
                  }}
                  total={24}
                >
                  {["male", "female", "pixel", "male"].map((item, index) => (
                    <Avatar
                      key={index}
                      sx={{}}
                      alt="Remy Sharp"
                      src={
                        "https://xsgames.co/randomusers/avatar.php?g=" + item
                      }
                    />
                  ))}
                </AvatarGroup>
              </div>
            </Grid>
            {/* <Grid item xs={12} lg={6}>
              <Grid
                container
                className="flex "
                justifyContent={{ xs: "flex-start", xl: "flex-end" }}
              >
                <Grid item xs={11} className="position-relative">
                  <Box
                    className="position-absolute d-none"
                    sx={{ top: "20px", left: "-120px" }}
                  >
                    <Box
                      className="position-relative"
                      sx={{
                        filter: "drop-shadow(0px 8px 40px rgba(0, 0, 0, 0.08))",
                        border: "4px solid #fff",
                        borderRadius: "8px",
                      }}
                    >
                      <OrangeDot
                        style={{ top: "-45", left: "-40" }}
                        className="d-none"
                      />
                      <img src={Chef} alt="chef" className="d-none" />
                    </Box>
                  </Box>
                  <Box
                    className="position-absolute d-none"
                    sx={{ bottom: "-50px", right: "-90px" }}
                  >
                    <Box
                      className="position-relative"
                      sx={{
                        filter: "drop-shadow(0px 8px 40px rgba(0, 0, 0, 0.08))",
                        border: "4px solid #fff",
                        borderRadius: "8px",
                      }}
                    >
                      <OrangeDot
                        className="position-absolute "
                        fill="#FFA412"
                        style={{ top: "-40", right: "-30" }}
                      />
                      <img src={Friends} alt="chef" />
                    </Box>
                  </Box>
                  <svg
                    className="position-absolute d-none"
                    style={{ right: "-50", top: "-30" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="37"
                    height="35"
                    viewBox="0 0 37 35"
                    fill="none"
                  >
                    <path
                      d="M3.58067 13.7067C3.46526 13.7761 3.38833 13.8224 3.27293 13.8917C1.31108 15.0714 0.63525 17.0802 1.7005 18.6736C2.76574 20.2669 4.9535 20.5054 6.82491 19.0888C8.33312 17.9392 9.99277 17.4754 11.7948 17.5088C15.6387 17.6257 18.1404 20.2978 17.7639 24.0205C17.5837 25.6343 17.0867 27.2443 16.7865 28.8331C16.7231 29.1626 16.7841 29.6115 16.9729 29.8379C17.0974 29.9573 17.6064 29.8455 17.9187 29.7549C20.8782 28.7523 22.0926 26.4196 22.6985 23.773C23.9012 18.2908 20.3492 13.0938 14.6277 11.7749C10.7862 10.8796 7.12869 11.7676 3.58067 13.7067Z"
                      fill="#FF611D"
                    />
                    <path
                      d="M30.9501 10.4405C30.2982 9.42995 29.1484 8.30327 27.6484 7.80264C26.6464 7.41817 25.7402 7.5475 25.1534 8.41977C24.6065 9.21613 24.8148 10.1297 25.312 11.0255C26.3523 12.8933 26.6205 14.7579 26.537 16.6781C26.4857 17.7998 26.4887 18.9408 26.632 20.1013C26.7752 21.2618 27.3498 22.215 28.4521 22.6949C29.5545 23.1749 30.2623 22.6454 30.8866 21.9064C33.0216 19.2722 33.1794 14.1387 30.9501 10.4405Z"
                      fill="#FF611D"
                    />
                  </svg>
                  <CardMedia
                    component="video"
                    image={SuperVideo}
                    autoPlay
                    loop
                    muted
                    width="100%"
                    height="483px"
                    sx={{
                      border: " 8px solid #FFF",
                      borderRadius: "16px",
                      boxShadow: "0px 8px 40px 0px rgba(0, 0, 0, 0.09)",
                      objectFit: "initial",
                    }}
                  />
                </Grid>
              </Grid>
            </Grid> */}
            <Grid item xs={12} lg={6}>
              <img src={image} alt="hero-png" style={{ maxWidth: "100%" }} />
            </Grid>
            <Grid item xs={12} lg={12} mt="40px" mb="90px" textAlign={"center"}>
              <div className="blackish-color heading-20 font-weight-600">
                Explore nearby chefs that offer the best social dining
                experiences
              </div>
              <Grid
                container
                className="search-chefs margin-top-1"
                justifyContent={"center"}
                spacing={2}
              >
                <Grid item xs={12} lg={5}>
                  <TextField
                    fullWidth
                    className="font-family-work"
                    placeholder={"Enter location"}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="21"
                            viewBox="0 0 18 21"
                            fill="none"
                          >
                            <path
                              d="M14.6569 14.6569C13.7202 15.5935 11.7616 17.5521 10.4138 18.8999C9.63275 19.681 8.36768 19.6814 7.58663 18.9003C6.26234 17.576 4.34159 15.6553 3.34315 14.6569C0.218951 11.5327 0.218951 6.46734 3.34315 3.34315C6.46734 0.218951 11.5327 0.218951 14.6569 3.34315C17.781 6.46734 17.781 11.5327 14.6569 14.6569Z"
                              stroke="#D4D4D8"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 9C12 10.6569 10.6569 12 9 12C7.34315 12 6 10.6569 6 9C6 7.34315 7.34315 6 9 6C10.6569 6 12 7.34315 12 9Z"
                              stroke="#D4D4D8"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment
                          position="end"
                          sx={{ cursor: "pointer" }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="50"
                            viewBox="0 0 50 50"
                            fill="none"
                          >
                            <circle cx="25" cy="25" r="25" fill="#F8854A" />
                            <path
                              d="M34 34L28 28M30 23C30 26.866 26.866 30 23 30C19.134 30 16 26.866 16 23C16 19.134 19.134 16 23 16C26.866 16 30 19.134 30 23Z"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      ".MuiInputBase-root": {
                        borderRadius: "30px !important",
                        pl: "22px",
                      },
                      ".MuiInputBase-input": {
                        p: "21px 0px",
                        color: "#6B7280",
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
                <Grid item xs={12} xl={1.5} lg={2.5}>
                  <Box sx={{}}>
                    <TextField
                      fullWidth
                      value="Choose dates"
                      inputProps={{ readOnly: true }}
                      className="font-family-work"
                      placeholder={"Enter location"}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                d="M6 5V1M14 5V1M5 9H15M3 19H17C18.1046 19 19 18.1046 19 17V5C19 3.89543 18.1046 3 17 3H3C1.89543 3 1 3.89543 1 5V17C1 18.1046 1.89543 19 3 19Z"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="9"
                              viewBox="0 0 16 9"
                              fill="none"
                            >
                              <path
                                d="M15 1L8 8L1 1"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        ".MuiInputBase-root": {
                          borderRadius: "30px !important",
                          bgcolor: "#F8854A",
                          cursor: "pointer",
                        },
                        ".MuiInputBase-input": {
                          p: "21px 0px",
                          color: "#fff",
                          fontFamily: `'Work Sans'`,
                          cursor: "pointer",
                          "&::placeholder": {
                            color: "#fff",
                            opacity: 1,
                          },
                        },
                        ".MuiOutlinedInput-notchedOutline": {
                          border: "1px solid #F8854A !important",
                        },
                      }}
                      variant="outlined"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} xl={1.6} lg={2.5}>
                  <Box sx={{}}>
                    <TextField
                      fullWidth
                      value="Choose guests"
                      inputProps={{ readOnly: true }}
                      className="font-family-work"
                      placeholder={"Enter location"}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="21"
                              viewBox="0 0 20 21"
                              fill="none"
                            >
                              <path
                                d="M10 2.85418C10.7329 2.02375 11.8053 1.5 13 1.5C15.2091 1.5 17 3.29086 17 5.5C17 7.70914 15.2091 9.5 13 9.5C11.8053 9.5 10.7329 8.97624 10 8.14582M13 19.5H1V18.5C1 15.1863 3.68629 12.5 7 12.5C10.3137 12.5 13 15.1863 13 18.5V19.5ZM13 19.5H19V18.5C19 15.1863 16.3137 12.5 13 12.5C11.9071 12.5 10.8825 12.7922 10 13.3027M11 5.5C11 7.70914 9.20914 9.5 7 9.5C4.79086 9.5 3 7.70914 3 5.5C3 3.29086 4.79086 1.5 7 1.5C9.20914 1.5 11 3.29086 11 5.5Z"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="9"
                              viewBox="0 0 16 9"
                              fill="none"
                            >
                              <path
                                d="M15 1L8 8L1 1"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        ".MuiInputBase-root": {
                          borderRadius: "30px !important",
                          bgcolor: "#F8854A",
                          cursor: "pointer",
                        },
                        ".MuiInputBase-input": {
                          p: "21px 0px",
                          color: "#fff",
                          fontFamily: `'Work Sans'`,
                          cursor: "pointer",
                          "&::placeholder": {
                            color: "#fff",
                            opacity: 1,
                          },
                        },
                        ".MuiOutlinedInput-notchedOutline": {
                          border: "1px solid #F8854A !important",
                        },
                      }}
                      variant="outlined"
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
