import { PageContainer } from "@/components/layout/page-container/page-container";
import { SectionHeading } from "@/components/ui/section-heading/section-heading";
import { StatusBadge } from "@/components/ui/status-badge/status-badge";
import { siteConfig } from "@/config/site";
import styles from "./page.module.css";

export default function Home() {
  return (
    <PageContainer>
      <div className={styles.container}>
        <StatusBadge variant="info">Fondasi UI</StatusBadge>
        <SectionHeading
          title={siteConfig.name}
          description="UI Global dan Navigasi portal siap. Halaman kompetisi akan dikembangkan pada tahap berikutnya."
          actionLabel="Tentang Kompetisi"
          actionHref="/tentang"
          alignment="center"
        />
      </div>
    </PageContainer>
  );
}
