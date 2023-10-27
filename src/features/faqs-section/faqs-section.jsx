import { Box, Button, Container, Grid } from "@mui/material";
import React from "react";
import { FancyHeadingText } from "../../components/fancy-heading-text/fancy-heading-text";
import { Faqs } from "../../components/faqs/faqs";
import { ReactComponent as ArrowDown } from "../../assets/svg/arrow-down.svg";
import ThemeButton from "../../components/theme-button/theme-button";
import { pageRoutes } from "../../routeList";
import { useNavigate } from "react-router-dom";

export const FaqsSection = () => {
  const navigate = useNavigate();
  return (
    <Box padding={"40px 0"}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <FancyHeadingText
              description="Find Your Answers with Our FAQ’s"
              fancyText="FAQ’s"
              heading="Our FAQ’s"
            />
            <Grid container my="70px" justifyContent="center">
              <Grid item xs={12}>
                <Faqs />
                <div className="flex justify-center margin-top-3">
                  <ThemeButton
                    title="Explore More"
                    onClick={() => navigate(pageRoutes.Faqs)}
                    sx={{
                      maxWidth: "230px",
                      color: "#ff611d",
                      bgcolor: "transparent",
                      border: "1px solid #ff611d",
                      "&:hover": {
                        bgcolor: "#ff611d",
                        color: "#fff",
                      },
                    }}
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
