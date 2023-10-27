import React from "react";
import Emoji from "../../assets/images/eat-healthy/emoji.svg";
import Star from "../../assets/images/eat-healthy/Star.svg";
import "./eatHealthy.scss";
import { Box, Card } from "@mui/material";

const RatingCard = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <div className="card-style">
        <img src={Emoji} alt="Emoji" />
        <div className="card-text">
          <p className="text-design font-weight-600 font-family-Work">
            98% Happy Customer
          </p>
          <div className="flex align-center">
            <img src={Star} alt="star" />
            <span
              style={{ marginLeft: "5px" }}
              className="font-weight-400 font-family-Work secondary-title white-color"
            >
              4.9 (2.989 Reviews)
            </span>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default RatingCard;
