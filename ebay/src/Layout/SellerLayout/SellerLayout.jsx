import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { NavLink } from "react-router-dom";

const SellerLayout = ({ children }) => {
  let classTab =
    "my-3 inline-block cursor-pointer hover:text-white transition-all duration-200";
  const [currentTab, setCurrentTab] = useState("Analytics");

  let active = " text-lg text-white";

  const handleChangeTab = (current) => {
    setCurrentTab((prev) => {
      return current;
    });
  };

  return (
    <div className="container mx-auto px-8">
      <Header />
      <div className="grid grid-cols-8">
        <div className="col-span-1 bg-blue-500 p-4 rounded-md">
          <div>
            <NavLink
              to={"/seller/analytics"}
              className={({ isActive }) => (isActive ? active : "")}
            >
              <div
                className={`${classTab}`}
                onClick={() => handleChangeTab("Analytics")}
              >
                Analytics
              </div>
            </NavLink>
            {/* <NavLink
              to={"/seller/trackingorders"}
              className={({ isActive }) => (isActive ? active : "")}
            >
              <div
                className={`${classTab}`}
                onClick={() => handleChangeTab("Tracking orders")}
              >
                Tracking orders
              </div>
            </NavLink> */}
            <NavLink
              to={"/seller/createProduct"}
              className={({ isActive }) => (isActive ? active : "")}
            >
              <div
                className={`${classTab}`}
                onClick={() => handleChangeTab("Add product")}
              >
                Add product
              </div>
            </NavLink>
            <NavLink
              to={"/seller/myProducts"}
              className={({ isActive }) => (isActive ? active : "")}
            >
              <div
                className={`${classTab}`}
                onClick={() => handleChangeTab("My products")}
              >
                My products
              </div>
            </NavLink>
          </div>
        </div>
        <div className="col-span-7 p-4">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default SellerLayout;
