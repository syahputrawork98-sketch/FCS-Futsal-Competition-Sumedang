import { PageContainer } from "@/components/layout/page-container/page-container";
import { SectionHeading } from "@/components/ui/section-heading/section-heading";
import { GalleryMosaic } from "./gallery-mosaic";
import { HomeSectionSkeleton } from "./home-section-skeleton";
import { HomeEmptyState } from "./home-empty-state";
import { HomeErrorState } from "./home-error-state";
import styles from "./gallery-preview-section.module.css";
import type { HomeSectionState, HomeGalleryItem, HomeGalleryItemWithSource } from "../types/home.types";

type GalleryPreviewSectionProps = {
  gallery: HomeSectionState<HomeGalleryItem[]>;
};

function hasValidImageSource(item: HomeGalleryItem): item is HomeGalleryItemWithSource {
  return (
    typeof item.image.src === "string" &&
    item.image.src.trim().length > 0
  );
}

export function GalleryPreviewSection({ gallery }: GalleryPreviewSectionProps) {
  const validItems: HomeGalleryItemWithSource[] = gallery.status === "ready" 
    ? gallery.data.filter(hasValidImageSource)
    : [];
    
  const hasData = gallery.status === "ready" && validItems.length > 0;
  const showEmptyState = gallery.status === "empty" || (gallery.status === "ready" && validItems.length === 0);

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

          {showEmptyState && (
            <HomeEmptyState title="Galeri kompetisi belum tersedia." />
          )}

          {hasData && (
            <GalleryMosaic items={validItems} />
          )}
        </div>
      </PageContainer>
    </section>
  );
}
