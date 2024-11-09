import React, { useState } from 'react';
import {
  Upload,
  message,
  Input,
  Button,
  Select,
  Switch,
  Checkbox,
  DatePicker,
} from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import requestAPI from '../../customHook/callApi';
import moment from 'moment';
const { TextArea } = Input;
const { Option } = Select;

const CreateProduct = () => {
  const [fileList, setFileList] = useState([]);
  const [EndDateBid, SetEndDateBid] = useState(new Date().toISOString());
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [categoryID, setCategoryID] = useState(null);
  const [isBid, setIsBid] = useState(false);

  const handleDateChange = (date) => {
    if (date) {
      SetEndDateBid(date.toISOString()); // Chuyển đổi sang định dạng ISO string
    } else {
      SetEndDateBid(null); // Đặt lại nếu không có ngày nào được chọn
    }
  };
  const handleUpload = async ({ file, onSuccess, onError, onProgress }) => {
    try {

      let percentCompleted = 0;
  
      const simulateProgress = () => {
        if (percentCompleted < 100) {
          percentCompleted += 10; 
          onProgress({ percent: percentCompleted });
  
          setTimeout(simulateProgress, 100);
        } else {
          setFileList((prevList) => [...prevList, file]);
          message.success(`${file.name} added to fileList successfully.`);
          onSuccess("OK");
        }
      };
  
      // Bắt đầu giả lập tiến trình
      simulateProgress();
    } catch (error) {
      console.error("Error adding file to fileList:", error);
      message.error(`${file.name} could not be added to fileList.`);
      onError(error);
    }
  };

  const handleSubmit = async () => {
    try {
      // Chuyển đổi các file trong fileList sang base64
      const base64Images = await Promise.all(
        fileList.map((file) => {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result); // Kết quả base64
            reader.onerror = (error) => reject(error);
          });
        })
      );
  
   
      const data = {
        SellerID: 1, 
        ProductName: productName,
        Description: description,
        Price: parseFloat(price),
        Quantity: parseInt(quantity),
        CategoryID: categoryID,
        IsBid: isBid,
        EndDateBid: EndDateBid ? EndDateBid : null,
        Images: base64Images, 
      };
  
      const response = await requestAPI("post", "/prn-product/create-product", data);
      

      if (response) {
        message.success("Product created successfully!");
      }
      console.log(base64Images);

    } catch (error) {
      console.error("Error creating product:", error);
      message.error("An error occurred while creating the product.");
    }
  };
  
  return (
    <div className="my-10 rounded-lg">
      <h2 className="text-xl mb-4">Complete your listing</h2>

      <div className="mb-5 gap-4">
        <Upload.Dragger
          multiple={true}
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
      </div>

      <div className="mb-5">
        <label className="block text-gray-600 mb-2">Title</label>
        <Input
          placeholder="Item title"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          maxLength={80}
          showCount
        />
      </div>

      <div className="mb-5">
        <label className="block text-gray-600 mb-2">Item Category</label>
        <Select
          defaultValue="Select Category"
          className="w-full"
          onChange={setCategoryID}
        >
          <Option value={0}>Select Category</Option>
          <Option value={1}>Cases, Covers & Skins</Option>
          <Option value={2}>Chargers</Option>
          <Option value={3}>Screen Protectors</Option>
        </Select>
      </div>

      <div className="mb-5">
        <label className="block text-gray-600 mb-2">Description</label>
        <TextArea
          rows={4}
          placeholder="Write a detailed description of your item, or let AI draft it for you"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full"
        />
      </div>

      <div className="mb-5">
        <label className="block text-gray-600 mb-2">Price</label>
        <Input
          placeholder="$"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full max-w-60"
        />
      </div>

      <div className="mb-5">
        <label className="block text-gray-600 mb-2">Quantity</label>
        <Input
          placeholder="1"
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-full max-w-60"
        />
      </div>

      <div className="mb-5">
        <label className="block text-gray-600 mb-2">End Date for Bidding</label>
        <DatePicker
          className="w-full"
          showTime
          format="YYYY-MM-DD HH:mm"
          value={EndDateBid ? moment(EndDateBid) : null}
          onChange={handleDateChange}
        />
      </div>

      <div className="mb-5 flex items-center justify-between">
        <span className="text-gray-600">Bidding</span>
        <Switch checked={isBid} onChange={setIsBid} />
      </div>

      <Button type="primary" onClick={handleSubmit}>
        Submit Listing
      </Button>
    </div>
  );
};

export default CreateProduct;
