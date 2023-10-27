import React, { useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import EatHealthy from "../../assets/images/Eat.jpg";

const BlogInnerPage = () => {
  return (
    <>
      {/* <svg
      className="position-absolute d-none"
      style={{ marginTop: "-210px", marginRight: "30px" }}
      xmlns="http://www.w3.org/2000/svg"
      width="37"
      height="35"
      viewBox="0 0 37 35"
      fill="none"
    >
      <path
        d="M27.619 3.06356C27.7497 3.07559 27.8368 3.08361 27.9675 3.09564C30.1894 3.30017 31.5505 4.87368 31.1743 6.8578C30.7981 8.84192 28.8979 10.0714 26.6701 9.60298C24.8717 9.21802 23.1906 9.54602 21.5648 10.4057C18.1138 12.2824 16.8328 15.9386 18.5588 19.2573C19.3224 20.688 20.3727 21.9696 21.2361 23.3218C21.4162 23.6017 21.5276 24.0508 21.4401 24.3499C21.3714 24.5192 20.867 24.6483 20.5495 24.7068C17.4864 25.127 15.5154 23.4974 13.9809 21.2935C10.8499 16.7045 12.1472 10.1972 16.8583 6.32999C20.0178 3.72435 23.6728 2.87587 27.619 3.06356Z"
        fill="#FF611D"
      />
      <path
        d="M1.51088 12.5862C1.72793 11.3387 2.35446 9.75339 3.53193 8.59431C4.29992 7.77308 5.17183 7.47779 6.02948 8.02617C6.8227 8.52167 6.97285 9.47436 6.85383 10.5431C6.60235 12.7732 7.05165 14.6453 7.84126 16.408C8.30482 17.4365 8.7261 18.508 9.02722 19.6623C9.32834 20.8167 9.1603 21.9748 8.33658 22.9317C7.51286 23.8886 6.67259 23.7174 5.83035 23.3113C2.91039 21.822 0.858924 17.0797 1.51088 12.5862Z"
        fill="#FF611D"
      />
    </svg> */}
      <Container>
        <Box
          className="flex justify-center"
          sx={{
            mt: "50px",
            mb:'60px'
          }}
        >
          <Grid
            container
            width={{ lg: "80%", md: "88%", xs: "100%" }}
            sx={{
              p: "20px",
              position:'relative',
              boxShadow:
                "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
              borderRadius: "8px",
            }}
          >
            <svg
            className="position-absolute"
            style={{ right: '-30px', top:'-30px'  }}
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
            <Grid className="position-relative" sx={{mb:{xs:'20px'}}} item md={4.5} xs={12}>
              <svg
                className="position-absolute"
                style={{ margin: "20px 0 0 20px" }}
                width="29"
                height="25"
                viewBox="0 0 29 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.7878 23.918C14.599 24.1071 14.3683 24.2017 14.0956 24.2017C13.8229 24.2017 13.5922 24.1071 13.4034 23.918L3.58682 14.4328C3.48195 14.3487 3.33774 14.2122 3.1542 14.0231C2.97067 13.834 2.67963 13.49 2.28109 12.9911C1.88256 12.4921 1.52597 11.98 1.21134 11.4548C0.896706 10.9296 0.616158 10.2941 0.369695 9.5483C0.123232 8.8025 0 8.07771 0 7.37393C0 5.06301 0.665975 3.25628 1.99792 1.95376C3.32987 0.651241 5.17048 -1.90735e-05 7.51974 -1.90735e-05C8.16999 -1.90735e-05 8.83334 0.112902 9.5098 0.338741C10.1863 0.564581 10.8155 0.869204 11.3976 1.25261C11.9797 1.63601 12.4805 1.99578 12.9 2.33191C13.3195 2.66805 13.718 3.02519 14.0956 3.40334C14.4731 3.02519 14.8717 2.66805 15.2912 2.33191C15.7107 1.99578 16.2115 1.63601 16.7936 1.25261C17.3756 0.869204 18.0049 0.564581 18.6814 0.338741C19.3578 0.112902 20.0212 -1.90735e-05 20.6714 -1.90735e-05C23.0207 -1.90735e-05 24.8613 0.651241 26.1933 1.95376C27.5252 3.25628 28.1912 5.06301 28.1912 7.37393C28.1912 9.69536 26.9903 12.0588 24.5886 14.4643L14.7878 23.918Z"
                  fill="#FF611D"
                />
              </svg>
              <img src={EatHealthy} width={"100%"} height={"100%"} />
            </Grid>
            <Grid item md={7.5} sx={{ px: { md: "20px" } }}>
              <Typography
                sx={{ lineHeight: "36px",  }}
                className="font-weight-400 heading-20 font-family secondary-color"
              >
                It promotes physical health and keeps active and energetic
                throughout the day. It’s also impacting our mental health;
                Healthy food provides us with nutrients that are crucial for the
                proper functioning of the brain. In modern times the person is
                forgetting the importance of a balanced diet and going away from
                healthy food, due to which the risk of diseases is increasing. A
                balanced diet means food that contains the right amount of
                proteins, vitamins, carbohydrates, fats and fibre. Are you
                attached to delicious food and not paying attention to the
                quality of food? No worries "Share My Dine" provides homemade
                healthy food right here! Let’s join us for safe and healthy
                food.
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ mt: "20px" }}>
              <Typography
                sx={{ lineHeight: "36px" }}
                className="font-weight-400 heading-20 font-family secondary-color"
              >
                Eating a healthy diet is important for maintaining good health
                and reducing the risk of chronic diseases. A healthy diet should
                include a variety of nutrient-dense foods such as fruits,
                vegetables, whole grains, lean protein sources, and healthy
                fats. It's also important to limit processed and high-fat foods,
                as well as sugary beverages, and to practice portion control.
                Making small changes to your diet and lifestyle can have a big
                impact on your overall health and wellbeing
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ display: "flex", justifyContent:'flex-end', mt:'20px' }}>
              <Box>
                <Typography className="font-weight-600 primary-color">
                  Presented by
                </Typography>
                <Typography className="font-weight-500 secondary-color sub-heading">
                  Lillie Stambaugh Tronc
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default BlogInnerPage;
