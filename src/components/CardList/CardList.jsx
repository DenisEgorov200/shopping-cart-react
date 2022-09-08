import React from 'react'

import CardListData from './CardListData'
import AddToCart from '../AddToCart/AddToCart'

import styles from './CardList.module.scss'

const CardList = () => {
  return (
    <div className={styles.cardList}>
      {CardListData.map((card) => (
          <CardItem key={card.id} item={card}/>
      ))}
    </div>
  )
}

const CardItem = props => {
    const item = props.item;

    return (
        <div className={styles.card}>
          <div style={{background: `${item.backgroundColor}`}} className={styles.cardHeader}>
            <img src={item.backgroundImg} alt="" />
          </div>
          <div className={styles.cardBody}>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <div className={styles.cardPrice}>
              <span className={styles.cardNewPrice}>${item.newPrice}</span>
              <span className={styles.cardOldPrice}>${item.oldPrice}</span>
            </div>
            <div className={styles.cardColors}></div>
          </div>
          <div className={styles.cardFooter}>
            <AddToCart onClick={console.log('click')}>
              Add to Cart
            </AddToCart>
          </div>
        </div>
    )
}

export default CardList