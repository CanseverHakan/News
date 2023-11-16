import React from "react";
import { useState } from "react";
import styles from "../styles/Menu.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Menu() {
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    // console.log("a");
    e.preventDefault();
    console.log(e.target.search.value);
    setSearch("");
  };

  return (
    <div className={styles.header}>
      <div className={styles.searchBox}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            // onClick={() => chercher(movie)}
            className={styles.crossIcon}
            type="submit"
          />
        </form>
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
