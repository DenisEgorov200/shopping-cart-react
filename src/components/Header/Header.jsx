import React from 'react'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <div className={styles.headerMenuBurger}>
          <img
            width={18}
            height={10}
            src="/assets/icon/Sidelist.svg"
            alt="Sidelist"
          />
          <span>Menu</span>
        </div>
        <div className={styles.headerInputWrapper}>
          <input className={styles.headerSearch} />
          <img
            width={18}
            height={18}
            src="/assets/icon/Search.svg"
            alt="Search"
          />
        </div>
      </div>
      <a href="#" className={styles.headerLogo}>
        <img width={74} height={69} src="/assets/icon/Logo.svg" alt="Logo" />
      </a>
      <div className={styles.headerRight}>
        <div className={styles.headerIcon}>
          <img width={18} height={18} src="/assets/icon/User.svg" alt="User" />
        </div>
        <div className={styles.headerIcon}>
          <img
            width={18}
            height={18}
            src="/assets/icon/Heart.svg"
            alt="Favorite"
          />
        </div>
        <div className={styles.headerIcon}>
          <img width={18} height={18} src="/assets/icon/Cart.svg" alt="Cart" />
          <span className={styles.headerItems}>2</span>
        </div>
      </div>
    </header>
  )
}

export default Header
