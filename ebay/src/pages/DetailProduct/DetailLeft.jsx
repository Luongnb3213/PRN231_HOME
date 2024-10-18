import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "../DetailProduct/style.css";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Zoom,
  Thumbs,
} from "swiper/modules";
import SwiperCore from "swiper";

import "../DetailProduct/style.css";

// Import Swiper styles
import "swiper/css";

SwiperCore.use([Navigation, Thumbs]);
const DetailLeft = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const mainSwiper = useRef(null);

  const hoverSwiper = (e) => {
    mainSwiper.current.slideTo(e.currentTarget.dataset.index);
  };

  return (
    <div className="w-full bg-red-400 grid grid-cols-8 gap-8">
      <div className="col-span-1 w-full">
        <Swiper
          style={{ height: "100%", width: "100%" }}
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={10}
          autoHeight={true}
          direction="vertical"
          watchSlidesProgress={true}
        >
          <SwiperSlide
            data-index={0}
            onMouseEnter={hoverSwiper}
            style={{
              height: "60px",
              width: "100px",
              backgroundColor: "black",
            }}
          >
            <img
              style={{ height: "100%", objectFit: "contain" }}
              src="/productsPic/vivid-blurred-colorful-background.jpg"
              alt="Thumbnail 1"
            />
          </SwiperSlide>
          <SwiperSlide
            data-index={1}
            onMouseEnter={hoverSwiper}
            style={{
              height: "60px",
              width: "100px",
              backgroundColor: "black",
            }}
          >
            <img
              style={{ height: "100%", objectFit: "contain" }}
              src="/productsPic/759819a4cce0f0310e96c7c1b4167e7e.jpg"
              alt="Thumbnail 2"
            />
          </SwiperSlide>
          <SwiperSlide
            data-index={2}
            onMouseEnter={hoverSwiper}
            style={{
              height: "60px",
              width: "100px",
              backgroundColor: "black",
            }}
          >
            <img
              style={{ height: "100%", objectFit: "contain" }}
              src="/productsPic/istockphoto-1349361409-612x612.jpg"
              alt="Thumbnail 3"
            />
          </SwiperSlide>
          <SwiperSlide
            data-index={3}
            onMouseEnter={hoverSwiper}
            style={{
              height: "60px",
              width: "100px",
              backgroundColor: "black",
            }}
          >
            <img
              style={{ height: "100%", objectFit: "contain" }}
              src="/productsPic/istockphoto-1435000968-612x612.jpg"
              alt="Thumbnail 3"
            />
          </SwiperSlide>
          <SwiperSlide
            data-index={4}
            onMouseEnter={hoverSwiper}
            style={{
              height: "60px",
              width: "100px",
              backgroundColor: "black",
            }}
          >
            <img
              style={{ height: "100%", objectFit: "contain" }}
              src="/productsPic/Gradient_Background_Example.jpg"
              alt="Thumbnail 3"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="col-span-7 w-full h-full">
        <Swiper
          onSwiper={(swiper) => {
            mainSwiper.current = swiper;
          }}
          thumbs={{ swiper: thumbsSwiper }}
          cssMode={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          zoom={true}
          modules={[Zoom, Navigation, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="swiper-zoom-container">
              <img
                src="/productsPic/vivid-blurred-colorful-background.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-zoom-container">
              <img
                src="/productsPic/759819a4cce0f0310e96c7c1b4167e7e.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-zoom-container">
              <img
                src="/productsPic/istockphoto-1349361409-612x612.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-zoom-container">
              <img
                src="/productsPic/istockphoto-1435000968-612x612.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-zoom-container">
              <img src="/productsPic/Gradient_Background_Example.jpg" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default DetailLeft;
