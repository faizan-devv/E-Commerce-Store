import React from "react";
import styles from "./Footer.module.css";
import "font-awesome/css/font-awesome.min.css";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.copyright}>
        <span>© 2021, E-COM Powered by e-commerce</span>
      </div>
    </div>
  );
};

export default Footer;
