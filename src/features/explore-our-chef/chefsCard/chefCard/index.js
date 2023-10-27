import { Box, Grid, Typography } from "@mui/material";
import icon from "../../../../assets/images/chef/chefCard/icon.svg";
import ChefTitle from "../chefTitle";
import { useNavigate } from "react-router-dom";
import { pageRoutes } from "../../../../routeList";

export default function ChefCard({ card, index, margin = false }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(pageRoutes.singleChef, { state: { card } });
  };
  return (
    <Grid
      container
      zIndex={10}
      onClick={margin ? () => {} : () => handleClick()}
      sx={{
        width: "100%",
        height: "301.21px",
        borderRadius: "10.41px",
        backgroundColor: "#FFFFFF",
        display: "flex",
        justifyContent: "center",
        zIndex: "10",
        alignItems: "center",
        cursor: "pointer",
        marginTop: margin ? "0" : index % 2 === 0 ? "2px" : "79.75px",
        "@media screen and (max-width: 1200px)": {
          marginTop: "2px",
        },
        // "&:hover": {
        //   transform: "scale(1.05)",
        //   cursor: "pointer",
        // },
      }}
    >
      <Grid
        item
        sx={{
          maxWidth: "100%",
          width: "100%",
          height: "287.24px",
          borderRadius: "8.73px",
          backgroundColor: "#DDE7FF26",
        }}
      >
        <Box
          sx={{
            maxWidth: "15.62px",
            width: "100%",
            height: "14.54px",
            marginLeft: "8.63px",
            marginTop: "6.56px",
          }}
        >
          {!margin && (
            <img
              src={icon}
              alt="Logo"
              style={{ width: "100%", height: "100%" }}
            />
          )}
        </Box>
        <Box
          sx={{
            maxWidth: "124.95px",
            width: "100%",
            height: "124.95px",
            borderRadius: "5.21px",
            margin: "auto",
            "&:hover": {
              transform: "scale(1.2)",
              transition:'0.3s',
              cursor: "pointer",
            },
          }}
        >
          <img
            src={card.image}
            alt="Log"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>

        <Box
          sx={{
            maxWidth: "196.44",
            width: "100%",
            height: "auto",
            // marginTop: '23.37px',
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "23.37px auto",
          }}
        >
          <ChefTitle card={card} />

          <Typography
            style={{
              marginTop: "6.07px",
              maxWidth: "196.44px",
              width: "100%",
              height: "auto",
              fontFamily: "Work Sans",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "20.95px",
              color: "#292D32",
              textAlign: "center",
            }}
          >
            {card.discription}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
