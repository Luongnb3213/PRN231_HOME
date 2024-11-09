import React, { useState, useEffect } from 'react';
import { Upload, message, Input, Button, Select, Switch, Checkbox } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';

const { TextArea } = Input;
const { Option } = Select;
const UpdateProducts = () => {

  const { id } = useParams(); // Lấy ID sản phẩm từ URL
  const [fileList, setFileList] = useState([]);
  const [productData, setProductData] = useState({});
  const [scheduleListing, setScheduleListing] = useState(false);
  const [requireImmediatePayment, setRequireImmediatePayment] = useState(false);
  useEffect(() => {
    // Giả lập API để lấy dữ liệu sản phẩm bằng ID
    const fetchProductData = async () => {
      // Replace this with actual API call
      const response = {
        title: 'apple iphone 14 pro max leather case with magsafe',
        category: 'Cases, Covers & Skins',
        description: 'This is a product description.',
        price: 100,
        quantity: 5,
        immediatePayment: true,
      };
      setProductData(response);
      setRequireImmediatePayment(response.immediatePayment);
    };

    fetchProductData();
  }, [id]);

  const handleUpload = ({ file }) => {
    // Custom upload handling logic
  };

  const propsVideo = {
    accept: 'video/*',
    beforeUpload: (file) => {
      const isVideo = file.type.includes('video');
      if (!isVideo) {
        message.error('You can only upload video files!');
      }
      const isLt2G = file.size / 1024 / 1024 < 2000;
      if (!isLt2G) {
        message.error('Video must smaller than 2GB!');
      }
      return isVideo && isLt2G;
    },
    onChange: (info) => {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
        setFileList([...info.fileList]);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    fileList: fileList,
  };

  const handleUpdate = () => {
    // Code để cập nhật sản phẩm thông qua API
    message.success("Product updated successfully!");
  };

  return (
    <div className="my-10 rounded-lg">
      <h2 className="text-xl mb-4">Update your listing</h2>

      <div className="mb-5 flex gap-4">
        <Upload.Dragger
          className="flex-1"
          multiple={false}
          customRequest={handleUpload}
          maxCount={24}
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined className="text-3xl text-gray-500" />
          </p>
          <p className="ant-upload-text">
            Drag and drop files or click to upload
          </p>
        </Upload.Dragger>
        <Upload.Dragger {...propsVideo} className="w-1/4">
          <p className="ant-upload-drag-icon">
            <InboxOutlined className="text-4xl text-gray-500" />
          </p>
          <p className="ant-upload-text">
            Drag and drop files or click to upload video
          </p>
          <p className="ant-upload-hint">Chỉ chấp nhận file video dưới 2GB.</p>
        </Upload.Dragger>
      </div>

      <div className="mb-5">
        <label className="block text-gray-600 mb-2">Title</label>
        <Input
          placeholder="Item title"
          value={productData.title}
          maxLength={80}
          showCount
          onChange={(e) => setProductData({ ...productData, title: e.target.value })}
        />
      </div>

      <div className="mb-5">
        <label className="block text-gray-600 mb-2">Item Category</label>
        <Select
          value={productData.category}
          className="w-full"
          onChange={(value) => setProductData({ ...productData, category: value })}
        >
          <Option value="Cases, Covers & Skins">Cases, Covers & Skins</Option>
          <Option value="Chargers">Chargers</Option>
          <Option value="Screen Protectors">Screen Protectors</Option>
        </Select>
      </div>

      <div className="mb-5">
        <label className="block text-gray-600 mb-2">Description</label>
        <TextArea
          rows={4}
          placeholder="Write a detailed description of your item"
          value={productData.description}
          onChange={(e) => setProductData({ ...productData, description: e.target.value })}
          className="w-full"
        />
      </div>

      <div className="mb-5 flex items-center justify-between">
        <span className="text-gray-600">Schedule your listing</span>
        <Switch checked={scheduleListing} onChange={(checked) => setScheduleListing(checked)} />
      </div>

      <h2 className="text-xl mb-4">PRICING</h2>

      <div className="mb-5">
        <label className="block text-gray-600 mb-2">Format</label>
        <Select
          defaultValue="Buy It Now"
          className="w-full max-w-80"
        >
          <Option value="Buy It Now">Buy It Now</Option>
          <Option value="Auction">Auction</Option>
        </Select>
      </div>

      <div className="mb-5">
        <label className="block text-gray-600 mb-2">Price</label>
        <Input
          placeholder="$"
          className="w-full max-w-60"
          type="number"
          value={productData.price}
          onChange={(e) => setProductData({ ...productData, price: e.target.value })}
        />
      </div>

      <div className="mb-5">
        <Checkbox
          checked={requireImmediatePayment}
          onChange={(e) => setRequireImmediatePayment(e.target.checked)}
        >
          Require immediate payment when buyer uses Buy It Now
        </Checkbox>
      </div>

      <div className="mb-5">
        <label className="block text-gray-600 mb-2">Quantity</label>
        <Input
          placeholder="1"
          className="w-full max-w-60"
          type="number"
          min="1"
          value={productData.quantity}
          onChange={(e) => setProductData({ ...productData, quantity: e.target.value })}
        />
      </div>

      <Button type="primary" onClick={handleUpdate}>
        Update Listing
      </Button>
    </div>
  );

}

export default UpdateProducts
