# 04_IMPLEMENTASI_HALAMAN_PERTANDINGAN.md

## 1. Identitas Dokumen

- **Judul pekerjaan:** Implementasi Halaman Jadwal dan Hasil Pertandingan
- **Nama file:** `04_IMPLEMENTASI_HALAMAN_PERTANDINGAN.md`
- **Nomor plan:** 04
- **Versi dokumen:** 1.0
- **Status dokumen:** DISETUJUI
- **Tanggal dibuat:** 2026-07-23
- **Tanggal diperbarui:** 2026-07-24
- **Penyusun:** Pengguna bersama ChatGPT
- **Pelaksana implementasi:** Gemini melalui Antigravity
- **Proyek:** FCS — Futsal Competition Sumedang
- **Prototype:** FCS Industrial Cup Sumedang 2026
- **Kode halaman:** MAT-01
- **Mode halaman:** Pasca-turnamen
- **Area:** Client dan UI Halaman Pertandingan
- **Repository:** `syahputrawork98-sketch/FCS-Futsal-Competition-Sumedang`
- **Branch tujuan:** `main`
- **Base commit disetujui:** `0886f01753ce34c2749605d741e9bd7402d8d76f`
- **Plan sebelumnya:** `03_IMPLEMENTASI_HALAMAN_BERANDA.md`
- **Status implementasi:** SIAP DIIMPLEMENTASIKAN
- **Model implementasi yang direkomendasikan:** Gemini 3.6 Flash
- **Thinking level yang direkomendasikan:** High

> Dokumen ini telah dibaca dan disetujui pengguna pada 24 Juli 2026. File ini dapat digunakan sebagai instruksi implementasi setelah ditempatkan pada `docs/plan/`.

---

## 2. Status Persetujuan dan Penggunaan

Plan 04 telah memenuhi gerbang persetujuan berikut:

1. Pengguna telah membaca dan menyetujui isi plan.
2. Struktur halaman, filter, data prototype, dan ruang lingkup telah disetujui.
3. Status dokumen telah ditetapkan menjadi `DISETUJUI`.
4. Versi dokumen telah ditetapkan menjadi `1.0`.
5. Base commit branch `main` telah diperiksa ulang.
6. Model implementasi yang direkomendasikan adalah `Gemini 3.6 Flash`.
7. Thinking level yang direkomendasikan adalah `High`.

Tempatkan file final pada:

```text
FCS-Futsal-Competition-Sumedang/docs/plan/04_IMPLEMENTASI_HALAMAN_PERTANDINGAN.md
```

Setelah file ditempatkan, Gemini melalui Antigravity boleh menjalankan implementasi sesuai ruang lingkup plan ini. Gemini tetap dilarang melakukan commit, push, merge, deployment, atau tindakan Git lain.


---

## 3. Ringkasan Pekerjaan

Plan ini mengatur implementasi halaman publik:

```text
/pertandingan
```

Halaman tersebut menjadi pusat jadwal dan hasil seluruh pertandingan pada satu edisi kompetisi. Untuk prototype aktif, kompetisi telah selesai sehingga tab awal adalah **Hasil** dan seluruh 16 pertandingan memiliki status **Selesai** serta hasil **Resmi**.

Pekerjaan mencakup:

- membuat route `/pertandingan`;
- menampilkan header global dan footer global yang sudah ada;
- menampilkan breadcrumb;
- menampilkan judul dan konteks kompetisi;
- menyediakan tab status pertandingan;
- menyediakan pencarian dan filter;
- menyimpan state filter yang relevan pada query parameter URL;
- menampilkan ringkasan filter aktif;
- menampilkan 16 pertandingan yang dikelompokkan berdasarkan tanggal;
- menyediakan kartu pertandingan yang responsif;
- menyediakan loading, empty, dan error state;
- memperbaiki integrasi kecil dari Beranda menuju halaman Pertandingan;
- menggunakan data prototype lokal yang terstruktur dan bertipe TypeScript;
- tidak membuat backend, API, database, autentikasi, admin, atau halaman Detail Pertandingan.

---

## 4. Latar Belakang

Plan 01 telah menyiapkan repository dan aplikasi Next.js.

Plan 02 telah menyiapkan fondasi UI global, antara lain:

- token visual;
- global CSS;
- `PageContainer`;
- `SiteBrand`;
- `SiteHeader`;
- navigasi desktop;
- mobile navigation drawer;
- `SiteFooter`;
- `ActionLink`;
- `IconButton`;
- `StatusBadge`;
- `SectionHeading`;
- konfigurasi navigasi;
- active navigation;
- halaman 404.

Plan 03 telah mengimplementasikan Beranda pasca-turnamen pada route `/`.

Kondisi repository saat Plan 04 disetujui:

- route `/` sudah menggunakan `HomePage`;
- navigasi utama sudah memiliki item `Pertandingan` dengan href `/pertandingan`;
- Beranda sudah memiliki CTA `Lihat Semua Pertandingan` menuju `/pertandingan`;
- route `/pertandingan` belum tersedia;
- route `/pertandingan/[id]` belum tersedia;
- komponen Home `MatchResultCard` masih memiliki pola link menuju route detail yang belum ada;
- data pertandingan pada Home masih sangat terbatas dan tidak boleh dijadikan sumber lengkap MAT-01;
- data lengkap MAT-01 berasal dari sumber data FCS yang telah disetujui dan dicantumkan kembali dalam plan ini.

Plan 04 harus membuat halaman Pertandingan tanpa merusak Beranda dan tanpa melakukan refactor besar terhadap feature Home.

---

## 5. Tujuan

Pekerjaan ini bertujuan untuk:

1. Membuat route publik `/pertandingan` yang benar-benar dapat dibuka.
2. Menampilkan seluruh 16 pertandingan prototype secara akurat.
3. Menjadikan hasil pertandingan mudah dipindai berdasarkan tanggal.
4. Menyediakan tab `Semua`, `Jadwal`, `Berlangsung`, dan `Hasil`.
5. Menjadikan tab `Hasil` sebagai tab awal pada mode pasca-turnamen.
6. Menyediakan filter fase, grup, tim, dan tanggal.
7. Menyediakan pencarian berdasarkan nomor pertandingan dan nama tim.
8. Menyimpan state utama pada query parameter agar halaman dapat dibagikan dan dipulihkan.
9. Menampilkan filter aktif sebagai chip yang dapat dihapus.
10. Menyediakan reset filter yang mengembalikan state default.
11. Membuat komponen pertandingan yang reusable dan data-driven.
12. Menghindari penulisan data berulang di JSX.
13. Menyediakan tipe data TypeScript yang jelas tanpa `any`.
14. Menyediakan perilaku desktop, tablet, dan mobile.
15. Menyediakan akses keyboard, focus state, label form, dan status yang tidak bergantung pada warna.
16. Menyediakan loading, empty, dan error state secara arsitektural.
17. Menjaga fondasi visual Modern dan Premium yang telah digunakan Beranda.
18. Menjaga komponen global Plan 02 tetap stabil.
19. Menyiapkan pola data yang dapat diganti oleh API pada tahap berikutnya.
20. Tidak membuat MAT-02 atau halaman lain di luar ruang lingkup.

---

## 6. Referensi Utama

Gemini wajib membaca file plan ini secara penuh sebelum mengubah kode.

| No. | Dokumen/Sumber | Status | Peran |
|---:|---|---|---|
| 1 | `00_INDEX_DAN_STATUS_PERENCANAAN_WEBSITE.md` | AKTIF | Menentukan status dan sumber kebenaran |
| 2 | `01_ALUR_KERJA_PERENCANAAN_DAN_IMPLEMENTASI_WEBSITE.md` | DISETUJUI | Menentukan pembagian peran, pengujian, dan Git |
| 3 | `02_TEMPLATE_PLAN_IMPLEMENTASI_WEBSITE.md` | AKTIF | Acuan struktur plan |
| 4 | `01_FCS_BRIEF_ARAH_DESAIN_WEBSITE.md` | DISETUJUI | Menentukan karakter portal |
| 5 | `FCS – Panduan Identitas Visual Website` | DISETUJUI | Menentukan sistem visual |
| 6 | `01_FCS_SITEMAP_DAN_ARSITEKTUR_INFORMASI.md` | DISETUJUI | Menentukan route dan navigasi |
| 7 | `MAT-01_SPESIFIKASI_HALAMAN_JADWAL_DAN_HASIL.md` | DISETUJUI | Sumber utama struktur dan perilaku halaman |
| 8 | `MAT-01_PEMETAAN_DATA_JADWAL_DAN_HASIL.csv` | DISETUJUI | Kontrak data dan hubungan sumber |
| 9 | `MAT-01_DAFTAR_REFERENSI.md` | DISETUJUI | Urutan referensi halaman |
| 10 | `MAT-01_WIREFRAME_JADWAL_DAN_HASIL.pdf` | REFERENSI STRUKTURAL DRAFT | Acuan komposisi desktop dan mobile |
| 11 | `MAT-01_SPESIFIKASI_KOMPONEN_UI.md` | DISETUJUI | Acuan komponen, state, responsif, dan aksesibilitas |
| 12 | `03_IMPLEMENTASI_HALAMAN_BERANDA.md` | TELAH DIIMPLEMENTASIKAN | Acuan pola feature dan integrasi Home |
| 13 | Source code pada base commit | AKTIF | Kondisi teknis aktual |
| 14 | Data prototype yang ditulis ulang pada Plan 04 | MENGIKAT | Data yang harus tersedia bagi Antigravity |

### 6.1 Urutan Sumber Kebenaran

Apabila terdapat konflik, gunakan urutan berikut:

1. keputusan terbaru pengguna yang telah disetujui;
2. Plan 04 versi final yang berstatus `DISETUJUI`;
3. index status perencanaan aktif;
4. spesifikasi halaman MAT-01;
5. pemetaan data MAT-01;
6. data prototype yang tercantum pada Plan 04;
7. spesifikasi komponen UI MAT-01;
8. wireframe PDF MAT-01;
9. panduan identitas visual;
10. sitemap;
11. source code aktif;
12. catatan lama atau arsip.

### 6.2 Aturan Wireframe

Wireframe MAT-01 dipakai untuk memahami:

- urutan section;
- kepadatan informasi;
- susunan desktop;
- susunan mobile;
- pola filter mobile;
- posisi loading, empty, dan error state.

Wireframe tidak boleh digunakan untuk mengarang:

- nama tim;
- skor;
- tanggal;
- venue;
- status;
- sponsor;
- aset;
- route yang tidak ditetapkan.

Apabila detail visual wireframe bertentangan dengan spesifikasi yang telah disetujui, gunakan spesifikasi dan keputusan pengguna.

---

## 7. Prasyarat Implementasi

Implementasi Plan 04 baru boleh dimulai setelah:

- Plan 03 berada pada kondisi yang telah direview pengguna;
- repository berada pada branch yang benar;
- base commit atau commit terbaru telah dibaca;
- file `client/package.json` telah dibaca;
- struktur `client/src/app`, `client/src/components`, dan `client/src/features/home` telah diperiksa;
- navigasi `/pertandingan` masih tersedia pada konfigurasi global;
- tidak ada route `/pertandingan` yang dibuat oleh pekerjaan lain;
- tidak ada perubahan belum dipahami pada komponen global;
- status Plan 04 sudah `DISETUJUI`.

Base commit pada saat Plan 04 disetujui:

```text
0886f01753ce34c2749605d741e9bd7402d8d76f
```

Apabila branch `main` telah memiliki commit baru, Gemini wajib membaca kondisi terbaru dan menyesuaikan daftar file tanpa menghapus perubahan yang sudah ada.

Gemini tidak boleh melakukan reset, checkout paksa, rebase, commit, push, merge, atau tindakan Git lain.

---

## 8. Kondisi Teknis Aktif

Stack aktif yang harus dipertahankan:

```text
Next.js    : 16.2.11
React      : 19.2.4
React DOM  : 19.2.4
TypeScript : 5.x
Node       : 24.x
CSS        : CSS Modules + global token
Icons      : lucide-react yang sudah terpasang
```

Aturan teknis:

- gunakan App Router;
- gunakan TypeScript;
- gunakan CSS Modules;
- gunakan alias import yang sudah aktif;
- jangan menambah dependency;
- jangan membuat library UI baru;
- jangan mengubah package manager;
- jangan mengubah konfigurasi lint atau TypeScript tanpa kebutuhan yang sah;
- jangan membuat backend palsu;
- jangan membuat Promise atau delay palsu untuk meniru API.

---

## 9. Hasil Akhir yang Diharapkan

Setelah implementasi selesai:

1. `/pertandingan` dapat dibuka tanpa 404.
2. Menu `Pertandingan` pada navigasi global berstatus aktif.
3. Halaman memiliki satu `h1`.
4. Breadcrumb menampilkan `Beranda / Pertandingan` pada desktop.
5. Header halaman menampilkan nama halaman, edisi, status kompetisi, dan jumlah hasil.
6. Konteks kompetisi menampilkan `FCS Industrial Cup Sumedang 2026`.
7. Konteks kompetisi menampilkan kategori `Umum Putra`.
8. Konteks kompetisi menampilkan periode `1–9 Agustus 2026`.
9. Konteks kompetisi menampilkan status `Selesai`.
10. Tab awal adalah `Hasil`.
11. Tab `Hasil` menampilkan 16 pertandingan.
12. Tab `Semua` menampilkan 16 pertandingan.
13. Tab `Jadwal` menampilkan empty state.
14. Tab `Berlangsung` menampilkan empty state.
15. Filter fase bekerja.
16. Filter grup bekerja hanya ketika relevan.
17. Filter tim bekerja untuk Tim A maupun Tim B.
18. Filter tanggal bekerja.
19. Pencarian bekerja untuk nomor pertandingan, ID pertandingan, nama tim, dan nama singkat.
20. Jumlah hasil berubah sesuai filter.
21. Filter aktif tampil sebagai chip.
22. Chip dapat dihapus secara individual.
23. Tombol reset tampil hanya ketika state berbeda dari default.
24. Query parameter mencerminkan state utama.
25. Refresh browser mempertahankan state melalui URL.
26. Daftar dikelompokkan berdasarkan tanggal.
27. Mode hasil diurutkan dari tanggal dan waktu terbaru.
28. Seluruh 16 data pertandingan cocok dengan tabel pada Plan 04.
29. Seluruh skor resmi tampil dengan benar.
30. PRT013 menampilkan catatan adu penalti secara benar.
31. Venue tampil ringkas.
32. Filter venue tidak tampil karena prototype hanya memiliki satu venue.
33. Kartu pertandingan responsif.
34. Mobile filter menggunakan panel/bottom sheet atau drawer ringkas.
35. Loading, empty, dan error state tersedia.
36. Tidak ada link menuju route detail yang belum tersedia.
37. CTA Beranda menuju halaman Pertandingan tidak menghasilkan 404.
38. Tidak ada backend atau API.
39. Tidak ada perubahan server.
40. Tidak ada dependency baru.
41. Tidak ada tindakan Git oleh Gemini.
42. Gemini menyerahkan laporan file yang dibuat dan diubah.

---

## 10. Ruang Lingkup

Gemini diperbolehkan:

- membuat route `/pertandingan`;
- membuat feature folder `matches` atau `match-list` yang konsisten dengan repository;
- membuat data prototype MAT-01;
- membuat tipe TypeScript MAT-01;
- membuat utility lokal untuk filter, sort, grouping, dan format tanggal;
- membuat komponen halaman MAT-01;
- membuat CSS Modules MAT-01;
- menggunakan komponen global Plan 02;
- menggunakan ikon dari `lucide-react` yang sudah terpasang;
- menggunakan query parameter melalui API Next.js yang sesuai;
- membuat client component hanya pada bagian interaktif;
- membuat loading state;
- membuat empty state;
- membuat error state;
- membuat fallback logo berbasis teks atau inisial;
- melakukan integrasi kecil pada Home agar link pertandingan tidak menuju route detail yang belum tersedia;
- menormalisasi ID pertandingan Home menjadi ID resmi apabila perubahan tersebut diperlukan untuk integrasi;
- memperbaiki import atau typing yang berkaitan langsung dengan Plan 04;
- menghapus kode placeholder khusus `/pertandingan` apabila ditemukan.

---

## 11. Di Luar Ruang Lingkup

Gemini tidak boleh:

- membuat route `/pertandingan/[id]`;
- membuat MAT-02 Detail Pertandingan;
- membuat kejadian laga;
- membuat statistik pertandingan;
- membuat susunan pemain;
- membuat daftar pemain pertandingan;
- membuat perangkat pertandingan pada halaman detail;
- membuat berita pertandingan;
- membuat live score;
- membuat WebSocket;
- membuat streaming;
- membuat admin;
- membuat CMS;
- membuat form pengelolaan jadwal;
- membuat form pengelolaan skor;
- membuat autentikasi;
- membuat API;
- membuat route handler;
- membuat server action untuk data pertandingan;
- membuat database;
- menghubungkan Neon;
- menghubungkan Railway;
- mengambil Google Sheets secara langsung dari browser;
- membaca Google Drive dari aplikasi;
- mengubah struktur server;
- membuat halaman Klasemen;
- membuat halaman Bracket;
- membuat halaman Tim;
- membuat halaman Statistik;
- membuat halaman Berita;
- menambah dependency;
- menambah state-management library;
- menambah date library;
- menambah component library;
- menambah animation library;
- membuat logo baru;
- membuat aset AI;
- mencari atau mengambil gambar baru dari internet;
- melakukan deployment;
- menjalankan Git;
- menghapus perubahan Plan 03 yang tidak berkaitan;
- melakukan refactor besar terhadap feature Home;
- mengubah sistem visual global tanpa persetujuan.

> Jangan mengerjakan perubahan di luar ruang lingkup Plan 04.

---

## 12. Route dan Mode Halaman

Route utama:

```text
/pertandingan
```

Kode halaman:

```text
MAT-01
```

Mode prototype:

```text
Status kompetisi : Selesai
Mode halaman      : Pasca-turnamen
Tab awal          : Hasil
Jumlah laga       : 16
Status laga       : Selesai
Status hasil      : Resmi
```

Halaman tidak menggunakan hero besar seperti Beranda.

Route detail berikut belum boleh dibuat:

```text
/pertandingan/[id]
```

---

## 13. Query Parameter

Gunakan query parameter berikut:

| Parameter | Nilai | Default | Keterangan |
|---|---|---|---|
| `status` | `semua`, `jadwal`, `berlangsung`, `hasil` | `hasil` | Tab status aktif |
| `fase` | ID fase, contoh `FAS01` | kosong | Filter fase |
| `grup` | ID grup, contoh `GRPA` | kosong | Filter grup |
| `tim` | ID tim, contoh `TIM002` | kosong | Filter tim |
| `tanggal` | ISO `YYYY-MM-DD` | kosong | Filter satu tanggal |
| `q` | teks pencarian | kosong | Pencarian |
| `page` | integer positif | `1` | Disiapkan untuk pagination |

Aturan:

- nilai tidak valid kembali ke default aman;
- parameter default tidak wajib ditulis ke URL;
- perubahan filter mengembalikan `page=1`;
- perubahan query tidak melakukan reload penuh;
- back dan forward browser harus memulihkan state;
- nilai pencarian harus di-trim;
- pencarian harus case-insensitive;
- URL tidak boleh menyimpan label tampilan sebagai pengganti ID referensi;
- `grup` harus dihapus apabila fase gugur dipilih;
- query parameter yang tidak dikenal tidak perlu dihapus kecuali mengganggu halaman.

Contoh:

```text
/pertandingan?status=hasil&fase=FAS02
/pertandingan?status=hasil&tim=TIM002
/pertandingan?status=hasil&tanggal=2026-08-09
/pertandingan?q=PRT016
/pertandingan?q=Cakra
```

---

## 14. Data Prototype Wajib

### 14.1 Kompetisi

```text
Edisi ID          : EDI2026
Nama edisi        : FCS Industrial Cup Sumedang 2026
Kategori ID       : KTG001
Kategori          : Umum Putra
Periode           : 1–9 Agustus 2026
Status kompetisi  : Selesai
Jumlah tim        : 8
Jumlah pertandingan: 16
Jumlah grup       : 2
```

### 14.2 Fase

| Fase ID | Nama | Tipe | Urutan |
|---|---|---|---:|
| FAS01 | Fase Grup | Grup | 1 |
| FAS02 | Semifinal | Gugur | 2 |
| FAS03 | Perebutan Tempat Ketiga | Gugur | 3 |
| FAS04 | Final | Gugur | 4 |

### 14.3 Grup

| Grup ID | Fase ID | Nama | Urutan |
|---|---|---|---:|
| GRPA | FAS01 | Grup A | 1 |
| GRPB | FAS01 | Grup B | 2 |

### 14.4 Venue

```text
Venue ID      : VEN001
Nama venue    : Arena Futsal Sumedang (Simulasi)
Kecamatan     : Sumedang Selatan
Kabupaten/Kota: Sumedang
Status        : Aktif
```

Karena hanya satu venue aktif, filter venue disiapkan pada model data tetapi tidak ditampilkan pada UI prototype.

### 14.5 Tim

| Tim ID | Nama Tim | Singkatan | Grup ID | Grup |
|---|---|---|---|---|
| TIM001 | Sinar Logam FC | SLF | GRPA | Grup A |
| TIM002 | Cakra Textile FC | CTF | GRPA | Grup A |
| TIM003 | Tirta Pangan FC | TPF | GRPA | Grup A |
| TIM004 | Karya Mesin FC | KMF | GRPA | Grup A |
| TIM005 | Bumi Energi FC | BEF | GRPB | Grup B |
| TIM006 | Prima Pack FC | PPF | GRPB | Grup B |
| TIM007 | Tekma Futsal | TMF | GRPB | Grup B |
| TIM008 | Tanjungsari United | TSU | GRPB | Grup B |

### 14.6 Pertandingan

| ID | No. | Fase | Grup | Tim A | Tim B | Tanggal | Waktu | Skor | Hasil | Catatan |
|---|---:|---|---|---|---|---|---|---:|---|---|
| PRT001 | 1 | Fase Grup | Grup A | Sinar Logam FC | Karya Mesin FC | 2026-08-01 | 13:00 | 3–1 | Resmi | Data simulasi prototype |
| PRT002 | 2 | Fase Grup | Grup A | Cakra Textile FC | Tirta Pangan FC | 2026-08-01 | 14:30 | 2–2 | Resmi | Data simulasi prototype |
| PRT003 | 3 | Fase Grup | Grup B | Bumi Energi FC | Tanjungsari United | 2026-08-01 | 16:00 | 2–1 | Resmi | Data simulasi prototype |
| PRT004 | 4 | Fase Grup | Grup B | Prima Pack FC | Tekma Futsal | 2026-08-01 | 17:30 | 1–1 | Resmi | Data simulasi prototype |
| PRT005 | 5 | Fase Grup | Grup A | Sinar Logam FC | Tirta Pangan FC | 2026-08-02 | 13:00 | 2–2 | Resmi | Data simulasi prototype |
| PRT006 | 6 | Fase Grup | Grup A | Karya Mesin FC | Cakra Textile FC | 2026-08-02 | 14:30 | 1–2 | Resmi | Data simulasi prototype |
| PRT007 | 7 | Fase Grup | Grup B | Bumi Energi FC | Tekma Futsal | 2026-08-02 | 16:00 | 1–2 | Resmi | Data simulasi prototype |
| PRT008 | 8 | Fase Grup | Grup B | Tanjungsari United | Prima Pack FC | 2026-08-02 | 17:30 | 2–2 | Resmi | Data simulasi prototype |
| PRT009 | 9 | Fase Grup | Grup A | Sinar Logam FC | Cakra Textile FC | 2026-08-03 | 13:00 | 1–2 | Resmi | Data simulasi prototype |
| PRT010 | 10 | Fase Grup | Grup A | Tirta Pangan FC | Karya Mesin FC | 2026-08-03 | 14:30 | 3–2 | Resmi | Data simulasi prototype |
| PRT011 | 11 | Fase Grup | Grup B | Bumi Energi FC | Prima Pack FC | 2026-08-03 | 16:00 | 3–2 | Resmi | Data simulasi prototype |
| PRT012 | 12 | Fase Grup | Grup B | Tekma Futsal | Tanjungsari United | 2026-08-03 | 17:30 | 2–1 | Resmi | Data simulasi prototype |
| PRT013 | 13 | Semifinal | — | Cakra Textile FC | Bumi Energi FC | 2026-08-08 | 15:00 | 2–2 | Resmi | Cakra Textile FC menang adu penalti 4–3 |
| PRT014 | 14 | Semifinal | — | Tekma Futsal | Tirta Pangan FC | 2026-08-08 | 17:00 | 3–1 | Resmi | Data simulasi prototype |
| PRT015 | 15 | Perebutan Tempat Ketiga | — | Bumi Energi FC | Tirta Pangan FC | 2026-08-09 | 15:00 | 2–3 | Resmi | Perebutan tempat ketiga |
| PRT016 | 16 | Final | — | Cakra Textile FC | Tekma Futsal | 2026-08-09 | 17:00 | 2–1 | Resmi | Final — Cakra Textile FC juara |

### 14.7 Aturan Data

- gunakan ID stabil sebagai key;
- jangan menggunakan index array sebagai key;
- tanggal disimpan sebagai string ISO `YYYY-MM-DD`;
- waktu disimpan sebagai string 24 jam `HH:mm`;
- skor disimpan sebagai number;
- status internal menggunakan nilai terkontrol;
- label Bahasa Indonesia diturunkan melalui mapper;
- hubungan pertandingan ke tim menggunakan `teamAId` dan `teamBId`;
- hubungan pertandingan ke fase menggunakan `phaseId`;
- hubungan pertandingan ke grup menggunakan `groupId | null`;
- hubungan pertandingan ke venue menggunakan `venueId`;
- semua pertandingan prototype memiliki `status: finished`;
- semua pertandingan prototype memiliki `resultStatus: official`;
- PRT013 harus memiliki data adu penalti terstruktur;
- catatan simulasi tidak perlu menjadi teks dominan pada kartu;
- jangan mengarang data baru;
- apabila logo tidak dapat digunakan secara legal atau teknis, gunakan fallback inisial;
- jangan menampilkan kontak PIC atau data internal pada halaman publik.

---

## 15. Arsitektur Feature

Gunakan struktur yang jelas dan dekat dengan pola feature Home.

Struktur rekomendasi:

```text
client/src/
├── app/
│   └── pertandingan/
│       ├── page.tsx
│       ├── loading.tsx
│       └── error.tsx
└── features/
    └── matches/
        ├── components/
        │   ├── match-page-header.tsx
        │   ├── competition-context.tsx
        │   ├── match-status-tabs.tsx
        │   ├── match-filter-toolbar.tsx
        │   ├── mobile-filter-sheet.tsx
        │   ├── active-filter-summary.tsx
        │   ├── match-list.tsx
        │   ├── date-group.tsx
        │   ├── match-card.tsx
        │   ├── team-identity.tsx
        │   ├── match-list-skeleton.tsx
        │   ├── matches-empty-state.tsx
        │   ├── matches-error-state.tsx
        │   └── related-navigation.tsx
        ├── data/
        │   └── matches-prototype-data.ts
        ├── lib/
        │   ├── filter-matches.ts
        │   ├── group-matches-by-date.ts
        │   ├── match-search-params.ts
        │   └── match-formatters.ts
        ├── types/
        │   └── matches.types.ts
        ├── matches-page.module.css
        └── matches-page.tsx
```

Nama folder dapat disesuaikan apabila repository telah memiliki konvensi lain, tetapi tanggung jawab setiap file harus tetap jelas.

### 15.1 Aturan Arsitektur

- `app/pertandingan/page.tsx` hanya menjadi entry route dan boundary route;
- susunan halaman berada di `matches-page.tsx`;
- data prototype berada dalam file data khusus;
- tipe berada dalam file khusus;
- fungsi filter dan grouping tidak ditulis di JSX;
- CSS halaman berada dekat feature;
- CSS komponen berada dekat komponen;
- jangan membuat barrel file hanya untuk memperpendek import;
- jangan membuat context provider global;
- jangan membuat Redux, Zustand, atau state library lain;
- jangan membuat service API palsu;
- jangan membuat repository layer palsu;
- jangan menaruh seluruh halaman dalam satu file besar;
- jangan memecah komponen mikro tanpa manfaat.

---

## 16. Tipe Data Minimum

Gunakan tipe minimal berikut atau bentuk yang setara dan lebih aman.

```ts
export type MatchStatusCode =
  | "scheduled"
  | "live"
  | "finished"
  | "postponed"
  | "cancelled";

export type MatchResultStatusCode = "official" | "provisional" | null;

export type MatchTab = "all" | "schedule" | "live" | "results";

export type MatchImageAsset = {
  src: string | null;
  alt: string;
  credit?: string;
};

export type MatchTeam = {
  id: string;
  name: string;
  shortName: string;
  groupId: string;
  logo: MatchImageAsset;
};

export type MatchPhase = {
  id: string;
  name: string;
  type: "group" | "knockout";
  order: number;
};

export type MatchGroup = {
  id: string;
  phaseId: string;
  name: string;
  order: number;
};

export type MatchVenue = {
  id: string;
  name: string;
  district?: string;
  city?: string;
};

export type PenaltyResult = {
  teamAScore: number;
  teamBScore: number;
  winnerTeamId: string;
};

export type MatchRecord = {
  id: string;
  number: number;
  competitionId: string;
  categoryId: string;
  phaseId: string;
  groupId: string | null;
  teamAId: string;
  teamBId: string;
  date: string;
  startTime: string;
  venueId: string;
  status: MatchStatusCode;
  teamAScore: number | null;
  teamBScore: number | null;
  resultStatus: MatchResultStatusCode;
  penaltyResult?: PenaltyResult;
  note?: string;
};

export type MatchFilters = {
  tab: MatchTab;
  phaseId: string | null;
  groupId: string | null;
  teamId: string | null;
  date: string | null;
  search: string;
  page: number;
};

export type MatchPageState<T> =
  | { status: "ready"; data: T }
  | { status: "loading" }
  | { status: "empty"; message: string }
  | { status: "error"; message: string };
```

Aturan:

- jangan gunakan `any`;
- jangan menggunakan cast berulang untuk menyembunyikan kesalahan tipe;
- jangan menjadikan label tampilan sebagai nilai domain internal;
- buat mapper label terpusat;
- skor harus `number | null`, bukan string;
- `groupId` harus `null` pada fase gugur;
- data adu penalti tidak boleh dicampur dengan skor waktu normal;
- objek prototype sebaiknya menggunakan `satisfies` untuk validasi tipe.

---

## 17. File Data Prototype

Buat:

```text
client/src/features/matches/data/matches-prototype-data.ts
```

Struktur minimum:

```ts
export const matchesPrototypeData = {
  competition: {
    id: "EDI2026",
    name: "FCS Industrial Cup Sumedang 2026",
    categoryId: "KTG001",
    categoryName: "Umum Putra",
    dateRangeLabel: "1–9 Agustus 2026",
    status: "finished",
  },
  phases: [],
  groups: [],
  venues: [],
  teams: [],
  matches: [],
} satisfies MatchesPrototypeData;
```

### 17.1 Aturan Data File

- seluruh 8 tim wajib tersedia;
- seluruh 16 pertandingan wajib tersedia;
- tidak boleh hanya mengimpor satu pertandingan dari Home;
- jangan menulis nama tim berulang pada setiap pertandingan;
- resolve tim melalui ID;
- jangan membuat data random;
- jangan membuat loading palsu;
- jangan membuat fetch;
- jangan membuat Promise palsu;
- jangan mengambil data Google Sheets dari client;
- jangan hotlink logo Google Drive apabila URL tersebut tidak dapat digunakan sebagai image source yang stabil;
- gunakan `src: null` dan fallback apabila aset belum tersedia di repository;
- data ini merupakan simulasi dan harus tetap ditandai melalui `DataSimulationNotice` atau komponen setara.

---

## 18. Aturan Tab Status

Tab yang tersedia:

```text
Semua
Jadwal
Berlangsung
Hasil
```

Mapping internal:

| Label | Nilai internal | Aturan |
|---|---|---|
| Semua | `all` | Tidak menyaring status |
| Jadwal | `schedule` | `scheduled` atau `postponed` yang masih memiliki jadwal |
| Berlangsung | `live` | `live` |
| Hasil | `results` | `finished` dan memiliki skor |

Aturan prototype:

- tab awal adalah `Hasil`;
- `Hasil` memiliki 16 data;
- `Semua` memiliki 16 data;
- `Jadwal` memiliki 0 data;
- `Berlangsung` memiliki 0 data;
- tab tetap ditampilkan meskipun jumlahnya 0;
- empty state harus sesuai konteks tab;
- perubahan tab disimpan pada query parameter `status`;
- tab harus dapat digunakan dengan keyboard;
- gunakan semantik tab yang benar atau pola button group yang memiliki label aksesibel konsisten;
- tab aktif tidak boleh dibedakan hanya melalui warna.

---

## 19. Aturan Filter

### 19.1 Filter Fase

Pilihan:

```text
Semua Fase
Fase Grup
Semifinal
Perebutan Tempat Ketiga
Final
```

Nilai disimpan menggunakan ID fase.

### 19.2 Filter Grup

Pilihan:

```text
Semua Grup
Grup A
Grup B
```

Aturan:

- aktif ketika fase kosong atau `FAS01`;
- dinonaktifkan atau disembunyikan ketika fase gugur dipilih;
- nilai grup otomatis dihapus ketika fase gugur dipilih;
- fase grup dan grup digabung dengan logika AND.

### 19.3 Filter Tim

Pilihan berisi 8 tim yang telah ditetapkan.

Pertandingan cocok apabila:

```text
match.teamAId === selectedTeamId
ATAU
match.teamBId === selectedTeamId
```

### 19.4 Filter Tanggal

Pilihan tanggal unik:

```text
2026-08-01
2026-08-02
2026-08-03
2026-08-08
2026-08-09
```

Label harus menggunakan Bahasa Indonesia.

### 19.5 Filter Venue

Model data mendukung venue, tetapi UI filter venue tidak ditampilkan karena hanya ada satu venue aktif.

### 19.6 Reset Filter

Default reset:

```text
status  = hasil
fase    = kosong
grup    = kosong
tim     = kosong
tanggal = kosong
q       = kosong
page    = 1
```

Tombol reset hanya tampil apabila state berbeda dari default.

---

## 20. Aturan Pencarian

Pencarian harus cocok terhadap:

- ID pertandingan, contoh `PRT016`;
- nomor pertandingan, contoh `16` atau `Pertandingan 16`;
- nama lengkap Tim A;
- nama singkat Tim A;
- nama lengkap Tim B;
- nama singkat Tim B;
- nama venue.

Aturan normalisasi:

- trim whitespace awal dan akhir;
- case-insensitive;
- cocok sebagian;
- jangan mencari nama pemain;
- jangan mencari kejadian laga;
- jangan mencari kontak;
- jangan mengubah data sumber;
- debounce boleh digunakan dengan API React/JavaScript bawaan tanpa dependency baru;
- pencarian kosong tidak menyaring data.

---

## 21. Urutan Filter dan Sort

Pipeline yang wajib:

```text
Data semua pertandingan
→ filter tab status
→ filter fase
→ filter grup
→ filter tim
→ filter tanggal
→ filter pencarian
→ sort
→ group berdasarkan tanggal
→ pagination/load more jika digunakan
```

### 21.1 Sort Mode Hasil

```text
tanggal DESC
waktu DESC
nomor pertandingan DESC
```

Urutan tanggal yang diharapkan:

```text
9 Agustus 2026
8 Agustus 2026
3 Agustus 2026
2 Agustus 2026
1 Agustus 2026
```

### 21.2 Sort Mode Jadwal

```text
tanggal ASC
waktu ASC
nomor pertandingan ASC
```

### 21.3 Sort Mode Semua

Pada prototype pasca-turnamen, gunakan urutan terbaru terlebih dahulu agar konsisten dengan mode hasil.

---

## 22. Struktur Halaman

Urutan section:

```text
Global Header
Breadcrumb
Page Header
Competition Context
Status Tabs
Filter and Search Toolbar
Active Filter Summary
Match List grouped by date
Pagination atau Load More jika diperlukan
Empty/Error State sesuai kondisi
Related Navigation
Data Simulation Notice
Global Footer
```

Header dan footer menggunakan komponen global yang telah tersedia.

Halaman tidak membuat hero penuh layar.

---

## 23. Global Header dan Active Navigation

Gunakan `SiteHeader` yang telah tersedia.

Aturan:

- item `Pertandingan` berstatus aktif pada `/pertandingan`;
- dropdown global tidak diubah;
- mobile drawer tetap bekerja;
- tidak menambahkan menu baru;
- tidak membuat header khusus MAT-01;
- tidak mengubah token global tanpa kebutuhan yang disetujui.

Apabila active navigation belum mengenali `/pertandingan`, perbaiki logika secara generik tanpa merusak route lain.

---

## 24. Breadcrumb

Desktop:

```text
Beranda / Pertandingan
```

Mobile dapat menggunakan:

```text
← Kembali ke Beranda
```

Aturan:

- `Beranda` merupakan link `/`;
- `Pertandingan` merupakan posisi aktif dan tidak harus berupa link;
- gunakan semantik `nav` dengan `aria-label="Breadcrumb"`;
- separator dekoratif disembunyikan dari screen reader;
- breadcrumb tidak boleh menjadi `h1`.

---

## 25. Page Header

Konten:

```text
Eyebrow     : Pertandingan
H1          : Jadwal dan Hasil
Deskripsi   : Temukan seluruh pertandingan FCS Industrial Cup Sumedang 2026.
Ringkasan   : 16 pertandingan • Kompetisi selesai
```

Jumlah pertandingan harus mengikuti hasil filter aktif, bukan angka yang ditulis permanen pada JSX.

Contoh setelah filter:

```text
2 pertandingan ditemukan
```

Perubahan jumlah hasil harus diumumkan secara tidak mengganggu melalui `aria-live="polite"`.

---

## 26. Competition Context

Tampilkan secara ringkas:

- nama edisi;
- kategori;
- periode;
- status;
- jumlah pertandingan;
- tautan menuju Klasemen;
- tautan menuju Bracket.

Karena route Klasemen dan Bracket belum tentu tersedia, jangan membuat dead link.

Gunakan aturan:

- apabila route tujuan belum ada, tampilkan teks `Segera tersedia` atau aksi disabled yang jelas;
- jangan membuat route baru;
- jangan mengarahkan ke `#`;
- jangan menggunakan tombol yang tampak aktif tetapi tidak melakukan apa pun.

---

## 27. Filter Toolbar Desktop

Desktop menggunakan toolbar yang ringkas dan tidak mengalahkan daftar pertandingan.

Susunan rekomendasi:

```text
[Pencarian........................]
[Semua Fase] [Semua Grup] [Semua Tim] [Semua Tanggal]
[Reset Filter]
```

Aturan:

- setiap input memiliki label;
- placeholder bukan pengganti label;
- ukuran target klik memadai;
- dropdown tidak memotong label panjang;
- toolbar boleh sticky apabila tidak menutup header dan tidak mengganggu pembacaan;
- jangan membuat toolbar sticky jika implementasinya menimbulkan overlap.

---

## 28. Filter Mobile

Pada mobile:

- pencarian tetap terlihat pada halaman;
- tombol `Filter` menampilkan jumlah filter aktif;
- filter lanjutan dibuka melalui bottom sheet atau drawer;
- panel memiliki judul `Filter Pertandingan`;
- panel memiliki tombol tutup;
- panel memiliki tombol `Terapkan`;
- panel memiliki tombol `Reset` ketika diperlukan;
- scroll halaman belakang dikunci saat panel terbuka;
- `Escape` menutup panel pada perangkat keyboard;
- fokus dipindahkan ke panel saat dibuka;
- fokus dikembalikan ke tombol pemicu saat ditutup;
- body tidak boleh tetap terkunci setelah panel ditutup;
- panel tidak boleh berada di belakang header atau footer.

State filter sementara dalam panel boleh diterapkan saat tombol `Terapkan` ditekan. Jangan mengubah URL pada setiap perubahan select apabila pola tersebut mengganggu pengalaman mobile.

---

## 29. Active Filter Summary

Tampilkan chip untuk nilai non-default.

Urutan chip:

```text
Status
Fase
Grup
Tim
Tanggal
Pencarian
```

Aturan:

- setiap chip memiliki tombol hapus;
- tombol hapus memiliki `aria-label` yang spesifik;
- menghapus fase juga menghapus grup apabila grup menjadi tidak relevan;
- menghapus status mengembalikan status ke default `hasil`;
- mobile menampilkan `Filter (n)`;
- ringkasan disembunyikan ketika tidak ada filter non-default;
- jangan menampilkan ID mentah kepada pengguna apabila label tersedia.

---

## 30. Match List

Daftar dikelompokkan berdasarkan tanggal.

Setiap kelompok memiliki heading tanggal, contoh:

```text
Minggu, 9 Agustus 2026
```

Di bawahnya tampil:

```text
Perebutan Tempat Ketiga
Bumi Energi FC 2–3 Tirta Pangan FC
15.00 • Arena Futsal Sumedang (Simulasi)

Final
Cakra Textile FC 2–1 Tekma Futsal
17.00 • Arena Futsal Sumedang (Simulasi)
```

Aturan:

- grouping dilakukan setelah filter dan sort;
- gunakan ID pertandingan sebagai key;
- heading tanggal harus memiliki level yang benar;
- satu pertandingan hanya tampil sekali;
- jumlah total tidak dihitung hanya dari halaman pagination aktif;
- jangan mengambil hasil dari data kejadian laga.

---

## 31. Match Card

Setiap kartu minimal menampilkan:

- nomor pertandingan;
- fase;
- grup apabila ada;
- tanggal;
- waktu;
- venue;
- Tim A;
- Tim B;
- logo atau fallback kedua tim;
- skor;
- status pertandingan;
- status hasil;
- catatan penting seperti adu penalti;
- aksi yang tidak menuju route mati.

### 31.1 Prioritas Visual

Urutan prioritas:

1. status dan fase;
2. kedua tim;
3. skor;
4. tanggal dan waktu;
5. venue;
6. catatan hasil;
7. aksi.

### 31.2 Skor

Untuk pertandingan selesai:

```text
2 – 1
```

Skor harus dominan, tetapi nama tim tetap terbaca.

Jangan menampilkan `0–0` sebagai placeholder apabila skor tidak tersedia.

### 31.3 Adu Penalti

PRT013:

```text
Skor waktu normal : 2–2
Adu penalti       : Cakra Textile FC menang 4–3
```

Jangan mengganti skor utama menjadi 4–3.

### 31.4 Status

Tampilkan label:

```text
Selesai
Hasil Resmi
```

Status tidak boleh hanya dibedakan dengan warna.

### 31.5 Aksi Detail

MAT-02 belum diimplementasikan.

Karena itu:

- jangan membuat link `/pertandingan/PRT016`;
- jangan membuat link `#`;
- jangan membuat tombol palsu;
- aksi detail dapat disembunyikan;
- atau tampilkan label noninteraktif `Detail segera tersedia` apabila sesuai desain;
- seluruh kartu tetap dapat dibaca tanpa route detail.

---

## 32. Team Identity dan Logo Fallback

Nama tim wajib selalu tampil sebagai teks.

Apabila logo lokal yang valid tersedia, gunakan aset tersebut.

Apabila tidak tersedia:

- tampilkan inisial nama singkat;
- gunakan bentuk netral;
- gunakan warna sistem FCS;
- jangan menciptakan crest baru;
- jangan mengambil logo dari internet;
- jangan menganggap URL halaman Google Drive sebagai direct image URL;
- alt text logo harus menyebut nama tim;
- fallback dekoratif yang mengulang nama dapat diberi `aria-hidden` apabila nama tim sudah tersedia.

---

## 33. Related Navigation

Section terkait dapat menampilkan:

```text
Klasemen
Bracket Fase Gugur
Daftar Tim
```

Aturan:

- hanya aktifkan link untuk route yang benar-benar tersedia;
- route yang belum tersedia ditandai `Segera tersedia`;
- jangan membuat route baru;
- jangan mengarahkan ke placeholder tidak bermakna;
- jangan membuat navigasi terlihat rusak.

---

## 34. Data Simulation Notice

Gunakan komponen `DataSimulationNotice` yang sudah ada apabila komponen tersebut cukup generik.

Apabila komponen masih berada di dalam feature Home dan tidak layak diimpor lintas feature:

1. promosikan komponen menjadi shared component hanya jika perubahan kecil dan semua import diperbarui dengan aman; atau
2. buat komponen lokal MAT-01 dengan tampilan konsisten tanpa refactor besar.

Teks harus menjelaskan bahwa seluruh data merupakan simulasi prototype.

---

## 35. Loading State

Sediakan skeleton yang mengikuti struktur daftar.

Minimal:

- skeleton page header ringkas;
- skeleton toolbar;
- skeleton dua kelompok tanggal;
- skeleton beberapa kartu pertandingan.

Aturan:

- jangan membuat `setTimeout`;
- jangan membuat Promise palsu;
- jangan membuat animasi berat;
- hormati `prefers-reduced-motion`;
- skeleton tidak perlu diumumkan sebagai konten bermakna oleh screen reader;
- `app/pertandingan/loading.tsx` boleh menggunakan skeleton feature.

---

## 36. Empty State

Empty state harus kontekstual.

Contoh:

### 36.1 Jadwal

```text
Belum ada pertandingan terjadwal.
Kompetisi ini telah selesai dan seluruh pertandingan tersedia pada tab Hasil.
```

### 36.2 Berlangsung

```text
Tidak ada pertandingan yang sedang berlangsung.
```

### 36.3 Filter

```text
Tidak ada pertandingan yang cocok dengan filter ini.
Ubah atau reset filter untuk melihat pertandingan lainnya.
```

Empty state menyediakan aksi reset hanya jika filter aktif.

---

## 37. Error State

Sediakan error state untuk kegagalan pemrosesan atau future data source.

Teks contoh:

```text
Pertandingan belum dapat ditampilkan.
Silakan muat ulang halaman atau coba lagi setelah beberapa saat.
```

Aturan:

- jangan menampilkan stack trace;
- jangan menampilkan detail internal;
- tombol coba lagi harus memiliki perilaku nyata;
- `app/pertandingan/error.tsx` harus menjadi client component sesuai aturan Next.js;
- error boundary tidak menggantikan validasi data prototype;
- data yang tidak lengkap sebaiknya menggunakan fallback, bukan melempar error tanpa alasan.

---

## 38. Pagination atau Load More

Prototype hanya memiliki 16 pertandingan.

Strategi default:

- tampilkan seluruh 16 pertandingan;
- jangan menambah pagination kompleks apabila seluruh daftar tetap ringan;
- pertahankan tipe `page` dan arsitektur yang mudah diperluas;
- jangan menampilkan kontrol pagination apabila hanya ada satu halaman.

Apabila implementasi memilih pagination:

- gunakan ukuran halaman yang konsisten;
- jangan memotong kelompok tanggal secara membingungkan;
- jumlah total tetap mencerminkan seluruh hasil filter;
- mobile boleh menggunakan `Muat Lebih Banyak`;
- kontrol tidak tampil jika tidak diperlukan.

---

## 39. Responsif

### 39.1 Desktop

Referensi:

```text
Viewport referensi : 1440 px
Konten maksimum    : 1200–1280 px
Grid                : 12 kolom
Gutter              : 24 px
Margin              : 64–80 px
```

Perilaku:

- page header dan context dapat dua kolom jika ruang cukup;
- filter toolbar horizontal atau grid ringkas;
- kartu dapat menggunakan layout horizontal;
- nama tim, skor, dan metadata tidak berdesakan;
- kelompok tanggal jelas.

### 39.2 Tablet

Referensi:

```text
Viewport : 768–1024 px
Grid     : 8 kolom
Gutter   : 20 px
Margin   : 32 px
```

Perilaku:

- filter dapat menjadi dua baris;
- kartu tetap terbaca tanpa horizontal scroll;
- related navigation dapat menjadi grid dua kolom.

### 39.3 Mobile

Referensi:

```text
Viewport : 360–430 px
Grid     : 4 kolom
Gutter   : 16 px
Margin   : 16–20 px
```

Perilaku:

- tab dapat scroll horizontal dengan indikator yang jelas;
- pencarian lebar penuh;
- filter lanjutan masuk bottom sheet/drawer;
- kartu berubah menjadi susunan vertikal;
- skor tetap dominan;
- metadata sekunder boleh diringkas tetapi tidak hilang seluruhnya;
- CTA atau label status tidak boleh keluar container;
- tidak ada horizontal overflow halaman;
- area sentuh minimum sekitar 44 × 44 px untuk kontrol utama.

---

## 40. Aksesibilitas

Wajib memenuhi:

- satu `h1`;
- hierarki heading logis;
- landmark `main`;
- breadcrumb memiliki label;
- tab dapat digunakan dengan keyboard;
- input memiliki label;
- select memiliki label;
- tombol ikon memiliki accessible name;
- focus ring terlihat;
- status tidak hanya menggunakan warna;
- perubahan jumlah hasil diumumkan dengan `aria-live="polite"`;
- bottom sheet mengelola fokus;
- tombol tutup panel memiliki label jelas;
- logo memiliki alt text yang benar;
- urutan pembacaan Tim A, skor, dan Tim B masuk akal;
- tanggal tidak hanya disajikan sebagai angka ambigu;
- error dan empty state dapat dibaca screen reader;
- animasi menghormati `prefers-reduced-motion`;
- tidak ada elemen clickable berbasis `div` tanpa semantik.

---

## 41. Styling

Gunakan:

- token visual yang sudah tersedia;
- Midnight Navy sebagai warna dasar utama;
- aksen brand yang sudah disetujui;
- spacing scale yang konsisten;
- radius dan shadow ringan;
- kontras teks yang cukup;
- CSS Modules;
- class name yang semantik.

Jangan:

- membuat warna hex baru tanpa mengecek token;
- membuat gradient berlebihan;
- membuat shadow berat pada semua kartu;
- menggunakan animasi dekoratif berat;
- mengubah font global;
- mengubah layout header global;
- menyalin CSS Home secara buta;
- menggunakan inline style untuk seluruh komponen.

---

## 42. Integrasi dengan Beranda

Plan 04 boleh melakukan integrasi kecil berikut:

1. memastikan CTA `Lihat Semua Pertandingan` tetap menuju `/pertandingan`;
2. mencegah `MatchResultCard` pada Home menuju route detail yang belum tersedia;
3. mengubah label aksi Home menjadi `Lihat Pertandingan` apabila diperlukan;
4. menormalisasi ID final Home dari nilai generik menjadi `PRT016` apabila perubahan tersebut tidak merusak komponen lain;
5. menormalisasi ID tim Home menjadi `TIM002` dan `TIM007` apabila aman;
6. tidak mengubah struktur visual section Home;
7. tidak mengisi seluruh data Home sebagai bagian Plan 04;
8. tidak melakukan refactor besar feature Home.

Strategi paling aman sebelum MAT-02 tersedia:

```text
Home match action → /pertandingan?q=PRT016
```

Halaman Pertandingan kemudian menampilkan hasil pencarian PRT016.

Jangan menggunakan:

```text
/pertandingan/PRT016
```

karena route detail belum ada.

---

## 43. File yang Diperkirakan Dibuat

Daftar rekomendasi:

```text
client/src/app/pertandingan/page.tsx
client/src/app/pertandingan/loading.tsx
client/src/app/pertandingan/error.tsx
client/src/features/matches/matches-page.tsx
client/src/features/matches/matches-page.module.css
client/src/features/matches/types/matches.types.ts
client/src/features/matches/data/matches-prototype-data.ts
client/src/features/matches/lib/filter-matches.ts
client/src/features/matches/lib/group-matches-by-date.ts
client/src/features/matches/lib/match-search-params.ts
client/src/features/matches/lib/match-formatters.ts
client/src/features/matches/components/match-page-header.tsx
client/src/features/matches/components/competition-context.tsx
client/src/features/matches/components/match-status-tabs.tsx
client/src/features/matches/components/match-filter-toolbar.tsx
client/src/features/matches/components/mobile-filter-sheet.tsx
client/src/features/matches/components/active-filter-summary.tsx
client/src/features/matches/components/match-list.tsx
client/src/features/matches/components/date-group.tsx
client/src/features/matches/components/match-card.tsx
client/src/features/matches/components/team-identity.tsx
client/src/features/matches/components/match-list-skeleton.tsx
client/src/features/matches/components/matches-empty-state.tsx
client/src/features/matches/components/matches-error-state.tsx
client/src/features/matches/components/related-navigation.tsx
```

Setiap komponen yang memiliki styling sendiri dapat mempunyai file `.module.css` di sebelahnya.

Gemini tidak harus membuat seluruh nama file persis seperti daftar apabila penggabungan dua komponen menghasilkan struktur yang lebih wajar. Gemini tidak boleh menggabungkan seluruh halaman ke satu file besar.

---

## 44. File yang Diperkirakan Diubah

Hanya jika diperlukan:

```text
client/src/features/home/components/match-result-card.tsx
client/src/features/home/data/home-prototype-data.ts
client/src/config/navigation.ts
```

Aturan:

- `navigation.ts` hanya diubah apabila active state atau href salah;
- perubahan Home hanya untuk integrasi route;
- jangan mengubah section Home lain;
- jangan mengubah data penghargaan, galeri, sponsor, klasemen, atau pemain;
- jangan mengubah global token kecuali ada bug yang langsung menghalangi MAT-01.

---

## 45. File yang Tidak Boleh Diubah Tanpa Kebutuhan Langsung

```text
server/**
client/package.json
client/package-lock.json
client/tsconfig.json
client/eslint.config.*
client/next.config.*
client/src/app/layout.tsx
client/src/styles/tokens.css
```

Apabila perubahan salah satu file tersebut benar-benar diperlukan, Gemini harus menjelaskan alasannya dalam laporan sebelum pengguna memutuskan kelanjutannya.

---

## 46. Urutan Implementasi

Lakukan pekerjaan dalam urutan berikut:

1. Baca Plan 04 secara penuh.
2. Periksa status dokumen.
3. Periksa branch dan kondisi repository tanpa melakukan tindakan Git yang mengubah state.
4. Baca `client/package.json`.
5. Baca route dan layout aktif.
6. Baca konfigurasi navigasi.
7. Baca komponen global yang akan digunakan.
8. Baca integrasi pertandingan pada Home.
9. Buat tipe data MAT-01.
10. Buat data prototype 8 tim dan 16 pertandingan.
11. Buat formatter tanggal, waktu, dan label status.
12. Buat fungsi filter, sort, dan grouping murni.
13. Buat parser dan serializer query parameter.
14. Buat komponen atom/composite yang diperlukan.
15. Buat daftar dan kelompok tanggal.
16. Buat filter desktop.
17. Buat filter mobile.
18. Buat active filter summary.
19. Buat loading, empty, dan error state.
20. Susun `MatchesPage`.
21. Buat route `/pertandingan`.
22. Periksa active navigation.
23. Perbaiki integrasi Home yang menuju route detail mati.
24. Periksa responsif secara statis dari kode.
25. Periksa aksesibilitas secara statis dari kode.
26. Periksa ulang seluruh data terhadap tabel Plan 04.
27. Hentikan pekerjaan tanpa commit atau push.
28. Buat laporan implementasi.

---

## 47. Larangan Implementasi

Gemini dilarang:

- mengarang data;
- menghapus data untuk menyederhanakan implementasi;
- hanya menampilkan final;
- mengganti nama tim;
- mengganti skor;
- mengganti tanggal;
- mengganti venue;
- menggabungkan skor penalti dengan skor utama;
- menggunakan data generik seperti Team A dan Team B pada tampilan final;
- membuat link detail yang 404;
- menonaktifkan TypeScript dengan komentar;
- menggunakan `any`;
- menonaktifkan lint rule secara global;
- menambahkan dependency;
- menggunakan date library baru;
- membuat API palsu;
- membuat fetch palsu;
- membuat delay palsu;
- mengambil data langsung dari Drive;
- menggunakan aset tanpa persetujuan;
- membuat route lain;
- mengubah Home di luar integrasi kecil;
- mengubah header/footer global secara visual;
- menjalankan pengujian otomatis apabila aturan kerja proyek menugaskannya kepada pengguna;
- menjalankan Git;
- melakukan deployment.

---

## 48. Pemeriksaan Data Wajib

Sebelum menyerahkan laporan, Gemini harus memeriksa secara manual dari kode:

- jumlah tim tepat 8;
- jumlah pertandingan tepat 16;
- ID pertandingan unik;
- nomor pertandingan unik 1–16;
- setiap `teamAId` valid;
- setiap `teamBId` valid;
- Tim A tidak sama dengan Tim B;
- setiap `phaseId` valid;
- `groupId` hanya ada pada FAS01;
- setiap `venueId` valid;
- tanggal hanya berada pada rentang kompetisi;
- seluruh status `finished`;
- seluruh result status `official`;
- skor seluruh pertandingan cocok dengan tabel;
- PRT013 memiliki penalty result 4–3 untuk TIM002;
- PRT016 adalah final TIM002 vs TIM007 dengan skor 2–1;
- urutan hasil terbaru dimulai dari PRT016 dan PRT015;
- tidak ada data kontak publik;
- tidak ada URL gambar yang rusak dipaksakan.

---

## 49. Skenario Pengujian Manual oleh Pengguna

Pengujian dilakukan pengguna setelah Gemini menyelesaikan implementasi.

### 49.1 Route

- buka `/pertandingan`;
- pastikan tidak 404;
- refresh halaman;
- gunakan back dan forward browser.

### 49.2 Tab

- buka default;
- pastikan tab Hasil aktif;
- pilih Semua;
- pilih Jadwal dan lihat empty state;
- pilih Berlangsung dan lihat empty state;
- kembali ke Hasil.

### 49.3 Filter

- pilih Fase Grup;
- pilih Grup A;
- pilih Cakra Textile FC;
- pilih tanggal 9 Agustus 2026;
- hapus chip satu per satu;
- pilih Semifinal dan pastikan grup direset;
- gunakan Reset Filter.

### 49.4 Pencarian

Cari:

```text
PRT016
16
Cakra
CTF
Tekma
TMF
Arena
```

Pastikan hasil sesuai.

### 49.5 Data

- periksa final 2–1;
- periksa perebutan tempat ketiga 2–3;
- periksa semifinal PRT013 2–2 dan penalti 4–3;
- periksa seluruh 16 pertandingan;
- periksa tanggal grouping.

### 49.6 Responsif

- desktop lebar;
- tablet;
- mobile 360 px;
- mobile 390 px;
- mobile 430 px;
- buka filter mobile;
- tutup dengan tombol;
- tutup dengan Escape jika keyboard tersedia;
- periksa tidak ada horizontal overflow.

### 49.7 Aksesibilitas

- navigasi keyboard;
- focus indicator;
- label pencarian;
- label filter;
- tombol hapus chip;
- tab keyboard;
- heading;
- screen reader label bila tersedia.

### 49.8 Integrasi Home

- buka Beranda;
- klik `Lihat Semua Pertandingan`;
- pastikan membuka `/pertandingan`;
- klik aksi pertandingan final pada Home jika tersedia;
- pastikan tidak menuju route detail 404.

---

## 50. Perintah Validasi oleh Pengguna

Dijalankan pengguna dari folder `client` setelah implementasi:

```bash
npm run type-check
npm run lint
npm run build
```

Kemudian jalankan aplikasi:

```bash
npm run dev
```

Gemini tidak menjalankan commit atau push.

---

## 51. Format Laporan Implementasi Gemini

Gemini wajib melaporkan:

```text
STATUS IMPLEMENTASI PLAN 04

1. Ringkasan pekerjaan
2. File baru
3. File yang diubah
4. Route yang tersedia
5. Struktur data yang dibuat
6. Jumlah tim
7. Jumlah pertandingan
8. Filter yang tersedia
9. Query parameter yang tersedia
10. State loading/empty/error
11. Integrasi Home yang diubah
12. Keputusan teknis penting
13. Perbedaan terhadap plan, bila ada
14. Hal yang belum selesai
15. Risiko atau catatan pengujian
16. Konfirmasi bahwa Git tidak dijalankan
```

Laporan tidak boleh menyatakan pengujian berhasil apabila Gemini tidak menjalankannya.

---

## 52. Saran Commit Setelah Lulus Review

Commit dilakukan oleh pengguna setelah type-check, lint, build, dan review visual lulus.

Saran pesan commit:

```text
feat(matches): implement match schedule and results page
```

Apabila ada perbaikan setelah audit:

```text
fix(matches): repair match filters and responsive states
```

---

## 53. Definition of Done

Plan 04 dinyatakan selesai hanya apabila:

- route `/pertandingan` tersedia;
- data 8 tim tersedia;
- data 16 pertandingan tersedia;
- seluruh data cocok dengan Plan 04;
- tab bekerja;
- filter bekerja;
- pencarian bekerja;
- URL state bekerja;
- grouping tanggal bekerja;
- sort bekerja;
- loading state tersedia;
- empty state tersedia;
- error state tersedia;
- mobile filter bekerja;
- aksesibilitas dasar terpenuhi;
- link Home tidak menuju route mati;
- tidak ada route MAT-02;
- tidak ada dependency baru;
- tidak ada backend;
- tidak ada perubahan Git oleh Gemini;
- type-check dijalankan pengguna dan lulus;
- lint dijalankan pengguna dan lulus;
- build dijalankan pengguna dan lulus;
- review visual pengguna disetujui;
- commit dilakukan pengguna;
- status implementasi pada dokumentasi diperbarui setelah commit final.

---

## 54. Catatan Review Pengguna

Hasil review dan persetujuan pengguna:

```text
Status review          : DISETUJUI
Keputusan pengguna     : Plan 04 diterima tanpa perubahan tambahan
Perubahan yang diminta : Tidak ada
Tanggal persetujuan    : 24 Juli 2026
Versi final            : 1.0
Base commit final      : 0886f01753ce34c2749605d741e9bd7402d8d76f
Model implementasi     : Gemini 3.6 Flash
Thinking level         : High
```

---

## 55. Penutup

Plan 04 hanya mengimplementasikan `MAT-01 — Jadwal dan Hasil Pertandingan`.

Plan ini tidak mengimplementasikan Detail Pertandingan, Klasemen, Bracket, Tim, Pemain, Statistik, Berita, Sponsor, Galeri, admin, API, atau database.

Semua pengembangan berikutnya harus dibuat melalui plan terpisah agar ruang lingkup, data, pengujian, dan riwayat keputusan tetap dapat diaudit.
