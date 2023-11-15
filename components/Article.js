import React, { useEffect, useState } from 'react';
import styles from '../styles/Article.module.css';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Articles() {
    const [news, setNews] = useState([])

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=38aced7e6f6f46a18780b861502e6892')
            .then((response) => response.json())
            .then((data) => {
                setNews(data.articles)
                console.log(data)
            })
    }, [])
    

    return (
        <div className={styles.cardContainer}>
            {news.map((article, index) => (
                <div className={styles.card} key={index}>
                    <img className={styles.image} src={article.urlToImage} alt={article.title} />
                    <div>
                        <h3 className={styles.title}>{article.title}</h3>
                    </div>
                    <span className={styles.author}><strong>{article.author}</strong> from {article.source.name}</span>
                    <p className={styles.description}>{article.description}</p>
                    <div className={styles.cardBot}>
                        <span>{new Date(article.publishedAt).toUTCString()}</span>
                        <FontAwesomeIcon icon={faBookmark}/>
                    </div>
                </div>
            ))}
        </div>
    )
}