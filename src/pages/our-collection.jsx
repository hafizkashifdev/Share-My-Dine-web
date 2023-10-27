import React from "react";
import HeroSectionReusable from "../features/hero-section-reusable/hero-section-reuseable";
import image from "../assets/images/our-collection.gif";
import OurCollectionCard from "../components/our-collecton-card/OurCollection";
import OurCollectionListing from "../features/our-collection-page/listing/OurCollectionListing";
import { TalkToUsForm } from "../components/talk-to-us-form/talk-to-us-form";
import { Container } from "@mui/material";

const OurCollection = () => {
  return (
    <>
      <HeroSectionReusable
        para={`A culinary journey that transcends borders and brings the world's flavors to your plate. Our hosts, passionate food artisans from around the globe, have opened their kitchens to share their culture, traditions, and, of course, their most cherished recipes.
<br />
        In "Our Collection," you'll discover a treasure trove of dishes that are as diverse as the people who prepare them. Each plate tells a unique story, steeped in tradition and prepared with love. Whether you're a seasoned food explorer or someone looking to embark on a new culinary adventure, you've come to the right place..`}
        heading={" Savor the World, One Dish at a Time"}
        gifTitle={"Our Collections"}
        gifImage={image}
      />
      <OurCollectionListing />

      {/* <TalkToUsForm /> */}
    </>
  );
};

export default OurCollection;
