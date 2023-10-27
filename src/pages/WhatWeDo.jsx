import React from "react";
import HeroSectionReusable from "../features/hero-section-reusable/hero-section-reuseable";
import WhatWeDoPage from "../features/what-we-do-page/WhatWeDoPage";
import WWDGift from '../assets/images/wwdgif.gif'

const WhatWeDo = () => {
  return (
    <>
      <HeroSectionReusable
        para={`We believe in bringing people together over delicious food and great company. 
        With a population of over 66 million in the UK, there's no shortage of cultural diversity to explore through our dining experiences. Our hosts offer a diverse range of cuisine and dining experiences, making it easy to transform your home into a little restaurant and share your love of food with others. `}
        heading={"Bringing cultures together,  with Share My <span class='primary-color' >Dine</span>."}
        gifTitle={"What we do"}
        gifImage={WWDGift}
        
      />
      <WhatWeDoPage />
    </>
  );
};


export default WhatWeDo;
