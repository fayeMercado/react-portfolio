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
      <a href="" className={styles.NavButton}>
        ABOUT ME
      </a>
      <a href="" className={styles.NavButton}>
        SERVICES
      </a>
      <a href="" className={styles.NavButton}>
        PORTFOLIO
      </a>
      <a href="" className={styles.NavButton}>
        CONTACT
      </a>
    </div>
  </div>
);

AppHeader.propTypes = {};

AppHeader.defaultProps = {};

export default AppHeader;
