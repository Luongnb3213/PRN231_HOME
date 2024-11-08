import React, { useState } from 'react';
import { Button, Modal, Input } from 'antd';
import { useNavigate } from "react-router-dom";
const Authorization = () => {
  const navigate = useNavigate();
  const handleLogin = () => {

    navigate("/signin");

  };
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
