import React from "react";
import PropTypes from "prop-types";
import styles from "./AppHeader.module.css";
// import "./AppHeader.css";

const AppHeader = () => (
  <div className={styles.AppHeader} data-testid="AppHeader">
    <div className={styles.LogoContainer}>
      <a href="" className={styles.Logo}>
        {" "}
        faye.mercado
      </a>
    </div>

    <div className={styles.NavHeader}>
      <div className={styles.NavButton}>
        <a href="">ABOUT ME</a>
      </div>
      <div className={styles.NavButton}>
        <a href="">SERVICES</a>
      </div>
      <div className={styles.NavButton}>
        <a href="">PORTFOLIO</a>
      </div>
      <div className={styles.NavButton}>
        <a href="">CONTACT</a>
      </div>
    </div>
  </div>
);

AppHeader.propTypes = {};

AppHeader.defaultProps = {};

export default AppHeader;
