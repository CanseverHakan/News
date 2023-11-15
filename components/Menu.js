import React from "react";
import styles from "../styles/Menu.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Menu() {
  return (
    <div className={styles.header}>
      <div className={styles.searchBox}>
        <input type="text" name="search" placeholder="Search..." />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          onClick={() => chercher(movie)}
          className={styles.crossIcon}
        />
      </div>

      <span className={styles.logo}>MyNews</span>
      <div className={styles.linkContainer}>
        <Link href="/">
        <span className={styles.link}>Home</span>
        </Link>
        <Link href="/favorit">
        <span className={styles.link}>Favorit</span>
        </Link>
      </div>
    </div>
  );
}
