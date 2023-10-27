import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import SerachImg from "../../assets/images/faqs/search.svg";

export const SearchBar = () => {
  return (
    <>
      <TextField
        fullWidth
        className="font-family-work"
        placeholder={"Tell us what you need"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <img src={SerachImg} alt="SerachImg" />
            </InputAdornment>
          ),
        }}
        sx={{
          ".MuiInputBase-root": {
            borderRadius: "5px !important",
            pl: "15px",
            backgroundColor:'#FFFFFF'
          },
          ".MuiInputBase-input": {
            p: "15px 0px",
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
    </>
  );
};
