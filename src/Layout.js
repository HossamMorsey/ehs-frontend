import React from "react";
import "./App.scss";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="body-container">{children}</div>
    </>
  );
}

export default Layout;
