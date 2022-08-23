import placeholder from './../../Images/placeholder.png';
import React from 'react';
import styles from './index.module.css'

const Card = (props) => {
  return (
    <div className={styles['grid-card']}>
       <img className={styles['card-placeholder']} src={placeholder} alt='Placeholder' />
       <div className={styles['card-title']}>
         {props.item.cardTitle}
       </div>
       <div className={styles['card-description']}>
         {props.item.cardDescription}
       </div>
       <div className={styles['card-price']}>
         {props.item.cardPrice}
       </div>
   </div>)
}

export default Card