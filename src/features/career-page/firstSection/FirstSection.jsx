import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import image from "../../../assets/images/career/1.png";
import styles from "./styles.module.scss";

function Careermain() {
  return (
    <Box className={styles.outTeam}>
      <Container>
        <div className={styles.heading}>
          <h5>Come Join Us</h5>
          <h2>Job Openings</h2>
          <p>
            We’re always looking for creative, talented self-starters to join
            the <b style={{ color: "#ff611d" }}> Share My Dine</b> family. Check
            out our open roles below and fill out an application.
          </p>
        </div>
      </Container>
    </Box>
  );
}

export default Careermain;
