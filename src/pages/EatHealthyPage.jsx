import React from "react";
import HeroSectionReusable from "../features/hero-section-reusable/hero-section-reuseable";
import EatHealthy from "../features/eat-healthy/EatHealthy";

const EatHealthyPage = () => {
  return (
    <>
      <HeroSectionReusable
        heading={"Eat Healthy "}
        para={
          "Eating healthy is an important part of maintaining good physical and mental health."
        }
        eatHealthy
      />
      <EatHealthy />
    </>
  );
};

export default EatHealthyPage;
