import React from 'react';
import { Card, Typography } from 'antd';

const { Title, Text } = Typography;

const StandoutTitleCard = ({ title, subtext1, subtext2, bg }) => {
  return (
    <div className="mb-8 h-[240px]  min-h-[240px]">
      <Card
        className="rounded-lg pb-10 h-full"
        bordered={false}
        style={{ borderRadius: '10px' , background: bg }}
      >
        <Title level={3} className="text-brown-800 mb-4">
          {title}
        </Title>
        <ul className="list-disc pl-5 text-brown-700">
          <li className='mb-2'>
            <Text>{subtext1}</Text>
          </li>
          <li className="mt-2">
            <Text>{subtext2}</Text>
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default StandoutTitleCard;
