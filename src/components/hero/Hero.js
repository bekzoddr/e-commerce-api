import React, { memo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import image from "../../assets/images/hero__img.png";
import { GoChevronRight } from "react-icons/go";

const Hero = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      <div className="hero container">
        <div className="intro">
          <ul>
            <li className="link">
              Woman's Fashion <GoChevronRight className="icon" />
            </li>
            <li className="link">Men's Fashion</li>
            <li className="link">Electronics</li>
            <li className="link">Home & Lifestyle</li>
            <li className="link">Medicine</li>
            <li className="link">Sports & Outdoor</li>
            <li className="link">Baby's & Toys</li>
            <li className="link">Groceries & Pets</li>
            <li className="link">Health & Beauty</li>
          </ul>
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={image} alt="hero-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} alt="hero-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} alt="hero-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image} alt="hero-image" />
          </SwiperSlide>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
      <br />
      <br />
      <br />
      <hr className="container" />
    </>
  );
};

export default memo(Hero);
