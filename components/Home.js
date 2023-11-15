import React from 'react'
import styles from '../styles/Home.module.css';
import Menu from './Menu'
import Articles from './Articles';

export default function Home() {
    return (
        <div className={styles.main}>
            <div>
                <Menu></Menu>
            </div>
            <div className={styles.container}>
                <Articles></Articles>
                <Articles></Articles>
                <Articles></Articles>
                <Articles></Articles>
                <Articles></Articles>
                <Articles></Articles>
                <Articles></Articles>
                <Articles></Articles>
                <Articles></Articles>
            </div>
        </div>
    )
}
