# 03_IMPLEMENTASI_HALAMAN_BERANDA.md

## 1. Identitas Dokumen

- **Judul pekerjaan:** Implementasi Halaman Beranda
- **Nama file:** `03_IMPLEMENTASI_HALAMAN_BERANDA.md`
- **Nomor plan:** 03
- **Versi dokumen:** 1.0
- **Status:** DISETUJUI
- **Tanggal dibuat:** 2026-07-23
- **Tanggal diperbarui:** 2026-07-23
- **Penyusun:** Pengguna bersama ChatGPT
- **Pelaksana implementasi:** Gemini melalui Antigravity
- **Proyek:** FCS — Futsal Competition Sumedang
- **Prototype:** FCS Industrial Cup Sumedang 2026
- **Kode halaman:** HOM-01
- **Mode halaman:** Pasca-turnamen
- **Area:** Client dan UI Halaman Beranda
- **Repository:** `syahputrawork98-sketch/FCS-Futsal-Competition-Sumedang`
- **Branch:** `main`
- **Base commit:** `a069eaf8377bfe4d9ee4d14431413cf5b4121e53`
- **Plan sebelumnya:** `02_FONDASI_UI_GLOBAL_DAN_NAVIGASI_PORTAL.md`
- **Status implementasi:** SIAP DIIMPLEMENTASIKAN

> Dokumen ini telah disetujui oleh pengguna dan dapat digunakan sebagai instruksi implementasi setelah ditempatkan pada `docs/plan/`.

---

## 2. Ringkasan Pekerjaan

Plan ini mengatur implementasi halaman Beranda publik FCS menggunakan fondasi UI global dan navigasi yang telah dibuat melalui Plan 02.

Beranda akan menampilkan rangkuman utama FCS Industrial Cup Sumedang 2026 dalam kondisi kompetisi telah selesai.

Informasi utama yang ditampilkan meliputi:

- identitas kompetisi;
- status kompetisi;
- juara turnamen;
- hasil pertandingan final;
- ringkasan jumlah peserta dan pertandingan;
- hasil pertandingan terbaru;
- klasemen akhir Grup A dan Grup B;
- perjalanan fase gugur;
- penghargaan turnamen;
- tim peserta;
- pemain unggulan;
- berita terbaru;
- galeri kompetisi;
- sponsor dan mitra;
- penanda bahwa data merupakan data simulasi.

Data halaman menggunakan data prototype lokal yang terstruktur dan memiliki tipe TypeScript.

Plan ini tidak menghubungkan halaman Beranda dengan backend, API, Railway, Neon PostgreSQL, Google Sheets secara langsung, Google Drive secara langsung, autentikasi, atau dashboard admin.

---

## 3. Latar Belakang

Plan 01 telah membuat fondasi repository dan aplikasi Next.js.

Plan 02 telah membuat:

- token visual;
- font Inter;
- global CSS;
- PageContainer;
- SiteBrand;
- SiteHeader;
- navigasi desktop;
- dropdown;
- mobile navigation drawer;
- SiteFooter;
- ActionLink;
- IconButton;
- StatusBadge;
- SectionHeading;
- konfigurasi navigasi;
- active navigation;
- halaman Home placeholder;
- halaman tidak ditemukan.

Beranda saat ini masih berupa placeholder.

Dokumen perencanaan HOM-01 telah menetapkan struktur halaman Beranda secara lengkap, termasuk:

- urutan section;
- nilai prototype;
- sumber data;
- tampilan desktop;
- tampilan mobile;
- fallback data;
- komponen UI;
- loading state;
- empty state;
- error state;
- aturan aksesibilitas.

Karena fondasi global sudah tersedia, tahap berikutnya adalah mengganti placeholder dengan implementasi Beranda yang sebenarnya.

---

## 4. Tujuan

Pekerjaan ini bertujuan untuk:

1. Mengimplementasikan halaman Beranda publik FCS.
2. Menampilkan kondisi pasca-turnamen secara jelas.
3. Menjadikan juara dan hasil final sebagai informasi utama.
4. Menampilkan rangkuman kompetisi secara mudah dipindai.
5. Menggunakan data prototype lokal yang terstruktur.
6. Menghindari penulisan data berulang di dalam JSX.
7. Menyediakan tipe data TypeScript untuk seluruh konten Home.
8. Membuat section dan kartu yang reusable.
9. Mengikuti wireframe desktop dan mobile yang telah disetujui.
10. Mengikuti arah visual Modern dan Premium.
11. Menggunakan fondasi UI dari Plan 02.
12. Menjaga sponsor tetap proporsional.
13. Menyediakan fallback ketika gambar tidak tersedia.
14. Menyediakan loading, empty, dan error state.
15. Menjaga aksesibilitas keyboard dan struktur heading.
16. Menyiapkan pola data yang dapat diganti API pada tahap berikutnya.
17. Tidak mengembangkan halaman lain di luar Beranda.
18. Tidak mengubah arsitektur global tanpa persetujuan.

---

## 5. Prasyarat Implementasi

Implementasi Plan 03 baru boleh dimulai setelah:

- Plan 02 lulus review kode;
- dependency Plan 02 telah terpasang;
- type-check Plan 02 berhasil;
- lint Plan 02 berhasil;
- build Plan 02 berhasil;
- header desktop telah diperiksa;
- mobile drawer telah diperiksa;
- halaman 404 telah diperiksa;
- tidak ada error console browser;
- repository berada pada commit dasar yang benar.

Base commit yang digunakan:

```text
a069eaf8377bfe4d9ee4d14431413cf5b4121e53
```

Apabila repository telah memiliki commit baru, Gemini harus membaca kondisi terbaru sebelum mengubah file.

Gemini tetap dilarang menjalankan pengujian atau tindakan Git.

---

## 6. Referensi Utama

Gemini wajib membaca file plan ini secara penuh.

| No. | Dokumen | Status | Peran |
|---:|---|---|---|
| 1 | `00_INDEX_DAN_STATUS_PERENCANAAN_WEBSITE.md` | AKTIF | Menentukan status dan sumber kebenaran |
| 2 | `01_ALUR_KERJA_PERENCANAAN_DAN_IMPLEMENTASI_WEBSITE.md` | DISETUJUI | Menentukan pembagian peran, pengujian, dan Git |
| 3 | `02_TEMPLATE_PLAN_IMPLEMENTASI_WEBSITE.md` | AKTIF | Acuan struktur plan |
| 4 | `01_FCS_BRIEF_ARAH_DESAIN_WEBSITE.md` | DISETUJUI | Menentukan karakter portal |
| 5 | `FCS – Panduan Identitas Visual Website` | DISETUJUI | Menentukan sistem visual |
| 6 | `01_FCS_SITEMAP_DAN_ARSITEKTUR_INFORMASI.md` | DISETUJUI | Menentukan halaman dan navigasi |
| 7 | `01_HOM-01_SPESIFIKASI_HALAMAN_BERANDA.md` | DISETUJUI | Sumber utama struktur dan perilaku Home |
| 8 | `02_HOM-01_PEMETAAN_DATA_BERANDA.csv` | DISETUJUI | Sumber kontrak data Home |
| 9 | `03_HOM-01_DAFTAR_REFERENSI.md` | DISETUJUI | Menentukan urutan sumber |
| 10 | `HOM-02 — Wireframe Beranda .pdf` | DISETUJUI | Sumber layout desktop dan mobile |
| 11 | `HOM-03_SPESIFIKASI_KOMPONEN_UI_BERANDA.md` | DISETUJUI | Sumber komponen, state, dan aksesibilitas |
| 12 | `02_FONDASI_UI_GLOBAL_DAN_NAVIGASI_PORTAL.md` | DISETUJUI | Fondasi UI yang harus dipertahankan |
| 13 | Source code pada base commit | AKTIF | Kondisi teknis aktual |

### 6.1 Referensi yang Tidak Boleh Digunakan

Jangan menggunakan:

```text
HOM-02_WIREFRAME_BERANDA.md
```

File tersebut telah dinyatakan salah dan bukan sumber wireframe resmi.

### 6.2 Urutan Sumber Kebenaran

Apabila terdapat konflik, gunakan urutan:

1. keputusan terbaru pengguna yang telah disetujui;
2. Plan 03;
3. index status perencanaan;
4. spesifikasi HOM-01;
5. pemetaan data HOM-01;
6. wireframe PDF;
7. spesifikasi komponen HOM-03;
8. panduan identitas visual;
9. sitemap;
10. source code aktif;
11. catatan lama atau arsip.

Gambar referensi tidak boleh menjadi sumber fakta, skor, nama, tanggal, atau status.

---

## 7. Kondisi Awal Repository

Struktur utama yang berkaitan:

```text
client/src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.module.css
│   ├── page.tsx
│   ├── not-found.module.css
│   └── not-found.tsx
├── components/
│   ├── layout/
│   │   ├── page-container/
│   │   ├── site-brand/
│   │   ├── site-footer/
│   │   └── site-header/
│   └── ui/
│       ├── action-link/
│       ├── icon-button/
│       ├── section-heading/
│       └── status-badge/
├── config/
│   ├── navigation.ts
│   └── site.ts
├── styles/
│   └── tokens.css
└── types/
    └── navigation.ts
```

Home saat ini:

- menggunakan satu H1;
- menampilkan label Fondasi UI;
- menampilkan deskripsi placeholder;
- memiliki link Tentang Kompetisi;
- belum memiliki data turnamen;
- belum memiliki section Home.

---

## 8. Hasil Akhir yang Diharapkan

Setelah implementasi:

1. Route `/` menampilkan Beranda FCS sebenarnya.
2. Placeholder Home telah dihapus.
3. Header global tetap digunakan.
4. Footer global tetap digunakan.
5. Halaman memiliki satu H1.
6. Hero menampilkan status kompetisi selesai.
7. Hero menampilkan juara.
8. Hasil final ditampilkan.
9. Ringkasan kompetisi ditampilkan.
10. Hasil terbaru ditampilkan.
11. Klasemen Grup A dan B ditampilkan.
12. Bracket fase gugur ditampilkan.
13. Penghargaan ditampilkan.
14. Delapan tim peserta ditampilkan.
15. Pemain unggulan ditampilkan.
16. Berita terbaru ditampilkan.
17. Galeri memiliki isi legal atau empty state.
18. Sponsor ditampilkan proporsional.
19. Penanda data simulasi tersedia.
20. Data halaman berasal dari file prototype terstruktur.
21. Data tidak ditulis berulang di JSX.
22. Semua komponen menggunakan TypeScript.
23. Semua section responsif.
24. Tabel klasemen berubah secara struktural pada mobile.
25. Bracket berubah menjadi timeline vertikal pada mobile.
26. Gambar yang hilang memiliki fallback.
27. Data yang kosong memiliki empty state.
28. Error state tersedia.
29. Loading state tersedia secara arsitektur.
30. Tidak ada API atau backend.
31. Tidak ada route baru.
32. Tidak ada dependency baru.
33. Tidak ada perubahan server.
34. Tidak ada tindakan Git oleh Gemini.
35. Tidak ada pengujian oleh Gemini.

---

## 9. Ruang Lingkup

Gemini diperbolehkan:

- mengganti Home placeholder dengan Home final;
- membuat feature folder Home;
- membuat tipe data Home;
- membuat data prototype Home;
- membuat section Home;
- membuat komponen kartu Home;
- membuat fallback aset;
- membuat loading, empty, dan error state untuk Home;
- memperbarui CSS Home;
- menggunakan komponen global Plan 02;
- menggunakan `lucide-react` yang sudah tersedia;
- memperbaiki import yang berkaitan langsung dengan Home;
- menghapus CSS placeholder yang tidak lagi dipakai.

---

## 10. Di Luar Ruang Lingkup

Gemini tidak boleh:

- membuat route baru;
- membuat halaman detail;
- membuat halaman Pertandingan;
- membuat halaman Klasemen;
- membuat halaman Bracket;
- membuat halaman Tim;
- membuat halaman Pemain;
- membuat halaman Statistik;
- membuat halaman Berita;
- membuat halaman Penghargaan;
- membuat halaman Galeri;
- membuat halaman Sponsor;
- membuat halaman Tentang;
- membuat API;
- mengubah server;
- membuat database;
- menghubungkan Neon;
- menghubungkan Railway;
- mengambil Google Sheets langsung;
- membaca Google Drive dari aplikasi;
- membuat autentikasi;
- membuat admin;
- membuat CMS;
- membuat form;
- membuat search;
- membuat filter;
- membuat pagination;
- membuat lightbox;
- membuat carousel library;
- membuat animation library;
- menambah dependency;
- mengubah header global;
- mengubah footer global kecuali integrasi kecil yang benar-benar diperlukan;
- mengubah token visual tanpa persetujuan;
- membuat logo;
- membuat aset AI;
- mengambil gambar baru dari internet;
- melakukan deployment;
- menjalankan pengujian;
- menjalankan Git.

> Jangan mengerjakan perubahan di luar ruang lingkup Plan 03.

---

## 11. Mode Halaman

Beranda menggunakan:

```text
Status kompetisi : Selesai
Mode halaman      : Pasca-turnamen
```

Prioritas informasi:

1. juara;
2. hasil final;
3. hasil pertandingan terbaru;
4. rangkuman kompetisi;
5. klasemen akhir;
6. bracket fase gugur;
7. penghargaan dan statistik;
8. tim;
9. pemain;
10. berita;
11. galeri;
12. sponsor.

Beranda tidak menggunakan:

- countdown;
- pertandingan berikutnya sebagai konten utama;
- tombol daftar turnamen;
- pendaftaran peserta;
- live streaming palsu;
- status live palsu.

---

## 12. Data Prototype Wajib

Nilai prototype utama:

```text
Nama kompetisi : FCS Industrial Cup Sumedang 2026
Lokasi         : Sumedang
Tanggal        : 1–9 Agustus 2026
Status         : Selesai
Juara          : Cakra Textile FC
Runner-up      : Tekma Futsal
Hasil final    : Cakra Textile FC 2–1 Tekma Futsal
Jumlah tim     : 8
Jumlah pemain  : 64
Jumlah laga    : 16
Jumlah grup    : 2
```

Nilai tambahan wajib mengikuti file pemetaan data dan data sumber FCS yang telah disetujui.

Gemini tidak boleh:

- mengarang skor;
- mengarang nama tim;
- mengarang nama pemain;
- mengarang penghargaan;
- mengarang berita;
- mengarang sponsor;
- mengarang foto;
- mengganti nilai prototype;
- menggunakan data generik seperti Team A atau Player 1 pada tampilan final.

Apabila nilai tidak tersedia dalam sumber yang dapat dibaca:

- gunakan nilai `null`;
- gunakan array kosong;
- tampilkan fallback;
- laporkan data yang belum tersedia.

---

## 13. Arsitektur Data Home

Buat struktur:

```text
client/src/features/home/
├── components/
├── data/
│   └── home-prototype-data.ts
├── types/
│   └── home.types.ts
├── home-page.module.css
└── home-page.tsx
```

### 13.1 Aturan

- `app/page.tsx` hanya menjadi entry route.
- Seluruh susunan halaman berada di `home-page.tsx`.
- Data prototype berada di satu file.
- Tipe data berada di satu file.
- Komponen section berada di folder components.
- CSS halaman berada dekat HomePage.
- CSS komponen berada dekat komponen.
- Jangan membuat barrel file.
- Jangan membuat utility tanpa pemakaian.
- Jangan membuat context provider.
- Jangan membuat state-management global.
- Jangan membuat service API palsu.

### 13.2 Entry Route

```tsx
import { HomePage } from "@/features/home/home-page";

export default function Home() {
  return <HomePage />;
}
```

---

## 14. Tipe Data

Buat tipe minimal berikut.

### 14.1 Asset

```ts
export type HomeImageAsset = {
  src: string | null;
  alt: string;
  credit?: string;
};
```

### 14.2 Tim

```ts
export type HomeTeam = {
  id: string;
  name: string;
  shortName?: string;
  organization?: string;
  group?: "A" | "B";
  logo: HomeImageAsset;
  achievement?: string;
};
```

### 14.3 Pemain

```ts
export type HomePlayer = {
  id: string;
  name: string;
  teamId: string;
  teamName: string;
  position?: string;
  photo: HomeImageAsset;
  statistics?: {
    goals?: number;
    assists?: number;
    appearances?: number;
    mvp?: number;
    cleanSheets?: number;
  };
  award?: string;
};
```

### 14.4 Pertandingan

```ts
export type HomeMatch = {
  id: string;
  phase: string;
  status: "Selesai" | "Resmi";
  date?: string;
  venue?: string;
  homeTeam: HomeTeam;
  awayTeam: HomeTeam;
  homeScore: number;
  awayScore: number;
  note?: string;
};
```

### 14.5 Klasemen

```ts
export type HomeStanding = {
  position: number;
  team: HomeTeam;
  played: number;
  goalDifference: number;
  points: number;
  qualificationStatus?: "Lolos" | "Gugur";
};
```

### 14.6 Penghargaan

```ts
export type HomeAward = {
  id: string;
  title: string;
  recipientType: "player" | "team";
  recipientName: string;
  teamName?: string;
  supportingValue?: string;
  image: HomeImageAsset;
  variant?: "featured" | "compact";
};
```

### 14.7 Berita

```ts
export type HomeNews = {
  id: string;
  title: string;
  summary: string;
  publishedAt: string;
  category?: string;
  image: HomeImageAsset;
  href: string;
};
```

### 14.8 Galeri

```ts
export type HomeGalleryItem = {
  id: string;
  title: string;
  image: HomeImageAsset;
};
```

### 14.9 Sponsor

```ts
export type HomeSponsor = {
  id: string;
  name: string;
  level: string;
  logo: HomeImageAsset;
  href?: string;
};
```

### 14.10 Section State

```ts
export type HomeSectionState<T> =
  | {
      status: "ready";
      data: T;
    }
  | {
      status: "loading";
    }
  | {
      status: "empty";
      message: string;
    }
  | {
      status: "error";
      message: string;
    };
```

Jangan menggunakan `any`.

---

## 15. File Data Prototype

Buat:

```text
client/src/features/home/data/home-prototype-data.ts
```

Struktur:

```ts
export const homePrototypeData = {
  competition: {},
  champion: {},
  featuredFinal: {},
  metrics: [],
  latestResults: {},
  standings: {},
  bracket: {},
  awards: {},
  teams: {},
  players: {},
  news: {},
  gallery: {},
  sponsors: {},
} as const;
```

### 15.1 Aturan Data

- data mengikuti HOM-01;
- data memiliki ID stabil;
- data tidak menggunakan index sebagai key;
- tanggal disimpan dalam format konsisten;
- data tampilan tidak ditulis dalam komponen;
- hubungan tim menggunakan ID;
- hubungan pemain menggunakan teamId;
- gambar boleh `null`;
- href mengikuti sitemap;
- jangan membuat fetch;
- jangan membuat Promise palsu;
- jangan membuat delay loading palsu;
- jangan membuat random data.

### 15.2 State Default

- competition: ready;
- champion: ready;
- featuredFinal: ready;
- metrics: ready;
- latestResults: ready apabila data tersedia;
- standings: ready;
- bracket: ready;
- awards: ready;
- teams: ready;
- players: ready;
- news: ready apabila data tersedia;
- gallery: empty apabila aset belum tersedia;
- sponsors: ready apabila penempatan aktif tersedia.

---

## 16. Strategi Aset

### 16.1 Sumber Aset

Gunakan hanya:

- aset yang sudah berada di repository;
- aset yang telah disetujui di Google Drive;
- URL yang sudah tercatat dalam data sumber FCS;
- fallback yang dibuat dengan CSS dan teks.

### 16.2 Larangan

Jangan:

- mencari gambar baru di internet;
- membuat gambar AI;
- menggunakan screenshot Konsep C sebagai konten;
- mengambil logo tanpa izin;
- membuat foto pemain palsu;
- membuat logo sponsor palsu;
- menggunakan hotlink tanpa sumber;
- menggunakan foto stok yang belum disetujui.

### 16.3 Fallback

Jika logo tim tidak tersedia:

- tampilkan inisial tim;
- gunakan bentuk netral;
- gunakan warna sistem FCS;
- jangan menciptakan crest baru.

Jika foto pemain tidak tersedia:

- tampilkan avatar netral;
- tampilkan inisial;
- gunakan alt text yang jelas.

Jika banner hero tidak tersedia:

- gunakan komposisi CSS;
- gunakan Midnight Navy;
- gunakan pola garis atau bentuk geometris ringan;
- jangan membuat ilustrasi baru.

Jika logo sponsor tidak tersedia:

- tampilkan nama sponsor dalam container proporsional;
- jangan membuat logo teks yang menyerupai merek resmi.

---

## 17. Struktur Halaman

Urutan halaman:

```text
Global Header
Champion Hero
Featured Final dan Competition Summary
Latest Results
Standings Preview
Tournament Bracket
Awards and Statistics
Featured Teams
Featured Players
Latest News
Gallery Preview
Sponsors and Partners
Data Simulation Notice
Global Footer
```

Header dan footer menggunakan komponen global Plan 02.

Header tidak diubah menjadi transparan pada Plan 03.

Hero ditempatkan langsung setelah header agar transisi Midnight Navy tetap terlihat menyatu.

---

## 18. Champion Hero Section

Komponen:

```text
champion-hero-section.tsx
champion-hero-section.module.css
```

Konten:

- StatusBadge `Selesai`;
- nama kompetisi;
- juara turnamen;
- periode;
- lokasi;
- deskripsi singkat;
- CTA hasil pertandingan;
- CTA penghargaan;
- visual hero atau fallback.

H1 halaman:

```text
FCS Industrial Cup Sumedang 2026
```

Nama juara menjadi display kuat, tetapi bukan H1 kedua.

CTA utama:

```text
Lihat Hasil Pertandingan
/pertandingan
```

CTA sekunder:

```text
Lihat Penghargaan
/penghargaan
```

Aturan:

- Midnight Navy;
- teks putih;
- Muted Gold hanya untuk juara;
- maksimum dua CTA;
- tidak menggunakan glow;
- tidak menggunakan countdown;
- tidak menggunakan video background;
- tidak menggunakan parallax.

Mobile:

- satu kolom;
- CTA dapat full width;
- nama juara tetap dominan;
- periode dan lokasi mudah dibaca;
- visual boleh dipindah ke bawah.

---

## 19. Featured Final dan Competition Summary

Komponen:

```text
featured-final-section.tsx
featured-match-card.tsx
competition-metric-card.tsx
```

Final:

```text
Cakra Textile FC 2–1 Tekma Futsal
```

Tampilkan:

- label Final;
- status Selesai;
- status Resmi;
- logo atau fallback;
- nama kedua tim;
- skor besar;
- tanggal;
- venue;
- CTA detail pertandingan.

Metrics:

- 8 Tim;
- 64 Pemain;
- 16 Pertandingan;
- 2 Grup.

Desktop:

- final card lebih besar;
- metrics berada di sisi kanan.

Mobile:

- final card satu kolom;
- metrics grid 2 × 2;
- skor tetap dominan;
- logo tidak terlalu besar.

---

## 20. Latest Results Section

Komponen:

```text
latest-results-section.tsx
match-result-card.tsx
```

Urutan prioritas:

1. final;
2. perebutan tempat ketiga;
3. semifinal;
4. pertandingan resmi terbaru sebelumnya.

Jumlah:

- desktop: maksimum 4–5;
- mobile: maksimum 3 sebelum CTA.

Card menampilkan:

- fase;
- tim;
- skor;
- status;
- tanggal singkat;
- link detail.

Empty:

```text
Belum ada hasil pertandingan resmi.
```

Error:

```text
Hasil pertandingan belum dapat ditampilkan.
```

Loading:

- skeleton dengan ukuran stabil;
- tidak menggunakan spinner besar.

CTA:

```text
Lihat Semua Pertandingan
/pertandingan
```

---

## 21. Standings Preview Section

Komponen:

```text
standings-preview-section.tsx
standings-table.tsx
standings-tabs.tsx
```

Desktop:

- dua tabel;
- Grup A;
- Grup B.

Kolom desktop:

- posisi;
- tim;
- main;
- selisih gol;
- poin;
- status.

Mobile:

- tab Grup A dan Grup B;
- posisi;
- tim;
- main;
- poin;
- selisih gol boleh disembunyikan;
- status tetap tersedia.

Aturan:

- gunakan `<table>`;
- gunakan `<caption>`;
- logo tim kecil;
- status tidak hanya menggunakan warna.

CTA:

```text
Lihat Klasemen Lengkap
/klasemen
```

---

## 22. Tournament Bracket Section

Komponen:

```text
tournament-bracket-section.tsx
desktop-bracket.tsx
mobile-bracket-timeline.tsx
```

Data:

- dua semifinal;
- perebutan tempat ketiga;
- final;
- juara.

Desktop:

- bracket horizontal;
- konektor sederhana;
- tanpa library diagram;
- tanpa canvas;
- tanpa SVG kompleks.

Mobile:

- timeline vertikal;
- semifinal;
- perebutan tempat ketiga;
- final;
- juara.

Empty:

```text
Bracket fase gugur belum tersedia.
```

CTA:

```text
Lihat Bracket Lengkap
/bracket
```

---

## 23. Awards and Statistics Section

Komponen:

```text
awards-section.tsx
award-feature-card.tsx
award-compact-card.tsx
```

Prioritas:

- pemain terbaik;
- pencetak gol terbanyak;
- kiper terbaik;
- tim fair play.

Nilai prototype yang diketahui:

- Pemain Terbaik: Tegar Mahendra;
- nilai pendukung: 5 gol dan 3 MVP;
- Pencetak Gol Terbanyak: Tegar Mahendra dan Agung Firmansyah;
- jumlah gol: 5;
- Kiper Terbaik: Aldi Setiawan;
- Tim Fair Play: Cakra Textile FC.

Nilai tetap harus divalidasi terhadap sumber data.

Aturan:

- pemain terbaik featured;
- penghargaan lain compact;
- Muted Gold terbatas;
- foto memiliki fallback;
- penghargaan bersama tidak dipaksa satu penerima.

CTA:

```text
Lihat Semua Penghargaan
/penghargaan
```

---

## 24. Featured Teams Section

Komponen:

```text
featured-teams-section.tsx
team-card.tsx
team-logo-fallback.tsx
```

Tampilkan seluruh delapan tim peserta terverifikasi.

Card:

- logo atau fallback;
- nama tim;
- organisasi;
- grup;
- achievement badge bila tersedia;
- href detail tim.

Grid:

- desktop besar: empat kolom;
- desktop: tiga atau empat kolom;
- tablet: dua kolom;
- mobile: satu atau dua kolom.

Aturan:

- warna tim hanya aksen lokal;
- warna tim tidak mengganti warna FCS;
- logo konsisten;
- nama tidak terpotong tanpa fallback.

CTA:

```text
Lihat Semua Tim
/tim
```

---

## 25. Featured Players Section

Komponen:

```text
featured-players-section.tsx
player-card.tsx
player-avatar-fallback.tsx
```

Prioritas:

- pemain terbaik;
- top scorer;
- kiper terbaik;
- pemain penghargaan lain yang valid.

Card:

- foto atau fallback;
- nama;
- tim;
- posisi;
- penghargaan;
- maksimum 2–3 statistik.

Jangan menampilkan:

- tanggal lahir;
- data pribadi;
- clean sheet bernilai 0 sebagai pencapaian.

CTA:

```text
Lihat Statistik Pemain
/statistik
```

---

## 26. Latest News Section

Komponen:

```text
latest-news-section.tsx
news-feature-card.tsx
news-compact-card.tsx
```

Maksimum tiga berita terbit terbaru.

Prioritas:

- juara;
- hasil final;
- penghargaan;
- rangkuman kompetisi.

Jangan membuat judul atau isi berita baru apabila data belum tersedia.

Desktop:

- satu berita featured;
- dua berita compact.

Mobile:

- seluruh kartu ditumpuk;
- ringkasan dibatasi.

Card:

- gambar atau fallback;
- kategori;
- tanggal;
- judul;
- ringkasan;
- link detail.

Empty:

```text
Belum ada berita terbaru.
```

CTA:

```text
Lihat Semua Berita
/berita
```

---

## 27. Gallery Preview Section

Komponen:

```text
gallery-preview-section.tsx
gallery-mosaic.tsx
```

Data galeri dalam pemetaan saat ini belum tersedia.

State default:

```text
empty
```

Pesan:

```text
Galeri kompetisi belum tersedia.
```

Jika aset valid tersedia:

- maksimum enam gambar;
- satu gambar utama;
- lima gambar pendukung;
- alt text;
- kredit bila tersedia.

Larangan:

- jangan mengambil gambar dari wireframe;
- jangan mengambil gambar dari Konsep C;
- jangan mencari gambar baru;
- jangan membuat lightbox.

CTA hanya tampil jika ada data:

```text
Lihat Galeri
/galeri
```

---

## 28. Sponsors and Partners Section

Komponen:

```text
sponsors-section.tsx
sponsor-group.tsx
sponsor-logo.tsx
```

Kelompok:

- sponsor utama;
- sponsor pendukung;
- media partner bila tersedia;
- official partner bila tersedia.

Aturan:

- sponsor utama boleh lebih besar;
- sponsor tidak mengalahkan hero;
- sponsor ditempatkan setelah konten utama;
- logo menggunakan container konsisten;
- link eksternal hanya jika URL valid;
- atribut keamanan eksternal wajib benar.

Jika logo kosong:

- tampilkan nama sponsor;
- jangan membuat logo baru.

Jika tidak ada sponsor aktif:

- section boleh disembunyikan;
- jangan membuat sponsor palsu.

CTA:

```text
Lihat Sponsor dan Mitra
/sponsor
```

---

## 29. Data Simulation Notice

Komponen:

```text
data-simulation-notice.tsx
data-simulation-notice.module.css
```

Teks wajib:

```text
Data pada prototype FCS ini merupakan data simulasi untuk kebutuhan demonstrasi.
```

Aturan:

- tampil sebelum footer;
- tidak lebih dominan dari konten;
- menggunakan ikon informasi;
- dapat dibaca screen reader;
- tidak menggunakan modal;
- tidak menggunakan dismiss button.

Footer tetap mempertahankan notice Plan 02.

---

## 30. Shared State Components

Buat:

```text
home-section-skeleton.tsx
home-empty-state.tsx
home-error-state.tsx
```

Skeleton:

- mengikuti bentuk section;
- menjaga layout stabil;
- animasi ringan;
- mematuhi reduced motion;
- tidak menggunakan spinner fullscreen.

Empty:

```ts
type HomeEmptyStateProps = {
  title: string;
  description?: string;
};
```

Error:

```ts
type HomeErrorStateProps = {
  title: string;
  description?: string;
};
```

Tidak ada tombol retry karena belum ada fetch.

---

## 31. Komponen Plan 02 yang Digunakan

Gunakan kembali:

- `PageContainer`;
- `SectionHeading`;
- `StatusBadge`;
- `ActionLink`;
- token visual;
- font Inter;
- SiteHeader;
- SiteFooter.

Jangan menduplikasi:

- button style;
- badge style;
- container;
- header;
- footer;
- focus ring;
- typography global.

Ikon memakai `lucide-react` yang sudah tersedia.

---

## 32. Aturan Heading

Struktur:

```text
H1 : Nama kompetisi pada hero
H2 : Judul setiap section
H3 : Judul card atau subbagian bila diperlukan
```

Aturan:

- tepat satu H1;
- nama juara bukan H1;
- section heading menggunakan H2;
- card tidak melompati struktur tanpa alasan;
- status badge bukan heading.

---

## 33. Aturan Responsive

### 33.1 Mobile Kecil — 320–479 px

- satu kolom utama;
- margin 16 px;
- CTA full width bila perlu;
- hero ringkas;
- metrics 2 × 2;
- klasemen memakai tab;
- bracket timeline;
- card tidak overflow;
- teks tidak kurang dari 12 px.

### 33.2 Mobile Besar — 480–767 px

- satu atau dua kolom sesuai komponen;
- kartu tim dan pemain boleh dua kolom;
- berita tetap ditumpuk.

### 33.3 Tablet — 768–1023 px

- grid dua kolom;
- final dan metrics dapat terpisah;
- tabel disederhanakan;
- bracket timeline atau horizontal sederhana.

### 33.4 Desktop — 1024–1439 px

- container mengikuti Plan 02;
- grid 12 kolom;
- final dan metrics berdampingan;
- dua klasemen berdampingan;
- bracket horizontal.

### 33.5 Desktop Besar — 1440 px ke atas

- konten maksimal 1280 px;
- card tidak diregangkan berlebihan;
- whitespace proporsional.

---

## 34. Aturan Aksesibilitas

Wajib:

- satu H1;
- heading berurutan;
- landmark benar;
- semua gambar memiliki alt;
- gambar dekoratif alt kosong;
- link memiliki teks jelas;
- ikon dekoratif `aria-hidden`;
- tabel memiliki caption;
- status tidak hanya berdasarkan warna;
- focus indicator terlihat;
- area sentuh memadai;
- tidak ada nested link;
- tab klasemen dapat digunakan keyboard;
- bracket dapat dibaca berurutan;
- skeleton tidak mengganggu screen reader;
- empty dan error state dapat dibaca;
- link eksternal memiliki label sesuai.

---

## 35. Aturan Visual

Gunakan:

```text
Modern Sports Competition Portal
Konsep C — Modern dan Premium
Dark Framing, Light Information Surface
```

Area gelap:

- hero;
- featured final secara terbatas;
- framing.

Area terang:

- hasil terbaru;
- klasemen;
- tim;
- pemain;
- berita;
- sponsor;
- data notice.

Muted Gold hanya untuk:

- juara;
- trofi;
- penghargaan;
- pencapaian.

Cyan hanya untuk:

- statistik;
- detail garis;
- aksen kecil.

Larangan:

- desain game;
- esports;
- taruhan;
- dashboard admin;
- neon;
- glow;
- glassmorphism berlebihan;
- shadow berat;
- gradient pada semua tombol;
- animasi berlebihan;
- radius terlalu besar;
- sponsor dominan.

---

## 36. Aturan Layout dan Spacing

- gunakan `PageContainer`;
- section desktop: 64–96 px;
- section mobile: 40–64 px;
- gunakan gap token;
- jangan memakai margin acak berulang;
- jangan memakai lebar fixed yang merusak mobile;
- hero full width dengan konten terbatas container;
- card memakai radius dan shadow dari token;
- tabel tidak diberi shadow berat;
- footer tetap berasal dari layout global.

---

## 37. Aturan Gambar

- gunakan `next/image` apabila aset dapat digunakan secara aman;
- width dan height wajib jelas;
- object-fit sesuai konteks;
- jangan menyebabkan layout shift;
- alt text wajib;
- kredit tampil bila diwajibkan;
- fallback harus stabil;
- remote image hanya jika konfigurasi sudah tersedia dan URL disetujui;
- jangan memperluas `remotePatterns` secara sembarangan.

Jika remote image membutuhkan konfigurasi tambahan, Gemini harus melaporkannya dan tidak mengubah konfigurasi tanpa instruksi eksplisit.

---

## 38. Aturan Client

- route berubah: `/`;
- route baru: tidak ada;
- data fetching: tidak ada;
- state global: tidak ada;
- state interaktif lokal:
  - tab klasemen;
  - state presentasi komponen bila perlu;
- server component sebagai default;
- client component hanya untuk interaksi;
- jangan mengubah seluruh Home menjadi client component;
- jangan memakai `useEffect` untuk data statis;
- jangan memakai localStorage;
- jangan memakai query parameter;
- jangan memakai environment variable.

---

## 39. Aturan Server

> Pekerjaan ini tidak mengubah bagian server.

Dilarang mengubah:

```text
server/
```

Dilarang membuat:

- endpoint;
- controller;
- service;
- schema;
- koneksi database;
- environment variable;
- package server.

---

## 40. Aturan Dependency

> Jangan menambah dependency baru.

Gunakan dependency yang tersedia:

- Next.js;
- React;
- TypeScript;
- lucide-react.

Dilarang menambah:

- UI library;
- chart library;
- carousel library;
- animation library;
- CSS framework;
- class utility;
- date library;
- state management;
- data fetching library;
- image library;
- bracket library.

---

## 41. Struktur File yang Direkomendasikan

```text
client/src/features/home/
├── components/
│   ├── award-compact-card.module.css
│   ├── award-compact-card.tsx
│   ├── award-feature-card.module.css
│   ├── award-feature-card.tsx
│   ├── awards-section.module.css
│   ├── awards-section.tsx
│   ├── champion-hero-section.module.css
│   ├── champion-hero-section.tsx
│   ├── competition-metric-card.module.css
│   ├── competition-metric-card.tsx
│   ├── data-simulation-notice.module.css
│   ├── data-simulation-notice.tsx
│   ├── desktop-bracket.module.css
│   ├── desktop-bracket.tsx
│   ├── featured-final-section.module.css
│   ├── featured-final-section.tsx
│   ├── featured-match-card.module.css
│   ├── featured-match-card.tsx
│   ├── featured-players-section.module.css
│   ├── featured-players-section.tsx
│   ├── featured-teams-section.module.css
│   ├── featured-teams-section.tsx
│   ├── gallery-mosaic.module.css
│   ├── gallery-mosaic.tsx
│   ├── gallery-preview-section.module.css
│   ├── gallery-preview-section.tsx
│   ├── home-empty-state.module.css
│   ├── home-empty-state.tsx
│   ├── home-error-state.module.css
│   ├── home-error-state.tsx
│   ├── home-section-skeleton.module.css
│   ├── home-section-skeleton.tsx
│   ├── latest-news-section.module.css
│   ├── latest-news-section.tsx
│   ├── latest-results-section.module.css
│   ├── latest-results-section.tsx
│   ├── match-result-card.module.css
│   ├── match-result-card.tsx
│   ├── mobile-bracket-timeline.module.css
│   ├── mobile-bracket-timeline.tsx
│   ├── news-compact-card.module.css
│   ├── news-compact-card.tsx
│   ├── news-feature-card.module.css
│   ├── news-feature-card.tsx
│   ├── player-avatar-fallback.module.css
│   ├── player-avatar-fallback.tsx
│   ├── player-card.module.css
│   ├── player-card.tsx
│   ├── sponsor-group.module.css
│   ├── sponsor-group.tsx
│   ├── sponsor-logo.module.css
│   ├── sponsor-logo.tsx
│   ├── sponsors-section.module.css
│   ├── sponsors-section.tsx
│   ├── standings-preview-section.module.css
│   ├── standings-preview-section.tsx
│   ├── standings-table.module.css
│   ├── standings-table.tsx
│   ├── standings-tabs.module.css
│   ├── standings-tabs.tsx
│   ├── team-card.module.css
│   ├── team-card.tsx
│   ├── team-logo-fallback.module.css
│   ├── team-logo-fallback.tsx
│   ├── tournament-bracket-section.module.css
│   └── tournament-bracket-section.tsx
├── data/
│   └── home-prototype-data.ts
├── types/
│   └── home.types.ts
├── home-page.module.css
└── home-page.tsx
```

Catatan:

- file hanya dibuat jika benar-benar digunakan;
- Gemini tidak wajib memecah setiap variasi kecil menjadi file terpisah;
- jangan membuat folder kosong;
- jangan membuat barrel file;
- jangan menambah struktur di luar kebutuhan.

---

## 42. Tahapan Implementasi

### Tahap 1 — Pemeriksaan Awal

- baca Plan 03;
- baca Plan 02;
- periksa source code base;
- periksa data dan aset;
- catat data yang tersedia;
- jangan menjalankan test;
- jangan menjalankan Git.

### Tahap 2 — Tipe dan Data

- buat `home.types.ts`;
- buat `home-prototype-data.ts`;
- masukkan data yang disetujui;
- gunakan fallback untuk data kosong;
- jangan mengarang data.

### Tahap 3 — Shared State dan Fallback

- buat empty state;
- buat error state;
- buat skeleton;
- buat fallback logo;
- buat fallback pemain;
- pastikan komponen reusable.

### Tahap 4 — Hero dan Final

- buat Champion Hero;
- buat Featured Final;
- buat competition metrics;
- pastikan satu H1;
- pastikan mode pasca-turnamen.

### Tahap 5 — Hasil, Klasemen, dan Bracket

- buat Latest Results;
- buat Standings desktop;
- buat Standings mobile tabs;
- buat Bracket desktop;
- buat Bracket mobile timeline.

### Tahap 6 — Penghargaan, Tim, dan Pemain

- buat Awards;
- buat Team cards;
- buat Player cards;
- gunakan data dan fallback.

### Tahap 7 — Berita, Galeri, Sponsor

- buat News;
- buat Gallery empty state atau data valid;
- buat Sponsors;
- buat Data Simulation Notice.

### Tahap 8 — Integrasi Home

- buat HomePage;
- susun urutan section;
- perbarui `app/page.tsx`;
- hapus placeholder CSS yang tidak dipakai;
- jangan mengubah layout global.

### Tahap 9 — Pemeriksaan Statis Tanpa Command

- periksa import;
- periksa tipe secara visual;
- periksa duplikasi;
- periksa link;
- periksa H1;
- periksa alt;
- periksa state;
- periksa tidak ada data karangan;
- periksa tidak ada dependency;
- periksa tidak ada perubahan server;
- berikan laporan;
- berhenti.

---

## 43. Larangan Pengujian

> Jangan menjalankan build, lint, type-check, test, development server, atau proses pengujian lainnya. Setelah implementasi selesai, tuliskan langkah pengujian yang disarankan dan berhenti. Pengujian dilakukan oleh pengguna bersama ChatGPT.

Dilarang menjalankan:

- `npm install`;
- `npm run dev`;
- `npm run build`;
- `npm run lint`;
- `npm run type-check`;
- `npx tsc`;
- automated test;
- browser test;
- Lighthouse;
- accessibility audit;
- screenshot test;
- command pemeriksaan lain.

---

## 44. Larangan Tindakan Git

> Jangan menjalankan tindakan Git apa pun. Commit dan push hanya dilakukan oleh pengguna.

Dilarang menjalankan:

- git status;
- git diff;
- git add;
- git commit;
- git push;
- git pull;
- git fetch;
- git branch;
- git checkout;
- git switch;
- git merge;
- git rebase;
- git reset;
- git clean;
- git stash;
- pull request.

---

## 45. Kriteria Selesai

Pekerjaan dianggap selesai oleh Gemini apabila:

- Home placeholder telah diganti;
- HomePage tersedia;
- tipe Home tersedia;
- data prototype tersedia;
- semua section wajib tersedia;
- satu H1 tersedia;
- hero pasca-turnamen benar;
- hasil final benar;
- metrics benar;
- hasil terbaru benar;
- klasemen desktop dan mobile tersedia;
- bracket desktop dan mobile tersedia;
- awards tersedia;
- teams tersedia;
- players tersedia;
- news tersedia atau empty state valid;
- gallery tersedia atau empty state valid;
- sponsors tersedia atau disembunyikan secara valid;
- data simulation notice tersedia;
- fallback aset tersedia;
- loading, empty, dan error state tersedia;
- responsive CSS tersedia;
- accessibility dipertimbangkan;
- tidak ada route baru;
- tidak ada dependency baru;
- tidak ada perubahan server;
- tidak ada data karangan;
- tidak ada test oleh Gemini;
- tidak ada Git oleh Gemini;
- laporan implementasi diberikan.

Pekerjaan belum selesai secara proyek sampai pengguna dan ChatGPT melakukan pengujian.

---

## 46. Laporan yang Harus Diberikan Gemini

```text
LAPORAN IMPLEMENTASI PLAN 03

1. Ringkasan pekerjaan

2. Daftar file yang dibuat

3. Daftar file yang diubah

4. Daftar file yang dihapus

5. Struktur folder Home

6. Data prototype yang digunakan

7. Data yang belum tersedia

8. Fallback yang digunakan

9. Penjelasan setiap section

10. Penjelasan responsive

11. Penjelasan accessibility

12. Bagian di luar scope yang tidak dikerjakan

13. Risiko atau keterbatasan

14. Langkah pengujian yang disarankan

15. Pernyataan pengujian
    Saya tidak menjalankan build, lint, type-check, test,
    development server, atau pengujian lainnya.

16. Pernyataan Git
    Saya tidak menjalankan tindakan Git, commit, atau push.
```

---

## 47. Rekomendasi Model Gemini

- **Model:** Gemini 3.6 Flash
- **Thinking:** High
- **Alasan:** Plan menyentuh banyak komponen, data terstruktur, responsive behavior, fallback, dan aksesibilitas.
- **Model revisi:** Gemini 3.6 Flash Medium untuk koreksi kecil setelah review.

---

## 48. Checklist Pengujian Pengguna dan ChatGPT

### 48.1 Type Check

```bash
npm run type-check
```

Periksa:

- tidak ada error;
- tidak ada `any`;
- tipe state benar;
- tipe data benar;
- import benar.

### 48.2 Lint

```bash
npm run lint
```

Periksa:

- tidak ada error;
- tidak ada unused import;
- tidak ada hook bermasalah;
- tidak ada accessibility lint issue penting.

### 48.3 Build

```bash
npm run build
```

Periksa:

- build berhasil;
- Home berhasil;
- aset tidak gagal;
- tidak memerlukan env baru.

### 48.4 Development Server

```bash
npm run dev
```

Periksa:

- tidak ada error terminal;
- tidak ada error console;
- tidak ada hydration error;
- halaman tidak overflow.

### 48.5 Desktop 1440 px

- hero jelas;
- final dan metrics proporsional;
- hasil terbaru rapi;
- dua klasemen berdampingan;
- bracket terbaca;
- awards rapi;
- tim 4 kolom;
- pemain rapi;
- berita rapi;
- sponsor tidak dominan;
- footer tetap benar.

### 48.6 Desktop 1024–1280 px

- section tidak bertabrakan;
- tabel tidak overflow;
- bracket tetap terbaca;
- card tidak terlalu sempit.

### 48.7 Tablet

- grid dua kolom;
- navigation global tetap benar;
- klasemen adaptif;
- bracket adaptif;
- tidak ada horizontal scroll.

### 48.8 Mobile 390 px

- hero satu kolom;
- CTA mudah disentuh;
- skor final jelas;
- metrics 2 × 2;
- hasil terbaru ditumpuk;
- klasemen memakai tab;
- bracket timeline;
- tim dan pemain tidak overflow;
- berita ditumpuk;
- gallery empty state jelas;
- sponsor proporsional.

### 48.9 Mobile 360 px

- H1 tidak terpotong;
- nama juara tidak overflow;
- skor tidak bertabrakan;
- kartu tidak keluar viewport;
- tabel tidak merusak layout;
- tidak ada horizontal scroll.

### 48.10 Keyboard

- semua CTA dapat difokuskan;
- tab klasemen dapat digunakan;
- focus indicator terlihat;
- urutan fokus masuk akal;
- tidak ada nested link;
- skip link tetap bekerja.

### 48.11 Content

- juara benar;
- final benar;
- 8 tim;
- 64 pemain;
- 16 pertandingan;
- 2 grup;
- tidak ada data generik;
- tidak ada data karangan;
- notice simulasi tampil.

### 48.12 Scope

- tidak ada route baru;
- tidak ada API;
- tidak ada backend;
- tidak ada database;
- tidak ada dependency baru;
- tidak ada perubahan header besar;
- tidak ada perubahan footer besar;
- tidak ada aset internet baru;
- tidak ada gambar AI.

### 48.13 Hasil Pengujian

- **Status:** BELUM DIUJI
- **Type-check:** BELUM DIUJI
- **Lint:** BELUM DIUJI
- **Build:** BELUM DIUJI
- **Development server:** BELUM DIUJI
- **Desktop:** BELUM DIUJI
- **Tablet:** BELUM DIUJI
- **Mobile:** BELUM DIUJI
- **Keyboard:** BELUM DIUJI
- **Content:** BELUM DIUJI
- **Error:** Belum diketahui

---

## 49. Rekomendasi Commit Message

Commit utama:

```text
feat(client): implement FCS home page
```

Alternatif:

```text
feat(home): build post-tournament competition homepage
```

---

## 50. Data Review Commit

Setelah commit dan push, pengguna mengirim:

```text
Repository:
syahputrawork98-sketch/FCS-Futsal-Competition-Sumedang

Branch:
main

Base commit:
a069eaf8377bfe4d9ee4d14431413cf5b4121e53

Commit SHA:
[isi]

Commit message:
[isi]

File plan:
docs/plan/03_IMPLEMENTASI_HALAMAN_BERANDA.md

Hasil pengujian:
- type-check:
- lint:
- build:
- development server:
- desktop:
- tablet:
- mobile:
- keyboard:
- content:

Error yang masih tersisa:
[isi]

Catatan:
[isi]
```

---

## 51. Catatan Keputusan

| No. | Keputusan | Status |
|---:|---|---|
| 1 | Plan 03 mengimplementasikan seluruh Beranda | DISETUJUI |
| 2 | Beranda menggunakan mode pasca-turnamen | DISETUJUI |
| 3 | Data menggunakan typed local prototype data | DISETUJUI |
| 4 | Tidak ada API atau backend | DISETUJUI |
| 5 | Semua section berada dalam satu plan | DISETUJUI |
| 6 | Gallery default empty jika aset belum tersedia | DISETUJUI |
| 7 | Sponsor section hanya tampil jika data aktif tersedia | DISETUJUI |
| 8 | Header tetap solid Midnight Navy | DISETUJUI |
| 9 | Header transparan tidak dikerjakan | DISETUJUI |
| 10 | Hero menggunakan fallback CSS jika banner tidak tersedia | DISETUJUI |
| 11 | Bracket tanpa library | DISETUJUI |
| 12 | Klasemen mobile menggunakan tab | DISETUJUI |
| 13 | Tidak menambah dependency | DISETUJUI |
| 14 | Gemini 3.6 High digunakan untuk implementasi utama | DISETUJUI |
| 15 | Gemini tidak menjalankan pengujian | DISETUJUI |
| 16 | Gemini tidak menjalankan Git | DISETUJUI |

---

## 52. Riwayat Perubahan

| Versi | Tanggal | Perubahan | Penyusun |
|---|---|---|---|
| 0.1 | 2026-07-23 | Draft awal Plan 03 | Pengguna dan ChatGPT |
| 1.0 | 2026-07-23 | Disetujui sebagai instruksi implementasi | Pengguna dan ChatGPT |

---

## 53. Persetujuan

- **Status persetujuan:** DISETUJUI
- **Tanggal persetujuan:** 2026-07-23
- **Disetujui oleh:** Pengguna
- **Status implementasi:** SIAP DIIMPLEMENTASIKAN

Dokumen ini telah disetujui dan dapat digunakan sebagai instruksi implementasi setelah:

1. file ditempatkan pada `docs/plan/`;
2. Gemini membaca seluruh isi plan;
3. kondisi awal repository diperiksa;
4. implementasi dilakukan sesuai ruang lingkup;
5. Gemini tidak menjalankan pengujian atau tindakan Git.
