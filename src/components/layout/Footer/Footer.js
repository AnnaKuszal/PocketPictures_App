import React from 'react';

import styles from './Footer.module.scss';


const Footer = (props) => (
  <div className={styles.root}>
    {props.text}
  </div>
);


export default Footer;
