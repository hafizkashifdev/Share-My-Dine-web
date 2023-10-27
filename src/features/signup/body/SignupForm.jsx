import { Box, Grid } from "@mui/material";
import React from "react";
import CustomInput from "../../Custom-input/CustomInput";
import { ReactComponent as User } from "../../../assets/login/1.svg";
import { ReactComponent as Email } from "../../../assets/login/2.svg";
import { ReactComponent as Phone } from "../../../assets/login/3.svg";
import { ReactComponent as Password } from "../../../assets/login/4.svg";

const SignupForm = () => {
  return (
    <Box sx={{ margin: "40px 0" }}>
      <Grid container columnSpacing={5} rowSpacing={3}>
        <Grid item xs={12} lg={6}>
          <CustomInput label={"First Name"} Icon={<User />} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <CustomInput label={"Last Name"} Icon={<User />} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <CustomInput label={"Email"} Icon={<Email />} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <CustomInput label={"Phone Number"} Icon={<Phone />} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <CustomInput label={"Password"} Icon={<Password />} type="password" />
        </Grid>
        <Grid item xs={12} lg={6}>
          <CustomInput
            label={"Confirm Password"}
            Icon={<Password />}
            type="password"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignupForm;
