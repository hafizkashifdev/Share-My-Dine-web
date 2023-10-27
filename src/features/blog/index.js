import { Box, Container } from "@mui/material";
import SearchBar from "./blogSearchBar";
import BlogCard from "./blogCard";

export default function Blog() {
  return (
    <Box sx={{ pb: "90px" }}>
      <Container>
        <SearchBar />

        <BlogCard />
      </Container>
    </Box>
  );
}
