import styles from "./page-container.module.css";

interface PageContainerProps {
  children: React.ReactNode;
}

export function PageContainer({ children }: PageContainerProps) {
  return <div className={styles.container}>{children}</div>;
}
