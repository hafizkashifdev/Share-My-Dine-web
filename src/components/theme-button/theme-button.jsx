import { Button } from "@mui/material";
import React from "react";
import { ReactComponent as ArrowDown } from "../../assets/svg/arrow-down.svg";

const ThemeButton = ({ sx, onClick, Icon, props, title = "Theme Button" }) => {
  const fontStyles = {
    color: "#FFFFFF",
    textTransform: "capitalize",
    textAlign: "center",
    boxShadow: "none",
    maxWidth: "100%",
    width: "100%",
  };
  return (
    <Button
      sx={{
        fontSize: "16px  !important",
        boxSizine: "border-box",
        fontWeight: "500",
        lineHeight: "18px",
        padding: "12px 20px 12px 20px",
        backgroundColor: "#FF611D",
        borderRadius: "15px 4px 15px 4px",
        boxShadow: "none",
        border: "1px solid #ff611d",
        transition: "0.2s !important",

        "&:hover": {
          backgroundColor: "transparent",
          background: "transparent",
          border: "1px solid #ff611d",
          color: "#ff611d",
          borderRadius: "15px 4px 15px 4px",
          outline: "0",
          boxShadow: "none",
          svg: {
            color: "#ff611d",
          },
        },
        "&:active": {
          boxShadow: "none",
        },
        ...fontStyles,
        ...sx,
      }}
      onClick={onClick}
      {...props}
    >
      {title}{" "}
      {Icon ? (
        Icon
      ) : (
        <ArrowDown
          style={{ rotate: "270deg", marginLeft: "7px", maxWidth: "15px" }}
        />
      )}
    </Button>
  );
};

export default ThemeButton;
