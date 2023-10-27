import {
  Box,
  Container,
  Dialog,
  DialogContent,
  Grid,
  Slide ,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import GiftImg1 from "../../assets/images/gift-card/gift-1.jpg";
import GiftImg2 from "../../assets/images/gift-card/gift-2.jpg";
import GiftImg3 from "../../assets/images/gift-card/gift-3.jpg";
import GiftImg4 from "../../assets/images/gift-card/gift-4.jpg";
import ThemeButton from "../../components/theme-button/theme-button";
import GiftModel from "./GiftModel";
import "./gift.scss";


const GiftData = [
  {
    id: "1",
    image: GiftImg1,
    heading: "Gift Card",
    detail:
      "Write an amazing description in this dedicated card section. Each word counts. ",
  },
  {
    id: "2",
    image: GiftImg2,
    heading: "Birthday Card",
    detail:
      "Write an amazing description in this dedicated card section. Each word counts. ",
  },
  {
    id: "3",
    image: GiftImg3,
    heading: "Happy Anniversary Card",
    detail:
      "Write an amazing description in this dedicated card section. Each word counts. ",
  },
  {
    id: "4",
    image: GiftImg4,
    heading: "Gift Card",
    detail:
      "Write an amazing description in this dedicated card section. Each word counts. ",
  },
];
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });
  

const GiftCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Container>
        <Box
          className="flex justify-center"
          sx={{
            mt: "30px",
            mb: "100px",
          }}
        >
          <Grid container justifyContent={"center"} gap={6}>
            {GiftData?.map((item, index) => (
              <Grid
                item
                md={2.5}
                sm={5}
                xs={12}
                key={index}
                sx={{
                  p: "10px",
                  boxShadow:
                    "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
                  borderRadius: "8px",
                }}
              >
                <img src={item.image} width={"100%"} />
                <Box sx={{ p: "10px" }}>
                  <Typography
                    sx={{ py: "10px" }}
                    className="font-weight-600 font-family heading-color"
                  >
                    {item.heading}
                  </Typography>
                  <Typography className="font-weight-400 font-family secondary-color secondary-title">
                    {item.detail}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    my:'20px',
                  }}
                >
                  <ThemeButton
                    title="Send to a friend"
                    sx={{
                      maxWidth: "70%",
                    }}
                    onClick={openModal}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
          </Box>
          <Dialog
            open={isModalOpen}
            className="dialog-animation"
            onClose={closeModal}
            TransitionComponent={Transition}
          >
            <GiftModel 
            closeModal={closeModal}
            />
          </Dialog>
      </Container>
    </>
  );
};

export default GiftCard;
