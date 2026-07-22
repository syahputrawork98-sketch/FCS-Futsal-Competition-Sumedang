import { siteConfig } from "@/config/site";
import { PageContainer } from "@/components/layout/page-container";
import styles from "./page.module.css";

export default function Home() {
  return (
    <PageContainer>
      <div className={styles.main}>
        <span className={styles.statusLabel}>Fondasi frontend</span>
        <h1 className={styles.title}>{siteConfig.name}</h1>
        <p className={styles.description}>
          Aplikasi sedang dalam tahap persiapan. Fitur kompetisi akan dibuat pada tahap berikutnya.
        </p>
        
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Ringkasan Status Proyek</h2>
          <ul className={styles.list}>
            <li><strong>Client:</strong> Fondasi disiapkan.</li>
            <li><strong>Server:</strong> Belum diimplementasikan.</li>
            <li><strong>Database:</strong> Belum diimplementasikan.</li>
          </ul>
        </div>
      </div>
    </PageContainer>
  );
}
