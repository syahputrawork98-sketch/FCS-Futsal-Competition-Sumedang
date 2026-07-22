import { PageContainer } from "@/components/layout/page-container/page-container";
import { ActionLink } from "@/components/ui/action-link/action-link";
import { StatusBadge } from "@/components/ui/status-badge/status-badge";
import { siteConfig } from "@/config/site";
import styles from "./page.module.css";

export default function Home() {
  return (
    <PageContainer>
      <div className={styles.container}>
        <StatusBadge variant="info">Fondasi UI</StatusBadge>
        <h1 className={styles.title}>{siteConfig.name}</h1>
        <p className={styles.description}>UI Global dan Navigasi portal siap. Halaman kompetisi akan dikembangkan pada tahap berikutnya.</p>
        <div className={styles.actions}>
          <ActionLink href="/tentang" variant="secondary">Tentang Kompetisi</ActionLink>
        </div>
      </div>
    </PageContainer>
  );
}
