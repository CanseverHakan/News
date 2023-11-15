import React from "react";
import styles from "../styles/Home.module.css";
import Menu from "./Menu";
import Article from "./Article";
import Footer from "./Footer";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { listNews } from "@/reducers/news";

export default function Home() {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.value);
  console.log(news);

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
  );
}
