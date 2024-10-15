import React, { useState, useRef } from 'react';
import { Carousel, ConfigProvider } from 'antd';
import SlideShowItem from '../../Components/SlideShowItem';
import slider1 from '../../asset/images/ebay-slider-2.webp';
import slider2 from '../../asset/images/ebay-slider-1.webp';
import '@flaticon/flaticon-uicons/css/all/all.css';
const Slideshow = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const carouselRef = useRef(null);
  const handleClick = () => {
    setAutoPlay(!autoPlay);
    carouselRef.current.goTo(0);
  };
  console.log(autoPlay);
  return (
    <ConfigProvider
      theme={{
        components: {
          Carousel: {
            arrowSize: 25,
          },
        },
      }}
    >
      <div className="relative">
        <Carousel
          ref={carouselRef}
          autoplay={autoPlay}
          autoplaySpeed={3000}
          arrows
          dots={false}
          infinite={false}
        >
          <SlideShowItem
            showTextLeft={true}
            heading="The right sneakers to pave your way"
            subheading={
              'Express yourself with iconic footwear from the best brands.'
            }
            buttonLable={'Shop now'}
            imageSrc={slider1}
          />
          <SlideShowItem
            heading="Expand your collection"
            subheading={
              'Discover a wide range of comic books, cards and action figures!'
            }
            buttonLable={'Shop now'}
            imageSrc={slider2}
          />
        </Carousel>
        <div
          onClick={handleClick}
          className=" absolute right-8 bottom-8 flex justify-center items-center w-fit rounded-full px-[10px] py-[5px]"
        >
          {autoPlay ? (
            <i className="fi h-[30px] text-black text-[30px] leading-none fi-rs-pause-circle"></i>
          ) : (
            <i className="fi h-[30px] text-[30px] text-black leading-none fi-br-play"></i>
          )}
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Slideshow;
