import React from 'react'
import styles from '../styles/Menu.module.css';
import Link from 'next/link';

export default function Menu() {
  return (
    <div className={styles.header}>
        <input></input>
      <span className={styles.logo}>MyNews</span>
      <div className={styles.linkContainer}>
          <span className={styles.link}>Home</span>
          <span className={styles.link}>Favoris</span>
      </div>
    </div>
  )
}
