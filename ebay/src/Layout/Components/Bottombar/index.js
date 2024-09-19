import { Flex } from 'antd';
import React from 'react';
import MenuLink from './MenuLink';
import Links from './Links';
const Bottombar = () => {
  const Menu = Links;
  return (
    <Flex gap={'5px'}>
      {Menu.map((item, index) => {
        return (
          <MenuLink key={index} title={item.mainTitle} subMenu={item.ArraySubmenu} />
        );
      })}
    </Flex>
  );
};

export default Bottombar;
