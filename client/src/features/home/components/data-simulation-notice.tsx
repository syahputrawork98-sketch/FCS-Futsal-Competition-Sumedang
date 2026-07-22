import { Info } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container/page-container";
import styles from "./data-simulation-notice.module.css";

export function DataSimulationNotice() {
  return (
    <section className={styles.section} aria-label="Informasi Data">
      <PageContainer>
        <div className={styles.container}>
          <Info className={styles.icon} size={20} aria-hidden="true" />
          <p className={styles.text}>
            Data pada prototype FCS ini merupakan data simulasi untuk kebutuhan demonstrasi.
          </p>
        </div>
      </PageContainer>
    </section>
  );
}
