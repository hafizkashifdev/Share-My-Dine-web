import React from 'react'
import HeroSectionReusable from "../features/hero-section-reusable/hero-section-reuseable";
import FaqsGif from '../assets/images/faqs/faqs-gif.gif'
import FaqsPage from '../features/faqs-page/FaqsPage';


const Faqs = () => {
  return (
    <>
    <HeroSectionReusable
        heading={
          "Find Your Answers with Our <span class='primary-color' >FAQ’s</span>"
        }
        gifTitle={"FAQs"}
        gifImage={FaqsGif}
      />
      <FaqsPage/>
</>
  )
    }
export default Faqs