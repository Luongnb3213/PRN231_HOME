import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "../DetailProduct/style.css";
import { Navigation, Mousewheel, Keyboard, Zoom, Thumbs } from "swiper/modules";
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
    <div>
      <div className="w-full flex gap-4">
        <div className="w-[60px] thumb-swiper">
          <Swiper
            style={{ height: "100%" }}
            onSwiper={(thumbsSwiper) => {
              setThumbsSwiper(thumbsSwiper);
            }}
            spaceBetween={20}
            slidesPerView={5}
            autoHeight={true}
            direction="vertical"
            watchSlidesProgress={true}
          >
            <SwiperSlide data-index={0} onMouseEnter={hoverSwiper}>
              <img
                src="/productsPic/vivid-blurred-colorful-background.jpg"
                alt="Thumbnail 1"
              />
            </SwiperSlide>
            <SwiperSlide data-index={1} onMouseEnter={hoverSwiper}>
              <img
                src="/productsPic/759819a4cce0f0310e96c7c1b4167e7e.jpg"
                alt="Thumbnail 2"
              />
            </SwiperSlide>
            <SwiperSlide data-index={2} onMouseEnter={hoverSwiper}>
              <img
                src="/productsPic/istockphoto-1349361409-612x612.jpg"
                alt="Thumbnail 3"
              />
            </SwiperSlide>
            <SwiperSlide data-index={3} onMouseEnter={hoverSwiper}>
              <img
                src="/productsPic/istockphoto-1435000968-612x612.jpg"
                alt="Thumbnail 3"
              />
            </SwiperSlide>
            <SwiperSlide data-index={4} onMouseEnter={hoverSwiper}>
              <img
                src="/productsPic/Gradient_Background_Example.jpg"
                alt="Thumbnail 3"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div
          className=" h-[35rem]"
          style={{ width: "calc(100% - 60px - 1rem)" }}
        >
          <Swiper
            onSwiper={(swiper) => {
              mainSwiper.current = swiper;
            }}
            onSlideChange={() => console.log("slide change")}
            thumbs={{ swiper: thumbsSwiper }}
            slidesPerView={1}
            cssMode={true}
            navigation={true}
            mousewheel={{ sensitivity: 0.5, thresholdDelta: 1 }}
            keyboard={true}
            zoom={true}
            modules={[Navigation, Zoom, Keyboard]}
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
                <img
                  src="/productsPic/Gradient_Background_Example.jpg"
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default DetailLeft;
