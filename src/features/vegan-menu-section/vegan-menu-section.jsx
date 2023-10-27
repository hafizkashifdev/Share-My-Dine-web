import { FancyHeadingText } from "../../components/fancy-heading-text/fancy-heading-text";
import { Box, Container, Grid } from "@mui/material";
import { MenuCard } from "../../components/menu-card/menu-card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel, Scrollbar } from "swiper/modules";
import image1 from "../../assets/images/home/dishes/1.png";
import image2 from "../../assets/images/home/dishes/2.png";

import image3 from "../../assets/images/home/dishes/3.png";
import image4 from "../../assets/images/home/dishes/4.png";
import image5 from "../../assets/images/home/dishes/5.png";
import image6 from "../../assets/images/home/dishes/6.png";
import image7 from "../../assets/images/home/dishes/7.png";

export const VeganMenuSection = () => {
  const data = [
    {
      title: "2 Courses",
      image: image1,
      ratting: "4.8",
    },
    {
      title: "3 Courses",
      image: image2,
      ratting: "4.7",
    },
    {
      title: "3 Courses",
      image: image3,
      ratting: "4.7",
    },
    {
      title: "4 Courses",
      image: image4,
      ratting: "4.9",
    },
    {
      title: "2 Courses",
      image: image5,
      ratting: "3.2",
    },
    {
      title: "4 Courses",
      image: image6,
      ratting: "4.1",
    },
    {
      title: "4 Courses",
      image: image7,
      ratting: "3.8",
    },
    {
      title: "4 Courses",
      image: image6,
      ratting: "4.1",
    },
    {
      title: "4 Courses",
      image: image2,
      ratting: "4.1",
    },
  ];
  return (
    <Box padding={"40px 0"}>
      <Container>
        <div className="vegan-menu">
          <FancyHeadingText
            description="Try Our Vegan Recipes Good For You, Good For The Earth"
            fancyText="Menu"
            heading="Our Vegan Menu"
          />
          <Grid container my="69px" justifyContent="center">
            <Grid item xs={12} className="flex justify-center align-center">
              <Swiper
                spaceBetween={30}
                breakpoints={{
                  575: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 2,
                  },
                  760: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 5,
                  },
                  1440: {
                    slidesPerView: 7,
                  },
                }}
                scrollbar={{ draggable: true }}
                mousewheel={true}
                modules={[Scrollbar, Mousewheel]}
                className="mySwiper"
                style={{ padding: "70px 20px" }}
              >
                {data.map((item, index) => (
                  <SwiperSlide key={index}>
                    <MenuCard key={index} index={index} item={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Box>
  );
};
