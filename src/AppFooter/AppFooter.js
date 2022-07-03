import React from "react";
import PropTypes from "prop-types";
import styles from "./AppFooter.module.css";
import {
  FaGithubSquare,
  FaLinkedin,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const AppFooter = () => (
  <div className={styles.AppFooter} data-testid="AppFooter">
    <p>FOLLOW ME ON</p>
    <a href="" className={styles.Socmed}>
      <FaGithubSquare />
    </a>
    <a href="" className={styles.Socmed}>
      <FaLinkedin />
    </a>
    <a href="" className={styles.Socmed}>
      <FaFacebookSquare />
    </a>
    <a href="" className={styles.Socmed}>
      <FaInstagramSquare />
    </a>
  </div>
);

AppFooter.propTypes = {};

AppFooter.defaultProps = {};

export default AppFooter;
