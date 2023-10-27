import React from "react";
import BlogInnerPage from "../features/blog-inner-page/BlogInnerPage";
import HeroSectionReusable from "../features/hero-section-reusable/hero-section-reuseable";


const BlogDetailPage = () => {
  return (
    <>
      
      <HeroSectionReusable
        para="Health is wealth, which reminds us about the importance of good health. Health is the most
          important aspect of life and if you eat healthy, you can live a more prosperous life."
        heading={"Eat Healthy - Live Healthier"}

        kolumhide={true}
        
      />
      <BlogInnerPage />
    </>
  );
};

export default BlogDetailPage;
