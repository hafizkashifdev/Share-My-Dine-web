import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import "./gift.scss";
import GiftGif2 from "../../assets/images/gift-gif-2.gif";
import Cancel from "../../assets/images/gift-card/cancel.png";

const GiftModel = ({ closeModal }) => {
  return (
    <>
      {/* <Container> */}
      <Box
        sx={{
          backgtoundColor: "#FFFFFF",
          borderRadius: "15px",
          px: { md: 2 },
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            margin: "15px 5px 0 0",
            cursor: "pointer",
          }}
        >
          <img src={Cancel} onClick={closeModal} />
        </div>
        <Grid px={4} container justifyContent={"center"}>
          <Grid item xs={11}>
            <div className="margin-bottom-0-2 flex justify-center">
              <img width="90px" height="80px" src={GiftGif2} alt="GiftGif2" />
            </div>
            <Grid item component="form" noValidate autoComplete="off">
              <Typography className="primary-heading blackish-color center-text font-weight-600 margin-bottom-1">
                Send to a friend
              </Typography>
              <Box
                className="talk-to-us-form2"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                  pb: "40px",
                }}
              >
                <TextField fullWidth placeholder="Your Name" />
                <TextField fullWidth placeholder="Recipient Name" />
                <TextField
                  fullWidth
                  placeholder="Recipient Email"
                  type="email"
                />
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  placeholder="Your Message"
                />
                <Button
                  sx={{
                    bgcolor: "#FF611D",
                    color: "#fff",
                    maxWidth: "732px",
                    width: "100%",
                    boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.15)",
                    p: "16px",
                    borderTopLeftRadius: "20px",
                    borderBottomRightRadius: "20px",
                    textTransform: "capitalize !important",
                  }}
                  className="submit-button"
                >
                  Send
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {/* </Container> */}
    </>
  );
};

export default GiftModel;
