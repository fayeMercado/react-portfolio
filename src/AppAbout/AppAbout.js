import React from "react";
import PropTypes from "prop-types";
import styles from "./AppAbout.module.css";
import photo from "../Images/photo.png";
import placeholder from "../Images/placeholder.png";
import PassionTemplate from "./PassionTemplate";

const AppAbout = () => (
  <div className={styles.AppAbout} data-testid="AppAbout">
    <div className={styles.AboutMe}>
      <img src={photo} alt="" width="200px" height="200px" />
      <h1>hello...</h1>
      <p>I'm Faye and I am a web developer.</p>
      <h1>what I love doing...</h1>
    </div>
    <div className={styles.PassionContainer}>
      <PassionTemplate
        image={placeholder}
        description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book."
      />
      <PassionTemplate
        image={placeholder}
        description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book."
      />
      <PassionTemplate
        image={placeholder}
        description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book."
      />
    </div>
  </div>
);

AppAbout.propTypes = {};

AppAbout.defaultProps = {};

export default AppAbout;
