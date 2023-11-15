import React from 'react'
import styles from '../styles/Articles.module.css'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Articles() {
  return (
    <div className={styles.card}>
        <img className={styles.image} src='/test.jpg'></img>
        <div>
        <h3 className={styles.titles}>TITLE  
        <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon></h3>
        </div>
        <span className={styles.author}>AUTHOR</span>
        <p className={styles.description}>Factbox-What you need to know about Ampere, Renault's EV unit</p>
    </div>
  )
}
