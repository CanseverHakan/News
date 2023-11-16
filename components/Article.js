import React, { useEffect } from 'react';
import styles from '../styles/Article.module.css';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { listNews, favorite, selectArticle } from "@/reducers/news";
import Link from 'next/link';

export default function Articles() {
    const dispatch = useDispatch()
    const newsList = useSelector((state) => state.news.newsList)
    const favorites = useSelector((state) => state.news.favorites)


    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?q=trump&apiKey=38aced7e6f6f46a18780b861502e6892')
            .then((response) => response.json())
            .then((data) => {
                dispatch(listNews(data.articles))
                console.log(data)
            })
    }, [dispatch])
  
    const handleLikeClick = (article) => {
        dispatch(favorite(article))
        dispatch(selectArticle(article))
    }

    return (
        <div className={styles.cardContainer}>
            {newsList.map((article, index) => (
                <div className={styles.card} key={index}>
                    <img className={styles.image} src={article.urlToImage} alt={article.title} />
                    <div>
                        <h3 className={styles.title}>{article.title}</h3>
                        <a className={styles.url} rel="noopener noreferrer" href={article.url} target="_blank">Article Link</a>
                    </div>
                    <span className={styles.author}>
                        <strong>{article.author}</strong> from {article.source.name}
                    </span>
                    <p className={styles.description}>{article.description}</p>
                    <div className={styles.cardBot}>
                        <span>{new Date(article.publishedAt).toUTCString()}</span>
                        <FontAwesomeIcon
                            icon={faBookmark}
                            onClick={() => handleLikeClick(article)}
                            style={favorites.some((fav) => fav.title === article.title) ? { color: 'red' } : { color: 'grey' }}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

