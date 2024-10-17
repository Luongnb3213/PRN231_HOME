import React from 'react';
import { Collapse, ConfigProvider, Typography } from 'antd';

const { Title } = Typography;

const FAQ = () => {
  const faqData = [
    {
      key: '1',
      label: 'How much does it cost to sell?',
      children: 'There is no upfront fee to list your item, but eBay charges a final value fee once the item sells.',
    },
    {
      key: '2',
      label: 'What’s the best way to ship my item?',
      children: 'The best way to ship your item is to use eBay’s shipping labels. You get discounted rates and can easily track the package.',
    },
    {
      key: '3',
      label: 'Can I sell locally on eBay?',
      children: 'Yes, eBay has a local pickup option that allows you to sell items to people nearby without shipping.',
    },
    {
      key: '4',
      label: 'How much will it cost to ship my item?',
      children: 'Shipping costs vary depending on the size, weight, and destination of your item. eBay offers discounted shipping labels.',
    },
    {
      key: '5',
      label: 'Where can I get shipping supplies?',
      children: 'You can purchase shipping supplies from eBay or other retailers. eBay also offers discounted shipping supplies for sellers.',
    },
    {
      key: '6',
      label: 'How should I choose my listing price?',
      children: 'Research similar items to find a competitive price. You can also use eBay’s pricing tools to set a fair market value.',
    },
    {
      key: '7',
      label: 'How does eBay protect sellers?',
      children: 'eBay protects sellers through various programs like seller protection, fraud prevention, and customer support.',
    },
    {
      key: '8',
      label: 'What can I sell on eBay?',
      children: 'You can sell almost anything on eBay, from new and used items to collectibles, antiques, and even cars.',
    },
    {
      key: '9',
      label: 'How do I create an account?',
      children: 'You can create an account by signing up with your email address or linking your Google or Facebook account to eBay.',
    },
  ];

  return (
    <ConfigProvider
      theme={{
        components: {
          Collapse: {
            borderRadius: '8px', // Tùy chỉnh giao diện thêm
          },
        },
      }}
    >
      <div className="p-8">
        <Title level={2} className="text-left mb-8">
          FAQ
        </Title>
        {/* Sử dụng items thay cho Panel */}
        <Collapse className='bg-white' accordion items={faqData} bordered={false} />
      </div>
    </ConfigProvider>
  );
};

export default FAQ;
