import React from "react";
import PropTypes from "prop-types";
import styles from "./AppHome.module.css";
import plant1 from "../Images/plant-1.svg";

const AppHome = () => (
  <div className={styles.AppHome} data-testid="AppHome">
    <h1>hello there...</h1>
    <a href="">TAKE A TOUR</a>
    <div className={styles.quote}>
      <div>
        <p>“Make it work, make it right, make it fast.”</p>
        <p>
          <i>Kent Beck</i>
        </p>
      </div>
      <img src={plant1} alt="" height="100px" />
    </div>
  </div>
);

AppHome.propTypes = {};

AppHome.defaultProps = {};

export default AppHome;
