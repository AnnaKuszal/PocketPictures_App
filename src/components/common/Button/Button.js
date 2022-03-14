import React from 'react';

import styles from './Button.module.scss';


const Button = (props) => {

  const { text, name, onCategoryChange, isActive } = props;   //active, 

  const handleClick = (e) => {
    e.preventDefault();
    onCategoryChange(e, name, isActive);  
  }

  //const activeBtn = active && styles.active;

  return (
    <button 
      type="button"
      //className={styles.root + ' ' + activeBtn}
      className={styles.root}
      name={name}
      onClick={e => handleClick(e)}
    >
      {text}   
    </button>
  );
}


export default Button;
