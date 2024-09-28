import React from "react";

import { NavLink } from "react-router-dom";
import { Flex, Typography } from "antd";
import Watchlist from "./Watchlist";
import MyEbay from "./MyEbay";
import Notification from "./Notification";
import Minicart from "./minicart";
const Topbar = () => {
  const { Text, Link } = Typography;
  return (
    <Flex justify="space-between" align="center">
      <Flex justify="center" align="center" gap={"10px"}>
        <Text>
          Hi!{" "}
          <Link>
            <NavLink to="/signin">Sign in </NavLink>
          </Link>{" "}
          or{" "}
          <Link>
            <NavLink to="/signup">register</NavLink>
          </Link>{" "}
        </Text>
        <Link
          style={{
            color: "black",
          }}
        >
          Daily Deals
        </Link>
        <Link
          style={{
            color: "black",
          }}
        >
          Help & Contact
        </Link>
      </Flex>

      <Flex justify="center" align="center" gap={"10px"}>
        <Link
          style={{
            color: "black",
          }}
        >
          Ship to
        </Link>
        <Link
          style={{
            color: "black",
          }}
        >
          Sell
        </Link>
        <Watchlist />
        <MyEbay />
        <Notification />
        <Minicart />
      </Flex>
    </Flex>
  );
};

export default Topbar;
