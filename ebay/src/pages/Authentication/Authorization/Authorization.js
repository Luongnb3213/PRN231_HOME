import React, { useState } from 'react';
import { Button, Modal, Input } from 'antd';
const Authorization = () => {
  const handleLogin = () => {};
  return (
    <div>
      <Modal
        title="Login"
        open={true}
        footer={[
          <Button key="login" type="primary" onClick={handleLogin}>
            Login
          </Button>,
        ]}
      >
        <p>Bạn cần đăng nhập để tiếp tục sử dụng dịch vụ.</p>
      </Modal>
    </div>
  );
};

export default Authorization;
