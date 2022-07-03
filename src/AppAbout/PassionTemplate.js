import React from "react";
import PropTypes from "prop-types";
import styles from "./AppAbout.module.css";

const PassionTemplate = (props) => {
  return (
    <>
      <div className={styles.Passion}>
        <img src={props.image} alt="" height="100px" />
        <p>{props.description}</p>
      </div>
    </>
  );
};

export default PassionTemplate;
