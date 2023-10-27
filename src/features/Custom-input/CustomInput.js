import { AccountCircle } from "@mui/icons-material";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import styles from "./styles.module.scss";
import React, { useState } from "react";

const CustomInput = ({
  label,
  inputClass,
  labelClass,
  parentClass,
  type,
  Icon,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <Box className={`${styles.inputBox} ${parentClass ? parentClass : ""}`}>
      <label className={`${styles.label} ${labelClass ? labelClass : ""}`}>
        {label}
        <Typography variant="span" sx={{ color: "red", ml: "3px" }}>
          *
        </Typography>
      </label>
      <TextField
        type={
          type === "password"
            ? showPassword
              ? "password"
              : "text"
            : type || "text"
        }
        className={`${styles.input} ${inputClass ? inputClass : ""}`}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{Icon}</InputAdornment>
          ),
          endAdornment: type === "password" && (
            <InputAdornment
              onClick={() => setShowPassword(!showPassword)}
              sx={{ cursor: "pointer" }}
              position="end"
            >
              {" "}
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
    </Box>
  );
};

export default CustomInput;
