import React from 'react'
import Menu from './Menu'
import Footer from './Footer'
import { useSelector } from 'react-redux'
import styles from '../styles/Favorite.module.css'

export default function Favorit() {
  const selectedArticle = useSelector((state) => state.news.selectedArticle)

  return (
    <div className={styles.main}>
      <div>
        <Menu />
      </div>
      <div className={styles.container}>
        {selectedArticle && (
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <img className={styles.image} src={selectedArticle.urlToImage} alt={selectedArticle.title} />
              <div>
                <h3 className={styles.title}>{selectedArticle.title}</h3>
              </div>
              <span className={styles.author}>
                <strong>{selectedArticle.author}</strong> from {selectedArticle.source.name}
              </span>
              <p className={styles.description}>{selectedArticle.description}</p>
              <div className={styles.cardBot}>
                <span>{new Date(selectedArticle.publishedAt).toUTCString()}</span>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}