import { PageContainer } from "@/components/layout/page-container/page-container";
import { SiteBrand } from "@/components/layout/site-brand/site-brand";
import { DesktopNavigation } from "./desktop-navigation";
import { MobileNavigation } from "./mobile-navigation";
import { ActionLink } from "@/components/ui/action-link/action-link";
import { headerAction } from "@/config/navigation";
import styles from "./site-header.module.css";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <PageContainer>
        <div className={styles.content}>
          <div className={styles.brand}>
            <SiteBrand inverse />
          </div>

          <div className={styles.desktopNav}>
            <DesktopNavigation />
          </div>

          <div className={styles.desktopAction}>
            <ActionLink href={headerAction.href} size="small" variant="inverse">
              {headerAction.label}
            </ActionLink>
          </div>

          <div className={styles.mobileNav}>
            <MobileNavigation />
          </div>
        </div>
      </PageContainer>
    </header>
  );
}
