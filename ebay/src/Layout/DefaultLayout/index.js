import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';


const DefaultLayout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
