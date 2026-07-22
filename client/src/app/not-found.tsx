import { PageContainer } from "@/components/layout/page-container/page-container";
import { SectionHeading } from "@/components/ui/section-heading/section-heading";
import { StatusBadge } from "@/components/ui/status-badge/status-badge";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <PageContainer>
      <div className={styles.container}>
        <StatusBadge variant="danger">404</StatusBadge>
        <SectionHeading
          title="Halaman Tidak Ditemukan"
          description="Maaf, halaman yang Anda cari tidak tersedia atau sedang dalam pengembangan."
          actionLabel="Kembali ke Beranda"
          actionHref="/"
          alignment="center"
        />
      </div>
    </PageContainer>
  );
}
