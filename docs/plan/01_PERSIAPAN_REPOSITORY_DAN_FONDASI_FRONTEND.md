# 01_PERSIAPAN_REPOSITORY_DAN_FONDASI_FRONTEND.md

## 1. Identitas Dokumen

- **Judul pekerjaan:** Persiapan Repository dan Fondasi Frontend
- **Nama file:** `01_PERSIAPAN_REPOSITORY_DAN_FONDASI_FRONTEND.md`
- **Nomor plan:** 01
- **Versi dokumen:** 1.0
- **Status:** DISETUJUI
- **Tanggal dibuat:** 2026-07-23
- **Tanggal diperbarui:** 2026-07-23
- **Penyusun:** Pengguna bersama ChatGPT
- **Pelaksana implementasi:** Gemini melalui Antigravity
- **Proyek:** FCS — Futsal Competition Sumedang
- **Area:** Repository, Client, dan Docs
- **Repository:** `syahputrawork98-sketch/FCS-Futsal-Competition-Sumedang`
- **Branch awal:** `main`
- **Commit awal yang diperiksa:** `3afbdd1ff4a2f56c11b42bc151293e01a9f3f934`

> Dokumen ini telah disetujui oleh pengguna dan dapat digunakan sebagai instruksi implementasi setelah ditempatkan pada `docs/plan/`.

---

## 2. Ringkasan Pekerjaan

Plan ini mengatur persiapan struktur awal repository FCS, pembuatan fondasi aplikasi frontend berbasis TypeScript, penyediaan placeholder untuk area server dan dokumentasi, perbaikan README awal, serta persiapan struktur agar aplikasi frontend nantinya dapat dihubungkan dan di-deploy melalui Vercel.

Pekerjaan pada tahap ini belum mengimplementasikan fitur portal kompetisi, halaman berdasarkan sitemap, backend, database, integrasi API, Railway, Neon PostgreSQL, ataupun deployment produksi.

Hasil utama yang diharapkan adalah repository yang memiliki struktur dasar jelas, frontend yang bersih dan dapat dikembangkan secara bertahap, dokumentasi awal yang cukup, serta batas yang tegas antara `client/`, `server/`, dan `docs/`.

---

## 3. Latar Belakang

Repository GitHub FCS masih berada pada kondisi awal. Repository hanya memiliki satu file `README.md` dengan isi:

```markdown
# FCS-Futsal-Club-Sumedang
```

Nama tersebut tidak lagi sesuai dengan keputusan terbaru proyek. Nama resmi yang digunakan adalah:

> **FCS — Futsal Competition Sumedang**

Belum tersedia:

- folder `client/`;
- folder `server/`;
- folder `docs/`;
- aplikasi frontend;
- konfigurasi TypeScript;
- konfigurasi lint;
- konfigurasi Node.js;
- package manager dan lockfile;
- struktur komponen;
- dokumentasi cara menjalankan proyek;
- kesiapan struktur untuk Vercel;
- source code backend;
- konfigurasi Railway;
- konfigurasi Neon PostgreSQL.

Dokumen perencanaan produk, sitemap, profil pengguna, matriks halaman, dan alur navigasi sudah tersedia di Google Drive. Namun, implementasi halaman portal kompetisi belum boleh dimulai dalam plan ini. Plan 01 hanya menyiapkan repository dan fondasi teknis frontend agar tahap implementasi berikutnya dapat dilakukan dengan struktur yang konsisten.

Pekerjaan ini menggunakan jalur file plan karena:

- mengubah struktur repository;
- membuat aplikasi frontend baru;
- menambah dependency utama;
- menetapkan fondasi teknologi;
- membuat banyak file;
- menjadi dasar pekerjaan implementasi berikutnya;
- memerlukan dokumentasi jangka panjang.

---

## 4. Tujuan

Pekerjaan ini bertujuan untuk:

1. Mengubah repository kosong menjadi repository proyek yang memiliki struktur utama `client/`, `server/`, dan `docs/`.
2. Membuat fondasi aplikasi frontend berbasis TypeScript yang bersih, minimal, dan siap dikembangkan.
3. Memisahkan area frontend, backend, dan dokumentasi sejak awal.
4. Memperbaiki identitas proyek pada README dan metadata frontend.
5. Menyediakan struktur komponen dasar tanpa mengimplementasikan fitur kompetisi.
6. Menyediakan placeholder yang menjelaskan bahwa server, Railway, Neon PostgreSQL, dan integrasi data belum dikerjakan.
7. Menyiapkan frontend agar nantinya dapat dikonfigurasi pada Vercel dengan Root Directory `client/`.
8. Menyediakan script yang nantinya dapat digunakan pengguna bersama ChatGPT untuk melakukan pengujian.
9. Mencegah Gemini memperluas pekerjaan ke halaman, fitur, backend, deployment, atau desain final.
10. Menghasilkan fondasi yang dapat menjadi titik awal Plan 02 dan pekerjaan frontend berikutnya.

---

## 5. Referensi Google Drive dan Repository

Gemini wajib membaca file plan ini secara penuh sebelum melakukan implementasi.

Referensi utama:

| No. | Dokumen atau sumber | Lokasi | Kegunaan |
|---|---|---|---|
| 1 | Alur Kerja Perencanaan dan Implementasi Website FCS | https://drive.google.com/file/d/1DHIk4q_Mxe9eMarIX8BeGSbgbhBg8oPS/view | Aturan kerja, pembagian peran, larangan pengujian, dan larangan Git |
| 2 | Template Plan Implementasi Website FCS | https://drive.google.com/file/d/11EUouOoRhj9ThDPRDlzlMPd44mjGqe-S/view | Acuan struktur plan |
| 3 | Brief Arah Desain Website | Folder `01 — BRIEF DAN RUANG LINGKUP` | Memahami identitas dan karakter portal |
| 4 | Perencanaan Wireframe Website | Folder `01 — BRIEF DAN RUANG LINGKUP` | Memahami bahwa portal publik bukan dashboard |
| 5 | Sitemap dan Arsitektur Informasi | Folder `02 — SITEMAP DAN NAVIGASI` | Memahami arah pengembangan halaman tanpa mengimplementasikannya |
| 6 | Matriks Halaman, Data, dan Prioritas | Folder `03 — SPESIFIKASI HALAMAN` | Mengetahui halaman masa depan dan batas Plan 01 |
| 7 | Repository GitHub FCS | https://github.com/syahputrawork98-sketch/FCS-Futsal-Competition-Sumedang | Memeriksa kondisi source code sebelum perubahan |

Referensi teknis resmi:

| No. | Referensi | Lokasi | Kegunaan |
|---|---|---|---|
| 1 | Next.js App Router Documentation | https://nextjs.org/docs/app/getting-started | Dasar setup Next.js, TypeScript, App Router, dan struktur proyek |
| 2 | Node.js Release Schedule | https://nodejs.org/en/about/previous-releases | Verifikasi status Node.js 24 LTS |
| 3 | Vercel Node.js 24 Support | https://vercel.com/changelog/node-js-24-lts-is-now-generally-available-for-builds-and-functions | Verifikasi dukungan Node.js 24 pada Vercel |
| 4 | Vercel Monorepo Root Directory | https://vercel.com/docs/monorepos | Acuan penggunaan Root Directory `client/` |

---

## 6. Kondisi Awal Repository

### 6.1 Repository

```text
Repository : syahputrawork98-sketch/FCS-Futsal-Competition-Sumedang
Branch     : main
Commit     : 3afbdd1ff4a2f56c11b42bc151293e01a9f3f934
Message    : Initial commit
```

### 6.2 Struktur Awal

```text
FCS-Futsal-Competition-Sumedang/
└── README.md
```

### 6.3 Isi README Awal

```markdown
# FCS-Futsal-Club-Sumedang
```

### 6.4 Teknologi yang Sudah Tersedia

Belum ada framework, package manager, TypeScript, source code, konfigurasi frontend, backend, database, atau deployment.

### 6.5 Fungsi yang Sudah Berjalan

Belum ada aplikasi yang dapat dijalankan.

### 6.6 Keterbatasan Awal

- Nama pada README masih menggunakan nama lama.
- Belum ada pembagian area frontend, backend, dan dokumentasi.
- Belum ada konfigurasi lingkungan pengembangan.
- Belum ada lockfile dependency.
- Belum ada halaman aplikasi.
- Belum ada script pengujian.
- Belum ada dokumentasi penggunaan repository.
- Belum ada konfigurasi deployment.

---

## 7. Hasil Akhir yang Diharapkan

Setelah implementasi selesai:

1. Repository memiliki struktur root yang jelas.
2. `client/` berisi aplikasi frontend Next.js berbasis TypeScript.
3. `server/` tersedia sebagai placeholder dokumentasi dan belum berisi backend.
4. `docs/` tersedia sebagai pusat dokumentasi implementasi.
5. `README.md` root menjelaskan identitas, struktur, teknologi, status, dan cara menjalankan proyek.
6. Nama lama tidak lagi digunakan pada file yang disentuh dalam Plan 01.
7. Frontend memiliki layout dasar, metadata, halaman beranda placeholder, dan halaman tidak ditemukan.
8. Frontend tidak menampilkan template demo Next.js.
9. Frontend tidak memiliki fitur kompetisi, API, data final, autentikasi, atau koneksi database.
10. Node.js 24 ditetapkan sebagai runtime proyek.
11. npm digunakan sebagai package manager.
12. `package-lock.json` tersedia di dalam `client/`.
13. Script `dev`, `build`, `start`, `lint`, dan `type-check` tersedia.
14. Struktur frontend dapat digunakan sebagai dasar implementasi halaman pada plan berikutnya.
15. Vercel nantinya dapat diarahkan ke Root Directory `client/`.
16. Gemini belum menjalankan pengujian dan belum melakukan tindakan Git.

---

## 8. Ruang Lingkup

Gemini diperbolehkan mengerjakan hal berikut.

### 8.1 Root Repository

- Memeriksa kondisi repository.
- Memperbarui `README.md`.
- Membuat `.gitignore` di root.
- Membuat `.editorconfig` di root.
- Membuat `.nvmrc` di root.
- Membuat folder `client/`.
- Membuat folder `server/`.
- Membuat folder `docs/`.
- Mempertahankan struktur repository tetap sederhana.
- Menghapus duplikasi file konfigurasi yang tidak diperlukan setelah generator frontend selesai.

### 8.2 Client

- Menginisialisasi Next.js menggunakan TypeScript.
- Menggunakan App Router.
- Menggunakan struktur `src/`.
- Menggunakan ESLint.
- Menggunakan npm.
- Menggunakan alias import `@/*`.
- Menggunakan CSS global dan CSS Modules.
- Membuat metadata dasar.
- Membuat layout root.
- Membuat halaman beranda placeholder.
- Membuat halaman tidak ditemukan.
- Membuat komponen layout dasar yang benar-benar digunakan.
- Membuat konfigurasi identitas situs.
- Membersihkan seluruh konten dan aset demo bawaan.
- Menambahkan script `type-check`.
- Menetapkan Node.js 24 melalui `engines` pada `client/package.json`.

### 8.3 Server

- Membuat `server/README.md`.
- Menjelaskan bahwa backend belum diimplementasikan.
- Menjelaskan rencana umum bahwa server nantinya menggunakan TypeScript, Railway, dan Neon PostgreSQL.
- Tidak membuat source code server.

### 8.4 Docs

- Membuat `docs/README.md`.
- Menjelaskan fungsi folder dokumentasi.
- Menjelaskan fungsi `docs/plan/`.
- Mempertahankan file plan ini tanpa perubahan.
- Tidak membuat dokumentasi teknis lain di luar kebutuhan Plan 01.

### 8.5 Dokumentasi Vercel

- Menjelaskan pada README bahwa Vercel nantinya menggunakan Root Directory `client/`.
- Menjelaskan bahwa deployment belum dilakukan.
- Menjelaskan bahwa konfigurasi domain dan environment variable belum dilakukan.

---

## 9. Di Luar Ruang Lingkup

Gemini tidak boleh mengerjakan:

- backend;
- API;
- Route Handler bisnis;
- API Routes;
- Server Actions untuk mutasi data;
- autentikasi;
- otorisasi;
- koneksi PostgreSQL;
- koneksi Neon;
- konfigurasi Railway;
- deployment Vercel;
- pembuatan proyek Vercel;
- domain;
- DNS;
- environment variable produksi;
- halaman pertandingan;
- halaman klasemen;
- halaman bracket;
- halaman tim;
- halaman pemain;
- halaman statistik;
- halaman berita;
- halaman penghargaan;
- halaman galeri;
- halaman sponsor;
- halaman tentang kompetisi;
- implementasi sitemap;
- implementasi user flow;
- penggunaan data kompetisi final;
- mock data besar;
- integrasi Google Drive;
- dashboard admin;
- sistem login;
- sistem pendaftaran;
- sistem tiket;
- live streaming;
- desain UI final;
- design system final;
- Tailwind CSS;
- UI component library;
- state-management library;
- data-fetching library tambahan;
- testing framework;
- Docker;
- Turborepo;
- npm workspace;
- Nx;
- GitHub Actions;
- CI/CD;
- analytics;
- monitoring;
- SEO lanjutan;
- sitemap XML;
- robots.txt khusus;
- PWA;
- service worker;
- perubahan massal pada dokumen lama di Google Drive;
- refactor yang tidak diperlukan;
- dependency tambahan yang tidak dicantumkan;
- pengujian;
- tindakan Git.

> Jangan mengerjakan perubahan di luar ruang lingkup file plan ini.

---

## 10. Struktur Repository yang Berkaitan

### 10.1 Struktur Utama

```text
FCS-Futsal-Competition-Sumedang/
├── client/
├── server/
├── docs/
└── README.md
```

### 10.2 Struktur Akhir yang Direkomendasikan

```text
FCS-Futsal-Competition-Sumedang/
├── client/
│   ├── src/
│   │   ├── app/
│   │   │   ├── globals.css
│   │   │   ├── layout.tsx
│   │   │   ├── page.module.css
│   │   │   ├── page.tsx
│   │   │   ├── not-found.module.css
│   │   │   └── not-found.tsx
│   │   ├── components/
│   │   │   └── layout/
│   │   │       ├── page-container.module.css
│   │   │       ├── page-container.tsx
│   │   │       ├── site-footer.module.css
│   │   │       ├── site-footer.tsx
│   │   │       ├── site-header.module.css
│   │   │       └── site-header.tsx
│   │   └── config/
│   │       └── site.ts
│   ├── eslint.config.mjs
│   ├── next.config.ts
│   ├── next-env.d.ts
│   ├── package.json
│   ├── package-lock.json
│   └── tsconfig.json
├── server/
│   └── README.md
├── docs/
│   ├── plan/
│   │   └── 01_PERSIAPAN_REPOSITORY_DAN_FONDASI_FRONTEND.md
│   └── README.md
├── .editorconfig
├── .gitignore
├── .nvmrc
└── README.md
```

Catatan:

- Folder `public/` boleh dipertahankan hanya apabila berisi aset yang benar-benar digunakan.
- Apabila seluruh aset demo bawaan dihapus dan `public/` menjadi kosong, folder tersebut tidak perlu dipertahankan.
- Jangan membuat folder kosong untuk kebutuhan masa depan.
- Jangan membuat barrel file atau index export yang belum diperlukan.
- Jangan membuat struktur domain, feature, service, hook, store, API, atau types sebelum ada kebutuhan nyata.
- `client/README.md` bawaan generator harus dihapus karena dokumentasi utama berada pada README root.
- `.gitignore` di dalam `client/` harus dihapus setelah seluruh aturan yang diperlukan digabungkan ke `.gitignore` root.
- Jangan membuat repository Git baru di dalam `client/`.

---

## 11. Teknologi yang Digunakan

- **Bahasa:** TypeScript
- **Runtime:** Node.js 24 LTS
- **Frontend framework:** Next.js
- **Routing:** App Router
- **UI runtime:** React yang dipasang oleh versi Next.js stabil saat implementasi
- **Package manager:** npm
- **Struktur source:** `src/`
- **Lint:** ESLint
- **Type checking:** TypeScript `tsc --noEmit`
- **Styling:** CSS global dan CSS Modules
- **Deployment frontend masa depan:** Vercel
- **Deployment server masa depan:** Railway
- **Database masa depan:** Neon PostgreSQL
- **Backend pada plan ini:** Tidak diimplementasikan
- **Database pada plan ini:** Tidak diimplementasikan

### 11.1 Kebijakan Versi Dependency

- Gunakan versi stabil yang dihasilkan oleh `create-next-app` pada saat implementasi.
- Jangan mengganti versi dependency hasil generator tanpa alasan yang tercantum dalam plan.
- Jangan melakukan upgrade dependency setelah inisialisasi.
- Jangan menggunakan versi canary, beta, alpha, release candidate, atau experimental.
- Jangan menambahkan dependency tambahan untuk fungsi yang dapat dibuat menggunakan Next.js, React, TypeScript, atau CSS bawaan.

### 11.2 Keputusan Teknologi yang Disetujui

- Next.js App Router.
- npm.
- Node.js 24 LTS.
- CSS global dan CSS Modules.
- Tidak menggunakan Tailwind CSS.
- Tidak menggunakan workspace manager.
- Tidak membuat `vercel.json` pada Plan 01.

---

## 12. Instruksi Implementasi

Kerjakan seluruh langkah secara berurutan.

### 12.1 Periksa Kondisi Awal

- Baca seluruh file plan.
- Periksa isi repository yang tersedia.
- Pastikan repository hanya memiliki kondisi awal yang dijelaskan.
- Apabila ditemukan file baru yang tidak tercantum dalam kondisi awal, jangan hapus atau timpa secara otomatis.
- Laporkan perbedaan tersebut sebelum melanjutkan perubahan yang berisiko.
- Jangan menjalankan perintah Git.

### 12.2 Persiapkan Struktur Root

Buat struktur berikut:

```text
client/
server/
docs/
```

Buat file root:

```text
.editorconfig
.gitignore
.nvmrc
README.md
```

Ketentuan `.nvmrc`:

```text
24
```

Ketentuan `.editorconfig` minimal:

```ini
root = true

[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
indent_style = space
indent_size = 2
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false
```

Ketentuan `.gitignore` minimal harus mencakup:

```gitignore
node_modules/
.next/
out/
dist/
coverage/
.vercel/

.env
.env.*
!.env.example

*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

.DS_Store
Thumbs.db

.vscode/
.idea/
```

Jangan mengabaikan:

- source code;
- `package-lock.json`;
- file plan;
- README;
- `.env.example` apabila kelak dibuat.

### 12.3 Inisialisasi Frontend

Gunakan generator resmi Next.js dengan konfigurasi yang setara dengan:

```bash
npx create-next-app@latest client \
  --typescript \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --use-npm \
  --empty \
  --no-tailwind \
  --disable-git
```

Ketentuan:

- Gunakan versi stabil.
- Jangan gunakan mode canary.
- Jangan membuat repository Git di dalam `client/`.
- Jangan menggunakan Tailwind CSS.
- Jangan menggunakan Pages Router.
- Jangan membuat folder `api`.
- Jangan mengaktifkan fitur eksperimental tanpa instruksi.
- Jangan menjalankan build, lint, type-check, test, atau development server.

Apabila opsi CLI berubah pada versi terbaru, hasil akhir tetap harus mengikuti keputusan teknologi dan struktur yang tercantum di file plan ini.

### 12.4 Bersihkan Hasil Generator

Setelah inisialisasi:

- Hapus halaman demo Next.js.
- Hapus logo Next.js.
- Hapus logo Vercel.
- Hapus ikon atau aset demo.
- Hapus tautan dokumentasi bawaan.
- Hapus teks starter.
- Hapus favicon demo apabila menggunakan identitas bawaan Next.js atau Vercel.
- Hapus `client/README.md`.
- Gabungkan aturan `client/.gitignore` yang masih diperlukan ke `.gitignore` root.
- Hapus `client/.gitignore`.
- Jangan meninggalkan file yang tidak digunakan.
- Jangan menghapus file konfigurasi yang diperlukan oleh Next.js.

### 12.5 Atur package.json

Pastikan `client/package.json` memiliki:

- nama package yang valid dan menggunakan huruf kecil;
- status private;
- script utama;
- aturan Node.js.

Nama package yang direkomendasikan:

```json
{
  "name": "fcs-client",
  "private": true
}
```

Script minimal:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint .",
    "type-check": "tsc --noEmit"
  }
}
```

Aturan engine:

```json
{
  "engines": {
    "node": "24.x"
  }
}
```

Catatan:

- Pertahankan dependency yang dihasilkan oleh generator stabil.
- Jangan menambahkan script test pada tahap ini.
- Jangan menambahkan package manager root.
- Jangan memindahkan lockfile ke root.
- `package-lock.json` harus berada di `client/`.

### 12.6 Pertahankan TypeScript Strict

Pastikan `client/tsconfig.json`:

- menggunakan strict mode;
- menggunakan alias `@/*`;
- mendukung struktur `src/`;
- tidak menonaktifkan pengecekan TypeScript untuk menghindari error;
- tidak menggunakan `any` sebagai jalan pintas;
- tidak menambahkan konfigurasi kompleks yang belum diperlukan.

Alias yang diharapkan:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

Ikuti bentuk konfigurasi yang sesuai dengan versi stabil Next.js saat implementasi.

### 12.7 Buat Konfigurasi Identitas Situs

Buat:

```text
client/src/config/site.ts
```

Konfigurasi minimal:

```ts
export const siteConfig = {
  name: "FCS — Futsal Competition Sumedang",
  shortName: "FCS",
  description:
    "Portal kompetisi futsal untuk menyajikan pertandingan, tim, pemain, klasemen, statistik, berita, dan informasi turnamen secara terstruktur.",
} as const;
```

Ketentuan:

- Gunakan nama resmi proyek.
- Jangan menggunakan `FCS Futsal Club Sumedang`.
- Jangan menggunakan `Football Competition System` sebagai nama utama aplikasi.
- Jangan menambahkan URL produksi yang belum tersedia.
- Jangan menambahkan akun media sosial yang belum disetujui.
- Jangan memasukkan data kompetisi simulasi sebagai konfigurasi global pada tahap ini.

### 12.8 Buat Root Layout

Perbarui:

```text
client/src/app/layout.tsx
```

Ketentuan:

- Gunakan `siteConfig`.
- Set metadata title dan description.
- Set bahasa dokumen ke Bahasa Indonesia.
- Gunakan struktur semantik.
- Gunakan header, main, dan footer.
- Jangan menggunakan provider yang belum diperlukan.
- Jangan menggunakan state management.
- Jangan menggunakan client component untuk root layout apabila tidak diperlukan.
- Jangan menambahkan script analytics.
- Jangan menambahkan font eksternal tambahan yang belum disetujui.

Metadata minimal:

```ts
export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
};
```

Tag HTML:

```tsx
<html lang="id">
```

### 12.9 Buat Komponen Layout Dasar

Buat hanya komponen yang digunakan:

```text
client/src/components/layout/page-container.tsx
client/src/components/layout/site-header.tsx
client/src/components/layout/site-footer.tsx
```

Masing-masing boleh memiliki CSS Module sendiri.

#### Page Container

Fungsi:

- membatasi lebar konten;
- memberikan padding horizontal;
- dapat digunakan kembali pada tahap berikutnya.

Ketentuan:

- gunakan elemen semantik yang sesuai;
- dukung desktop dan mobile;
- jangan membuat sistem grid kompleks;
- jangan menggunakan dependency.

#### Site Header

Fungsi:

- menampilkan identitas FCS;
- menjadi fondasi header masa depan.

Ketentuan:

- hanya menampilkan nama atau singkatan proyek;
- belum membuat navigasi menuju halaman yang belum diimplementasikan;
- tidak menggunakan dropdown;
- tidak menggunakan menu mobile;
- tidak menggunakan data kompetisi;
- tidak menyerupai dashboard admin.

#### Site Footer

Fungsi:

- menampilkan identitas proyek dan status awal.

Ketentuan:

- sederhana;
- tidak menambahkan link palsu;
- tidak menambahkan media sosial palsu;
- tidak menampilkan sponsor;
- tidak menampilkan tahun atau legal text yang tidak diperlukan apabila belum disepakati.

### 12.10 Buat Halaman Beranda Placeholder

Buat:

```text
client/src/app/page.tsx
client/src/app/page.module.css
```

Tujuan halaman adalah membuktikan bahwa fondasi aplikasi sudah terpasang, bukan mengimplementasikan beranda portal kompetisi.

Konten yang direkomendasikan:

- label status seperti `Fondasi frontend`;
- nama `FCS — Futsal Competition Sumedang`;
- deskripsi singkat portal;
- penjelasan bahwa aplikasi sedang dalam tahap persiapan;
- ringkasan status:
  - Client: fondasi disiapkan;
  - Server: belum diimplementasikan;
  - Database: belum diimplementasikan;
- catatan bahwa fitur kompetisi akan dibuat pada tahap berikutnya.

Ketentuan:

- jangan menggunakan data pertandingan;
- jangan menggunakan tim, pemain, skor, klasemen, atau sponsor;
- jangan membuat hero final;
- jangan membuat navbar final;
- jangan menampilkan metrik palsu;
- jangan membuat carousel;
- jangan menggunakan gambar AI;
- jangan menggunakan aset kompetisi final;
- jangan menggunakan animasi;
- jangan membuat desain seperti dashboard;
- tetap responsif dan mudah dibaca;
- tampilkan placeholder yang bersih dan profesional.

### 12.11 Buat Halaman Tidak Ditemukan

Buat:

```text
client/src/app/not-found.tsx
client/src/app/not-found.module.css
```

Konten minimal:

- judul `Halaman tidak ditemukan`;
- penjelasan singkat;
- tautan kembali ke beranda.

Ketentuan:

- gunakan `next/link`;
- gunakan Bahasa Indonesia;
- gunakan layout visual yang konsisten;
- jangan membuat fitur tambahan.

### 12.12 Buat CSS Global

Atur:

```text
client/src/app/globals.css
```

Cakupan CSS global:

- reset ringan;
- box sizing;
- body margin;
- warna latar dan teks dasar;
- font stack sistem yang bersih;
- link mewarisi warna secara wajar;
- elemen media responsif;
- dukungan `min-height`;
- fokus keyboard yang terlihat;
- preferensi reduced motion apabila ada transisi dasar.

Ketentuan:

- jangan membuat design token lengkap;
- jangan mengunci identitas visual final;
- jangan menggunakan terlalu banyak warna;
- jangan menggunakan glow;
- jangan menggunakan efek game atau esports;
- jangan membuat utility class dalam jumlah besar;
- jangan meniru Tailwind;
- jangan memasukkan CSS untuk halaman yang belum tersedia.

### 12.13 Buat Placeholder Server

Buat:

```text
server/README.md
```

Isi minimal:

- fungsi folder `server/`;
- status `Belum diimplementasikan`;
- rencana bahasa TypeScript;
- rencana deployment Railway;
- rencana database Neon PostgreSQL;
- pernyataan bahwa backend, API, autentikasi, aturan bisnis, dan database belum termasuk Plan 01;
- pernyataan agar source code backend tidak dibuat sebelum plan server disetujui.

Jangan membuat:

- `server/package.json`;
- source code;
- konfigurasi TypeScript;
- framework backend;
- environment file;
- schema database;
- Dockerfile.

### 12.14 Buat Dokumentasi Folder Docs

Buat:

```text
docs/README.md
```

Isi minimal:

- fungsi folder `docs/`;
- fungsi folder `docs/plan/`;
- status file plan;
- aturan bahwa file plan harus disetujui sebelum implementasi;
- aturan bahwa Gemini membaca plan tetapi tidak mengubahnya;
- aturan bahwa dokumentasi final mengikuti keputusan pengguna.

Jangan membuat folder dokumentasi tambahan yang belum diperlukan.

### 12.15 Perbarui README Root

Perbarui:

```text
README.md
```

README harus memuat:

1. Nama proyek.
2. Ringkasan proyek.
3. Status proyek.
4. Struktur repository.
5. Teknologi yang sudah digunakan.
6. Teknologi masa depan yang belum diimplementasikan.
7. Prasyarat.
8. Cara instalasi frontend.
9. Cara menjalankan development server.
10. Script yang tersedia.
11. Penjelasan folder `client/`.
12. Penjelasan folder `server/`.
13. Penjelasan folder `docs/`.
14. Persiapan Vercel.
15. Aturan kontribusi dan alur kerja.
16. Status backend dan database.
17. Larangan menganggap placeholder sebagai aplikasi final.

Contoh perintah dokumentasi:

```bash
cd client
npm install
npm run dev
```

Perintah pengujian untuk pengguna:

```bash
npm run type-check
npm run lint
npm run build
```

Catatan Vercel:

```text
Root Directory: client
Node.js Version: 24.x
Framework Preset: Next.js
```

README tidak boleh:

- mengklaim website telah selesai;
- mengklaim deployment telah aktif;
- mencantumkan URL produksi palsu;
- mencantumkan fitur yang belum dibuat sebagai fitur aktif;
- menggunakan nama proyek lama;
- berisi dokumentasi template Next.js;
- berisi badge yang belum diperlukan.

### 12.16 Periksa Konsistensi Secara Statis

Tanpa menjalankan pengujian, periksa secara manual:

- nama proyek konsisten;
- import path konsisten;
- file yang diimpor tersedia;
- komponen yang dibuat benar-benar digunakan;
- tidak ada aset demo;
- tidak ada link palsu;
- tidak ada dependency tambahan;
- tidak ada source server;
- tidak ada konfigurasi database;
- tidak ada file Git di dalam `client/`;
- tidak ada tindakan di luar ruang lingkup.

Setelah pemeriksaan statis, berikan laporan implementasi dan berhenti.

---

## 13. Aturan Data

> Pekerjaan ini tidak mengubah struktur atau sumber data.

Ketentuan tambahan:

- Jangan menggunakan data kompetisi dari Google Drive pada tahap ini.
- Jangan membuat JSON data pertandingan.
- Jangan membuat mock API.
- Jangan membuat data tim, pemain, klasemen, berita, sponsor, atau statistik.
- Jangan menghubungkan Google Sheets, CSV, atau database.
- Jangan membuat environment variable untuk data.
- Placeholder status teknis bukan data kompetisi.

---

## 14. Aturan Tampilan

Plan 01 hanya membuat tampilan fondasi, bukan mockup UI final.

### 14.1 Karakter Dasar

- bersih;
- profesional;
- sederhana;
- terorganisasi;
- responsif;
- tidak menyerupai dashboard admin;
- tidak menyerupai game, esports, atau situs taruhan.

### 14.2 Layout

- satu halaman placeholder;
- header sederhana;
- main content;
- footer sederhana;
- container dengan lebar maksimum;
- satu kolom pada mobile;
- tidak menggunakan grid kompleks.

### 14.3 Responsive

Periksa struktur agar masuk akal pada:

- desktop;
- tablet;
- mobile;
- lebar sekitar 360 px.

### 14.4 Aksesibilitas Dasar

- heading berurutan;
- elemen semantik;
- fokus keyboard terlihat;
- kontras teks terbaca;
- ukuran tombol atau link dapat digunakan;
- tidak mengandalkan warna sebagai satu-satunya penjelas;
- tidak menggunakan animasi mengganggu.

### 14.5 Yang Belum Diterapkan

- warna brand final;
- typography system final;
- icon system;
- asset kompetisi;
- logo final;
- sponsor;
- kartu pertandingan final;
- tabel klasemen;
- navigation system final;
- drawer mobile;
- loading state data;
- empty state data;
- error state API.

---

## 15. Aturan Client

- **Halaman dibuat:** Beranda placeholder dan halaman tidak ditemukan.
- **Komponen dibuat:** Page container, site header, dan site footer.
- **Routing:** App Router.
- **State:** Tidak menggunakan state aplikasi.
- **API:** Tidak ada.
- **Data fetching:** Tidak ada.
- **Responsive:** Wajib memiliki struktur dasar responsif.
- **Client component:** Hindari `"use client"` apabila tidak diperlukan.
- **Server component:** Gunakan default Server Component untuk komponen statis.
- **Form:** Tidak ada.
- **Authentication:** Tidak ada.
- **Environment variable:** Tidak ada.
- **Error boundary:** Belum diperlukan karena belum ada data dinamis.
- **Loading route:** Belum diperlukan.
- **Middleware:** Tidak dibuat.
- **Route group:** Tidak dibuat.
- **Dynamic route:** Tidak dibuat.
- **Internationalization:** Belum dibuat; gunakan Bahasa Indonesia sebagai bahasa utama.
- **SEO:** Hanya metadata dasar.

---

## 16. Aturan Server

> Pekerjaan ini tidak mengimplementasikan bagian server.

Gemini hanya membuat `server/README.md`.

Gemini tidak boleh membuat:

- endpoint;
- service;
- controller;
- repository;
- ORM;
- schema;
- migration;
- authentication;
- validation;
- logging server;
- error handling server;
- koneksi database;
- konfigurasi Railway;
- environment variable;
- package server.

---

## 17. Aturan Dependency

Dependency utama hanya berasal dari generator Next.js stabil:

- `next`;
- `react`;
- `react-dom`;
- `typescript`;
- type definitions yang diperlukan;
- ESLint dan konfigurasi yang diperlukan oleh generator.

Gemini tidak boleh menambahkan:

- Tailwind CSS;
- Sass;
- styled-components;
- Emotion;
- Material UI;
- Chakra UI;
- Ant Design;
- shadcn/ui;
- Radix UI;
- Zustand;
- Redux;
- TanStack Query;
- Axios;
- Zod;
- React Hook Form;
- icon library;
- date library;
- animation library;
- testing library;
- Storybook;
- Prettier;
- Husky;
- lint-staged;
- commitlint;
- Turborepo;
- package workspace;
- dependency backend.

Apabila generator stabil menambahkan dependency resmi yang diperlukan untuk Next.js, dependency tersebut boleh dipertahankan.

Jangan melakukan instalasi tambahan di luar proses inisialisasi resmi.

---

## 18. Batasan Umum Gemini

Gemini harus:

- membaca seluruh file plan;
- memeriksa source code yang berkaitan;
- mengikuti struktur proyek;
- mengubah hanya bagian yang diperlukan;
- menggunakan nama resmi proyek;
- mempertahankan fungsi yang tidak termasuk ruang lingkup;
- melaporkan file yang dibuat;
- melaporkan file yang diubah;
- melaporkan file yang dihapus;
- menjelaskan perubahan utama;
- menjelaskan risiko;
- menuliskan langkah pengujian;
- berhenti setelah implementasi.

Gemini tidak boleh:

- membuat fitur tambahan;
- mengubah arah produk;
- mengubah arsitektur yang telah ditetapkan;
- mengganti teknologi utama;
- memperluas ruang lingkup;
- mengimplementasikan sitemap;
- mengimplementasikan backend;
- menambahkan dependency tanpa izin;
- melakukan refactor besar;
- menghapus file di luar scope;
- mengubah file plan;
- menjalankan pengujian;
- melakukan tindakan Git.

---

## 19. Larangan Pengujian

> Jangan menjalankan build, lint, type-check, test, development server, atau proses pengujian lainnya. Setelah implementasi selesai, tuliskan langkah pengujian yang disarankan dan berhenti. Pengujian akan dilakukan oleh pengguna bersama ChatGPT.

Gemini dilarang menjalankan:

- `npm run dev`;
- `npm run build`;
- `npm run start`;
- `npm run lint`;
- `npm run type-check`;
- `next dev`;
- `next build`;
- `tsc`;
- ESLint;
- automated test;
- unit test;
- integration test;
- end-to-end test;
- browser preview;
- deployment preview;
- Lighthouse;
- audit performa;
- pengujian Vercel;
- perintah verifikasi lain.

Gemini diperbolehkan menjalankan perintah yang diperlukan untuk membuat source code dan memasang dependency selama perintah tersebut bukan pengujian.

Setelah implementasi selesai, Gemini hanya melakukan pemeriksaan statis melalui pembacaan file.

---

## 20. Larangan Tindakan Git

> Jangan menjalankan tindakan Git apa pun. Jangan melakukan commit atau push. Setelah implementasi selesai, berhenti dan berikan laporan perubahan. Commit dan push hanya dilakukan oleh pengguna.

Gemini dilarang menjalankan:

- `git status`;
- `git diff`;
- `git add`;
- `git commit`;
- `git push`;
- `git pull`;
- `git fetch`;
- `git checkout`;
- `git switch`;
- `git branch`;
- `git merge`;
- `git rebase`;
- `git reset`;
- `git revert`;
- `git clean`;
- `git stash`;
- `git init`;
- pembuatan pull request;
- perubahan konfigurasi Git;
- perubahan riwayat Git.

Opsi `--disable-git` wajib digunakan saat menjalankan generator frontend apabila tersedia.

---

## 21. Kriteria Selesai

Pekerjaan implementasi dianggap selesai oleh Gemini apabila:

- root repository memiliki struktur yang ditetapkan;
- README root telah diperbarui;
- nama proyek resmi digunakan;
- `.editorconfig` tersedia;
- `.gitignore` root tersedia;
- `.nvmrc` tersedia;
- aplikasi Next.js TypeScript tersedia di `client/`;
- App Router digunakan;
- struktur `src/` digunakan;
- alias `@/*` tersedia;
- CSS Modules dan global CSS digunakan;
- halaman demo telah dihapus;
- aset demo telah dihapus;
- halaman beranda placeholder tersedia;
- halaman tidak ditemukan tersedia;
- site config tersedia;
- komponen layout dasar tersedia dan digunakan;
- script `type-check` tersedia;
- Node engine `24.x` tersedia;
- `package-lock.json` tersedia;
- `server/README.md` tersedia;
- `docs/README.md` tersedia;
- tidak ada source code server;
- tidak ada koneksi database;
- tidak ada fitur kompetisi;
- tidak ada dependency tambahan di luar izin;
- tidak ada file Git bersarang;
- tidak ada pengujian yang dijalankan;
- tidak ada commit atau push;
- laporan implementasi diberikan.

Pekerjaan belum dianggap selesai secara proyek sebelum pengguna bersama ChatGPT menjalankan dan menilai pengujian.

---

## 22. Laporan yang Harus Diberikan Gemini

Setelah implementasi selesai, Gemini harus memberikan laporan dengan format berikut:

```text
LAPORAN IMPLEMENTASI PLAN 01

1. Ringkasan pekerjaan

2. Daftar file yang dibuat

3. Daftar file yang diubah

4. Daftar file yang dihapus

5. Struktur repository setelah implementasi

6. Dependency yang dipasang
   - Nama dependency
   - Versi
   - Alasan dependency tersedia

7. Penjelasan perubahan utama

8. Bagian yang belum dikerjakan

9. Risiko atau keterbatasan

10. Langkah pengujian yang disarankan

11. Pernyataan pengujian
    Saya tidak menjalankan build, lint, type-check, test,
    development server, atau pengujian lainnya.

12. Pernyataan Git
    Saya tidak menjalankan tindakan Git, commit, atau push.
```

Setelah memberikan laporan tersebut, Gemini harus berhenti.

---

## 23. Rekomendasi Model Gemini

- **Model yang direkomendasikan:** Model Gemini coding/reasoning dengan kemampuan tinggi yang tersedia di Antigravity pada saat implementasi.
- **Tingkat kemampuan:** High
- **Alasan pemilihan:** Pekerjaan menyentuh struktur repository, generator framework, konfigurasi TypeScript, dokumentasi, pembersihan template, dan banyak file yang harus tetap konsisten.
- **Alternatif:** Model coding tingkat menengah dapat digunakan apabila model utama tidak tersedia, tetapi instruksi harus diikuti secara ketat.

Nama model final tidak dikunci di dalam draft ini karena pilihan model Antigravity dapat berubah. ChatGPT akan memberikan rekomendasi model yang tersedia tepat sebelum implementasi dimulai.

---

## 24. Checklist Pengujian Pengguna dan ChatGPT

Pengujian dilakukan setelah Gemini selesai dan mengirim laporan.

### 24.1 Pemeriksaan Laporan

- [ ] Baca seluruh laporan Gemini.
- [ ] Periksa daftar file yang dibuat.
- [ ] Periksa daftar file yang diubah.
- [ ] Periksa daftar file yang dihapus.
- [ ] Pastikan Gemini tidak menjalankan pengujian.
- [ ] Pastikan Gemini tidak melakukan tindakan Git.
- [ ] Pastikan tidak ada perubahan di luar ruang lingkup.
- [ ] Pastikan file plan tidak diubah.

### 24.2 Pemeriksaan Struktur Repository

- [ ] Root memiliki `client/`.
- [ ] Root memiliki `server/`.
- [ ] Root memiliki `docs/`.
- [ ] Root memiliki `README.md`.
- [ ] Root memiliki `.gitignore`.
- [ ] Root memiliki `.editorconfig`.
- [ ] Root memiliki `.nvmrc`.
- [ ] Tidak ada `.git/` di dalam `client/`.
- [ ] Tidak ada `client/.gitignore`.
- [ ] Tidak ada `client/README.md`.
- [ ] Tidak ada folder kosong yang tidak diperlukan.
- [ ] Tidak ada source code backend.

### 24.3 Pemeriksaan Identitas

- [ ] README menggunakan `FCS — Futsal Competition Sumedang`.
- [ ] Metadata menggunakan nama resmi.
- [ ] Site config menggunakan nama resmi.
- [ ] Halaman menggunakan nama resmi.
- [ ] Tidak ada `FCS-Futsal-Club-Sumedang`.
- [ ] Tidak ada `FCS Futsal Club Sumedang`.
- [ ] Tidak ada identitas demo Next.js.
- [ ] Tidak ada identitas demo Vercel.

### 24.4 Pemeriksaan Node dan Dependency

Jalankan dari root repository:

```bash
node --version
```

Hasil yang diharapkan:

```text
v24.x.x
```

Masuk ke client:

```bash
cd client
```

Periksa:

```bash
npm --version
npm install
```

Checklist:

- [ ] Node.js versi 24 digunakan.
- [ ] npm tersedia.
- [ ] `npm install` selesai.
- [ ] `package-lock.json` tidak berubah secara tidak wajar.
- [ ] Tidak ada dependency yang tidak disetujui.
- [ ] `engines.node` bernilai `24.x`.

### 24.5 Type Check

Jalankan:

```bash
npm run type-check
```

Checklist:

- [ ] Type-check selesai tanpa error.
- [ ] Tidak ada penggunaan `any` sebagai jalan pintas.
- [ ] Alias `@/*` dapat digunakan.
- [ ] Tidak ada import yang rusak.

### 24.6 Lint

Jalankan:

```bash
npm run lint
```

Checklist:

- [ ] Lint selesai tanpa error.
- [ ] Tidak ada warning penting.
- [ ] Tidak ada unused import.
- [ ] Tidak ada unused component.

### 24.7 Build

Jalankan:

```bash
npm run build
```

Checklist:

- [ ] Build selesai.
- [ ] Halaman `/` berhasil dibangun.
- [ ] Halaman not-found dapat digunakan.
- [ ] Tidak ada error metadata.
- [ ] Tidak ada error CSS Module.
- [ ] Tidak ada error TypeScript.
- [ ] Tidak ada kebutuhan environment variable.

### 24.8 Development Server

Jalankan:

```bash
npm run dev
```

Buka URL yang diberikan terminal.

Checklist:

- [ ] Halaman beranda terbuka.
- [ ] Tidak ada tampilan demo Next.js.
- [ ] Nama proyek benar.
- [ ] Teks mudah dibaca.
- [ ] Header tampil.
- [ ] Footer tampil.
- [ ] Layout tidak rusak.
- [ ] Console browser tidak menampilkan error.
- [ ] Terminal tidak menampilkan error aplikasi.

### 24.9 Halaman Tidak Ditemukan

Buka alamat yang tidak tersedia, contoh:

```text
/halaman-yang-tidak-ada
```

Checklist:

- [ ] Halaman tidak ditemukan tampil.
- [ ] Teks menggunakan Bahasa Indonesia.
- [ ] Tautan kembali ke beranda bekerja.
- [ ] Tampilan konsisten dengan halaman utama.

### 24.10 Responsive

Periksa minimal:

- [ ] Desktop sekitar 1440 px.
- [ ] Tablet sekitar 768 px.
- [ ] Mobile sekitar 390 px.
- [ ] Mobile sekitar 360 px.
- [ ] Tidak ada horizontal overflow.
- [ ] Teks tidak terpotong.
- [ ] Link dapat digunakan.
- [ ] Padding masih proporsional.
- [ ] Header dan footer tidak rusak.

### 24.11 Aksesibilitas Dasar

- [ ] Navigasi keyboard dapat digunakan.
- [ ] Fokus terlihat.
- [ ] Heading terstruktur.
- [ ] Elemen semantik masuk akal.
- [ ] Kontras teks dapat dibaca.
- [ ] Link kembali memiliki label jelas.

### 24.12 Pemeriksaan Batas Scope

- [ ] Tidak ada halaman kompetisi final.
- [ ] Tidak ada data pertandingan.
- [ ] Tidak ada data tim atau pemain.
- [ ] Tidak ada API.
- [ ] Tidak ada backend.
- [ ] Tidak ada database.
- [ ] Tidak ada Railway.
- [ ] Tidak ada Neon.
- [ ] Tidak ada deployment.
- [ ] Tidak ada Tailwind.
- [ ] Tidak ada UI library.
- [ ] Tidak ada state-management library.
- [ ] Tidak ada test framework.
- [ ] Tidak ada GitHub Actions.
- [ ] Tidak ada `vercel.json`.

### 24.13 Hasil Pengujian

- **Status:** BELUM DIUJI
- **Type-check:** BELUM DIUJI
- **Lint:** BELUM DIUJI
- **Build:** BELUM DIUJI
- **Development server:** BELUM DIUJI
- **Desktop:** BELUM DIUJI
- **Mobile:** BELUM DIUJI
- **404:** BELUM DIUJI
- **Error:** Belum diketahui
- **Catatan:** Diisi setelah implementasi
- **Screenshot:** Diisi setelah implementasi

---

## 25. Rekomendasi Commit Message

Commit message awal yang direkomendasikan:

```text
chore(repo): initialize Next.js frontend foundation
```

Alternatif:

```text
chore(repo): prepare repository and frontend foundation
```

Commit message final hanya ditentukan setelah:

- implementasi selesai;
- seluruh perubahan diperiksa;
- type-check lulus;
- lint lulus;
- build lulus;
- tampilan diperiksa;
- tidak ada perubahan di luar scope.

---

## 26. Rekomendasi Perintah Git

Perintah berikut hanya dijalankan oleh pengguna setelah pengujian selesai.

```bash
git status
git diff
git add .editorconfig .gitignore .nvmrc README.md client server docs
git status
git diff --cached
git commit -m "chore(repo): initialize Next.js frontend foundation"
git push origin main
```

Ketentuan:

- Pengguna harus membaca `git status`.
- Pengguna harus membaca `git diff`.
- Pengguna harus membaca `git diff --cached`.
- Jangan commit apabila masih terdapat error.
- Jangan commit file rahasia.
- Jangan commit `.env`.
- Jangan commit `.vercel`.
- Jangan commit `node_modules`.
- Jangan commit `.next`.
- Gemini tidak menjalankan perintah tersebut.
- ChatGPT tidak menjalankan commit atau push dalam alur kerja normal.

---

## 27. Data Review Commit

Setelah commit dan push, pengguna mengirimkan data berikut kepada ChatGPT:

```text
Repository:
syahputrawork98-sketch/FCS-Futsal-Competition-Sumedang

Branch:
main

Commit SHA:
[isi setelah push]

Commit message:
[isi setelah commit]

File plan:
docs/plan/01_PERSIAPAN_REPOSITORY_DAN_FONDASI_FRONTEND.md

Hasil pengujian:
- npm install:
- type-check:
- lint:
- build:
- development server:
- desktop:
- mobile:
- halaman 404:

Error yang masih tersisa:
[isi]

Catatan tambahan:
[isi]
```

ChatGPT kemudian memeriksa:

- kesesuaian commit dengan Plan 01;
- file yang berubah;
- perubahan di luar ruang lingkup;
- kualitas struktur repository;
- kualitas fondasi frontend;
- konsistensi identitas;
- dependency;
- potensi bug;
- hasil pengujian;
- kesesuaian commit message;
- kebutuhan revisi.

---

## 28. Catatan Keputusan

| No. | Keputusan | Alasan | Status |
|---|---|---|---|
| 1 | Nama proyek adalah FCS — Futsal Competition Sumedang | Keputusan resmi terbaru proyek | DISETUJUI |
| 2 | Bahasa utama pengembangan adalah TypeScript | Keputusan awal proyek | DISETUJUI |
| 3 | Struktur root menggunakan `client/`, `server/`, `docs/`, dan `README.md` | Memisahkan area pekerjaan | DISETUJUI |
| 4 | Frontend nantinya di-deploy ke Vercel | Target deployment client | DISETUJUI |
| 5 | Server nantinya di-deploy ke Railway | Target deployment server | DISETUJUI |
| 6 | Database nantinya menggunakan Neon PostgreSQL | Target database | DISETUJUI |
| 7 | Plan 01 tidak mengimplementasikan server dan database | Menjaga ruang lingkup tahap pertama | DISETUJUI |
| 8 | Frontend menggunakan Next.js App Router | Cocok untuk portal publik dengan banyak halaman dan Vercel | DISETUJUI |
| 9 | Package manager menggunakan npm | Sederhana dan didukung langsung oleh generator | DISETUJUI |
| 10 | Runtime menggunakan Node.js 24 LTS | Versi LTS dan didukung Vercel | DISETUJUI |
| 11 | Source frontend menggunakan struktur `src/` | Memisahkan source dari konfigurasi | DISETUJUI |
| 12 | Styling awal menggunakan CSS global dan CSS Modules | Meminimalkan dependency dan menjaga fondasi netral | DISETUJUI |
| 13 | Tailwind CSS belum digunakan | Design system final belum disepakati | DISETUJUI |
| 14 | Repository belum menggunakan workspace manager | Belum ada kebutuhan dependency lintas package | DISETUJUI |
| 15 | Tidak membuat `vercel.json` | Belum ada kebutuhan konfigurasi Vercel khusus | DRAFT |
| 16 | Vercel nantinya menggunakan Root Directory `client/` | Frontend berada dalam subfolder repository | DISETUJUI |
| 17 | Plan 01 hanya membuat beranda placeholder dan 404 | Menghindari implementasi sitemap sebelum waktunya | DISETUJUI |
| 18 | Placeholder folder menggunakan README, bukan `.gitkeep` | Memberikan konteks yang dapat dibaca | DISETUJUI |
| 19 | File plan tidak boleh diubah Gemini | Plan merupakan instruksi yang disetujui pengguna | DISETUJUI |
| 20 | Pengujian dan Git tetap dilakukan pengguna bersama ChatGPT | Mengikuti aturan kerja utama | DISETUJUI |

---

## 29. Riwayat Perubahan Dokumen

| Versi | Tanggal | Perubahan | Penyusun |
|---|---|---|---|
| 0.1 | 2026-07-23 | Draft awal Plan 01 untuk pembahasan | Pengguna dan ChatGPT |
| 1.0 | 2026-07-23 | Disetujui sebagai instruksi implementasi | Pengguna dan ChatGPT |

---

## 30. Persetujuan

- **Status persetujuan:** DISETUJUI
- **Tanggal persetujuan:** 2026-07-23
- **Disetujui oleh:** Pengguna
- **Status implementasi:** SIAP DIIMPLEMENTASIKAN

File plan ini telah disetujui dan dapat digunakan sebagai instruksi implementasi setelah:

1. File ditempatkan pada `docs/plan/`.
2. Gemini membaca seluruh isi plan.
3. Kondisi awal repository diperiksa.
4. Implementasi dilakukan sesuai ruang lingkup.
5. Gemini tidak menjalankan pengujian atau tindakan Git.
