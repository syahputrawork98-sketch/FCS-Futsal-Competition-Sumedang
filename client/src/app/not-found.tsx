import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <PageContainer>
      <div className={styles.container}>
        <h1 className={styles.title}>Halaman tidak ditemukan</h1>
        <p className={styles.description}>
          Maaf, halaman yang Anda cari tidak tersedia saat ini.
        </p>
        <Link href="/" className={styles.link}>
          Kembali ke beranda
        </Link>
      </div>
    </PageContainer>
  );
}
