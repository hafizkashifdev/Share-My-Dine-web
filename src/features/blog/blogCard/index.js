import { Box, Grid, Typography } from "@mui/material";
import { BlogBadgeData, BlogCardData } from "../blogData";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Badge from "../blogBadge";
import { useNavigate } from "react-router";
import { pageRoutes } from "../../../routeList";

export default function BlogCard() {
  const navigate = useNavigate();
  return (
    <>
      {BlogCardData?.map((blog, index) => (
        <Grid
          onClick={() => navigate(pageRoutes.BlogDetailPage)}
          container
          sx={{
            cursor: "pointer",
            width: "100%",
            borderRadius: "15px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            border: "1px solid #6B728026",
            transition: "transform 0.2s ease-in-out",
            marginBottom: "30px",
            "&:hover": {
              transform: "scale(1.05)",
            },
            "@media screen and (max-width: 900px)": {
              paddingTop: "15px",
            },
          }}
        >
          <Grid
            item
            key={index}
            xs={12}
            sm={12}
            md={4}
            lg={3}
            xl={3}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                height: "173px",
                maxWidth: "310px",
                width: "100%",
                borderRadius: "8px",
                "@media screen and (max-width: 900px)": {
                  maxWidth: "600px",
                  height: "210px",
                },
              }}
            >
              <img
                src={blog.image}
                alt="Logo"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={8}
            lg={9}
            xl={9}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Grid
              sx={{
                height: "100%",
                width: "100%",
                paddingLeft: "15px",
                paddingRight: "24px",
                paddingTop: "24px",
                paddingBottom: "24px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "14px",
                }}
              >
                <Box sx={{ maxWidth: "739px", height: "auto", width: "100%" }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "Work Sans",
                      fontWeight: 500,
                      fontSize: "24px",
                      lineHeight: "32px",
                      color: "#292D32",
                      marginBottom: "12px",
                    }}
                  >
                    {blog.title}
                  </Typography>
                  <Typography
                    variant="body"
                    sx={{
                      fontFamily: "Work Sans",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#6B7280",
                    }}
                  >
                    {blog.discription}
                  </Typography>
                </Box>
                <Box>
                  <FavoriteIcon
                    sx={{
                      color: "#FF611D",
                    }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  maxWidth: "450px",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                {BlogBadgeData.map((e) => (
                  <Badge blog={e} />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </>
  );
}
