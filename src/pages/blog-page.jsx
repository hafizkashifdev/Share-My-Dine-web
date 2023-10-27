import React from "react";
import Blog from "../features/blog";
import HeroSectionReusable from "../features/hero-section-reusable/hero-section-reuseable";
import { TalkToUsForm } from "../components/talk-to-us-form/talk-to-us-form";
import headinggif from "../assets/blog/headinggif.gif";
import { Container } from "@mui/material";

const BlogPage = () => {
  return (
    <div>
      <HeroSectionReusable
        heading={"Our Blogs "}
        gifTitle={"Chronicles"}
        gifImage={headinggif}
        para={`<p>Our Blogs page Features Articles, Insights, and Musings from our team of
        Experts and Guest writers on industry trends, Personal Experiences, and more. </p>
        <p>We believe in the
        power of storytelling and encourage readers to engage with the blog by sharing their own stories and leaving comments.</p>
        
        `}
      />
      <Blog />

      {/* <TalkToUsForm /> */}
    </div>
  );
};

export default BlogPage;
