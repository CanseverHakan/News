import React from 'react'
import styles from '../styles/Articles.module.css'


export default function Articles() {
  return (
    <div className={styles.card}>
        <img className={styles.image} src='/test.jpg'></img>
        <div>
        <h3 className={styles.titles}>TITLE</h3>
        </div>
        <span className={styles.author}>AUTHOR</span>
        <p className={styles.description}>Factbox-What you need to know about Ampere, Renault's EV unit</p>
    </div>
  )
}
