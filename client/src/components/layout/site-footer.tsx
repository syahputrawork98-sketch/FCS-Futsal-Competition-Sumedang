import { siteConfig } from "@/config/site";
import { PageContainer } from "./page-container";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <PageContainer>
        <p>&copy; {new Date().getFullYear()} {siteConfig.name}</p>
        <p>Aplikasi dalam tahap persiapan teknis.</p>
      </PageContainer>
    </footer>
  );
}
