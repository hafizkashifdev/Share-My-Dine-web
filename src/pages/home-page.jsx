import { Container } from "@mui/material";
import { AffiliatedPartnersSection } from "../features/affiliated-partners-section/affiliated-partners-section";
import { BlogArticles } from "../features/blog-articles/blog-articles";
import { BlogsPostsHomeSection } from "../features/blogs-posts-home-section/blogs-posts-home-section";
import { DiningExperiences } from "../features/dining-experiences/dining-experiences";
import { FaqsSection } from "../features/faqs-section/faqs-section";
import { ReciepiesSection } from "../features/reciepies-section/reciepies-section";
import { SignMeUpSection } from "../features/sign-me-up-section/sign-me-up-section";
import { SuperSectionHome } from "../features/super-section-home/super-section-home";
import { TestimonialsSection } from "../features/testimonials-section/testimonials-section";
import { VeganMenuSection } from "../features/vegan-menu-section/vegan-menu-section";

export const HomePage = () => {
  return (
    <>
      <SuperSectionHome />
      <DiningExperiences />
      <VeganMenuSection />
      <BlogsPostsHomeSection />
      <ReciepiesSection />
      <FaqsSection />
      <TestimonialsSection />
      <SignMeUpSection />
      <AffiliatedPartnersSection />
    </>
  );
};
