import Link from "next/link";
import { siteConfig } from "@/config/site";
import { PageContainer } from "./page-container";
import styles from "./site-header.module.css";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <PageContainer>
        <Link href="/" className={styles.brand} aria-label={`Beranda ${siteConfig.name}`}>
          {siteConfig.shortName}
        </Link>
      </PageContainer>
    </header>
  );
}
