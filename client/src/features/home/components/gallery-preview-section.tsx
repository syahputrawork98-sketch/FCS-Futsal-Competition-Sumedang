import { PageContainer } from "@/components/layout/page-container/page-container";
import { SectionHeading } from "@/components/ui/section-heading/section-heading";
import { GalleryMosaic } from "./gallery-mosaic";
import { HomeSectionSkeleton } from "./home-section-skeleton";
import { HomeEmptyState } from "./home-empty-state";
import { HomeErrorState } from "./home-error-state";
import styles from "./gallery-preview-section.module.css";
import type { HomeSectionState, HomeGalleryItem } from "../../types/home.types";

type GalleryPreviewSectionProps = {
  gallery: HomeSectionState<HomeGalleryItem[]>;
};

export function GalleryPreviewSection({ gallery }: GalleryPreviewSectionProps) {
  // Plan states that Gallery CTA is only visible if there is valid data
  const hasData = gallery.status === "ready" && gallery.data.length > 0;

  return (
    <section className={styles.section}>
      <PageContainer>
        <SectionHeading
          title="Galeri Kompetisi"
          actionLabel={hasData ? "Lihat Galeri" : undefined}
          actionHref={hasData ? "/galeri" : undefined}
        />

        <div className={styles.content}>
          {gallery.status === "loading" && <HomeSectionSkeleton lines={5} />}
          
          {gallery.status === "error" && (
            <HomeErrorState title="Gagal Memuat Galeri" description={gallery.message} />
          )}

          {gallery.status === "empty" && (
            <HomeEmptyState title="Galeri kompetisi belum tersedia." />
          )}

          {hasData && (
            <GalleryMosaic />
          )}
        </div>
      </PageContainer>
    </section>
  );
}
