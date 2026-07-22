import styles from "./gallery-mosaic.module.css";
import type { HomeGalleryItemWithSource } from "../types/home.types";

type GalleryMosaicProps = {
  items: HomeGalleryItemWithSource[];
};

export function GalleryMosaic({ items }: GalleryMosaicProps) {
  const displayItems = items.slice(0, 6);

  return (
    <div className={styles.container}>
      {displayItems.map((item) => (
        <div key={item.id} className={styles.imageWrapper}>
          <img src={item.image.src} alt={item.image.alt} className={styles.image} />
        </div>
      ))}
    </div>
  );
}
