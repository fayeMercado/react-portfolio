import React from "react";
import PropTypes from "prop-types";
import styles from "./AppAbout.module.css";
import photo from "../Images/photo.png";
import code from "../Images/code.png";
import food from "../Images/food.png";
import diy from "../Images/diy.png";
import PassionTemplate from "./PassionTemplate";

const AppAbout = () => (
  <div className={styles.AppAbout} data-testid="AppAbout">
    <div className={styles.AboutMe}>
      <img src={photo} alt="" width="225px" height="225px" />
      <div>
        <h1>hello...</h1>
        <p>I'm Faye and I am a web developer.</p>
      </div>
    </div>
    <h3>what I like...</h3>
    <div className={styles.PassionContainer}>
      <PassionTemplate
        image={code}
        title="web design & development"
        description=". . .experimenting on designs and solving problems."
      />
      <PassionTemplate
        image={food}
        title="food"
        description=". . .from cooking, baking and of course eating foods."
      />
      <PassionTemplate
        image={diy}
        title="do-it-yourself"
        description=". . .sometimes doing crafts and even furnitures by myself."
      />
    </div>
  </div>
);

AppAbout.propTypes = {};

AppAbout.defaultProps = {};

export default AppAbout;
