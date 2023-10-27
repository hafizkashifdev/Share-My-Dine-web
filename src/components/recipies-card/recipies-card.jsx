import { Box, Rating } from "@mui/material";

export const RecipiesCard = ({
  name,
  priceColor = "#264653",
  price,
  dish,
  right = true,
}) => {
  return (
    <>
      <Box
        my={{ xs: "80px", lg: "60px" }}
        minWidth={"205px"}
        className="position-relative"
        sx={{
          display: "inline-block",
          "&:hover": { "& .img-parent": { transform: "scale(1.3)" } },
        }}
      >
        <Box
          sx={{
            transition: "all .2s linear",
            zIndex: 1,
            mt: "-90px",
            ml: !right ? "-70px" : "70%",
            minWidth: "124px",
            height: "126px",
            borderRadius: "50%",
            boxShadow:
              "0px 32.20429992675781px 32.20429992675781px rgba(0, 0, 0, 0.07)",
            "@media screen and (max-width:1100px)": {
              ml: "0 !important",
            },
          }}
          className="img-parent position-absolute"
        >
          <img src={dish} alt="Dish" />
        </Box>
        <Box
          className="border-radius-8 position-relative"
          sx={{
            bgcolor: "#fff",
            zIndex: 3,
            p: "8.31px 13.1px",
            boxShadow: "0px 8px 40px 0px rgba(0, 0, 0, 0.08)",
          }}
        >
          <div className="flex-column align-center flex">
            <Rating
              name="text-feedback"
              value={5}
              readOnly
              precision={0.5}
              sx={{
                fontSize: "14px",
              }}
            />
            <Box color="#264653" className="secondary-title text-uppercase">
              {name}
            </Box>
          </div>
          <Box color={priceColor} className="font-weight-600 flex justify-end">
            <div>
              {price}
              <sup>£</sup>
            </div>
          </Box>
        </Box>
      </Box>
    </>
  );
};
