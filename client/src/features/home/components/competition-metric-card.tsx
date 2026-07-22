import styles from "./competition-metric-card.module.css";

type CompetitionMetricCardProps = {
  label: string;
  value: string;
};

export function CompetitionMetricCard({ label, value }: CompetitionMetricCardProps) {
  return (
    <div className={styles.card}>
      <span className={styles.value}>{value}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
