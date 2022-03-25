import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/header";

const Layout = ({ children }) => {
  return (
    <div>
     <Header/>
      {children}
     <Footer />
    </div>
  );
};

export default Layout;
