import React from "react";
import { TalkToUsForm } from "../components/talk-to-us-form/talk-to-us-form";
import { Container } from "@mui/material";
import GiftCard from "../features/gift-card/GiftCard";
import HeroSectionReusable from "../features/hero-section-reusable/hero-section-reuseable";
import GiftGif from "../assets/images/gift-gif.gif";

const GiftCardPage = () => {
  return (
    <>
      <HeroSectionReusable
        heading={"GIFT CARDS"}
        gifTitle={"GIFT CARDS"}
        gifImage={GiftGif}
      />
      <GiftCard />

      {/* <TalkToUsForm /> */}
    </>
  );
};

export default GiftCardPage;
