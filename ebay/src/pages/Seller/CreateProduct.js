import React, { useState } from 'react';
import { Upload, message, Input, Button, Select,Switch,Checkbox } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { Option } = Select;

const CreateProduct = () => {
  const [fileList, setFileList] = useState([]);
  const [scheduleListing, setScheduleListing] = useState(false);
  const [requireImmediatePayment, setRequireImmediatePayment] = useState(false);
  const handleUpload = ({ file }) => {

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
  return (
    <div className=" my-10 rounded-lg">
      <h2 className="text-xl mb-4">Complete your listing</h2>

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
          defaultValue="apple iphone 14 pro max leather case with magsafe"
          maxLength={80}
          showCount
        />
      </div>

      <div className="mb-5">
        <label className="block text-gray-600 mb-2">Item Category</label>
        <Select defaultValue="Cell Phone Accessories" className="w-full">
          <Option value="Cases, Covers & Skins">Cases, Covers & Skins</Option>
          <Option value="Chargers">Chargers</Option>
          <Option value="Screen Protectors">Screen Protectors</Option>
        </Select>
      </div>

      <div className="mb-5">
        <label className="block text-gray-600 mb-2">Description</label>
        <TextArea
          rows={4}
          placeholder="Write a detailed description of your item, or let AI draft it for you"
          className="w-full"
        />
      </div>

      <div className="mb-5 flex items-center justify-between">
        <span className="text-gray-600">Schedule your listing</span>
        <Switch onChange={(checked) => setScheduleListing(checked)} />
      </div>
      <p className="text-gray-500 mb-4">
        Your listing goes live immediately, unless you select a time and date
        you want it to start.
      </p>


      <h2 className="text-xl mb-4">PRICING</h2>


      <div className="mb-5">
        <label className="block text-gray-600 mb-2">Format</label>
        <Select defaultValue="Buy It Now" className="w-full max-w-80">
          <Option value="Buy It Now">Buy It Now</Option>
          <Option value="Auction">Auction</Option>
        </Select>
      </div>


      <div className="mb-5">
        <label className="block text-gray-600 mb-2">Price</label>
        <Input placeholder="$" className="w-full max-w-60" type="number" />
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
        <Input placeholder="1" className="w-full max-w-60" type="number" min="1" />
      </div>

     
      <div className="mb-5 flex items-center justify-between">
        <span className="text-gray-600">Schedule your listing</span>
        <Switch onChange={(checked) => setScheduleListing(checked)} />
      </div>
      <p className="text-gray-500 mb-4">
        Your listing goes live immediately, unless you select a time and date
        you want it to start.
      </p>

      <Button type="primary" className="">
        Submit Listing
      </Button>
    </div>
  );
};

export default CreateProduct;
