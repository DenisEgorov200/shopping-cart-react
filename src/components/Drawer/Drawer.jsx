import React from 'react'

import styles from './Drawer.module.scss'

const Drawer = () => {
  return (
    <div className={styles.overlay}>
        <div className={styles.drawer}>
            <h2 className={styles.drawerTitle}>Корзина</h2>
            <ul className={styles.drawerList}>
                <li className={styles.drawerItem}>
                    <img width={70} height={70} src="/assets/image/Item=1.png" alt="Sneakers" />
                    <div className={styles.drawerInfo}>
                        <span>Nike air</span>
                        <span className={styles.drawerPrice}>$180,00</span>
                    </div>
                    <button className={styles.drawerButton}>
                        x
                    </button>
                </li>
                <li className={styles.drawerItem}>
                    <img width={70} height={70} src="/assets/image/Item=1.png" alt="Sneakers" />
                    <div className={styles.drawerInfo}>
                        <span>Nike air</span>
                        <span className={styles.drawerPrice}>$180,00</span>
                    </div>
                    <button className={styles.drawerButton}>
                        x
                    </button>
                </li>
            </ul>
            <div className={styles.drawerFooter}>
                <div className={styles.drawerRow}>
                    <span>Итого:</span>
                    <div className={styles.drawerDashed}></div>
                    <span className={styles.drawerPrice}>300$</span>
                </div>
                <div className={styles.drawerRow}>
                    <span>Налог 5%:</span>
                    <div className={styles.drawerDashed}></div>
                    <span className={styles.drawerPrice}>10$</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Drawer