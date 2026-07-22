import Link from "next/link";
import styles from "./news-feature-card.module.css";
import type { HomeNews } from "../types/home.types";

type NewsFeatureCardProps = {
  news: HomeNews;
};

export function NewsFeatureCard({ news }: NewsFeatureCardProps) {
  return (
    <Link href={news.href} className={styles.card} aria-label={`Baca selengkapnya: ${news.title}`}>
      <div className={styles.imageContainer}>
        {news.image.src ? (
          <img src={news.image.src} alt={news.image.alt} className={styles.image} />
        ) : (
          <div className={styles.placeholder} aria-hidden="true" />
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.meta}>
          {news.category && <span className={styles.category}>{news.category}</span>}
          <span className={styles.date}>{news.publishedAt}</span>
        </div>
        <h3 className={styles.title}>{news.title}</h3>
        <p className={styles.summary}>{news.summary}</p>
      </div>
    </Link>
  );
}
