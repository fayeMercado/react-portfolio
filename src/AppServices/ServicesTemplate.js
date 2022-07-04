import React from "react";
import PropTypes from "prop-types";
import styles from "./AppServices.module.css";

const ServicesTemplate = (props) => {
  return (
    <>
      <div className={styles.Services}>
        <div>
          <img src={props.image} alt="" height="200px" />
        </div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </>
  );
};

export default ServicesTemplate;
