import { Box, Typography } from "@mui/material";

export default function Badge({ blog }) {
  return (
    <Box
      backgroundColor={blog.textBackColor}
      color={blog.textColor}
      borderRadius={blog.radius}
      sx={{
        width: "auto",
        height: "28px",
        display:'flex',
        justifyContent: "center",
        alignItems: "center",
        padding: "2px 10px",
        marginRight: "5px",
        marginBottom: "12px",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Work Sans",
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "23px",
        }}
      >
        {blog.text}
      </Typography>
    </Box>
  );
}
