import React, { useState } from 'react';
import { Radio, Button, Card, List, Typography } from 'antd';
import { CreditCardOutlined, GoogleOutlined } from '@ant-design/icons';

const { Text } = Typography;

const Checkout = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);

  const onChangePayment = (e) => {
    setSelectedPayment(e.target.value);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography.Title level={2}>Checkout</Typography.Title>

      <div className="flex gap-4">
        <div className="flex-1">
          <Card title="Pay with" style={{ marginBottom: '20px' }}>
            <Radio.Group onChange={onChangePayment} value={selectedPayment}>
              <List>
                <List.Item>
                  <Radio value="venmo">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Venmo_logo.png"
                      alt="Venmo"
                      style={{ height: '18px', marginRight: '8px' }}
                    />
                    Venmo
                  </Radio>
                </List.Item>
                <List.Item>
                  <Radio value="credit-card">
                    <CreditCardOutlined /> Add new card (Visa, MasterCard)
                  </Radio>
                </List.Item>
                <List.Item>
                  <Radio value="google-pay">
                    <GoogleOutlined /> Google Pay
                  </Radio>
                </List.Item>
                <List.Item>
                  <Radio value="credit">
                    <CreditCardOutlined /> No Interest if paid in full in 6
                    months
                  </Radio>
                </List.Item>
              </List>
            </Radio.Group>
          </Card>
          <Card title="Ship to" style={{ marginTop: '20px' }}>
            <Text>Nguyễn Xuân Hoàng Hoàng</Text>
            <br />
            <Text>Gia Lâm, Hà Nội</Text>
            <br />
            <Text>Hanoi 100000, Vietnam</Text>
            <br />
            <Text>0335586561</Text>
            <br />
            <Button type="link" style={{ paddingLeft: '0' }}>
              Change
            </Button>
          </Card>
        </div>

        <div className="w-1/5">
          <Card title="Order Summary" style={{ marginBottom: '20px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '10px',
              }}
            >
              <Text>Item (1)</Text>
              <Text>$170.00</Text>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '10px',
              }}
            >
              <Text>Shipping</Text>
              <Text>$92.39</Text>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '10px',
              }}
            >
              <Text strong>Total</Text>
              <Text strong>$262.39</Text>
            </div>
          </Card>

          <Button
            type="primary"
            className="rounded-3xl py-5"
            block
            size="large"
            disabled={!selectedPayment}
          >
            Confirm and Pay
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
