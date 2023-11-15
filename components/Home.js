import React from 'react'
import styles from '../styles/Home.module.css';
import Menu from './Menu'
import Article from './Article';
import Footer from './Footer';

export default function Home() {


    return (
        <div className={styles.main}>
            <div>
                <Menu></Menu>
            </div>
            <div className={styles.container}>
                <Article></Article>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    )
}
