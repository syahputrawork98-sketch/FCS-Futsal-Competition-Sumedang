import { siteConfig } from "@/config/site";
import { PageContainer } from "./page-container";
import styles from "./site-header.module.css";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <PageContainer>
        <h1 className={styles.title}>{siteConfig.shortName}</h1>
      </PageContainer>
    </header>
  );
}
