import React from "react";
import "@flaticon/flaticon-uicons/css/all/all.css";
import { Select, ConfigProvider, Button } from "antd";
const Search = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <div className="border-2 items-center py-3  h-11 relative pl-3 flex border-gray-800 rounded-[2.5rem] flex-1">
        <i className="fi fi-br-search text-[16px] absolute left-[13px]"></i>
        <input
          className="flex-1 pl-14 text- text-[1rem] w-full mr-4 h-[20px] outline-none border-r border-r-gray-800"
          placeholder="Search for anything"
        />
        <ConfigProvider
          theme={{
            components: {
              Select: {
                selectorBg: "transparent",
                activeBorderColor: "white",
                hoverBorderColor: "white",
                activeOutlineColor: "white",
                optionSelectedColor: "#111111",
              },
            },
            token: {
              colorBorder: "transparent",
            },
          }}
        >
          {/* <Select
            className="pl-6 pr-12 min-w-[180px]"
            defaultValue="All Categories"
            onChange={handleChange}
            options={[
              { value: 'jack', label: 'Jack' },
              { value: 'lucy', label: 'Lucy' },
              { value: 'Yiminghe', label: 'yiminghe' },
              { value: 'disabled', label: 'Disabled' },
            ]}
          /> */}
        </ConfigProvider>
      </div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimaryHover: "#1D4ED8",
          },
        }}
      >
        <Button
          type="primary"
          className="bg-blue-600"
          style={{
            padding: "15px 15px",
            borderRadius: "4rem",
            minWidth: "168px",
            fontWeight: "600",
          }}
          size="large"
        >
          Search
        </Button>
      </ConfigProvider>
    </>
  );
};

export default Search;
