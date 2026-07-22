# 02_FONDASI_UI_GLOBAL_DAN_NAVIGASI_PORTAL.md

## 1. Identitas Dokumen

- **Judul pekerjaan:** Fondasi UI Global dan Navigasi Portal
- **Nama file:** `02_FONDASI_UI_GLOBAL_DAN_NAVIGASI_PORTAL.md`
- **Nomor plan:** 02
- **Versi dokumen:** 1.0
- **Status:** DISETUJUI
- **Tanggal dibuat:** 2026-07-23
- **Tanggal diperbarui:** 2026-07-23
- **Penyusun:** Pengguna bersama ChatGPT
- **Pelaksana implementasi:** Gemini melalui Antigravity
- **Proyek:** FCS — Futsal Competition Sumedang
- **Area:** Client, UI Foundation, Layout, dan Navigation
- **Repository:** `syahputrawork98-sketch/FCS-Futsal-Competition-Sumedang`
- **Branch:** `main`
- **Commit dasar yang diperiksa:** `8fbc0140f8bd7632ea11fbf7496b56ec47d0d91c`
- **Plan sebelumnya:** `01_PERSIAPAN_REPOSITORY_DAN_FONDASI_FRONTEND.md`
- **Plan berikutnya yang direncanakan:** Implementasi Halaman Beranda

> Dokumen ini telah disetujui oleh pengguna dan dapat digunakan sebagai instruksi implementasi setelah ditempatkan pada `docs/plan/`.

---

## 2. Ringkasan Pekerjaan

Plan ini mengatur pembangunan fondasi antarmuka global website FCS setelah fondasi repository dan Next.js selesai dibuat melalui Plan 01.

Pekerjaan mencakup:

- penerapan sistem token visual FCS;
- penerapan font Inter;
- perapian global CSS;
- penghapusan dark mode otomatis;
- penataan container dan responsive foundation;
- pembuatan identitas teks FCS;
- pembuatan navigasi desktop;
- pembuatan dropdown navigasi;
- pembuatan mobile navigation drawer;
- pembuatan header global;
- pembuatan footer global;
- pembuatan beberapa komponen UI dasar;
- penataan konfigurasi navigasi;
- perbaikan struktur layout;
- penyesuaian halaman placeholder dan 404 agar menggunakan fondasi global baru.

Plan ini belum mengimplementasikan isi halaman Beranda yang sebenarnya.

Plan ini juga belum mengimplementasikan:

- hero kompetisi;
- hasil final;
- pertandingan terbaru;
- klasemen;
- bracket;
- penghargaan;
- tim;
- pemain;
- berita;
- galeri;
- sponsor;
- backend;
- API;
- database;
- autentikasi;
- deployment.

Hasil utama yang diharapkan adalah fondasi visual dan navigasi yang konsisten, reusable, responsif, dapat diakses, dan siap dipakai oleh halaman Beranda serta halaman portal berikutnya.

---

## 3. Latar Belakang

Plan 01 telah menyiapkan:

- struktur repository;
- aplikasi Next.js;
- TypeScript;
- App Router;
- CSS global;
- CSS Modules;
- komponen `PageContainer`;
- header sederhana;
- footer sederhana;
- halaman placeholder;
- halaman tidak ditemukan;
- dokumentasi dasar.

Namun, fondasi saat ini masih bersifat teknis dan belum menerapkan identitas visual resmi FCS.

Kondisi saat ini:

- header hanya menampilkan teks `FCS`;
- header belum memiliki menu utama;
- belum ada dropdown;
- belum ada navigasi mobile;
- footer masih sangat sederhana;
- global CSS masih menggunakan warna generik;
- global CSS masih mengikuti dark mode sistem perangkat;
- font masih menggunakan system font;
- belum ada token warna;
- belum ada token spacing;
- belum ada token radius;
- belum ada token shadow;
- belum ada komponen tombol reusable;
- belum ada badge reusable;
- belum ada section heading reusable;
- belum ada konfigurasi navigasi terpusat;
- belum ada active navigation state;
- belum ada skip link;
- belum ada drawer yang mengelola fokus keyboard.

Perencanaan halaman Beranda telah menetapkan bahwa komponen seperti header, drawer mobile, tombol, badge, section heading, dan footer harus dibuat reusable agar dapat digunakan oleh halaman lain.

Karena itu, komponen global tersebut harus dibuat sebelum implementasi seluruh section Beranda.

---

## 4. Tujuan

Pekerjaan ini bertujuan untuk:

1. Menerapkan identitas visual dasar FCS ke frontend.
2. Menyediakan token visual yang dapat digunakan secara konsisten.
3. Menghapus ketergantungan tampilan pada dark mode perangkat.
4. Menetapkan tipografi Inter sebagai font utama.
5. Membuat container responsif sesuai panduan visual.
6. Membuat header global yang dapat digunakan seluruh halaman.
7. Membuat navigasi desktop yang ringkas dan konsisten.
8. Membuat dropdown untuk kelompok halaman terkait.
9. Membuat mobile navigation drawer yang accessible.
10. Membuat footer global yang mengikuti struktur portal.
11. Membuat komponen UI dasar yang reusable.
12. Memisahkan konfigurasi navigasi dari komponen tampilan.
13. Menyiapkan struktur komponen agar mudah dikembangkan.
14. Menjaga halaman portal tetap menyerupai portal kompetisi, bukan dashboard.
15. Menjadi fondasi bagi implementasi Beranda pada plan berikutnya.
16. Mengurangi risiko duplikasi CSS dan komponen.
17. Mempermudah pemeliharaan dan pengembangan jangka panjang.

---

## 5. Referensi Google Drive

Gemini wajib membaca file plan ini secara penuh sebelum melakukan implementasi.

Bahan berikut menjadi referensi utama.

| No. | Dokumen atau folder | Status | Kegunaan |
|---:|---|---|---|
| 1 | `00_INDEX_DAN_STATUS_PERENCANAAN_WEBSITE.md` | AKTIF | Menentukan sumber kebenaran, status file, format, dan aturan penggunaan dokumen |
| 2 | `01_ALUR_KERJA_PERENCANAAN_DAN_IMPLEMENTASI_WEBSITE.md` | DISETUJUI | Menentukan pembagian peran, pengujian, Git, dan review |
| 3 | `02_TEMPLATE_PLAN_IMPLEMENTASI_WEBSITE.md` | AKTIF | Acuan format plan |
| 4 | `01_FCS_BRIEF_ARAH_DESAIN_WEBSITE.md` | DISETUJUI | Menentukan tujuan, karakter, dan prioritas portal |
| 5 | `FCS – Panduan Identitas Visual Website` | DISETUJUI | Sumber warna, tipografi, spacing, radius, shadow, layout, navigasi, dan footer |
| 6 | `01_FCS_SITEMAP_DAN_ARSITEKTUR_INFORMASI.md` | DISETUJUI | Menentukan menu, hierarki, submenu, dan URL awal |
| 7 | `01_HOM-01_SPESIFIKASI_HALAMAN_BERANDA.md` | DISETUJUI | Menentukan fungsi header, footer, dan arah Beranda |
| 8 | `02_HOM-01_PEMETAAN_DATA_BERANDA.csv` | DISETUJUI | Menentukan menu, CTA, footer, dan pemetaan data global |
| 9 | `03_HOM-01_DAFTAR_REFERENSI.md` | DISETUJUI | Menentukan urutan sumber kebenaran |
| 10 | `HOM-02 — Wireframe Beranda .pdf` | DISETUJUI | Sumber kebenaran visual untuk layout header, footer, desktop, dan mobile |
| 11 | `HOM-03_SPESIFIKASI_KOMPONEN_UI_BERANDA.md` | DISETUJUI | Menentukan komponen UI global, properti, state, responsive, dan aksesibilitas |
| 12 | `01_PERSIAPAN_REPOSITORY_DAN_FONDASI_FRONTEND.md` | DISETUJUI | Menentukan fondasi teknis yang sudah dibuat |

### 5.1 Referensi yang Tidak Boleh Digunakan

File berikut tidak boleh digunakan:

```text
HOM-02_WIREFRAME_BERANDA.md
```

Alasan:

- isi file tidak sesuai dengan nama;
- bukan sumber wireframe;
- telah diberi status `SALAH / JANGAN DIGUNAKAN`;
- wireframe resmi menggunakan file PDF.

### 5.2 Urutan Sumber Kebenaran

Apabila terdapat konflik:

1. keputusan pengguna terbaru yang telah disetujui;
2. file plan aktif;
3. index dan status perencanaan;
4. panduan identitas visual;
5. sitemap dan arsitektur informasi;
6. spesifikasi halaman dan komponen;
7. wireframe PDF;
8. source code pada commit terakhir yang disetujui;
9. catatan diskusi yang belum disetujui.

---

## 6. Kondisi Awal

### 6.1 Repository

```text
Repository : syahputrawork98-sketch/FCS-Futsal-Competition-Sumedang
Branch     : main
Base SHA   : 8fbc0140f8bd7632ea11fbf7496b56ec47d0d91c
```

### 6.2 Status Plan 01

- Review struktur repository: LULUS
- Review kesesuaian source code: LULUS
- Review scope: LULUS
- File tambahan tidak diperlukan: sudah dihapus
- Header menggunakan link, bukan heading utama: sudah diperbaiki
- Footer tidak memakai copyright otomatis: sudah diperbaiki
- Type-check pengguna: belum dicatat dalam plan ini
- Lint pengguna: belum dicatat dalam plan ini
- Build pengguna: belum dicatat dalam plan ini
- Pengujian browser: belum dicatat dalam plan ini

### 6.3 Struktur Client yang Berkaitan

```text
client/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.module.css
│   │   ├── not-found.tsx
│   │   ├── page.module.css
│   │   └── page.tsx
│   ├── components/
│   │   └── layout/
│   │       ├── page-container.module.css
│   │       ├── page-container.tsx
│   │       ├── site-footer.module.css
│   │       ├── site-footer.tsx
│   │       ├── site-header.module.css
│   │       └── site-header.tsx
│   └── config/
│       └── site.ts
├── package.json
├── package-lock.json
└── tsconfig.json
```

### 6.4 Tampilan Awal

Saat ini:

- header hanya menampilkan singkatan FCS;
- tidak ada menu;
- tidak ada active state;
- tidak ada dropdown;
- tidak ada hamburger menu;
- tidak ada mobile drawer;
- footer hanya berisi nama proyek dan status persiapan;
- halaman Home masih berupa placeholder;
- halaman 404 masih memakai styling dasar.

### 6.5 Global CSS Saat Ini

Global CSS saat ini menggunakan:

- warna putih dan hitam generik;
- system font;
- media query `prefers-color-scheme: dark`;
- focus state sederhana;
- reduced motion.

Dark mode otomatis tersebut tidak sesuai dengan keputusan visual:

```text
Dark Framing, Light Information Surface
```

FCS menggunakan area gelap secara terarah, bukan mengubah seluruh website menjadi gelap.

---

## 7. Hasil Akhir yang Diharapkan

Setelah implementasi selesai:

1. Sistem token visual FCS tersedia.
2. Font Inter diterapkan melalui mekanisme font Next.js.
3. Global CSS menggunakan token yang konsisten.
4. Dark mode otomatis dihapus.
5. Latar halaman utama menggunakan Soft Background.
6. Header dan footer menggunakan Midnight Navy.
7. Container mengikuti lebar maksimum 1280 px.
8. Margin container menyesuaikan desktop, tablet, dan mobile.
9. Header global tersedia.
10. Navigasi desktop tersedia.
11. Dropdown `Tim` tersedia.
12. Dropdown `Informasi` tersedia.
13. Active navigation state tersedia.
14. CTA informasi kompetisi tersedia.
15. Mobile hamburger button tersedia.
16. Mobile drawer tersedia.
17. Drawer dapat ditutup dengan tombol, Escape, dan pemilihan link.
18. Fokus keyboard dikelola.
19. Scroll halaman dikunci ketika drawer terbuka.
20. Footer global tersedia.
21. Footer menggunakan struktur informasi yang rapi.
22. Footer menampilkan penanda data simulasi.
23. Komponen `ActionLink` tersedia.
24. Komponen `IconButton` tersedia.
25. Komponen `StatusBadge` tersedia.
26. Komponen `SectionHeading` tersedia.
27. Identitas FCS tidak menggunakan logo rekaan.
28. Placeholder Home menggunakan fondasi UI baru.
29. Halaman 404 menggunakan fondasi UI baru.
30. Tidak ada implementasi section Home sebenarnya.
31. Tidak ada backend, API, atau database.
32. Tidak ada pengujian oleh Gemini.
33. Tidak ada tindakan Git oleh Gemini.

---

## 8. Ruang Lingkup

Gemini diperbolehkan mengerjakan bagian berikut.

### 8.1 Sistem Visual Global

- membuat token warna;
- membuat token teks;
- membuat token spacing;
- membuat token radius;
- membuat token shadow;
- membuat token ukuran container;
- membuat token motion;
- membuat token z-index;
- menerapkan font Inter;
- memperbarui global reset;
- memperbarui focus state;
- mempertahankan reduced motion;
- menghapus dark mode otomatis.

### 8.2 Struktur Layout

- merapikan `PageContainer`;
- membuat `SiteBrand`;
- merapikan `SiteHeader`;
- membuat desktop navigation;
- membuat dropdown navigation;
- membuat mobile navigation;
- membuat mobile drawer;
- merapikan `SiteFooter`;
- menambahkan skip link;
- menambahkan `id="main-content"` pada main content.

### 8.3 Komponen UI Dasar

- membuat `ActionLink`;
- membuat `IconButton`;
- membuat `StatusBadge`;
- membuat `SectionHeading`.

### 8.4 Konfigurasi

- membuat konfigurasi navigasi;
- membuat tipe data navigasi;
- memperbarui konfigurasi situs bila diperlukan;
- menjaga label, href, dan submenu berada dalam satu sumber konfigurasi.

### 8.5 Halaman Placeholder

- memperbarui halaman Home placeholder agar menggunakan fondasi baru;
- memperbarui halaman 404 agar menggunakan fondasi baru;
- tidak mengubah placeholder menjadi halaman Beranda final.

### 8.6 Dependency

- menambahkan satu keluarga ikon yang disetujui dalam plan;
- tidak menambah dependency UI lainnya.

---

## 9. Di Luar Ruang Lingkup

Gemini tidak boleh mengerjakan:

- hero kompetisi;
- Champion Hero;
- pertandingan final;
- kartu pertandingan;
- hasil pertandingan terbaru;
- competition overview;
- klasemen;
- bracket;
- penghargaan;
- kartu tim;
- kartu pemain;
- berita;
- galeri;
- sponsor logo;
- sponsor group;
- data Home;
- typed prototype data Home;
- API client;
- server;
- backend;
- database;
- Railway;
- Neon;
- autentikasi;
- dashboard admin;
- formulir;
- route handler;
- middleware;
- route halaman portal sebenarnya;
- halaman Pertandingan;
- halaman Klasemen;
- halaman Tim;
- halaman Pemain;
- halaman Statistik;
- halaman Berita;
- halaman Informasi;
- halaman Penghargaan;
- halaman Galeri;
- halaman Sponsor;
- halaman Tentang Kompetisi;
- loading skeleton data;
- empty state data;
- error state data;
- analytics;
- tracking;
- logo baru;
- gambar AI;
- aset hero;
- foto pemain;
- logo sponsor;
- design system lengkap;
- Storybook;
- testing framework;
- Tailwind CSS;
- Sass;
- CSS-in-JS;
- UI library;
- Radix UI;
- shadcn/ui;
- Material UI;
- Chakra UI;
- state-management library;
- data-fetching library;
- animation library;
- perubahan Next.js;
- upgrade dependency besar;
- deployment;
- GitHub Actions;
- tindakan Git;
- pengujian.

> Jangan mengerjakan perubahan di luar ruang lingkup file plan ini.

---

## 10. Struktur Repository yang Berkaitan

### 10.1 Struktur Akhir yang Direkomendasikan

```text
client/src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.module.css
│   ├── not-found.tsx
│   ├── page.module.css
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── page-container/
│   │   │   ├── page-container.module.css
│   │   │   └── page-container.tsx
│   │   ├── site-brand/
│   │   │   ├── site-brand.module.css
│   │   │   └── site-brand.tsx
│   │   ├── site-header/
│   │   │   ├── desktop-navigation.module.css
│   │   │   ├── desktop-navigation.tsx
│   │   │   ├── mobile-navigation.module.css
│   │   │   ├── mobile-navigation.tsx
│   │   │   ├── site-header.module.css
│   │   │   └── site-header.tsx
│   │   └── site-footer/
│   │       ├── site-footer.module.css
│   │       └── site-footer.tsx
│   └── ui/
│       ├── action-link/
│       │   ├── action-link.module.css
│       │   └── action-link.tsx
│       ├── icon-button/
│       │   ├── icon-button.module.css
│       │   └── icon-button.tsx
│       ├── section-heading/
│       │   ├── section-heading.module.css
│       │   └── section-heading.tsx
│       └── status-badge/
│           ├── status-badge.module.css
│           └── status-badge.tsx
├── config/
│   ├── navigation.ts
│   └── site.ts
├── styles/
│   └── tokens.css
└── types/
    └── navigation.ts
```

### 10.2 Aturan Struktur

- Komponen besar menggunakan folder masing-masing.
- File CSS Module berada dekat dengan komponen.
- Konfigurasi navigasi tidak ditulis permanen di header.
- Label menu tidak diduplikasi antara desktop, mobile, dan footer.
- Komponen tidak membaca data langsung dari Google Drive.
- Jangan membuat barrel file `index.ts`.
- Jangan membuat folder kosong.
- Jangan membuat utility yang belum digunakan.
- Jangan membuat layer abstraksi berlebihan.
- Jangan membuat komponen polymorphic kompleks.
- Jangan memindahkan file di luar kebutuhan Plan 02.

---

## 11. Teknologi yang Digunakan

- **Bahasa:** TypeScript
- **Framework:** Next.js App Router
- **Runtime:** Node.js 24
- **Package manager:** npm
- **Styling:** Global CSS dan CSS Modules
- **Font:** Inter melalui `next/font/google`
- **Ikon:** `lucide-react`
- **Routing:** Next.js file-system routing dan `next/link`
- **Mobile drawer:** native HTML `<dialog>`
- **State lokal:** React state pada komponen navigasi
- **Server:** Tidak berkaitan
- **Database:** Tidak berkaitan

---

## 12. Sistem Token Visual

Buat:

```text
client/src/styles/tokens.css
```

### 12.1 Warna Utama

```css
:root {
  --color-midnight-navy: #0b1220;
  --color-electric-blue: #2563eb;
  --color-deep-charcoal: #111827;
  --color-steel-blue: #334155;
  --color-cyan-accent: #22d3ee;
  --color-muted-gold: #c6a15b;
}
```

### 12.2 Warna Permukaan

```css
:root {
  --color-white: #ffffff;
  --color-soft-background: #f7f9fc;
  --color-secondary-surface: #f1f5f9;
  --color-dark-surface: #162033;
}
```

### 12.3 Warna Teks

```css
:root {
  --color-text-primary: #111827;
  --color-text-secondary: #475569;
  --color-text-muted: #64748b;
  --color-text-inverse: #ffffff;
  --color-text-inverse-secondary: #cbd5e1;
  --color-text-inverse-muted: #94a3b8;
}
```

### 12.4 Warna Status

```css
:root {
  --color-status-live: #ef4444;
  --color-status-success: #16a34a;
  --color-status-warning: #d97706;
  --color-status-danger: #dc2626;
  --color-status-info: #2563eb;
  --color-status-neutral: #64748b;
}
```

### 12.5 Border

```css
:root {
  --color-border-light: #e2e8f0;
  --color-border-dark: rgba(255, 255, 255, 0.12);
}
```

### 12.6 Spacing

Gunakan kelipatan 4 px:

```css
:root {
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;
}
```

### 12.7 Radius

```css
:root {
  --radius-small: 6px;
  --radius-medium: 10px;
  --radius-large: 14px;
  --radius-pill: 999px;
}
```

### 12.8 Shadow

```css
:root {
  --shadow-none: none;
  --shadow-1: 0 2px 8px rgba(15, 23, 42, 0.08);
  --shadow-2: 0 8px 24px rgba(15, 23, 42, 0.12);
}
```

### 12.9 Motion

```css
:root {
  --motion-fast: 150ms;
  --motion-normal: 225ms;
  --motion-slow: 300ms;
  --motion-ease: ease;
}
```

### 12.10 Container

```css
:root {
  --container-max-width: 1280px;
  --container-padding-mobile: 16px;
  --container-padding-tablet: 24px;
  --container-padding-desktop: 32px;
}
```

### 12.11 Header dan Layer

```css
:root {
  --header-height: 76px;
  --z-header: 40;
  --z-dropdown: 50;
  --z-drawer: 60;
}
```

### 12.12 Aturan Token

- Jangan menggunakan hex code berulang apabila token tersedia.
- CSS Module boleh menggunakan nilai khusus hanya jika benar-benar lokal.
- Jangan membuat token untuk setiap ukuran kecil.
- Jangan membuat token tanpa pemakaian.
- Jangan mengganti nama warna resmi FCS.
- Muted Gold bukan warna CTA umum.
- Cyan bukan warna tombol utama.
- Midnight Navy bukan latar seluruh halaman.
- Warna tim tidak menggantikan warna FCS.

---

## 13. Tipografi

### 13.1 Font

Gunakan:

```ts
import { Inter } from "next/font/google";
```

Konfigurasi yang disarankan:

```ts
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
```

Terapkan variable font pada `<body>`.

### 13.2 Font Family

```css
font-family:
  var(--font-inter),
  Inter,
  system-ui,
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  sans-serif;
```

### 13.3 Bobot

Bobot yang digunakan:

- 400;
- 500;
- 600;
- 700;
- 800 secara terbatas.

Bobot 800 hanya digunakan untuk:

- skor;
- angka unggulan;
- display pendek.

### 13.4 Skala Desktop

- Display: 48/56 px
- H1: 40/48 px
- H2: 32/40 px
- H3: 24/32 px
- H4: 20/28 px
- Body Large: 18/28 px
- Body: 16/24 px
- Body Small: 14/20 px
- Caption: 12/16 px

### 13.5 Skala Mobile

- Display: 32/40 px
- H1: 28/36 px
- H2: 24/32 px
- H3: 20/28 px
- H4: 18/26 px
- Body: 14–16 px

### 13.6 Aturan

- Heading tidak seluruhnya huruf kapital.
- Badge dan label pendek boleh huruf kapital.
- Jangan menggunakan teks lebih kecil dari 12 px.
- Jangan menggunakan italic dekoratif.
- Jangan menggunakan text glow.
- Jangan menggunakan text gradient.
- Panjang heading harus terkendali.
- Paragraf memiliki line-height yang cukup.

---

## 14. Global CSS

Perbarui:

```text
client/src/app/globals.css
```

### 14.1 Import

Import `tokens.css` sebelum global CSS pada root layout.

### 14.2 Reset

Global CSS minimal mencakup:

- box sizing;
- margin dasar;
- body;
- heading;
- paragraph;
- link;
- button;
- image;
- list;
- table;
- dialog;
- focus visible;
- reduced motion.

### 14.3 Body

Body menggunakan:

- latar `Soft Background`;
- teks `Primary Text`;
- font Inter;
- min-height 100%;
- antialiasing bila relevan.

### 14.4 Dark Mode

Hapus:

```css
@media (prefers-color-scheme: dark)
```

Jangan membuat:

- theme toggle;
- dark mode global;
- theme provider;
- local storage theme;
- data-theme.

Area gelap ditentukan oleh komponen, bukan preferensi perangkat.

### 14.5 Link

- tidak selalu memiliki underline;
- hover terlihat;
- focus terlihat;
- link dalam body content dapat menggunakan Electric Blue;
- link navigasi mengikuti tema header.

### 14.6 Gambar

Atur global:

```css
img,
picture,
svg {
  display: block;
  max-width: 100%;
}
```

Jangan mengubah rasio gambar secara global.

### 14.7 Dialog

Atur reset dasar:

- border nol;
- padding nol;
- max-width none;
- background transparan bila komponen mengatur;
- backdrop tersedia.

### 14.8 Scroll Lock

Sediakan class atau attribute untuk:

```css
body.navigation-open {
  overflow: hidden;
}
```

Class hanya diterapkan ketika mobile drawer terbuka.

### 14.9 Focus

Focus ring:

- menggunakan Electric Blue;
- outline terlihat;
- offset memadai;
- tidak dihapus.

### 14.10 Reduced Motion

Pertahankan:

```css
@media (prefers-reduced-motion: reduce)
```

Animasi dan transition harus dipersingkat atau dinonaktifkan.

---

## 15. Page Container

Pindahkan dan perbarui:

```text
client/src/components/layout/page-container/
```

### 15.1 Fungsi

`PageContainer` bertanggung jawab untuk:

- membatasi lebar konten;
- memberi margin otomatis;
- memberi padding horizontal;
- menjaga konten tidak menyentuh layar;
- digunakan oleh header, main, dan footer.

### 15.2 Aturan

```css
width: 100%;
max-width: var(--container-max-width);
margin-inline: auto;
padding-inline: var(--container-padding-mobile);
```

Breakpoint:

- mobile: 16 px;
- tablet: 24 px;
- desktop: 32 px.

### 15.3 Properti

Komponen minimal menerima:

```ts
type PageContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section";
};
```

Jika properti `as` menambah kompleksitas yang tidak diperlukan, cukup gunakan `div`.

Jangan membuat polymorphic component kompleks.

---

## 16. Identitas FCS

Buat:

```text
client/src/components/layout/site-brand/
```

### 16.1 Keputusan Logo

Plan 02 tidak membuat logo baru.

Sampai aset logo resmi tersedia dan disetujui, gunakan identitas teks:

```text
FCS
Futsal Competition Sumedang
```

### 16.2 Struktur

`SiteBrand` dapat menampilkan:

- singkatan `FCS`;
- nama lengkap;
- varian compact;
- varian inverse;
- tautan ke Beranda.

### 16.3 Properti

```ts
type SiteBrandProps = {
  compact?: boolean;
  inverse?: boolean;
};
```

### 16.4 Aturan

- jangan membuat simbol atau emblem sendiri;
- jangan menggunakan gambar Konsep C sebagai logo;
- jangan mengambil logo dari internet;
- jangan menggunakan logo Next.js;
- jangan menggunakan logo Vercel;
- jangan mengarang crest futsal;
- nama resmi adalah `FCS — Futsal Competition Sumedang`;
- nama lama tidak digunakan.

---

## 17. Konfigurasi Navigasi

Buat:

```text
client/src/config/navigation.ts
client/src/types/navigation.ts
```

### 17.1 Tipe Data

```ts
export type NavigationChild = {
  label: string;
  href: string;
};

export type NavigationItem = {
  label: string;
  href?: string;
  matchPaths?: string[];
  children?: NavigationChild[];
};
```

### 17.2 Menu Utama

```ts
export const primaryNavigation = [
  {
    label: "Beranda",
    href: "/",
  },
  {
    label: "Pertandingan",
    href: "/pertandingan",
  },
  {
    label: "Klasemen",
    href: "/klasemen",
    matchPaths: ["/klasemen", "/bracket"],
  },
  {
    label: "Tim",
    matchPaths: ["/tim", "/pemain"],
    children: [
      {
        label: "Daftar Tim",
        href: "/tim",
      },
      {
        label: "Daftar Pemain",
        href: "/pemain",
      },
    ],
  },
  {
    label: "Statistik",
    href: "/statistik",
  },
  {
    label: "Berita",
    href: "/berita",
  },
  {
    label: "Informasi",
    matchPaths: [
      "/penghargaan",
      "/galeri",
      "/tentang",
      "/sponsor",
    ],
    children: [
      {
        label: "Penghargaan",
        href: "/penghargaan",
      },
      {
        label: "Galeri",
        href: "/galeri",
      },
      {
        label: "Tentang Kompetisi",
        href: "/tentang",
      },
      {
        label: "Sponsor dan Mitra",
        href: "/sponsor",
      },
    ],
  },
] satisfies NavigationItem[];
```

### 17.3 CTA Header

```ts
export const headerAction = {
  label: "Tentang Kompetisi",
  href: "/tentang",
} as const;
```

### 17.4 Aturan Active State

- `/` hanya aktif pada root.
- `/pertandingan` aktif pada seluruh turunan pertandingan.
- `Klasemen` aktif pada `/klasemen` dan `/bracket`.
- `Tim` aktif pada `/tim` dan `/pemain`.
- `Informasi` aktif pada seluruh halaman anaknya.
- Gunakan `aria-current="page"` pada link aktif.
- Active state tidak hanya menggunakan warna.
- Tambahkan indikator visual seperti garis bawah atau bentuk sederhana.

### 17.5 Routing

Plan ini tidak membuat route baru.

Link boleh mengarah ke route yang belum diimplementasikan. Sampai route dibuat, halaman tersebut dapat menampilkan 404.

Jangan membuat halaman placeholder tambahan hanya untuk memenuhi link navigasi.

---

## 18. Header Global

Pindahkan dan perbarui:

```text
client/src/components/layout/site-header/
```

### 18.1 Struktur Desktop

```text
SiteBrand | Primary Navigation | Tentang Kompetisi
```

Pembagian visual mengikuti:

- identitas sekitar 2 kolom;
- navigasi sekitar 8 kolom;
- CTA sekitar 2 kolom.

### 18.2 Tampilan

Header menggunakan:

- Midnight Navy;
- teks putih;
- tinggi sekitar 72–80 px;
- sticky;
- border bawah transparan;
- shadow ringan;
- z-index terkontrol.

### 18.3 Perilaku

```css
position: sticky;
top: 0;
z-index: var(--z-header);
```

### 18.4 State Plan 02

Plan 02 mengimplementasikan:

- default solid;
- sticky;
- active item;
- dropdown open;
- focus;
- hover.

Plan 02 belum mengimplementasikan:

- header transparan di atas hero;
- perubahan header berdasarkan scroll;
- integrasi header dengan hero Home;
- glassmorphism kompleks.

Integrasi transparan atau menyatu dengan hero dibahas pada plan Home apabila memang diperlukan.

### 18.5 Aturan

- tidak menampilkan menu admin;
- tidak menampilkan login;
- tidak menampilkan dashboard;
- tidak lebih dari satu baris pada desktop;
- tidak menggunakan animasi berlebihan;
- tidak menggunakan glow;
- tidak menggunakan banyak CTA;
- menu aktif harus terlihat;
- brand selalu menuju Beranda.

---

## 19. Desktop Navigation

Buat:

```text
desktop-navigation.tsx
desktop-navigation.module.css
```

### 19.1 Client Component

Gunakan `"use client"` hanya pada komponen navigasi yang memerlukan:

- `usePathname`;
- state dropdown;
- event keyboard;
- close behavior.

Jangan mengubah seluruh root layout menjadi Client Component.

### 19.2 Dropdown

Dropdown tersedia untuk:

- Tim;
- Informasi.

### 19.3 Perilaku Dropdown

Dropdown:

- dibuka melalui tombol;
- memiliki `aria-expanded`;
- memiliki `aria-controls`;
- dapat digunakan dengan keyboard;
- dapat ditutup dengan Escape;
- ditutup saat link dipilih;
- tidak hanya bergantung pada hover;
- memiliki focus state;
- memiliki border dan shadow ringan;
- menggunakan permukaan putih;
- tidak memakai glassmorphism.

### 19.4 Dropdown Tim

Isi:

- Daftar Tim;
- Daftar Pemain.

### 19.5 Dropdown Informasi

Isi:

- Penghargaan;
- Galeri;
- Tentang Kompetisi;
- Sponsor dan Mitra.

### 19.6 Breakpoint Navigasi

Navigasi desktop ditampilkan ketika ruang mencukupi.

Breakpoint awal yang direkomendasikan:

```css
@media (min-width: 1120px)
```

Di bawah nilai tersebut gunakan navigasi mobile agar tujuh menu dan CTA tidak berdesakan.

Breakpoint grid halaman tetap mengikuti panduan umum. Breakpoint navigasi boleh lebih besar karena bergantung pada panjang menu.

---

## 20. Mobile Navigation Drawer

Buat:

```text
mobile-navigation.tsx
mobile-navigation.module.css
```

### 20.1 Struktur

Mobile header:

```text
SiteBrand | Hamburger Button
```

Drawer:

```text
SiteBrand
Tombol tutup
Menu utama
Submenu
CTA Tentang Kompetisi
```

### 20.2 Implementasi

Gunakan elemen native:

```html
<dialog>
```

Alasan:

- mendukung modal;
- mendukung Escape;
- membantu pengelolaan fokus;
- mengurangi kebutuhan dependency tambahan.

### 20.3 Perilaku

Drawer harus:

- dibuka dari hamburger button;
- memindahkan fokus ke drawer;
- memiliki tombol tutup;
- dapat ditutup dengan Escape;
- menutup saat link dipilih;
- mengembalikan fokus ke hamburger button;
- mengunci scroll halaman;
- memiliki backdrop;
- memiliki label yang jelas;
- menampilkan active state;
- menampilkan submenu secara terstruktur.

### 20.4 Atribut

Hamburger button:

```text
aria-label
aria-expanded
aria-controls
```

Dialog:

```text
aria-label atau aria-labelledby
```

### 20.5 Submenu Mobile

Submenu boleh:

- selalu tampil di bawah parent; atau
- menggunakan accordion.

Keputusan Plan 02:

> Tampilkan submenu langsung di bawah parent agar interaksi lebih sederhana dan mudah dipindai.

Jangan menggunakan accordion bertingkat pada versi awal.

### 20.6 Tampilan

- panel dari sisi kanan atau layar penuh;
- lebar maksimum sekitar 360 px jika side drawer;
- pada layar sangat kecil dapat memenuhi layar;
- background Midnight Navy;
- teks putih;
- area sentuh minimal 44 × 44 px;
- animasi 200–250 ms;
- reduced motion dihormati.

---

## 21. Footer Global

Pindahkan dan perbarui:

```text
client/src/components/layout/site-footer/
```

### 21.1 Tampilan

Footer menggunakan:

- Midnight Navy;
- teks utama putih;
- teks sekunder `#CBD5E1`;
- link dengan focus state;
- border atas transparan;
- spacing lega tetapi tidak berlebihan.

### 21.2 Struktur Desktop

Empat area:

1. Identitas FCS.
2. Navigasi portal.
3. Informasi kompetisi.
4. Informasi dan mitra.

### 21.3 Identitas

Isi:

- `FCS`;
- `Futsal Competition Sumedang`;
- deskripsi singkat portal.

### 21.4 Navigasi

Gunakan data dari konfigurasi navigasi.

Jangan menulis ulang daftar link secara manual apabila data dapat digunakan kembali.

### 21.5 Informasi Kompetisi

Tampilkan:

```text
Prototype: FCS Industrial Cup Sumedang 2026
Status data: Simulasi untuk demonstrasi
```

Jangan menampilkan status pertandingan atau juara pada Plan 02.

### 21.6 Informasi dan Mitra

Tampilkan link menuju:

- Tentang Kompetisi;
- Penghargaan;
- Galeri;
- Sponsor dan Mitra.

### 21.7 Penanda Wajib

Footer wajib menampilkan:

```text
Prototype FCS menggunakan data simulasi untuk kebutuhan demonstrasi.
```

### 21.8 Yang Belum Ditampilkan

Plan 02 tidak menampilkan:

- sponsor logo;
- kontak pribadi;
- nomor telepon internal;
- email yang belum disetujui;
- media sosial palsu;
- hak cipta yang belum diputuskan;
- legal text palsu.

### 21.9 Mobile

Pada mobile:

- semua area ditumpuk;
- link mudah disentuh;
- jarak antargrup jelas;
- tidak terlalu banyak kolom;
- teks tetap terbaca.

---

## 22. Komponen UI Dasar

### 22.1 ActionLink

Buat:

```text
client/src/components/ui/action-link/
```

Fungsi:

- CTA berbasis link;
- menggunakan `next/link`;
- reusable pada header, placeholder, dan halaman berikutnya.

Properti:

```ts
type ActionLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "inverse";
  size?: "small" | "medium" | "large";
  className?: string;
  ariaLabel?: string;
};
```

Aturan:

- primary menggunakan Electric Blue;
- secondary menggunakan border;
- inverse digunakan pada latar gelap;
- minimum tinggi 44 px untuk medium dan large;
- radius 10 px;
- focus terlihat;
- tidak memakai Muted Gold sebagai CTA umum;
- tidak menggunakan uppercase penuh.

### 22.2 IconButton

Buat:

```text
client/src/components/ui/icon-button/
```

Fungsi:

- hamburger;
- close;
- kontrol dropdown jika diperlukan.

Properti:

```ts
type IconButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    label: string;
    children: React.ReactNode;
  };
```

Aturan:

- wajib memiliki label;
- ukuran sentuh minimal 44 × 44 px;
- ikon tidak menggantikan label aksesibilitas;
- tidak menggunakan tombol div;
- focus terlihat.

### 22.3 StatusBadge

Buat:

```text
client/src/components/ui/status-badge/
```

Varian:

```text
neutral
info
success
warning
danger
live
champion
```

Properti:

```ts
type StatusBadgeProps = {
  children: React.ReactNode;
  variant?: StatusBadgeVariant;
  ariaLabel?: string;
};
```

Aturan:

- radius pill;
- tidak memakai shadow;
- label tetap terbaca;
- warna bukan satu-satunya penanda;
- champion menggunakan Muted Gold secara terbatas;
- live dapat memakai ikon, tetapi tidak perlu animasi pada Plan 02.

### 22.4 SectionHeading

Buat:

```text
client/src/components/ui/section-heading/
```

Properti:

```ts
type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
  alignment?: "start" | "center";
  theme?: "light" | "dark";
};
```

Aturan:

- struktur heading benar;
- CTA tidak lebih dominan dari judul;
- mobile menumpuk judul dan CTA;
- tidak menggunakan heading level secara salah;
- komponen tidak menentukan heading utama halaman secara otomatis jika dapat menimbulkan dua H1.

Keputusan:

- `SectionHeading` menggunakan `h2`;
- heading utama halaman tetap ditentukan oleh halaman.

---

## 23. Library Ikon

Tambahkan:

```text
lucide-react
```

### 23.1 Alasan

- menyediakan satu keluarga ikon;
- gaya outline konsisten;
- cocok dengan panduan visual FCS;
- mencegah pencampuran ikon dari banyak sumber;
- mudah digunakan pada tombol dan navigasi.

### 23.2 Ikon Plan 02

Hanya gunakan ikon yang diperlukan:

- Menu;
- X atau Close;
- ChevronDown;
- ArrowRight bila diperlukan.

### 23.3 Aturan

- jangan mengimpor seluruh library;
- impor ikon secara langsung;
- ukuran umum 20–24 px;
- gunakan `aria-hidden` jika ikon dekoratif;
- icon-only button wajib memiliki label;
- jangan menggunakan emoji sebagai ikon;
- jangan mencampur keluarga ikon.

---

## 24. Root Layout

Perbarui:

```text
client/src/app/layout.tsx
```

### 24.1 Struktur

```tsx
<html lang="id">
  <body>
    <a href="#main-content">Lewati ke konten utama</a>
    <SiteHeader />
    <main id="main-content">
      {children}
    </main>
    <SiteFooter />
  </body>
</html>
```

### 24.2 Aturan

- gunakan Inter;
- metadata tetap menggunakan `siteConfig`;
- jangan menggunakan provider yang belum diperlukan;
- jangan mengubah layout menjadi Client Component;
- `main` memiliki flex growth;
- skip link tersembunyi secara visual sampai fokus;
- skip link terlihat saat digunakan;
- header dan footer digunakan seluruh halaman.

---

## 25. Halaman Home Placeholder

Perbarui:

```text
client/src/app/page.tsx
client/src/app/page.module.css
```

### 25.1 Fungsi

Home tetap menjadi placeholder sementara sampai plan implementasi Beranda disetujui.

### 25.2 Konten

Konten yang disarankan:

- `StatusBadge`: Fondasi UI;
- heading utama FCS;
- deskripsi singkat;
- `SectionHeading` atau struktur sederhana;
- ringkasan:
  - UI Global: siap;
  - Navigasi: siap;
  - Halaman kompetisi: tahap berikutnya;
- satu `ActionLink` menuju Tentang Kompetisi atau Pertandingan.

### 25.3 Batasan

Jangan menampilkan:

- juara;
- skor;
- tim;
- pemain;
- klasemen;
- bracket;
- penghargaan;
- berita;
- sponsor;
- gambar hero;
- data prototype;
- angka kompetisi;
- mock API.

Placeholder tidak boleh menyerupai Home final.

---

## 26. Halaman Tidak Ditemukan

Perbarui:

```text
client/src/app/not-found.tsx
client/src/app/not-found.module.css
```

### 26.1 Konten

- status atau label `404`;
- heading `Halaman tidak ditemukan`;
- deskripsi;
- link kembali ke Beranda;
- link menuju Pertandingan atau Klasemen dapat ditambahkan maksimal satu.

### 26.2 Aturan

- menggunakan fondasi warna dan tipografi;
- menggunakan `ActionLink`;
- tetap ringkas;
- tidak menggunakan ilustrasi AI;
- tidak menggunakan gambar demo;
- tidak menyerupai error dashboard.

---

## 27. Aturan Data

> Plan 02 tidak mengubah sumber data kompetisi.

Data yang digunakan hanya:

- konfigurasi situs;
- konfigurasi navigasi;
- teks statis yang telah disetujui;
- penanda prototype.

Gemini tidak boleh:

- membaca Google Sheets ke aplikasi;
- membuat API;
- membuat mock pertandingan;
- membuat data tim;
- membuat data pemain;
- membuat data klasemen;
- membuat data sponsor;
- membuat data berita;
- menulis data Home permanen;
- membuat local prototype data Home;
- membuat fetch request;
- membuat environment variable.

---

## 28. Aturan Tampilan

### 28.1 Arah Visual

Gunakan:

```text
Modern Sports Competition Portal
Dark Framing, Light Information Surface
```

### 28.2 Karakter

- profesional;
- sporty;
- modern;
- premium;
- tegas;
- sederhana;
- informatif;
- modular;
- responsif.

### 28.3 Dilarang

- game;
- esports;
- taruhan;
- dashboard admin;
- trading interface;
- neon;
- glow;
- glassmorphism berlebihan;
- shadow berat;
- gradient pada semua tombol;
- radius terlalu besar;
- terlalu banyak warna;
- teks kecil;
- sponsor dominan;
- animasi berlebihan.

### 28.4 Responsive

- mobile kecil: 320–479 px;
- mobile besar: 480–767 px;
- tablet: 768–1023 px;
- desktop: 1024–1439 px;
- desktop besar: 1440 px ke atas.

Navigasi boleh menggunakan breakpoint lebih besar berdasarkan kebutuhan ruang.

### 28.5 Grid

- desktop: 12 kolom;
- tablet: 8 kolom;
- mobile: 4 kolom.

Plan 02 belum membuat grid utility framework.

### 28.6 Spacing Section

- desktop: 64–96 px;
- mobile: 40–64 px.

Placeholder tidak perlu menggunakan spacing maksimum apabila kontennya pendek.

---

## 29. Aturan Client

- **Halaman diubah:** `/` dan not-found.
- **Route baru:** Tidak ada.
- **Komponen global:** Header, navigation, drawer, footer, brand, container.
- **Komponen primitive:** ActionLink, IconButton, StatusBadge, SectionHeading.
- **State:** Hanya state navigasi.
- **API:** Tidak ada.
- **Data fetching:** Tidak ada.
- **Server component:** Gunakan sebagai default.
- **Client component:** Hanya navigasi yang memerlukan state dan pathname.
- **Responsive:** Wajib.
- **Accessibility:** Wajib.
- **Environment variable:** Tidak ada.
- **Middleware:** Tidak ada.
- **Dynamic route:** Tidak ada.
- **Form:** Tidak ada.
- **Authentication:** Tidak ada.

---

## 30. Aturan Server

> Pekerjaan ini tidak mengubah bagian server.

Gemini tidak boleh mengubah:

```text
server/
```

Gemini tidak boleh membuat:

- endpoint;
- API;
- service;
- controller;
- schema;
- database connection;
- environment variable;
- package server.

---

## 31. Aturan Dependency

Dependency baru yang diizinkan:

| Dependency | Area | Alasan |
|---|---|---|
| `lucide-react` | Client | Menyediakan satu keluarga ikon yang konsisten untuk navigasi |

Gemini tidak boleh:

- mengganti Next.js;
- mengganti React;
- mengganti TypeScript;
- mengganti npm;
- menambah UI library;
- menambah CSS framework;
- menambah animation library;
- menambah focus-trap library;
- menambah dialog library;
- menambah utility class library;
- menambah dependency lain;
- melakukan upgrade dependency.

`next/font` merupakan bagian dari Next.js dan tidak memerlukan dependency tambahan.

---

## 32. Instruksi Implementasi

Kerjakan berurutan.

### 32.1 Baca Plan dan Source Code

- baca seluruh Plan 02;
- baca Plan 01;
- periksa commit dasar;
- periksa file layout dan CSS;
- periksa komponen header, footer, dan container;
- jangan menjalankan Git;
- jangan menjalankan pengujian.

### 32.2 Tambahkan Dependency yang Disetujui

Pasang:

```bash
npm install lucide-react
```

Jangan memasang package lain.

### 32.3 Buat Token Visual

- buat `tokens.css`;
- masukkan token yang disetujui;
- jangan menambah warna baru tanpa alasan;
- jangan mengubah kode warna resmi.

### 32.4 Terapkan Inter

- gunakan `next/font/google`;
- gunakan CSS variable;
- terapkan pada body;
- jangan menambah font lain.

### 32.5 Perbarui Global CSS

- hapus dark mode otomatis;
- gunakan Soft Background;
- gunakan token teks;
- perbaiki reset;
- pertahankan focus;
- pertahankan reduced motion;
- siapkan dialog dan scroll lock.

### 32.6 Reorganisasi Layout Components

- pindahkan file ke folder komponen masing-masing;
- perbarui seluruh import;
- hapus file lama setelah pengganti tersedia;
- jangan meninggalkan duplikasi.

### 32.7 Buat SiteBrand

- gunakan identitas teks;
- jangan membuat logo baru;
- gunakan link Beranda.

### 32.8 Buat Konfigurasi Navigasi

- buat type;
- buat primary navigation;
- buat submenu;
- buat header CTA;
- gunakan konfigurasi yang sama pada desktop, mobile, dan footer bila sesuai.

### 32.9 Buat Komponen UI

- ActionLink;
- IconButton;
- StatusBadge;
- SectionHeading.

### 32.10 Buat Desktop Navigation

- active state;
- dropdown;
- keyboard;
- Escape;
- aria attributes;
- focus state.

### 32.11 Buat Mobile Navigation

- hamburger;
- native dialog;
- close button;
- Escape;
- focus return;
- scroll lock;
- submenu tampil langsung;
- CTA di drawer.

### 32.12 Perbarui SiteHeader

- sticky;
- Midnight Navy;
- desktop navigation;
- mobile navigation;
- responsive breakpoint;
- tidak terintegrasi hero.

### 32.13 Perbarui SiteFooter

- empat area informasi;
- navigation links;
- prototype notice;
- tidak ada sponsor logo;
- tidak ada kontak palsu.

### 32.14 Perbarui Root Layout

- Inter;
- skip link;
- `main-content`;
- header;
- footer.

### 32.15 Perbarui Placeholder

- gunakan komponen baru;
- tetap tidak memakai data kompetisi;
- pertahankan satu H1.

### 32.16 Perbarui 404

- gunakan ActionLink;
- gunakan token visual;
- tetap sederhana.

### 32.17 Pemeriksaan Statis

Tanpa menjalankan test:

- periksa import;
- periksa file lama;
- periksa duplikasi CSS;
- periksa label menu;
- periksa href;
- periksa aria;
- periksa tidak ada data kompetisi;
- periksa tidak ada perubahan server;
- periksa dependency;
- periksa file plan tidak berubah.

Setelah itu berikan laporan dan berhenti.

---

## 33. Batasan Umum Gemini

Gemini harus:

- membaca seluruh file plan;
- mengikuti sumber kebenaran;
- memeriksa source code;
- menjaga struktur;
- mengubah hanya bagian yang dibutuhkan;
- melaporkan file dibuat;
- melaporkan file diubah;
- melaporkan file dipindahkan;
- melaporkan file dihapus;
- melaporkan dependency;
- menjelaskan risiko;
- menuliskan langkah pengujian;
- berhenti setelah implementasi.

Gemini tidak boleh:

- membuat keputusan desain baru;
- membuat fitur tambahan;
- mengubah sitemap;
- membuat route;
- membuat Home final;
- menambah data;
- membuat logo;
- mengambil aset internet;
- menjalankan pengujian;
- melakukan Git.

---

## 34. Larangan Pengujian

> Jangan menjalankan build, lint, type-check, test, development server, atau proses pengujian lainnya. Setelah implementasi selesai, tuliskan langkah pengujian yang disarankan dan berhenti. Pengujian akan dilakukan oleh pengguna bersama ChatGPT.

Gemini dilarang menjalankan:

- `npm run dev`;
- `npm run build`;
- `npm run lint`;
- `npm run type-check`;
- `npm run start`;
- TypeScript compiler;
- ESLint;
- browser preview;
- accessibility audit;
- Lighthouse;
- unit test;
- integration test;
- end-to-end test;
- deployment preview.

---

## 35. Larangan Tindakan Git

> Jangan menjalankan tindakan Git apa pun. Jangan melakukan commit atau push. Setelah implementasi selesai, berhenti dan berikan laporan perubahan. Commit dan push hanya dilakukan oleh pengguna.

Gemini dilarang menjalankan:

- `git status`;
- `git diff`;
- `git add`;
- `git commit`;
- `git push`;
- `git pull`;
- `git fetch`;
- `git switch`;
- `git checkout`;
- `git branch`;
- `git merge`;
- `git rebase`;
- `git reset`;
- `git clean`;
- `git stash`;
- pull request.

---

## 36. Kriteria Selesai

Pekerjaan dianggap selesai oleh Gemini apabila:

- token visual tersedia;
- Inter diterapkan;
- dark mode otomatis dihapus;
- global CSS diperbarui;
- PageContainer responsif;
- SiteBrand tersedia;
- navigation config tersedia;
- type navigation tersedia;
- desktop navigation tersedia;
- dropdown Tim tersedia;
- dropdown Informasi tersedia;
- active state tersedia;
- header CTA tersedia;
- mobile hamburger tersedia;
- mobile drawer tersedia;
- Escape bekerja secara implementasi;
- fokus dikelola secara implementasi;
- scroll lock tersedia;
- footer global tersedia;
- prototype notice tersedia;
- ActionLink tersedia;
- IconButton tersedia;
- StatusBadge tersedia;
- SectionHeading tersedia;
- Home placeholder diperbarui;
- 404 diperbarui;
- tidak ada route baru;
- tidak ada Home final;
- tidak ada data kompetisi;
- tidak ada perubahan server;
- hanya dependency yang disetujui ditambahkan;
- file plan tidak berubah;
- pengujian tidak dijalankan;
- Git tidak dijalankan;
- laporan diberikan.

Pekerjaan belum dianggap selesai secara proyek sebelum pengguna dan ChatGPT melakukan pengujian.

---

## 37. Laporan yang Harus Diberikan Gemini

```text
LAPORAN IMPLEMENTASI PLAN 02

1. Ringkasan pekerjaan

2. Daftar file yang dibuat

3. Daftar file yang diubah

4. Daftar file yang dipindahkan

5. Daftar file yang dihapus

6. Struktur folder setelah implementasi

7. Dependency yang ditambahkan
   - Nama
   - Versi
   - Alasan

8. Penjelasan token visual

9. Penjelasan navigasi desktop

10. Penjelasan mobile drawer

11. Penjelasan aksesibilitas

12. Bagian yang belum dikerjakan

13. Risiko atau keterbatasan

14. Langkah pengujian yang disarankan

15. Pernyataan pengujian
    Saya tidak menjalankan build, lint, type-check, test,
    development server, atau pengujian lainnya.

16. Pernyataan Git
    Saya tidak menjalankan tindakan Git, commit, atau push.
```

---

## 38. Rekomendasi Model Gemini

- **Model:** Gemini coding/reasoning tingkat tinggi yang tersedia di Antigravity.
- **Thinking level:** High.
- **Alasan:** Perubahan menyentuh struktur komponen, CSS foundation, konfigurasi, navigasi interaktif, responsive behavior, dan aksesibilitas.
- **Alternatif:** Model coding tingkat menengah hanya digunakan apabila model utama tidak tersedia.

Nama model final ditentukan saat implementasi karena daftar model dapat berubah.

---

## 39. Checklist Pengujian Pengguna dan ChatGPT

### 39.1 Instalasi

Dari folder `client`:

```bash
npm install
```

Periksa:

- [ ] instalasi berhasil;
- [ ] `lucide-react` tersedia;
- [ ] tidak ada dependency tambahan lain;
- [ ] lockfile diperbarui.

### 39.2 Type Check

```bash
npm run type-check
```

- [ ] tidak ada error;
- [ ] type navigasi valid;
- [ ] props komponen valid;
- [ ] import valid;
- [ ] tidak ada `any` sebagai jalan pintas.

### 39.3 Lint

```bash
npm run lint
```

- [ ] tidak ada error;
- [ ] tidak ada unused import;
- [ ] tidak ada unused state;
- [ ] tidak ada warning hook penting;
- [ ] tidak ada accessibility issue yang terdeteksi lint.

### 39.4 Build

```bash
npm run build
```

- [ ] build berhasil;
- [ ] font berhasil diproses;
- [ ] Home berhasil dibangun;
- [ ] 404 berhasil dibangun;
- [ ] tidak memerlukan environment variable.

### 39.5 Development Server

```bash
npm run dev
```

- [ ] server berjalan;
- [ ] tidak ada error terminal;
- [ ] tidak ada error console browser.

### 39.6 Desktop 1440 px

- [ ] header tampil satu baris;
- [ ] brand terbaca;
- [ ] tujuh menu tampil;
- [ ] CTA tampil;
- [ ] dropdown Tim bekerja;
- [ ] dropdown Informasi bekerja;
- [ ] active state terlihat;
- [ ] footer empat area tertata;
- [ ] container tidak terlalu lebar;
- [ ] tidak ada horizontal overflow.

### 39.7 Desktop 1120–1200 px

- [ ] navigasi tidak berdesakan;
- [ ] CTA tidak bertabrakan;
- [ ] dropdown tidak keluar viewport;
- [ ] header tetap terbaca.

### 39.8 Tablet 768–1023 px

- [ ] desktop navigation disembunyikan;
- [ ] hamburger tampil;
- [ ] drawer terbuka;
- [ ] footer bertumpuk sesuai kebutuhan;
- [ ] padding 24 px masuk akal.

### 39.9 Mobile 390 px

- [ ] brand tidak terpotong;
- [ ] tombol menu minimal 44 px;
- [ ] drawer terbuka;
- [ ] drawer dapat ditutup;
- [ ] submenu terbaca;
- [ ] CTA mudah disentuh;
- [ ] body tidak scroll di belakang drawer;
- [ ] tidak ada horizontal overflow;
- [ ] footer tersusun vertikal.

### 39.10 Mobile 360 px

- [ ] seluruh teks terbaca;
- [ ] menu tidak terpotong;
- [ ] dialog tidak keluar layar;
- [ ] link memiliki jarak memadai;
- [ ] placeholder Home tidak rusak.

### 39.11 Keyboard

- [ ] skip link dapat difokuskan;
- [ ] Tab mencapai brand;
- [ ] Tab mencapai menu;
- [ ] dropdown dapat dibuka keyboard;
- [ ] Escape menutup dropdown;
- [ ] hamburger dapat diaktifkan keyboard;
- [ ] fokus masuk ke drawer;
- [ ] Escape menutup drawer;
- [ ] fokus kembali ke hamburger;
- [ ] focus indicator terlihat.

### 39.12 Navigasi

- [ ] Beranda aktif pada `/`;
- [ ] Pertandingan aktif pada `/pertandingan`;
- [ ] Klasemen aktif pada `/klasemen`;
- [ ] Klasemen aktif pada `/bracket`;
- [ ] Tim aktif pada `/tim`;
- [ ] Tim aktif pada `/pemain`;
- [ ] Informasi aktif pada halaman anak;
- [ ] `aria-current` tersedia.

Halaman yang belum diimplementasikan boleh menampilkan 404.

### 39.13 Visual

- [ ] Midnight Navy benar;
- [ ] Electric Blue benar;
- [ ] Soft Background benar;
- [ ] Inter diterapkan;
- [ ] tidak ada dark mode otomatis;
- [ ] Muted Gold tidak digunakan sebagai CTA;
- [ ] tidak ada glow;
- [ ] tidak ada neon;
- [ ] radius konsisten;
- [ ] shadow tidak berlebihan;
- [ ] footer tidak dominan.

### 39.14 Scope

- [ ] tidak ada Home final;
- [ ] tidak ada hero kompetisi;
- [ ] tidak ada pertandingan;
- [ ] tidak ada klasemen;
- [ ] tidak ada tim;
- [ ] tidak ada pemain;
- [ ] tidak ada berita;
- [ ] tidak ada sponsor logo;
- [ ] tidak ada API;
- [ ] tidak ada backend;
- [ ] tidak ada database;
- [ ] tidak ada route baru;
- [ ] tidak ada Tailwind;
- [ ] tidak ada UI library;
- [ ] tidak ada dependency tambahan.

### 39.15 Hasil Pengujian

- **Status:** BELUM DIUJI
- **Install:** BELUM DIUJI
- **Type-check:** BELUM DIUJI
- **Lint:** BELUM DIUJI
- **Build:** BELUM DIUJI
- **Development server:** BELUM DIUJI
- **Desktop:** BELUM DIUJI
- **Tablet:** BELUM DIUJI
- **Mobile:** BELUM DIUJI
- **Keyboard:** BELUM DIUJI
- **Drawer:** BELUM DIUJI
- **Dropdown:** BELUM DIUJI
- **404:** BELUM DIUJI
- **Error:** Belum diketahui

---

## 40. Rekomendasi Commit Message

Commit utama:

```text
feat(client): add global UI foundation and portal navigation
```

Alternatif:

```text
feat(ui): implement global styles and responsive navigation
```

Commit message final ditentukan setelah implementasi dan pengujian.

---

## 41. Rekomendasi Perintah Git

Hanya dijalankan oleh pengguna setelah pengujian selesai:

```bash
git status
git diff
git add client docs/plan/02_FONDASI_UI_GLOBAL_DAN_NAVIGASI_PORTAL.md
git status
git diff --cached
git commit -m "feat(client): add global UI foundation and portal navigation"
git push origin main
```

Pengguna wajib memeriksa:

- file yang dibuat;
- file yang dipindahkan;
- file yang dihapus;
- dependency;
- lockfile;
- tidak ada file rahasia;
- tidak ada perubahan server;
- tidak ada perubahan di luar scope.

---

## 42. Data Review Commit

Setelah commit dan push, pengguna mengirim:

```text
Repository:
syahputrawork98-sketch/FCS-Futsal-Competition-Sumedang

Branch:
main

Base commit:
8fbc0140f8bd7632ea11fbf7496b56ec47d0d91c

Commit SHA:
[isi]

Commit message:
[isi]

File plan:
docs/plan/02_FONDASI_UI_GLOBAL_DAN_NAVIGASI_PORTAL.md

Hasil pengujian:
- npm install:
- type-check:
- lint:
- build:
- development server:
- desktop:
- tablet:
- mobile:
- keyboard:
- drawer:
- dropdown:
- halaman 404:

Error yang masih tersisa:
[isi]

Catatan:
[isi]
```

ChatGPT kemudian memeriksa:

- kesesuaian dengan Plan 02;
- perubahan di luar scope;
- struktur komponen;
- token visual;
- dependency;
- active navigation;
- dropdown;
- drawer;
- accessibility;
- responsive behavior;
- hasil pengujian;
- commit message;
- kebutuhan revisi.

---

## 43. Catatan Keputusan

| No. | Keputusan | Alasan | Status |
|---:|---|---|---|
| 1 | Plan 02 membangun fondasi UI global sebelum Home | Menjaga struktur dan reusable components | DISETUJUI |
| 2 | Plan 03 membangun isi halaman Beranda | Memisahkan global UI dan page-specific UI | DISETUJUI |
| 3 | Styling menggunakan global CSS dan CSS Modules | Keputusan Plan 01 | DISETUJUI |
| 4 | Tailwind tidak digunakan | Keputusan Plan 01 | DISETUJUI |
| 5 | Dark mode otomatis dihapus | Mengikuti Dark Framing, Light Information Surface | DISETUJUI |
| 6 | Menu utama berjumlah tujuh | Mengikuti sitemap | DISETUJUI |
| 7 | Menu Tim memiliki submenu | Mengikuti sitemap | DISETUJUI |
| 8 | Menu Informasi memiliki submenu | Mengikuti sitemap | DISETUJUI |
| 9 | Komponen dibuat reusable | Mengikuti HOM-03 | DISETUJUI |
| 10 | Data Home tidak dibuat pada Plan 02 | Dikerjakan pada Plan 03 | DISETUJUI |
| 11 | Font menggunakan Inter | Mengikuti panduan identitas visual | DISETUJUI |
| 12 | Inter menggunakan `next/font/google` | Integrasi resmi Next.js | DISETUJUI |
| 13 | Token visual dibuat di `styles/tokens.css` | Memisahkan fondasi dari global reset | DISETUJUI |
| 14 | Komponen menggunakan folder masing-masing | Memudahkan pemeliharaan | DISETUJUI |
| 15 | Ikon menggunakan `lucide-react` | Menjaga satu keluarga ikon | DISETUJUI |
| 16 | Mobile drawer menggunakan native dialog | Mengurangi dependency dan membantu aksesibilitas | DISETUJUI |
| 17 | Navigasi desktop aktif mulai sekitar 1120 px | Mencegah menu berdesakan | DISETUJUI |
| 18 | Header Plan 02 menggunakan solid Midnight Navy | Hero belum diimplementasikan | DISETUJUI |
| 19 | Header transparan ditunda | Integrasi dibahas bersama Home | DISETUJUI |
| 20 | Brand menggunakan teks sampai logo resmi tersedia | Mencegah pembuatan logo rekaan | DISETUJUI |
| 21 | Footer belum menampilkan sponsor logo | Sponsor Home dibuat pada Plan 03 | DISETUJUI |
| 22 | Footer belum menampilkan copyright | Identitas legal belum diputuskan | DISETUJUI |
| 23 | Route baru tidak dibuat | Plan 02 hanya fondasi global | DISETUJUI |
| 24 | Link boleh menuju route yang belum tersedia | Route dibuat pada plan halaman terkait | DISETUJUI |
| 25 | Gemini tidak menjalankan pengujian | Mengikuti aturan kerja utama | DISETUJUI |
| 26 | Gemini tidak menjalankan Git | Mengikuti aturan kerja utama | DISETUJUI |

---

## 44. Riwayat Perubahan Dokumen

| Versi | Tanggal | Perubahan | Penyusun |
|---|---|---|---|
| 0.1 | 2026-07-23 | Draft awal Plan 02 | Pengguna dan ChatGPT |
| 1.0 | 2026-07-23 | Disetujui sebagai instruksi implementasi | Pengguna dan ChatGPT |

---

## 45. Persetujuan

- **Status persetujuan:** DISETUJUI
- **Tanggal persetujuan:** 2026-07-23
- **Disetujui oleh:** Pengguna
- **Status implementasi:** SIAP DIIMPLEMENTASIKAN

File plan ini telah disetujui dan dapat digunakan sebagai instruksi implementasi setelah:

1. file ditempatkan pada `docs/plan/`;
2. Gemini membaca seluruh isi plan;
3. kondisi awal repository diperiksa;
4. implementasi dilakukan sesuai ruang lingkup;
5. Gemini tidak menjalankan pengujian atau tindakan Git.
