import React from 'react';
import { Image } from 'antd';

const SlideShowItem = ({
  showTextLeft = false,
  heading,
  subheading,
  buttonLable,
  link,
  imageSrc,
}) => {
  var border = {
    borderTopRightRadius: '15px',
    borderBottomRightRadius: '15px',
  };
  if (!showTextLeft) {
    border = {
      ...border,
      borderTopLeftRadius: '15px',
      borderBottomLeftRadius: '15px',
    };
  }

  return (
    <div className="relative flex rounded-3xl h-full">
      {showTextLeft ? (
        <div className="bg-red-500 h-[330px] pl-[32px] w-[320px] rounded-l-3xl">
          <div className="max-w-[288px] mt-2">
            <h2
              style={{ fontSize: '30px', lineHeight: '40px' }}
              className="text-[#2A0303] font-bold mb-2"
            >
              {heading}
            </h2>
            <p
              style={{ fontSize: '17px', lineHeight: 1.3 }}
              className="text-[#2A0303] mb-5"
            >
              {subheading}
            </p>
            <a
              href={link}
              className="border font-semibold w-fit block border-black py-[10px] px-[17px] rounded-[27px]"
            >
              {buttonLable}
            </a>
          </div>
        </div>
      ) : (
        <div
          className={`absolute z-10 pl-[32px] pb-[16px] ml-auto'}   max-w-[288px] `}
        >
          <div className="max-w-[288px] mt-2">
            <h2
              style={{ fontSize: '36px', lineHeight: '40px' }}
              className="text-[#2A0303] font-bold mb-2"
            >
              {heading}
            </h2>
            <p
              style={{ fontSize: '17px', lineHeight: 1.3 }}
              className="text-[#2A0303] mb-5"
            >
              {subheading}
            </p>
            <a
              href={link}
              className="border font-semibold w-fit block border-black py-[10px] px-[17px] rounded-[27px]"
            >
              {buttonLable}
            </a>
          </div>
        </div>
      )}

      <div className={`image ${showTextLeft ? 'flex-1' : 'w-full'} `}>
        <Image
          style={{ ...border }}
          preview={false}
          height={330}
          width={'100%'}
          src={imageSrc}
        />
      </div>
    </div>
  );
};

export default SlideShowItem;
