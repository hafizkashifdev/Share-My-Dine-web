import React from "react";
import styles from "./styles.module.scss";
import { Box, Container, Grid } from "@mui/material";
import image1 from "../../../assets/images/our-collection/listing/1.png";
import image2 from "../../../assets/images/our-collection/listing/2.png";
import image3 from "../../../assets/images/our-collection/listing/3.png";
import image4 from "../../../assets/images/our-collection/listing/4.png";
import image5 from "../../../assets/images/our-collection/listing/5.png";
import image6 from "../../../assets/images/our-collection/listing/6.png";
import image7 from "../../../assets/images/our-collection/listing/7.png";
import image8 from "../../../assets/images/our-collection/listing/8.png";
import image9 from "../../../assets/images/our-collection/listing/9.png";
import image10 from "../../../assets/images/our-collection/listing/10.png";
import OurCollectionCard from "../../../components/our-collecton-card/OurCollection";

const OurCollectionListing = () => {
  const data = [
    {
      title: `2 Courses`,
      price: `46`,
      image: image1,
      description: `Rice and Curry Shashlik Kebab and Rice`,
      title2: `Turkish Cuisine`,
    },
    {
      title: `3 Courses`,
      price: `32`,
      image: image2,
      description: `Samboosa (pastries), Fish Dishes, Biryani`,
      title2: `Northern Muharraq`,
    },
    {
      title: `5 Courses`,
      price: `40`,
      image: image3,
      description: `Grilled Seafood, Fish Dishes, Kebabs`,
      title2: `Northern Bahrain`,
    },
    {
      title: `2 Courses`,
      price: `46`,
      image: image4,
      description: `Paella Pizza Pasta, rice, food`,
      title2: `Chinese cuisine`,
    },
    {
      title: `5 Courses`,
      price: `40`,
      image: image5,
      description: `Vietnamese Pork and Prawn Clear Noodle Soup`,
      title2: `Vietnamese cuisine`,
    },
    {
      title: `2 Courses`,
      price: `46`,
      image: image6,
      description: `Beef with Fried rice and salad`,
      title2: `Indian Cuisine`,
    },
    {
      title: `5 Courses`,
      price: `40`,
      image: image7,
      description: `chaumin`,
      title2: `Chinese Cuisine`,
    },
    {
      title: `2 Courses`,
      price: `46`,
      image: image8,
      description: `Fish and Seafood, Grilled Meats, Al Harees`,
      title2: `Dubai Region`,
    },
    {
      title: `3 Courses`,
      price: `32`,
      image: image9,
      description: `Pide (Turkish pizza), Kumpir (loaded baked potato), Seafood`,
      title2: `Antalya Mediterranean `,
    },
    {
      title: `5 Courses`,
      price: `46`,
      image: image10,
      description: `Tom Yum Fried Rice
      (Khao pad tome yum)`,
      title2: `Central Ayutthaya`,
    },
  ];
  return (
    <Box className={styles.parent}>
      <Container>
        <Grid container spacing={3} rowSpacing={19} justifyContent={"center"}>
          {data?.map((item, index) => (
            <Grid
              item
              xs={12}
              md={6}
              lg={3}
              xl={2.3}
              key={index}
              display={"flex"}
            >
              <OurCollectionCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OurCollectionListing;
