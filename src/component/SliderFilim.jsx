import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Box } from "@mui/material";
import SectionFilim from "../component/SectionFilim";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

function SliderFilim() {
  const slideImages = [
    "https://s2.vcdn.biz/static/f/9571511531/image.jpg/pt/r0x0x4",
    "https://s9.vcdn.biz/static/f/9472445541/image.jpg/pt/r0x0x4",
    "https://s8.vcdn.biz/static/f/9555128981/image.jpg/pt/r0x0x4",
    "https://s2.vcdn.biz/static/f/9555058901/image.jpg/pt/r0x0x4",
    "https://s2.vcdn.biz/static/f/9189302591/image.jpg/pt/r0x0x4",
    "https://s8.vcdn.biz/static/f/9156857741/image.jpg/pt/r0x0x4",
  ];

  return (
    <>
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        <Box className="slider_container">
          <Swiper
            dir="rtl"
            navigation={true}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
            style={{ width: "100%", height: "auto" }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 1,
              },
            }}
          >
            {slideImages.map((src, index) => (
              <SwiperSlide key={index}>
                <motion.img
                  src={src}
                  alt={`slide-${index}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "70vh",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>

      <SectionFilim />
    </>
  );
}

export default SliderFilim;
