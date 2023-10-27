import React from "react";
import HeroSectionReusable from "../features/hero-section-reusable/hero-section-reuseable";
import OurSquadCard from "../features/our-squad/our-squad-card/OurSquadCard";
import one from "../assets/our-squad/1.gif";

const OurSquad = () => {
  return (
    <>
      <HeroSectionReusable
        heading={
          "<span>Meet the Talented team behind your unforgettable <span class='primary-color' >dining</span> experiences</span>"
        }
        para={
          "Share My Dine values its diverse and talented team who work tirelessly to provide an exceptional experience for guests and hosts. They provide a supportive and collaborative work environment and are committed to innovation. They encourage people passionate about hospitality to join them in changing the way people travel and experience new cultures."
        }
        gifTitle={"Our Squad"}
        gifImage={one}
      />
      <OurSquadCard />
    </>
  );
};

export default OurSquad;
