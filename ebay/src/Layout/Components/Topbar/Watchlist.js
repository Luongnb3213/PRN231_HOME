import React from 'react';
import { Popover } from 'antd';

const Watchlist = () => {
  const content = (
    <div>
      <p className='text-xl '>Looks like you are not watching any items yet.</p>
    </div>
  );

  return (
    <Popover content={content} trigger="click" placement='topRight' className="cursor-pointer text-xs" >
      Watchlist
    </Popover>
  );
};

export default Watchlist;
