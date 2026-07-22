import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container/page-container";
import { SiteBrand } from "@/components/layout/site-brand/site-brand";
import { primaryNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  const infoNav = primaryNavigation.find((item) => item.label === "Informasi");
  const informationLinks = infoNav?.children || [];

  return (
    <footer className={styles.footer}>
      <PageContainer>
        <div className={styles.content}>
          <div className={styles.brandArea}>
            <SiteBrand inverse />
            <p className={styles.description}>{siteConfig.description}</p>
          </div>

          <div className={styles.navArea}>
            <h3 className={styles.heading}>Navigasi Portal</h3>
            <ul className={styles.list}>
              {primaryNavigation.map(item => (
                <li key={item.label}>
                  <Link href={item.href || (item.children && item.children[0].href) || "#"} className={styles.link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.infoArea}>
            <h3 className={styles.heading}>Informasi Kompetisi</h3>
            <div className={styles.infoContent}>
              <p>Prototype: FCS Industrial Cup Sumedang 2026</p>
              <p>Status data: Simulasi untuk demonstrasi</p>
            </div>
          </div>

          <div className={styles.partnerArea}>
            <h3 className={styles.heading}>Informasi dan Mitra</h3>
            <ul className={styles.list}>
              {informationLinks.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>Prototype FCS menggunakan data simulasi untuk kebutuhan demonstrasi.</p>
        </div>
      </PageContainer>
    </footer>
  );
}
