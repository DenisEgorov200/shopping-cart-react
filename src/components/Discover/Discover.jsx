import React from 'react'

import styles from './Discover.module.scss'

const Discover = props => {
  return (
    <a href='#' className={`${styles.button} ${props.className}`}>
        <span>{props.children}</span>
        <img width={18} height={18} src="./assets/icon/ArrowYellow.svg" alt="Arrow" />
    </a>
  )
}

export default Discover