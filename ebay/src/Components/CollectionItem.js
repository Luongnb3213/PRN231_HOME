import { Image } from 'antd';
import React from 'react';

const CollectionItem = ({ imageSrc, title }) => {
  return (
    <div>
      <Image
        width={164}
        height={164}
        style={{ borderRadius: '100%' }}
        preview={false}
        src={imageSrc}
      />
      <p className='text-center text-[#191919] font-semibold'>{title}</p>
    </div>
  );
};

export default CollectionItem;
