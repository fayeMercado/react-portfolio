import React from "react";
import PropTypes from "prop-types";
import styles from "./AppServices.module.css";
import WebDev from "../Images/web-development.svg";
import WebDesign from "../Images/web-design.svg";
import Shopify from "../Images/shopify.svg";
import ServicesTemplate from "./ServicesTemplate";

const AppServices = () => (
  <div className={styles.AppServices} data-testid="AppServices">
    <h1>what i do...</h1>
    <div className={styles.ServicesContainer}>
      <ServicesTemplate
        image={WebDev}
        title="web development"
        description="Placeholder description for service offered."
      />
      <ServicesTemplate
        image={WebDesign}
        title="web & graphic design"
        description="Placeholder description for service offered."
      />
      <ServicesTemplate
        image={Shopify}
        title="shopify store development"
        description="Placeholder description for service offered."
      />
    </div>
  </div>
);

AppServices.propTypes = {};

AppServices.defaultProps = {};

export default AppServices;
