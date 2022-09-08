import React from 'react'

import styles from './AddToCart.module.scss'

const AddToCart = props => {
    return (
      <a href='#'
      className={`${styles.button} ${props.className}`}
      onClick={props.onClick ? () => props.onClick() : null}
      >
            <img width={18} height={18} src="./assets/icon/AddCart.svg" alt="Cart" />
            <span>{props.children}</span>
      </a>
    )
  }
  
export default AddToCart