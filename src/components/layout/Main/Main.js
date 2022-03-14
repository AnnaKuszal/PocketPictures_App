import React from 'react';
import { useEffect, useState } from 'react';

import Button from '../../common/Button/Button';
import ImageBox from '../../features/ImageBox/ImageBox';

import styles from './Main.module.scss';



const Main = (props) => {

  const { title } = props;

  const [categories, setCategories] = useState([]);
  const [images, setImages] = useState([]);

  const [filtered, setFiltered] = useState([]);


  const [active, setActive] = useState({
    nameCategory: '',
    isActiveCategory: false
  });

  const { nameCategory, isActiveCategory } = active;

  useEffect(() => {
    fetch('db/app.json')
      .then(response => response.json())
      .then(data => {
        return (
          setCategories(data.categories),
          setImages(data.images)
        );
      });
  }, []);


  const handleCategoryChange = (e, name, isActive) => {
    e.preventDefault();
    console.log("CLICKED:", name);

    setActive({
      nameCategory: name, 
      isActiveCategory: isActive === true ? false : true
    });

    const filteredImages = images.filter(image => image.category === name);
    setFiltered(filteredImages);
  }
  //console.log("filteredIMAGES:", filtered);

  return (

    <div className={styles.root}>
      <img className={styles.bgImage} src='images/bg-gradient.jpg' alt='bg' />
      <h2 className={styles.subtitle}>{title}</h2>

      <div className={styles.categoryBtnWrapper}>

        {
          categories && categories.length > 0 &&
          categories.map(category => {

            const { id, name, isActive } = category;

            return (
              <Button 
                key={id}
                text={name}
                status={isActive}
                name={nameCategory}                  
                active={isActiveCategory}
                onCategoryChange={e => handleCategoryChange(e, name, isActiveCategory)}
                {...category}
              />
            );
          })   
        }
      
      </div>

      {/* RENDERING FILTERED --> START*/}

      {
        filtered && filtered.length > 0 ?

          <div className={styles.imagesContainer}>
            {
              filtered && filtered.length > 0 &&
              filtered.map((image, id) => {
                return <ImageBox key={id} {...image} />;
              })
            }
       
            <div className={styles.filler}></div>
          </div>

          :

          <div className={styles.imagesContainer}>
            {
              images && images.length > 0 &&
              images.map((image, id) => {
                return <ImageBox key={id} {...image} />;
              })
            }
          <div className={styles.filler}></div>
        </div>
      }

      {/* RENDERING FILTERED --> END*/}
    
    </div>
  );
}


export default Main;
