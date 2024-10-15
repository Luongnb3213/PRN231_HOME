import React from 'react';
import { Popover, Row,Col } from 'antd';
import { categories } from '../../../constant/Links';
import CustomContentHover from '../../../Components/CustomContentHover';
const ShopCategory = () => {
  const content = (
    <Row gutter={10}  className='pt-10 px-6 pb-6 rounded-3xl max-w-[800px]'>
    {categories?.map((item, index) => {
      let colSpan = item.type === 'text' ? 8 : 6;
      return (
        <Col key={index} className="gutter-row mb-8" span={colSpan}>
          <CustomContentHover
            title={item.title}
            arrayLink={item.arrayLink}
            type={item.type}
          />
        </Col>
      );
    })}
  </Row>
  );

  return (
    <div className="max-w-[50px] cursor-pointer">
      <Popover content={content} placement="leftBottom" trigger="click">
        <p className='text-xs'>Shop by category </p>
      </Popover>
    </div>
  );
};

export default ShopCategory;
