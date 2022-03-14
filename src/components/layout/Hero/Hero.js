import React from 'react';
import { useEffect, useState } from 'react';

import SocialIcons from '../../features/SocialIcons/SocialIcons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

import styles from './Hero.module.scss';


const Hero = (props) => {

  const { title } = props;

  const [hero, setHero] = useState([]); 
  
  useEffect(() => {
    fetch('db/app.json')
      .then(response => response.json())
      .then(data => setHero(data.hero));
  }, []);

  const { heroImg, alt, subtitles } = hero;
  
    
  return (
    <div className={styles.root}>
      <img className={styles.bgImage} src='images/bg-gradient.jpg' alt='bg' />

      <div className={styles.photo}>
        <img className={styles.image} src={heroImg} alt={alt} />
      </div>

      <div className={styles.subtitles}>
        <ul>
          {
            subtitles && subtitles.length > 0 &&
            subtitles.map((subtitle, index) => (
              <li key={index}><FontAwesomeIcon icon={faCamera} className={styles.iconMark} />{subtitle}</li>
            ))
          }
        </ul>

        <SocialIcons />
      </div>

      <div className={styles.title}>
        <h1>{title}</h1>
      </div>
    </div>
  );
  
}


export default Hero;
