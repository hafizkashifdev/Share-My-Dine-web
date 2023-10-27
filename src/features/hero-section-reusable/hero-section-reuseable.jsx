import { Box, Container, Typography } from "@mui/material";
import React from "react";
import styles from "./styles.module.scss";
import { ReactComponent as HomeDishPic1 } from "../../assets/svg/home/home-dish-pic-1.svg";
import { ReactComponent as HomeDishPic2 } from "../../assets/svg/home/home-dish-pic-2.svg";
import WelcomGIF from "../../assets/images/welcom-gif.gif";
import heartGif from "../../assets/images/chef/chefHead/1.png";
import { ReactComponent as ScrollDown } from "../../assets/svg/scroll-down.svg";
import kolumGif from "../../assets/images/chef/chefHead/3.png";
import RatingCard from "../eat-healthy/RatingCard";

const HeroSectionReusable = ({
  heading,
  para,
  gifTitle,
  gifImage,
  hearthide,
  downhide,
  kolumhide,
  eatHealthy = false,
}) => {
  return (
    <Box className={styles.hero2}>
      <HomeDishPic1 className={styles.image1} />
      <HomeDishPic2 className={styles.image2} />
      <Container>
        <Box className={styles.content}>
          {" "}
          {gifTitle && (
            <Box
              mb="1rem"
              sx={{
                bgcolor: "#fff",
                height: "34px",
                borderRadius: "55px",
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.03)",
                p: "12px 24px",
              }}
              className="welcome-div flex align-center justify-space-around"
            >
              <div className="welcom-text sub-heading primary-color font-weight-600">
                {gifTitle}
              </div>
              <div
                className="gif margin-bottom-0-2 "
                style={{ marginLeft: "6px" }}
              >
                <img
                  width="34px"
                  height="34px"
                  src={gifImage || WelcomGIF}
                  alt="WelcomGIF"
                />
              </div>
            </Box>
          )}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {kolumhide === true ? (
              <Box
                sx={{
                  marginBottom: "80px",
                  "@media screen and (max-width: 990px)": {
                    display: "none",
                  },
                }}
              >
                <img width="41px" height="29px" src={kolumGif} />
              </Box>
            ) : (
              ""
            )}

            <Typography
              variant="h1"
              dangerouslySetInnerHTML={{ __html: heading }}
            />

            {hearthide === true ? (
              <Box
                sx={{
                  marginBottom: "80px",
                  "@media screen and (max-width: 990px)": {
                    display: "none",
                  },
                }}
              >
                <img
                  marginLeft="400px"
                  width="41px"
                  height="29px"
                  src={heartGif}
                />
              </Box>
            ) : (
              ""
            )}
          </Box>
          {eatHealthy && (
            <div style={{ marginBottom: "30px" }}>
              <RatingCard />
            </div>
          )}
          <Typography dangerouslySetInnerHTML={{ __html: para }} />
          {downhide === true ? (
            <Box
              className="element-to-animate-border"
              sx={{
                marginTop: "50px",
                minWidth: "41px",
                minHeight: "83px",
                cursor: "pointer",
                border: "1px solid",
                borderRadius: "22px",
                backgroundColor: "#F3F4F6",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ScrollDown className="element-to-animate" />
            </Box>
          ) : (
            ""
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSectionReusable;
