import React from "react";
import { HelpCircle } from "lucide-react";
import styles from "./tiebreaker-rules.module.css";

export function TiebreakerRules() {
  return (
    <section className={styles.card} aria-label="Aturan Penentuan Peringkat dan Tie-Break">
      <h3 className={styles.title}>
        <HelpCircle size={18} color="var(--color-accent-blue, #38bdf8)" aria-hidden="true" />
        <span>Aturan Penentuan Peringkat & Tie-Break</span>
      </h3>
      <ol className={styles.list}>
        <li>Total poin terbanyak (Menang: 3, Seri: 1, Kalah: 0)</li>
        <li>Selisih gol (SG = Gol Memasukkan - Gol Kebobolan)</li>
        <li>Jumlah gol memasukkan (GM) terbanyak</li>
      </ol>
      <p className={styles.note}>
        * Apabila dua atau lebih tim tetap memiliki nilai yang persis sama setelah ketiga kriteria di atas, posisi resmi ditandai sebagai &quot;Menunggu keputusan&quot; panitia tanpa menggunakan alfabet atau ID tim sebagai penentu otomatis.
      </p>
    </section>
  );
}
