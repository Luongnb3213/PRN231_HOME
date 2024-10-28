import React, { useEffect, useState } from "react";
import { Popover, Row, Col } from "antd";
import { categories } from "../../../constant/Links";
import CustomContentHover from "../../../Components/CustomContentHover";
import requestAPI from "../../../customHook/callApi";
import { requireHeader } from "../../../constant/url";

const ShopCategory = () => {
  const [categoryData, setCategoryData] = useState([]);
  // const [slugCategory, setSlugCategory] = useState([]);
  const headers = {
    "X-Header-Required": requireHeader,
    "Content-Type": "application/json",
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await requestAPI(
        "GET",
        "/prn-product/api/Category/homepage",
        null,
        headers
      );

      // console.log(data.response.shopBy);

      setCategoryData((oldData) => {
        return data?.response.shopBy.map((item) => {
          console.log(item);

          return {
            type: "text",
            title: item.categoryName,
            arrayLink: item.children.map((child) => {
              return {
                content: child.categoryName,
                // url: `/products/${child.}/${child.categoryID}`,
                url: `/products/${item.categoryName}/${child.categoryName}`,
              };
            }),
          };
        });
      });
    };

    fetchData();
  }, []);

  const content = (
    <Row gutter={10} className="pt-10 px-6 pb-6 rounded-3xl max-w-[800px]">
      {categoryData?.map((item, index) => {
        // console.log(item);

        let colSpan = item.type === "text" ? 8 : 6;
        return (
          <Col key={index} className="gutter-row mb-8" span={colSpan}>
            <CustomContentHover
              slug={item.title}
              title={item.title}
              arrayLink={item.arrayLink}
              type={item.type}
            />
          </Col>
        );
      })}
    </Row>
  );

  return (
    <div className="max-w-[50px] cursor-pointer ml-3 mr-3">
      <Popover content={content} placement="leftBottom" trigger="click">
        <p className="text-xs font-normal text-gray-500">Shop by category </p>
      </Popover>
    </div>
  );
};

export default ShopCategory;
