# FCS — Futsal Competition Sumedang

Portal kompetisi futsal untuk menyajikan pertandingan, tim, pemain, klasemen, statistik, berita, dan informasi turnamen secara terstruktur.

## Status Proyek

Proyek ini sedang dalam tahap persiapan.
- Client: fondasi frontend sedang disiapkan.
- Server: belum diimplementasikan.
- Database: belum diimplementasikan.

## Struktur Repository

- `client/`: Berisi aplikasi frontend Next.js berbasis TypeScript.
- `server/`: Folder placeholder untuk server (belum diimplementasikan).
- `docs/`: Pusat dokumentasi proyek dan instruksi implementasi.

## Teknologi Utama

**Saat ini (Frontend):**
- Next.js (App Router)
- TypeScript
- Node.js 24 LTS
- npm
- CSS global dan CSS Modules

**Masa Depan (Belum Diimplementasikan):**
- Vercel (Deployment Client)
- Railway (Deployment Server)
- Neon PostgreSQL (Database)

## Prasyarat

- Node.js versi 24.x

## Cara Instalasi dan Menjalankan Development Server

```bash
cd client
npm install
npm run dev
```

Buka URL lokal yang diberikan pada console (misal: http://localhost:3000) untuk melihat frontend.

## Script Utama di Client

Di dalam folder `client`:
- `npm run dev` : Menjalankan development server.
- `npm run build` : Membangun aplikasi.
- `npm run start` : Menjalankan aplikasi produksi.
- `npm run lint` : Menjalankan ESLint.
- `npm run type-check` : Menjalankan pengecekan TypeScript.

## Catatan Deployment Vercel (Masa Depan)

Apabila kelak proyek di-deploy menggunakan Vercel:
- Root Directory: `client`
- Node.js Version: 24.x
- Framework Preset: Next.js

Saat ini deployment, konfigurasi domain, dan environment variable belum dilakukan.

## Aturan Kontribusi dan Alur Kerja

- Seluruh pekerjaan dilakukan berdasarkan plan (lihat `docs/plan/`).
- Harap tidak menambahkan file di luar scope plan.
- Jangan menjalankan perintah Git, commit, atau push sebelum pengujian selesai.
- Server dan Database akan dikerjakan pada tahap selanjutnya sesuai dengan instruksi yang disetujui.

> **Peringatan:** Aplikasi ini masih dalam tahap fondasi dan placeholder. Fitur portal kompetisi yang sesungguhnya belum tersedia. Harap tidak menganggap tampilan saat ini sebagai bentuk final aplikasi.