import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faBehance } from '@fortawesome/free-brands-svg-icons';

import styles from './SocialIcons.module.scss';


const SocialIcons = () => (
  <div className={styles.root}>
    <FontAwesomeIcon icon={faFacebookF} className={styles.icon} />
    <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
    <FontAwesomeIcon icon={faBehance} className={styles.icon} />
  </div>
);


export default SocialIcons;
