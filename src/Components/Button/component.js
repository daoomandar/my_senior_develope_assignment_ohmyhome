import styles from './index.module.css';
import React from 'react';

const Button = props => {
  return <button className={styles['add-card']} disabled={props.disable} onClick={props.onClick}>{props.buttonTitle}</button>
}

export default Button