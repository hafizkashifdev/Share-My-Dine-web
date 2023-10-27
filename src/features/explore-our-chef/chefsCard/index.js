import { Box, Container, Grid } from "@mui/material";
import ChefCard from "./chefCard";
import { ChefCardData } from "./cardData";

export default function ChefsCard() {
  return (
    <Container
      sx={{ maxWidth: "1920px !important" }}
      style={{ zIndex: "10", position: "relative" }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          width: "100%",
          height: "auto",
          margin: "auto",
          "@media screen and (max-width: 1200px)": {
            paddingRight: "15px",
          },
        }}
      >
        {ChefCardData.map((e, i) => (
          <Grid item xs={6} sm={4} md={3} lg={1.7} xl={1.7}>
            <ChefCard card={e} index={i} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
