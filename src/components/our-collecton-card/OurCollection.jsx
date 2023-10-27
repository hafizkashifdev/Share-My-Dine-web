import React from "react";
import styles from "./styles.module.scss";
import { Box } from "@mui/material";
import image from "../../assets/images/our-collection/image 29304.png";

const OurCollectionCard = ({ item }) => {
  return (
    <Box className={styles.ourCollectionCard}>
      <Box className={styles.imageBox}>
        <Box className={styles.priceBox}>£{item?.price}</Box>
        <img src={item?.image} />
      </Box>
      <Box className={styles.content}>
        <h4>{item?.title}</h4>
        <p>{item?.description}</p>
        <h5>{item?.title2}</h5>
      </Box>
    </Box>
  );
};

export default OurCollectionCard;
