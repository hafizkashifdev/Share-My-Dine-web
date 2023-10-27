import { Box, Collapse, Fade } from "@mui/material";
import MapPin from "../../assets/images/home/Map Pin.png";
import { ReactComponent as Star } from "../../assets/svg/home/star.svg";

import { useState } from "react";
export const DiningExperiencesCard = ({
  BG,
  rating,
  ratingCount,
  title,
  desc,
  city,
  hostAvatar,
  hostName,
  pricePG,
}) => {
  const [enter, setEnter] = useState(false);
  return (
    <>
      <Box
        onMouseEnter={() => setEnter(true)}
        onMouseLeave={() => setEnter(false)}
        sx={{
          width: "100%",
          height: "310px",
          borderRadius: "20px",
          backgroundImage: `url('${BG}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: `cover`,
          backgroundPosition: `center center`,
        }}
      >
        <div className="flex justify-end margin-bottom-1 margin-right-1">
          <Box
            className="flex justify-space-between align-center margin-top-1"
            sx={{ background: "#fff", borderRadius: "30px", p: "10px 6px" }}
          >
            <Star />
            <div
              className="black-color font-weight-500 title-15"
              style={{ marginRight: "5px", marginLeft: "5px" }}
            >
              {rating}
            </div>
            <div className="black-color font-weight-400 title-15">
              {ratingCount}
            </div>
          </Box>
        </div>
        <Box
          className="flex justify-end flex-column"
          sx={{
            width: "100%",
            height: "220px",
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 78.69%, #000 100%)",
          }}
        >
          <Box
            className="flex justify-end flex-column"
            sx={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 14.91%, #000 100%)",
              py: "20px",
            }}
          >
            <Collapse
              className="flex justify-end flex-column"
              sx={{ mx: "1rem" }}
              in={true}
              collapsedSize={30}
            >
              <div className="main-collapse position-relative">
                <Box
                  title={title}
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: enter ? "2" : "1",
                    WebkitBoxOrient: "vertical",
                    bottom: enter ? "110%" : 0,
                    transition: "all .3s linear",
                  }}
                  className="heading white-color heading-18 font-weight-500 position-absolute"
                >
                  {title}
                </Box>
                <Fade in={enter}>
                  <Box
                    title={desc}
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: "4",
                      WebkitBoxOrient: "vertical",
                      my: "10px",
                    }}
                    className="description tertiary-title white-color"
                  >
                    {desc}
                  </Box>
                </Fade>
                <Fade in={enter}>
                  <div className="location flex align-center">
                    <img src={MapPin} alt="MapPin" />
                    <div
                      title={city}
                      className="city white-color margin-left-0 tertiary-title font-weight-500"
                    >
                      {city}
                    </div>
                  </div>
                </Fade>
              </div>
            </Collapse>
          </Box>
        </Box>
        <Box
          className="flex justify-space-between align-center"
          sx={{
            border: "1px solid #D9D9DA",
            borderRadius: "0px 0px 20px 20px",
            bgcolor: "#fff",
            p: "13px 15px",
          }}
        >
          <div className="flex align-center">
            <Box sx={{ width: "35px", height: "35px" }}>
              <img
                width="35px"
                height="35px"
                style={{ borderRadius: "50%" }}
                src={hostAvatar}
                alt=""
              />
            </Box>
            <div className="black-color margin-left-0 title-15 font-weight-500">
              {hostName}
            </div>
          </div>
          <div className="title-15 font-weight-500">
            £{pricePG}/<span className="font-weight-400">guest</span>
          </div>
        </Box>
      </Box>
    </>
  );
};
