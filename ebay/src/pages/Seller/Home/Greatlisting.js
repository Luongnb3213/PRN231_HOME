import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import StandoutTitleCard from './StandoutTitleCard';
const Greatlisting = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      modules={[Navigation, Scrollbar]}
      slidesPerView={3}
      spaceBetween={10}
      className="mySwiper"
    >
      <SwiperSlide>
        <StandoutTitleCard
          title={'Write a standout title'}
          subtext1={
            'We’ll recommend search terms that buyers often use, so be sure to add these in the title.'
          }
          subtext2={
            'Avoid all caps and focus on specific details like brand, model, size, and color.'
          }
          bg={'#ffead3'}
        />
      </SwiperSlide>
      <SwiperSlide>
        <StandoutTitleCard
          title={'Take high-quality photos'}
          subtext1={
            'Snap your items from multiple angles in a well-lit place, and capture any blemishes for transparency.'
          }
          subtext2={
            'On the eBay app, you can clean up your images and add a white background.'
          }
          bg={'#fff8d5'}
        />
      </SwiperSlide>
      <SwiperSlide>
        <StandoutTitleCard
          title={'Pick a purchase format'}
          subtext1={
            'If you want to sell your item quickly, Buy it Now is probably the best format for you.'
          }
          subtext2={
            'Otherwise, if you want to try your luck and shoot for the best possible price, choose Auction.'
          }
          bg={'#d4e5fe'}
        />
      </SwiperSlide>
      <SwiperSlide>
        <StandoutTitleCard
          title={'Set the right price'}
          subtext1={
            'We will recommend a price based on recent sales of similar items.'
          }
          subtext2={
            'You can even watch how other sellers are pricing their items, or use Best Offer to negotiate and sell faster.'
          }
          bg={'#fcdcec'}
        />
      </SwiperSlide>
      <SwiperSlide>
        <StandoutTitleCard
          title={'Stand out from the crowd'}
          subtext1={
            'Promote your listing and be seen by more buyers with sponsored placements across the eBay network.'
          }
          subtext2={
            'Sell your items faster with eBay’s advertising tools.'
          }
          bg={'#f0fce1'}
        />
      </SwiperSlide>
      <SwiperSlide>
        <StandoutTitleCard
          title={'Ship with ease'}
          subtext1={
            'We provide recommendations for delivery, but to save on shipping, use an eBay delivery label.'
          }
          subtext2={
            'Plus, if you’re selling locally, you can also offer Local Pickup.'
          }
          bg={'#ffead3'}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Greatlisting;
