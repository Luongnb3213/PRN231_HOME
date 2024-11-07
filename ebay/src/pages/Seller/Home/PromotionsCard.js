import React from 'react';
import { Typography, Card } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const PromotionsCard = () => {
  return (
    <div className="p-8">
      <div className="text-left mb-8">
        <Title level={2}>Promotions just for you</Title>
        <Text>Get the most out of selling on eBay with these deals.</Text>
      </div>
      <div className="flex justify-left">
        <Card className="shadow-lg p-6 rounded-lg" bordered={false} style={{background: '#f7f7f7'}}>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <Text className="font-bold">
                List up to 250 Items for FREE Every Month!
              </Text>
              <Text>Pay no insertion fees on 250 auction-style or fixed price listings.</Text>
              <a href="https://example.com/" className="text-blue-500 underline">Learn more</a>
              <div className="mt-2 flex items-center">
                <Text>Oct 01 - Nov 01</Text>
                <InfoCircleOutlined className="ml-2 text-gray-400" />
              </div>
            </div>
            <div className="ml-4">
              <div className="flex items-center justify-center w-28 h-28 rounded-full border-4 border-green-500">
                <div className="text-center">
                  <Text strong className="text-xl">250</Text>
                  <Text className="block text-gray-500">Remaining</Text>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PromotionsCard;
