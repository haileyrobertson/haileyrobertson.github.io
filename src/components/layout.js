// layout.js
import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../styles/index.scss";
import * as layoutStyles from "./layout.module.scss";
import profilePhoto from "/static/profile.jpeg";

const Layout = (props) => {
  return (
    <div className={`${layoutStyles.container} ${layoutStyles.layout}`}>
      <Header />
      <div className={layoutStyles.content}>
        <div className={layoutStyles.profilePhoto}>
          <img src={profilePhoto} alt="Profile" />
        </div>
        <div className={layoutStyles.text}>{props.children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
