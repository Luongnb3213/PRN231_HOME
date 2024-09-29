import { Flex } from 'antd';
import React from 'react';
import MenuLink from './MenuLink';
import {Links} from '../../../constant/Links';
const Bottombar = () => {
  const Menu = Links;
  return (
    <Flex justify='space-between' className='py-3' gap={'5px'}>
      {Menu.map((item, index) => {
        return (
          <MenuLink key={index} title={item.mainTitle} subMenu={item.ArraySubmenu} />
        );
      })}
    </Flex>
  );
};

export default Bottombar;
