import { PageContainer } from "@/components/layout/page-container/page-container";
import { ActionLink } from "@/components/ui/action-link/action-link";
import { StatusBadge } from "@/components/ui/status-badge/status-badge";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <PageContainer>
      <div className={styles.container}>
        <StatusBadge variant="danger">404</StatusBadge>
        <h1 className={styles.title}>Halaman Tidak Ditemukan</h1>
        <p className={styles.description}>Maaf, halaman yang Anda cari tidak tersedia atau sedang dalam pengembangan.</p>
        <div className={styles.actions}>
          <ActionLink href="/" variant="secondary">Kembali ke Beranda</ActionLink>
        </div>
      </div>
    </PageContainer>
  );
}
