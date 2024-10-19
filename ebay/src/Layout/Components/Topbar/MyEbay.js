import React from "react";
import { Popover } from "antd";
import CustomContentHover from "../../../Components/CustomContentHover";

const MyEbay = () => {
  const EBayContent = {
    arrayLink: [
      {
        content: "Tracking Orders",
        url: "/trackingorders",
      },
      {
        content: "Summary",
        url: "#",
      },
      {
        content: "Recently Viewed",
        url: "#",
      },
      {
        content: "Bids/Offers",
        url: "#",
      },
      {
        content: "Watchlist",
        url: "#",
      },
      {
        content: "Purchase History",
        url: "#",
      },
      {
        content: "Buy Again",
        url: "#",
      },
      {
        content: "Selling",
        url: "#",
      },
      {
        content: "Saved Searchers",
        url: "#",
      },
      {
        content: "Saved Sellers",
        url: "#",
      },
      {
        content: "Messages",
        url: "#",
      },
    ],
  };
  const content = (
    <CustomContentHover arrayLink={EBayContent.arrayLink} type="text" />
  );

  return (
    <Popover
      content={content}
      trigger="click"
      placement="topRight"
      className="cursor-pointer text-xs"
    >
      MyEbay
    </Popover>
  );
};

export default MyEbay;
