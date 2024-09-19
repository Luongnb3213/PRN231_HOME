import Title from 'antd/es/typography/Title';
import React from 'react';

const CustomContentHover = ({ arrayLink, title, imagePromotion, type }) => {
  return (
    <div>
      {type === 'text' ? (
        <div>
          {title && <Title> {title} </Title>}
          <ul>
            {arrayLink.map((item, index) => {
              return (
                <li className="p-1" key={index}>
                  <a href={item.url}>{item.content}</a>
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
