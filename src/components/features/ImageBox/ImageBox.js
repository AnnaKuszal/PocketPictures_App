import React from 'react';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import styles from './ImageBox.module.scss';


const ImageBox = (props) => {

  const { title, url, category, favorites } = props;

  const [favorite, setFavorite] = useState(favorites);

  const handleClick = () => {
    setFavorite(favorite => 
      favorite === false ? 
      !favorite :
      favorite
    );
  };

  const isActive = favorite ? styles.active : '';

  return (
    <div className={styles.root}>

      <div className={styles.imgContainer}>
        <img className={styles.image} src={url} alt={title} />
      </div>

      <div className={styles.imgInfo}>
        <div className={styles.infoWrapper}>
          <p>
          Title: {title} <br />
          Category: {category}
          </p>
        </div>
        <div className={styles.favoritesWrapper}>
          <div className={styles.favBtn}>
            Add to favorites: 
            <button
              className={styles.favoritesBtn + ' ' + isActive}
              onClick={handleClick} >
              <FontAwesomeIcon icon={faHeart} className={styles.icon} />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ImageBox;
