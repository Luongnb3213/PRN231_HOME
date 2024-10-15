import React from 'react'
import { Popover } from 'antd';
const Notification = () => {
 
   
  const content = (
    <div>
      <p className='text-xs px-4 py-11 text-gray-400'>There are no new notifications.</p>
    </div>
  );


  return (
    <Popover content={content} trigger="click" placement='topRight' className="cursor-pointer">
      Notification
    </Popover>
  );
}

export default Notification
