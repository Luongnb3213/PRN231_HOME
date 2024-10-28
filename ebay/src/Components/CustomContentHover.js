import Title from "antd/es/typography/Title";
import React from "react";

const CustomContentHover = ({
  arrayLink,
  title,
  imagePromotion,
  type,
  slug,
}) => {
  return (
    <div>
      {type === "text" ? (
        <div>
          {/* <NavLink to={`/products/${slug}`}> */}
          {title && (
            <Title level={4}>
              {" "}
              <a href={`/products/${slug}`}>{title}</a>{" "}
            </Title>
          )}
          {/* </NavLink> */}
          <ul>
            {arrayLink.map((item, index) => {
              return (
                <li className="p-1" key={index}>
                  <a href={`${item.url}`}>{item.content}</a>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CustomContentHover;
