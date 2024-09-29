import React from 'react';
import '@flaticon/flaticon-uicons/css/all/all.css';
import { Select, ConfigProvider,Button  } from 'antd';
const Search = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
    <div className="border-2 items-center py-3 relative pl-3 flex border-gray-800 rounded-[2.5rem] flex-1">
      <i className="fi fi-br-search text-[16px] absolute left-[13px]"></i>
      <input
        className="flex-1 pl-14 text- text-[1.5rem] h-[20px] border-r border-r-gray-800"
        placeholder="Search for anything"
      />
      <ConfigProvider
        theme={{
          components: {
            Select: {
              selectorBg: 'transparent',
              activeBorderColor: 'white',
              hoverBorderColor: 'white',
              activeOutlineColor: "white",
              optionSelectedColor: "#111111"
            },
          },
          token:{
            colorBorder: 'transparent'
          }
        }}
      >
        <Select
          className="pl-6 pr-12 min-w-[180px]"
          defaultValue="All Categories"
          onChange={handleChange}
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
            { value: 'disabled', label: 'Disabled' },
          ]}
        />
      </ConfigProvider>
    </div>
    <Button type="primary" style={{ padding: '25px 20px', borderRadius: '4rem', minWidth: '168px',fontWeight: '600'}} size="large">Search</Button>
      <a classname="" href="https://example.com/">Advanced</a>
    </>
    
    
  );
};

export default Search;
