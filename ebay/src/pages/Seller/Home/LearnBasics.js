import React from 'react';
import { Row, Col, Typography, Card } from 'antd';

const { Title, Text } = Typography;

const LearnBasics = () => {
  const steps = [
    {
      number: 1,
      title: 'List your item',
      description:
        'You can list new or used items and pay a final value fee only when it sells.',
      linkText: 'Learn more about fees.',
      linkUrl: '#',
    },
    {
      number: 2,
      title: 'Get seller protection',
      description:
        'You’re protected by policies, monitoring, and our customer service team.',
    },
    {
      number: 3,
      title: 'Choose when you get paid',
      description:
        'You can schedule either daily or weekly payouts, and we’ll deposit your earnings directly into your bank account.',
    },
  ];

  return (
    <div style={{ padding: '50px 20px' }}>
      <Title level={2} style={{ textAlign: 'left' }}>
        Learn the basics
      </Title>
      <Text style={{ display: 'block', textAlign: 'left', marginBottom: '40px' }}>
        Here's what you need to know to start selling.
      </Text>
      <Row gutter={[32, 32]} justify="left">
        {steps.map((step, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <Card bordered={false} style={{ textAlign: 'left' }}>
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  background: '#f0f0f0',
                  margin: '0px auto 20px 20px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: 24,
                  fontWeight: 'bold',
                }}
              >
                {step.number}
              </div>
              <Title level={4}>{step.title}</Title>
              <Text>{step.description}</Text>
              {step.linkText && (
                <div>
                  <a href={step.linkUrl} style={{ color: '#1890ff' }}>
                    {step.linkText}
                  </a>
                </div>
              )}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default LearnBasics;
