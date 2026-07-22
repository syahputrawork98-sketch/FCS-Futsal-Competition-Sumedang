import styles from "./home-section-skeleton.module.css";

type HomeSectionSkeletonProps = {
  lines?: number;
};

export function HomeSectionSkeleton({ lines = 3 }: HomeSectionSkeletonProps) {
  return (
    <div className={styles.container} aria-hidden="true">
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className={styles.line} />
      ))}
    </div>
  );
}
