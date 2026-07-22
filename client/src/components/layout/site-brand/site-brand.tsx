import Link from "next/link";
import { siteConfig } from "@/config/site";
import styles from "./site-brand.module.css";

type SiteBrandProps = {
  compact?: boolean;
  inverse?: boolean;
};

export function SiteBrand({ compact = false, inverse = false }: SiteBrandProps) {
  const classNames = [
    styles.brand,
    inverse ? styles.inverse : styles.default
  ].join(" ");

  return (
    <Link href="/" className={classNames} aria-label={`Beranda ${siteConfig.name}`}>
      {compact ? siteConfig.shortName : siteConfig.name}
    </Link>
  );
}
