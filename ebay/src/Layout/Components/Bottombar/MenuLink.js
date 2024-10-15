import React from 'react';
import { Col, Row, Popover } from 'antd';
import CustomContentHover from '../../../Components/CustomContentHover';
const MenuLink = ({ title, subMenu }) => {
  const content = (
    <div>
      <Row gutter={10}>
        {subMenu?.map((item, index) => {
          let colSpan = item.type === 'text' ? 5 : 6;
          return (
            <Col key={index} className="gutter-row" span={colSpan}>
              <CustomContentHover
                title={item.title}
                arrayLink={item.arrayLink}
                type={item.type}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );

  return (
    <Popover
      content={content}
      trigger="click"
      placement="bottom"
      overlayStyle={{ position: "fixed", left: 0, right:0, width: "100%", maxWidth: "100%" }}
      className="cursor-pointer"
    >
      <a href="https://example.com/" className='font-normal text-xs leading-none'> {title} </a>
    </Popover>
  );
};

export default MenuLink;
