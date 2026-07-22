import styles from "./gallery-mosaic.module.css";
import type { HomeGalleryItem } from "../types/home.types";

type GalleryMosaicProps = {
  items: HomeGalleryItem[];
};

export function GalleryMosaic({ items }: GalleryMosaicProps) {
  const validItems = items.filter(
    (item) => typeof item.image.src === "string" && item.image.src.trim() !== ""
  );
  const displayItems = validItems.slice(0, 6);

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
