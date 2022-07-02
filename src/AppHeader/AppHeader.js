import React from 'react';
import PropTypes from 'prop-types';
import styles from './AppHeader.module.css';

const AppHeader = () => (
  <div className={styles.AppHeader} data-testid="AppHeader">
    AppHeader Component
  </div>
);

AppHeader.propTypes = {};

AppHeader.defaultProps = {};

export default AppHeader;
