# 05_IMPLEMENTASI_HALAMAN_DETAIL_PERTANDINGAN.md

## 1. Identitas Dokumen

- **Judul pekerjaan:** Implementasi Halaman Detail Pertandingan
- **Nama file:** `05_IMPLEMENTASI_HALAMAN_DETAIL_PERTANDINGAN.md`
- **Nomor plan:** 05
- **Versi dokumen:** 1.0
- **Status dokumen:** DISETUJUI
- **Tanggal dibuat:** 2026-07-24
- **Tanggal diperbarui:** 2026-07-24
- **Penyusun:** Pengguna bersama ChatGPT
- **Pelaksana implementasi:** Gemini melalui Antigravity
- **Proyek:** FCS — Futsal Competition Sumedang
- **Prototype:** FCS Industrial Cup Sumedang 2026
- **Kode halaman:** MAT-02
- **Mode halaman:** Pasca-turnamen dengan dukungan state pertandingan umum
- **Area:** Client dan UI Halaman Detail Pertandingan
- **Repository:** `syahputrawork98-sketch/FCS-Futsal-Competition-Sumedang`
- **Branch tujuan:** `main`
- **Base commit disetujui:** `e7b5b11b58dbfcf70f482eedc90db409068061c5`
- **Commit Plan 04:** `fa8c3c711d1d4dc7e3525eb8ef9f1663b5baf6e3`
- **Commit perbaikan Plan 04:** `e7b5b11b58dbfcf70f482eedc90db409068061c5`
- **Plan sebelumnya:** `04_IMPLEMENTASI_HALAMAN_PERTANDINGAN.md`
- **Status implementasi:** SIAP DIIMPLEMENTASIKAN
- **Model implementasi yang direkomendasikan:** Gemini 3.6 Flash
- **Thinking level yang direkomendasikan:** High

> Dokumen ini telah dibaca dan disetujui pengguna pada 24 Juli 2026. File final dapat ditempatkan pada `docs/plan/05_IMPLEMENTASI_HALAMAN_DETAIL_PERTANDINGAN.md` dan digunakan sebagai instruksi implementasi Plan 05.

---

## 2. Status Persetujuan dan Penggunaan

Plan 05 telah memenuhi gerbang persetujuan berikut:

1. Pengguna telah membaca dan menyetujui isi plan pada 24 Juli 2026.
2. Route, ruang lingkup, kontrak data, state parsial, dan integrasi MAT-01 telah disetujui.
3. Versi dokumen telah ditetapkan menjadi `1.0`.
4. Status dokumen telah ditetapkan menjadi `DISETUJUI`.
5. Base commit branch `main` telah diperiksa ulang dan tetap berada pada `e7b5b11b58dbfcf70f482eedc90db409068061c5`.
6. Model implementasi yang direkomendasikan adalah `Gemini 3.6 Flash`.
7. Thinking level yang direkomendasikan adalah `High`.

Tempatkan file final pada:

```text
FCS-Futsal-Competition-Sumedang/docs/plan/05_IMPLEMENTASI_HALAMAN_DETAIL_PERTANDINGAN.md
```

Setelah file ditempatkan, Gemini melalui Antigravity boleh menjalankan implementasi sesuai ruang lingkup Plan 05. Gemini tetap dilarang melakukan commit, push, pull, merge, rebase, reset, deployment, atau tindakan Git lain.

---

## 3. Ringkasan Pekerjaan

Plan 05 mengimplementasikan halaman publik dinamis:

```text
/pertandingan/[matchId]
```

Contoh route utama:

```text
/pertandingan/PRT016
```

Halaman menjadi pusat informasi lengkap untuk satu pertandingan dan tersedia untuk seluruh 16 ID pertandingan prototype, `PRT001` sampai `PRT016`.

Pekerjaan meliputi:

- membuat dynamic route Detail Pertandingan;
- menghubungkan seluruh kartu MAT-01 ke route detail yang benar;
- mengubah aksi pertandingan final di Beranda menjadi route detail;
- menampilkan identitas, status, tim, skor, fase, grup, tanggal, waktu, venue, dan hasil resmi;
- menampilkan adu penalti PRT013 secara terpisah dari skor waktu normal;
- menampilkan 71 kejadian terverifikasi dari database prototype;
- memetakan ID pemain ke nama dan posisi;
- menampilkan pencetak gol dan kartu pertandingan;
- menampilkan official kedua tim dari database pendaftaran;
- menampilkan lima perangkat pertandingan sesuai 80 penugasan terverifikasi;
- menyediakan navigasi pertandingan sebelumnya dan berikutnya;
- menyediakan loading, error, not-found, dan partial-data state;
- menyediakan metadata dinamis dan structured data yang hanya memakai fakta terverifikasi;
- tidak mengarang statistik pertandingan, lineup, media, berita, atau pemain terbaik.

---

## 4. Latar Belakang

Plan 04 telah mengimplementasikan `MAT-01 — Jadwal dan Hasil Pertandingan` pada route `/pertandingan`.

Kondisi repository pada base commit disetujui:

- route `/pertandingan` tersedia;
- data 8 tim dan 16 pertandingan tersedia di `matches-prototype-data.ts`;
- kartu pertandingan masih menampilkan badge non-interaktif `Detail segera tersedia`;
- aksi pertandingan final pada Beranda masih menuju `/pertandingan?q=PRT016`;
- route `/pertandingan/[matchId]` belum tersedia;
- data dasar pertandingan telah bertipe TypeScript;
- 71 kejadian laga, data pemain, official tim, perangkat, dan penugasan belum tersedia di repository;
- tidak ada data statistik pertandingan per laga;
- tidak ada data lineup pertandingan;
- tidak ada route Detail Tim atau Detail Pemain.

Plan 05 harus membangun MAT-02 di atas feature `matches` yang sudah ada, bukan membuat sumber data pertandingan kedua yang saling bertentangan.

---

## 5. Tujuan

1. Membuat route detail yang valid untuk seluruh 16 pertandingan.
2. Menjadikan setiap kartu MAT-01 dapat membuka detail.
3. Menggunakan satu sumber fakta untuk data dasar pertandingan.
4. Menampilkan skor dan pemenang dengan benar.
5. Menampilkan PRT013 sebagai 2–2 dengan kemenangan penalti 4–3 untuk TIM002.
6. Menampilkan PRT016 sebagai final TIM002 vs TIM007 dengan skor 2–1.
7. Menampilkan semua kejadian laga yang berstatus `Terverifikasi`.
8. Mengubah ID pemain menjadi nama yang dapat dibaca.
9. Menghitung skor berjalan pada timeline hanya dari kejadian gol yang tersedia.
10. Menampilkan official kedua tim tanpa menyebut roster sebagai lineup.
11. Menampilkan perangkat pertandingan berdasarkan penugasan per laga.
12. Menyediakan previous/next navigation yang deterministik.
13. Menangani ID tidak valid dengan halaman 404 kontekstual.
14. Menyediakan halaman yang tetap berguna saat data sekunder tidak tersedia.
15. Menjaga responsif, aksesibilitas, dan visual Modern–Premium.
16. Menyediakan struktur data yang dapat diganti API di tahap berikutnya.
17. Tidak membuat halaman Klasemen, Bracket, Detail Tim, atau Detail Pemain.

---

## 6. Referensi Utama

| No. | Dokumen/Sumber | Status saat Plan 05 disetujui | Peran |
|---:|---|---|---|
| 1 | Keputusan pengguna 24 Juli 2026 | DISETUJUI | Menetapkan Plan 05 sebagai Detail Pertandingan |
| 2 | `00_INDEX_DAN_STATUS_PERENCANAAN_WEBSITE.md` | AKTIF | Kebijakan format dan sumber kebenaran |
| 3 | `01_ALUR_KERJA_PERENCANAAN_DAN_IMPLEMENTASI_WEBSITE.md` | DISETUJUI | Alur ChatGPT, Gemini, pengujian, SHA, dan Git |
| 4 | `02_TEMPLATE_PLAN_IMPLEMENTASI_WEBSITE.md` | AKTIF | Struktur plan |
| 5 | `MAT-02_SPESIFIKASI_HALAMAN_DETAIL_PERTANDINGAN.md` | DRAFT v0.1 | Struktur, perilaku, state, dan acceptance criteria |
| 6 | `MAT-02_DAFTAR_REFERENSI.md` | DRAFT v0.1 | Urutan sumber internal |
| 7 | `MAT-02_WIREFRAME_DETAIL_PERTANDINGAN.pdf` | DRAFT STRUKTURAL | Komposisi desktop dan mobile |
| 8 | `MAT-02_SPESIFIKASI_KOMPONEN_UI.md` | DRAFT v0.1 | Kontrak komponen dan tipe konseptual |
| 9 | `FCS — Database Pertandingan` | AKTIF | Pertandingan, kejadian, venue, perangkat, dan penugasan |
| 10 | `FCS — Database Pemain dan Roster` | AKTIF | Identitas pemain, posisi, nomor, kapten, dan kiper |
| 11 | `FCS — Database Klub dan Peserta` | AKTIF | Tim, pendaftaran, dan official tim |
| 12 | `04_IMPLEMENTASI_HALAMAN_PERTANDINGAN.md` | TELAH DIIMPLEMENTASIKAN | Kontrak MAT-01 dan integrasi ke MAT-02 |
| 13 | Source code base commit | AKTIF | Kondisi teknis aktual |
| 14 | Data mengikat pada lampiran Plan 05 | MENGIKAT SETELAH DISETUJUI | Data yang dapat langsung dipakai Antigravity |

### 6.1 Urutan Sumber Kebenaran

Jika terdapat konflik:

1. keputusan terbaru pengguna;
2. Plan 05 versi final yang berstatus `DISETUJUI`;
3. database aktif FCS;
4. Plan 04 dan source code MAT-01 aktif;
5. spesifikasi halaman MAT-02;
6. spesifikasi komponen UI MAT-02;
7. wireframe MAT-02;
8. daftar referensi MAT-02;
9. catatan lama dan arsip.

### 6.2 Status Pemetaan Data MAT-02

Tiga dokumen MAT-02 merujuk file:

```text
MAT-02_PEMETAAN_DATA_DETAIL_PERTANDINGAN.csv
```

File tersebut tidak ditemukan dalam pencarian Drive saat Plan 05 disusun.

Keputusan final Plan 05:

- file yang tidak ditemukan tidak boleh dianggap tersedia;
- implementasi tidak diblokir;
- Plan 05 menyediakan kontrak data eksplisit;
- database aktif dan source code MAT-01 menjadi sumber fakta;
- Gemini dilarang mengarang field untuk menggantikan CSV yang hilang;
- jika CSV ditemukan sebelum implementasi, Gemini wajib membandingkannya dengan Plan 05 final dan melaporkan konflik sebelum mengubah kontrak data.

### 6.3 Koreksi terhadap Wireframe Ilustratif

Wireframe hanya dipakai untuk struktur. Nilai ilustratif berikut tidak mengikat:

| Wireframe | Nilai yang harus dipakai |
|---|---|
| `Sumedang Industrial FC` | `Tekma Futsal` untuk PRT016 |
| `MAT-016` | `PRT016` atau label `Pertandingan 16` |
| `GOR Sumedang` | `Arena Futsal Sumedang (Simulasi)` |
| statistik 12–9, 54%–46%, dan seterusnya | jangan dipakai karena tidak ada data pertandingan |
| daftar pemain generik | jangan dianggap lineup |
| nama perangkat generik | gunakan penugasan database |

---

## 7. Prasyarat Implementasi

- Plan 05 berstatus `DISETUJUI` versi `1.0`.
- Base commit final diperiksa ulang.
- Plan 04 dan perbaikannya telah lulus audit.
- `client/package.json` dibaca.
- `matches.types.ts`, `matches-prototype-data.ts`, `match-card.tsx`, `matches-page.tsx`, dan integrasi Home dibaca.
- Tidak ada route detail yang dibuat pekerjaan lain.
- Tidak ada perubahan lokal yang belum dipahami.
- Tidak ada dependency baru yang diperlukan.

---

## 8. Kondisi Teknis Aktif

```text
Next.js    : 16.2.11
React      : 19.2.4
React DOM  : 19.2.4
TypeScript : 5.x
Node       : 24.x
CSS        : CSS Modules + global token
Icons      : lucide-react
Router     : App Router
```

Aturan:

- gunakan Server Component untuk page route utama;
- gunakan Client Component hanya untuk interaksi seperti salin tautan;
- gunakan `generateStaticParams()` karena 16 route diketahui;
- gunakan `generateMetadata()` dari data pertandingan;
- gunakan `notFound()` untuk ID tidak valid;
- gunakan `dynamicParams = false` apabila kompatibel dengan struktur akhir;
- tidak menambah dependency;
- tidak membuat fetch atau delay palsu;
- tidak membaca Google Drive saat runtime;
- data prototype tetap lokal dan bertipe.

---

## 9. Hasil Akhir yang Diharapkan

1. `/pertandingan/PRT001` sampai `/pertandingan/PRT016` tersedia.
2. `/pertandingan/PRT999` menampilkan not-found kontekstual.
3. Menu global `Pertandingan` tetap aktif pada route detail.
4. Setiap kartu MAT-01 memiliki aksi `Lihat Detail`.
5. Aksi final pada Home menuju `/pertandingan/PRT016`.
6. Scoreboard menampilkan tim dan skor akurat.
7. Pemenang ditandai dengan teks, bukan warna saja.
8. PRT013 menampilkan skor normal dan penalti secara terpisah.
9. Timeline hanya menampilkan event terverifikasi.
10. Nama pemain tampil, bukan ID mentah.
11. Official tim tampil berdasarkan tim pertandingan.
12. Perangkat tampil berdasarkan pertandingan.
13. Statistik menunjukkan state tidak tersedia, bukan angka ilustratif.
14. Lineup menunjukkan state tidak tersedia, bukan roster umum.
15. Previous/next bekerja untuk seluruh urutan pertandingan.
16. Metadata halaman berbeda untuk setiap pertandingan.
17. Loading, error, not-found, dan partial state tersedia.
18. Tidak ada dead link ke Detail Tim, Pemain, Klasemen, atau Bracket.
19. Tidak ada backend atau dependency baru.

---

## 10. Ruang Lingkup

### 10.1 Termasuk

- route dynamic MAT-02;
- data event, pemain, roster identity, official tim, perangkat, penugasan;
- resolver detail;
- scoreboard;
- metadata;
- ringkasan hasil dan pencetak gol;
- timeline;
- statistik unavailable state;
- lineup unavailable state dan official tim;
- perangkat;
- venue;
- previous/next;
- share/copy link sederhana;
- SEO dan structured data;
- loading/error/not-found;
- integrasi MAT-01 dan Home.

### 10.2 Tidak Termasuk

- backend, API, database, CMS, admin;
- live update;
- timer pertandingan;
- statistik pertandingan buatan;
- lineup buatan;
- pergantian buatan;
- media atau berita buatan;
- pemain terbaik buatan;
- Detail Tim, Detail Pemain, Klasemen, Bracket;
- login, tiket, streaming, komentar;
- download laporan dan print view;
- perubahan visual global besar.

---

## 11. Kontrak Route

Route kanonis:

```text
/pertandingan/[matchId]
```

Parameter valid:

```text
PRT001 ... PRT016
```

Aturan:

- gunakan nama parameter `matchId`;
- link internal selalu memakai ID uppercase;
- tidak menggunakan slug nama tim pada versi awal;
- tidak menerima ID generik `match-final`;
- invalid/missing match → `notFound()`;
- route list tetap `/pertandingan`;
- hash section boleh dipakai, misalnya `#timeline`.

Contoh struktur:

```text
client/src/app/pertandingan/[matchId]/page.tsx
client/src/app/pertandingan/[matchId]/loading.tsx
client/src/app/pertandingan/[matchId]/error.tsx
client/src/app/pertandingan/[matchId]/not-found.tsx
```

### 11.1 Static Generation

```ts
export function generateStaticParams() {
  return matchesPrototypeData.matches.map((match) => ({
    matchId: match.id,
  }));
}
```

Untuk Next.js 16, page harus mengikuti signature `params` aktual pada repository, termasuk `Promise` bila diperlukan.

---

## 12. Strategi Sumber Data

### 12.1 Data Dasar yang Wajib Direuse

Jangan menduplikasi data berikut:

- kompetisi;
- fase;
- grup;
- venue;
- tim;
- 16 pertandingan;
- skor;
- penalty result.

Sumber:

```text
client/src/features/matches/data/matches-prototype-data.ts
```

### 12.2 Data Tambahan Plan 05

Tambahkan data lokal bertipe untuk:

- 71 match events;
- 64 player identity records;
- roster identity untuk nomor/posisi/kapten/kiper;
- 24 team officials;
- 8 match officials;
- 80 match official assignments.

### 12.3 Data yang Tidak Tersedia

| Kelompok | Keputusan |
|---|---|
| statistik per pertandingan | tampilkan unavailable state; jangan gunakan angka wireframe |
| lineup starter/cadangan | tampilkan unavailable state; roster tidak boleh menggantikan lineup |
| substitution | tidak ditampilkan karena tidak ada data |
| player of match | disembunyikan |
| related media | section tidak dirender |
| related news | section tidak dirender |
| attendance | metadata disembunyikan |
| end time | metadata disembunyikan |
| map URL | tombol peta tidak dirender |

---

## 13. Arsitektur Feature

Rekomendasi:

```text
client/src/features/matches/
├── data/
│   ├── matches-prototype-data.ts
│   ├── match-events-prototype-data.ts
│   ├── match-participants-prototype-data.ts
│   └── match-officials-prototype-data.ts
├── types/
│   ├── matches.types.ts
│   └── match-detail.types.ts
├── lib/
│   ├── resolve-match-detail.ts
│   ├── derive-match-timeline.ts
│   ├── derive-match-summary.ts
│   └── match-detail-formatters.ts
├── components/
│   └── detail/
│       ├── match-breadcrumb.tsx
│       ├── match-identity-header.tsx
│       ├── match-scoreboard.tsx
│       ├── match-metadata-grid.tsx
│       ├── match-primary-actions.tsx
│       ├── share-match-button.tsx
│       ├── match-summary.tsx
│       ├── match-content-navigation.tsx
│       ├── match-timeline.tsx
│       ├── match-statistics-section.tsx
│       ├── match-team-section.tsx
│       ├── match-officials-section.tsx
│       ├── match-venue-card.tsx
│       ├── match-navigation.tsx
│       ├── match-section-unavailable.tsx
│       ├── match-detail-skeleton.tsx
│       ├── match-detail-error-state.tsx
│       └── match-detail-not-found.tsx
├── match-detail-page.tsx
└── match-detail-page.module.css
```

Gemini boleh menggabungkan komponen kecil yang benar-benar satu tanggung jawab, tetapi tidak boleh membuat satu file halaman raksasa.

---

## 14. Tipe Data Minimum

```ts
export type MatchEventType = "goal" | "yellow_card" | "red_card" | "own_goal" | "substitution" | "other";

export type MatchEventRecord = {
  id: string;
  matchId: string;
  type: MatchEventType;
  teamId: string;
  playerId: string | null;
  relatedPlayerId: string | null;
  minute: number;
  period: "first_half" | "second_half" | "extra_time" | "penalties" | "unknown";
  note: string | null;
  verificationStatus: "verified" | "unverified";
};

export type MatchPlayerSummary = {
  id: string;
  displayName: string;
  position: string;
  image: MatchImageAsset;
};

export type RegisteredRosterIdentity = {
  teamId: string;
  playerId: string;
  shirtNumber: number;
  position: string;
  isCaptain: boolean;
  isGoalkeeper: boolean;
};

export type TeamOfficialSummary = {
  id: string;
  teamId: string;
  name: string;
  role: string;
  image: MatchImageAsset;
};

export type MatchOfficialSummary = {
  id: string;
  name: string;
  competency: string;
  image: MatchImageAsset;
};

export type MatchOfficialAssignment = {
  id: string;
  matchId: string;
  officialId: string;
  role: "Wasit 1" | "Wasit 2" | "Timekeeper" | "Pengawas Pertandingan" | "Petugas Meja";
  status: "verified";
};

export type ResolvedMatchTimelineItem = MatchEventRecord & {
  team: MatchTeam;
  player: MatchPlayerSummary | null;
  relatedPlayer: MatchPlayerSummary | null;
  scoreAfterEvent: { teamAScore: number; teamBScore: number } | null;
};

export type MatchDetailPageData = {
  competition: CompetitionMetadata;
  match: MatchRecord;
  phase: MatchPhase;
  group: MatchGroup | null;
  venue: MatchVenue | null;
  teamA: MatchTeam;
  teamB: MatchTeam;
  winnerTeamId: string | null;
  timeline: ResolvedMatchTimelineItem[];
  scorers: MatchPlayerSummary[];
  teamAOfficials: TeamOfficialSummary[];
  teamBOfficials: TeamOfficialSummary[];
  matchOfficials: Array<MatchOfficialAssignment & { official: MatchOfficialSummary }>;
  previousMatch: MatchRecord | null;
  nextMatch: MatchRecord | null;
  statistics: null;
  lineups: null;
};
```

Tidak boleh menggunakan `any`.

---

## 15. Resolver Detail Pertandingan

Buat fungsi murni:

```ts
resolveMatchDetail(matchId: string): MatchDetailPageData | null
```

Langkah resolver:

1. cari match berdasarkan ID persis;
2. validasi team A/B, phase, group, venue;
3. resolve winner dari skor normal atau penalty result;
4. filter event `matchId` dan `verified`;
5. sort event berdasarkan menit, lalu event ID;
6. resolve player dan related player;
7. hitung skor berjalan hanya untuk event goal/own goal;
8. resolve team officials;
9. resolve perangkat dari assignment;
10. resolve previous/next berdasarkan `match.number`;
11. kembalikan `null` jika match dasar tidak ada;
12. jangan menggagalkan seluruh halaman jika data sekunder kosong.

### 15.1 Winner Rule

```ts
if (match.penaltyResult) return match.penaltyResult.winnerTeamId;
if (scoreA == null || scoreB == null || scoreA === scoreB) return null;
return scoreA > scoreB ? match.teamAId : match.teamBId;
```

### 15.2 Timeline Score Rule

- mulai dari 0–0;
- tambah skor hanya untuk event `goal`;
- data saat ini tidak memiliki own goal;
- yellow card tidak mengubah skor;
- event dengan menit sama mempertahankan urutan event ID;
- skor akhir hasil derivasi harus sama dengan score match untuk seluruh pertandingan;
- jika tidak sama, laporkan sebagai data integrity error, jangan diam-diam mengoreksi.

---

## 16. Struktur Halaman

Urutan final:

1. Global Header
2. Breadcrumb / Back Link
3. Match Identity Header
4. Main Scoreboard
5. Match Metadata Grid
6. Primary Actions
7. Match Summary
8. Content Navigation
9. Event Timeline
10. Team Statistics State
11. Team Data and Team Officials
12. Match Officials
13. Venue Information
14. Previous / Next Match
15. Related Navigation
16. Prototype Data Notice
17. Global Footer

Related media dan berita tidak dirender karena tidak ada data terhubung.

---

## 17. Breadcrumb dan Kembali

Desktop:

```text
Beranda / Pertandingan / Cakra Textile FC vs Tekma Futsal
```

Mobile:

```text
← Kembali ke Pertandingan
```

Aturan:

- gunakan `nav aria-label="Breadcrumb"`;
- item aktif `aria-current="page"`;
- kembali menuju `/pertandingan`;
- browser Back tetap bekerja secara alami;
- tidak menyimpan query return yang kompleks pada versi awal.

---

## 18. Match Identity Header

Menampilkan:

- `Pertandingan {number}`;
- fase;
- grup jika ada;
- status pertandingan;
- status hasil;
- nama kompetisi.

Contoh PRT016:

```text
PERTANDINGAN 16 • FINAL
SELESAI • HASIL RESMI
FCS INDUSTRIAL CUP SUMEDANG 2026
```

Jangan menulis `MAT-016`.

---

## 19. Main Scoreboard

### 19.1 Selesai

- tampilkan dua tim;
- tampilkan skor akhir;
- tampilkan label pemenang;
- tampilkan status hasil;
- tim A/B tidak disebut home/away.

### 19.2 Penalti

PRT013:

```text
Cakra Textile FC 2–2 Bumi Energi FC
Cakra Textile FC menang adu penalti 4–3
```

Skor penalti tidak dijumlahkan menjadi 6–5.

### 19.3 Status Umum

Komponen tetap mendukung scheduled, live, postponed, cancelled, walaupun data prototype aktif seluruhnya finished.

- scheduled → waktu, tanpa skor;
- live → skor sementara + label;
- postponed → label, tanpa 0–0 palsu;
- cancelled → label, tanpa skor.

### 19.4 Team Links

Route Detail Tim belum tersedia. Nama tim tidak boleh menjadi dead link. Gunakan identitas non-interaktif. Related action dapat berlabel `Detail tim segera tersedia` hanya bila tampil jelas disabled/non-link.

---

## 20. Match Metadata Grid

Field yang tersedia:

- tanggal;
- waktu mulai;
- zona waktu WIB;
- venue;
- kecamatan;
- kota;
- fase;
- grup bila ada;
- nomor pertandingan.

Field yang tidak ditampilkan:

- waktu selesai;
- jumlah penonton;
- durasi aktual;
- streaming URL kosong;
- sponsor kosong.

Format tanggal Indonesia menggunakan `Intl.DateTimeFormat("id-ID")`.

---

## 21. Primary Actions

Tersedia:

1. kembali ke semua pertandingan;
2. salin tautan pertandingan;
3. navigasi previous/next pada section terpisah.

Share button:

- Client Component kecil;
- menggunakan URL saat ini;
- mencoba `navigator.clipboard.writeText`;
- menampilkan feedback `Tautan disalin` melalui `aria-live`;
- jika clipboard gagal, tampilkan feedback yang jujur;
- tidak perlu dependency.

Tidak tersedia sebagai tombol aktif:

- Detail Tim;
- Detail Pemain;
- Klasemen;
- Bracket;
- peta;
- download laporan.

---

## 22. Match Summary

Ringkasan diturunkan dari data, bukan teks AI.

Menampilkan:

- hasil akhir;
- nama pemenang bila ada;
- daftar pencetak gol sesuai event;
- assist bila tersedia;
- note match yang sudah ada;
- penalty note bila ada.

Tidak menampilkan:

- narasi pertandingan buatan;
- player of match;
- kesimpulan taktis;
- statistik yang tidak tersedia.

Untuk pencetak gol ganda, nama dapat muncul dengan menit gabungan.

---

## 23. Match Content Navigation

Gunakan navigasi anchor horizontal:

```text
Ringkasan | Timeline | Statistik | Tim | Perangkat | Venue
```

Aturan:

- setiap anchor menuju ID section yang benar;
- mobile dapat horizontal scroll;
- tidak harus sticky jika mengganggu header;
- unavailable section tetap dapat dituju dan menjelaskan status data;
- focus target tidak tertutup header;
- gunakan `scroll-margin-top`.

---

## 24. Event Timeline

### 24.1 Data

- gunakan 71 event lampiran;
- hanya event verified;
- tipe aktif: Gol dan Kartu Kuning;
- jangan menambahkan kick-off, half-time, full-time, substitusi, atau kartu merah yang tidak ada.

### 24.2 Item

Menampilkan:

- menit;
- babak;
- label kejadian;
- nama tim;
- nama pemain;
- assist/related player bila tersedia;
- skor setelah gol;
- keterangan verifikasi tidak harus tampil secara visual.

### 24.3 Urutan

- kronologis menaik;
- jika menit sama, event ID menaik;
- PRT016 pada menit 29: gol EVT070 tampil sebelum kartu EVT071.

### 24.4 Aksesibilitas

- gunakan list semantik;
- ikon bukan satu-satunya informasi;
- gunakan teks `Gol` dan `Kartu Kuning`;
- skor dibaca sebagai teks.

---

## 25. Statistik Pertandingan

Database aktif tidak memiliki statistik per laga.

Plan 05 wajib menampilkan state:

```text
Statistik pertandingan belum tersedia untuk data prototype ini.
```

Aturan:

- jangan memakai angka wireframe;
- jangan menghitung possession, shots, fouls, corners, saves, atau passing dari event;
- jangan menggunakan statistik pemain agregat sebagai statistik pertandingan;
- komponen tetap menerima props untuk integrasi API masa depan;
- nilai `null` berbeda dengan `0`.

---

## 26. Lineup dan Official Tim

### 26.1 Lineup

Data roster tersedia, tetapi lineup pertandingan tidak tersedia.

Tampilkan:

```text
Susunan pemain pertandingan belum tersedia.
```

Dilarang:

- membagi roster menjadi starter/cadangan secara asumsi;
- menganggap kapten roster otomatis bermain;
- menganggap pemain pertama sebagai starter;
- mengarang pergantian.

### 26.2 Official Tim

Official tim dapat ditampilkan karena datanya tersedia.

Untuk setiap tim:

- Pelatih Kepala;
- Asisten Pelatih;
- Manajer Tim.

Foto Drive tidak dipakai langsung sebagai aset web. Gunakan fallback inisial sampai aset lokal disiapkan.

### 26.3 Roster Identity

Data roster boleh dipakai hanya untuk:

- nomor punggung pemain pada timeline;
- posisi pemain;
- label kapten/kiper jika diperlukan sebagai identitas terdaftar.

Data roster tidak boleh diberi judul lineup.

---

## 27. Perangkat Pertandingan

Tampilkan lima penugasan per pertandingan:

1. Wasit 1
2. Wasit 2
3. Timekeeper
4. Pengawas Pertandingan
5. Petugas Meja

Urutan mengikuti daftar tersebut, bukan alfabet nama.

Setiap item:

- nama;
- peran pada pertandingan;
- kompetensi umum opsional;
- avatar fallback;
- status penugasan tidak perlu tampil jika verified.

Tidak menampilkan kontak pribadi.

---

## 28. Venue

Gunakan:

```text
Arena Futsal Sumedang (Simulasi)
Sumedang Selatan, Sumedang
```

Jangan menampilkan:

- alamat `Alamat simulasi` sebagai alamat nyata yang meyakinkan;
- tombol peta karena URL kosong;
- foto karena URL kosong;
- data fasilitas sebagai fakta venue nyata tanpa label prototype.

Boleh menampilkan fasilitas dengan label `Fasilitas prototype` jika diperlukan, tetapi bukan prioritas.

---

## 29. Previous dan Next Match

Gunakan `match.number`:

- previous = number - 1;
- next = number + 1;
- PRT001 previous null;
- PRT016 next null.

Card menampilkan:

- label Sebelumnya/Berikutnya;
- nomor;
- kedua tim;
- skor;
- tanggal;
- link ke route detail.

Jangan menggunakan urutan array tanpa validasi nomor unik.

---

## 30. Related Navigation

Route berikut belum tersedia:

- Detail Tim;
- Detail Pemain;
- Klasemen;
- Bracket.

Pilihan aman:

- tidak merender link;
- atau render info non-interaktif `Segera tersedia`.

Tidak boleh menggunakan href `#` atau route 404.

---

## 31. Metadata Dinamis

Title:

```text
Cakra Textile FC vs Tekma Futsal | FCS Industrial Cup Sumedang 2026
```

Description:

```text
Hasil resmi pertandingan final Cakra Textile FC vs Tekma Futsal, skor 2–1, FCS Industrial Cup Sumedang 2026.
```

Aturan:

- title berasal dari team data;
- score hanya masuk description jika tersedia;
- invalid ID tidak membuat metadata palsu;
- canonical dapat mengikuti route current;
- tidak membuat OpenGraph image baru.

---

## 32. Structured Data

Tambahkan JSON-LD `SportsEvent` hanya dari data yang tersedia:

- name;
- startDate;
- eventStatus;
- location;
- competitor kedua tim;
- organizer/competition name;
- URL.

Tidak menggunakan `homeTeam`/`awayTeam` karena data hanya Tim A/Tim B.

Tidak menambahkan attendance, offers, performer, image, atau aggregateRating yang tidak tersedia.

JSON harus di-escape aman dan tidak memasukkan data pengguna.

---

## 33. Loading State

Buat skeleton yang mencerminkan:

- identity header;
- scoreboard;
- metadata;
- dua atau tiga content section.

Jangan membuat loading palsu saat pindah anchor atau klik share.

---

## 34. Error State

`error.tsx`:

- Client Component;
- pesan kontekstual;
- tombol coba lagi;
- link kembali ke Pertandingan;
- error dapat dicatat di console development;
- jangan mengekspos stack trace.

---

## 35. Not Found State

Untuk ID tidak valid:

- heading `Pertandingan tidak ditemukan`;
- tampilkan ID yang aman bila perlu;
- link `/pertandingan`;
- jangan fallback ke PRT016;
- jangan mengubah invalid ID menjadi pertandingan lain;
- status HTTP mengikuti `notFound()`.

---

## 36. Partial Data State

Halaman minimum harus tetap tampil jika tersedia:

- match;
- team A/B;
- score/status;
- phase;
- date/time.

Data sekunder yang kosong tidak menggagalkan halaman:

- timeline kosong → unavailable state;
- officials kosong → unavailable state;
- venue kosong → section disembunyikan;
- statistics null → unavailable state;
- lineups null → unavailable state.

---

## 37. Responsif

### Desktop

- scoreboard tiga kolom;
- metadata grid 4–5 item;
- content maksimal lebar sesuai PageContainer;
- timeline dan section detail mudah dipindai;
- previous/next dua kolom.

### Tablet

- scoreboard tetap horizontal bila muat;
- nama tim maksimal dua baris;
- metadata 2–3 kolom;
- official grid menyesuaikan.

### Mobile 360–430 px

- back link ringkas;
- identity center atau left sesuai desain;
- scoreboard tidak overflow;
- logo dan skor tetap fokus;
- content nav horizontal scroll;
- timeline single column;
- previous/next stacked;
- touch target minimal 44 px;
- tidak ada horizontal page overflow.

---

## 38. Aksesibilitas

- satu `h1` yang mewakili pertandingan;
- scoreboard memiliki accessible label;
- status memiliki teks;
- pemenang memiliki label teks;
- badge tidak hanya warna;
- breadcrumb semantik;
- timeline list semantik;
- heading section berurutan;
- focus indicator terlihat;
- copy-link feedback memakai `aria-live`;
- decorative icon `aria-hidden`;
- image fallback memiliki nama tim/orang;
- motion menghormati `prefers-reduced-motion`;
- tidak menggunakan emoji sebagai satu-satunya ikon informasi.

---

## 39. Styling

- gunakan token global aktif;
- gunakan CSS Modules;
- pertahankan Modern dan Premium;
- scoreboard menjadi fokus visual;
- gunakan contrast cukup;
- jangan menambah global CSS kecuali kebutuhan lintas route terbukti;
- jangan menyalin warna merek situs referensi;
- hindari inline style kecuali nilai dinamis sederhana;
- tidak menambah framework CSS.

---

## 40. Integrasi MAT-01

Ubah `match-card.tsx`:

Sebelum:

```text
Detail segera tersedia
```

Sesudah:

```text
Lihat Detail
```

Href:

```text
/pertandingan/{match.id}
```

Aturan:

- gunakan `ActionLink` atau `Link` konsisten;
- seluruh 16 kartu dapat dibuka;
- card tidak harus seluruhnya clickable;
- aria label menyebut pertandingan;
- jangan mengubah filter atau data MAT-01.

---

## 41. Integrasi Beranda

Ubah aksi `MatchResultCard` final:

Sebelum:

```text
/pertandingan?q=PRT016
```

Sesudah:

```text
/pertandingan/PRT016
```

Jangan mengubah section Home lain.

---

## 42. File yang Diperkirakan Dibuat

```text
client/src/app/pertandingan/[matchId]/page.tsx
client/src/app/pertandingan/[matchId]/loading.tsx
client/src/app/pertandingan/[matchId]/error.tsx
client/src/app/pertandingan/[matchId]/not-found.tsx
client/src/features/matches/types/match-detail.types.ts
client/src/features/matches/data/match-events-prototype-data.ts
client/src/features/matches/data/match-participants-prototype-data.ts
client/src/features/matches/data/match-officials-prototype-data.ts
client/src/features/matches/lib/resolve-match-detail.ts
client/src/features/matches/lib/derive-match-timeline.ts
client/src/features/matches/lib/derive-match-summary.ts
client/src/features/matches/lib/match-detail-formatters.ts
client/src/features/matches/match-detail-page.tsx
client/src/features/matches/match-detail-page.module.css
client/src/features/matches/components/detail/*.tsx
client/src/features/matches/components/detail/*.module.css
```

Tidak semua komponen harus memiliki file CSS terpisah jika styling kecil dan kohesif.

---

## 43. File yang Diperkirakan Diubah

```text
client/src/features/matches/components/match-card.tsx
client/src/features/matches/components/match-card.module.css
client/src/features/home/components/match-result-card.tsx
```

Hanya bila diperlukan:

```text
client/src/features/matches/types/matches.types.ts
client/src/features/matches/lib/match-formatters.ts
```

`matches-prototype-data.ts` tidak boleh diubah kecuali ditemukan bug data nyata.

---

## 44. File yang Tidak Boleh Diubah Tanpa Kebutuhan Langsung

```text
server/**
client/package.json
client/package-lock.json
client/tsconfig.json
client/eslint.config.*
client/next.config.*
client/src/app/layout.tsx
client/src/styles/tokens.css
client/src/config/navigation.ts
client/src/components/layout/site-header/**
```

Jika perubahan benar-benar diperlukan, Gemini wajib berhenti dan melaporkan alasannya sebelum melanjutkan.

---

## 45. Urutan Implementasi

1. Baca Plan 05 penuh.
2. Periksa status dokumen.
3. Periksa base commit dan kondisi kerja tanpa Git write.
4. Baca package dan source MAT-01.
5. Baca integrasi Home.
6. Buat tipe detail.
7. Buat data events.
8. Buat data player/roster identity.
9. Buat data official tim.
10. Buat data perangkat dan assignment.
11. Buat resolver murni.
12. Buat timeline derivation dan integrity check.
13. Buat summary derivation.
14. Buat komponen detail.
15. Buat unavailable states.
16. Buat dynamic route dan metadata.
17. Buat loading/error/not-found.
18. Integrasikan MAT-01.
19. Integrasikan Home.
20. Periksa 16 route secara statis.
21. Periksa PRT013 dan PRT016 khusus.
22. Periksa aksesibilitas dan responsif dari kode.
23. Hentikan tanpa Git.
24. Berikan laporan.

---

## 46. Larangan Implementasi

Gemini dilarang:

- mengarang statistik;
- memakai statistik wireframe;
- menganggap roster sebagai lineup;
- mengarang starter/cadangan;
- mengarang substitution;
- mengarang player of match;
- mengarang media atau berita;
- mengubah skor;
- mengubah tim;
- mengubah event;
- membuat kickoff/full-time event yang tidak ada;
- menggabungkan penalti ke skor normal;
- memakai ID pemain sebagai teks final jika nama tersedia;
- menampilkan kontak official;
- hotlink foto Google Drive;
- membuat dead link;
- memakai href `#` untuk fitur belum tersedia;
- membuat API/fetch/delay palsu;
- menggunakan `any`;
- menonaktifkan lint;
- menambah dependency;
- refactor besar MAT-01 atau Home;
- menjalankan Git;
- melakukan deployment.

---

## 47. Pemeriksaan Data Wajib

- match count tetap 16;
- event count tepat 71;
- assignment count tepat 80;
- setiap pertandingan memiliki 5 assignment;
- setiap event match ID valid;
- setiap event team ID adalah salah satu tim pertandingan;
- setiap player ID valid;
- every related player ID valid jika ada;
- setiap official team ID valid;
- setiap assignment official ID valid;
- timeline goal count menghasilkan skor akhir yang sama;
- PRT013 normal 2–2, penalti 4–3 TIM002;
- PRT016 TIM002 2–1 TIM007;
- PRT016 events tepat 4;
- PRT016 perangkat tepat 5;
- tidak ada statistik match buatan;
- tidak ada lineup buatan;
- tidak ada route mati.

---

## 48. Skenario Pengujian Manual

### Route

- buka `/pertandingan/PRT001`;
- buka `/pertandingan/PRT013`;
- buka `/pertandingan/PRT016`;
- buka `/pertandingan/PRT999`;
- refresh setiap route;
- gunakan back/forward.

### PRT016

- Cakra Textile FC vs Tekma Futsal;
- skor 2–1;
- Final;
- 9 Agustus 2026;
- 17.00 WIB;
- venue benar;
- timeline 4 event;
- goal Wahyu Hidayat menit 11;
- goal Alif Firmansyah menit 20;
- goal Tegar Mahendra menit 29;
- kartu Naufal Kurnia menit 29;
- perangkat sesuai lampiran.

### PRT013

- skor normal 2–2;
- penalti 4–3;
- winner Cakra Textile FC;
- previous PRT012;
- next PRT014.

### Partial State

- statistik unavailable;
- lineup unavailable;
- official tim tetap tampil;
- media/news tidak tampil;
- tidak ada angka nol palsu.

### Integrasi

- MAT-01 → detail;
- Home final → PRT016;
- previous/next;
- kembali ke `/pertandingan`.

### Responsive

- 1440 px;
- 1024 px;
- 768 px;
- 430 px;
- 390 px;
- 360 px;
- tidak ada overflow;
- content nav dapat digunakan.

### Accessibility

- keyboard;
- focus;
- heading;
- breadcrumb;
- timeline;
- copy link feedback;
- status dan winner terbaca tanpa warna.

---

## 49. Perintah Validasi oleh Pengguna

Dari folder `client`:

```bash
npm run type-check
npm run lint
npm run build
```

Kemudian:

```bash
npm run dev
```

Periksa seluruh skenario manual. Gemini tidak menjalankan Git.

---

## 50. Format Laporan Implementasi Gemini

```text
STATUS IMPLEMENTASI PLAN 05

1. Ringkasan pekerjaan
2. File baru
3. File yang diubah
4. Dynamic route yang dibuat
5. Jumlah route detail
6. Jumlah event
7. Jumlah player identity
8. Jumlah official tim
9. Jumlah perangkat
10. Jumlah assignment
11. Resolver dan integrity check
12. State statistik
13. State lineup
14. Integrasi MAT-01
15. Integrasi Home
16. Loading/error/not-found/partial state
17. Metadata dan structured data
18. Perbedaan terhadap plan
19. Hal yang belum selesai
20. Risiko pengujian
21. Hasil validasi yang benar-benar dijalankan
22. Konfirmasi Git tidak dijalankan
```

Laporan tidak boleh mengklaim perintah lulus jika tidak dijalankan.

---

## 51. Saran Commit Setelah Lulus Review

Commit dilakukan pengguna setelah audit visual dan validasi lulus.

Saran:

```text
feat(matches): implement match detail pages
```

Perbaikan audit bila diperlukan:

```text
fix(matches): repair match detail data and navigation
```

Pesan commit dan perintah Git diberikan terpisah dari instruksi Gemini sesuai alur kerja terbaru.

---

## 52. Definition of Done

- Plan 05 berstatus `DISETUJUI` versi `1.0`;
- 16 route tersedia;
- invalid route 404;
- match cards menuju detail;
- Home menuju PRT016;
- data dasar direuse;
- 71 event tersedia;
- player names resolved;
- official tim tersedia;
- match officials tersedia;
- 80 assignment tersedia;
- PRT013 benar;
- PRT016 benar;
- previous/next benar;
- stats tidak dikarang;
- lineup tidak dikarang;
- loading/error/not-found/partial tersedia;
- responsive dan accessibility terpenuhi;
- metadata dinamis tersedia;
- structured data aman;
- tidak ada dependency/backend/dead link;
- type-check lulus;
- lint lulus;
- build lulus;
- audit SHA lulus;
- status dokumentasi diperbarui setelah commit final.

---

## 53. Catatan Review Pengguna

```text
Status review          : SELESAI
Keputusan pengguna     : DISETUJUI
Perubahan yang diminta : Tidak ada perubahan tambahan
Tanggal persetujuan    : 24 Juli 2026
Versi final            : 1.0
Base commit final      : e7b5b11b58dbfcf70f482eedc90db409068061c5
Model implementasi     : Gemini 3.6 Flash
Thinking level         : High
```

---

## 54. Penutup

Plan 05 hanya mengimplementasikan `MAT-02 — Detail Pertandingan`.

Plan ini sengaja membedakan data tersedia dan tidak tersedia. Kualitas prototype tidak diukur dari banyaknya angka yang ditampilkan, melainkan dari ketepatan fakta, state yang jujur, route yang dapat digunakan, serta fondasi komponen yang siap dihubungkan ke API.

Klasemen Grup menjadi kandidat Plan 06 setelah Plan 05 selesai dan lulus audit.

---

# LAMPIRAN DATA MENGIKAT

## Lampiran A — Referensi Utama PRT016

```text
match_id       : PRT016
number         : 16
phase          : FAS04 / Final
team_a         : TIM002 / Cakra Textile FC
team_b         : TIM007 / Tekma Futsal
date           : 2026-08-09
start_time     : 17:00 WIB
venue          : VEN001 / Arena Futsal Sumedang (Simulasi)
status         : finished / Selesai
score          : 2–1
result_status  : official / Hasil Resmi
winner         : TIM002 / Cakra Textile FC
note           : Final — Cakra Textile FC juara
```

## Lampiran B — 71 Kejadian Laga Terverifikasi

```csv
kejadian_id,pertandingan_id,jenis_kejadian,tim_id,pemain_id,pemain_terkait_id,menit,babak,keterangan,status_verifikasi
EVT001,PRT001,Gol,TIM001,PLY007,PLY005,9,Babak 1,Gol dengan assist PLY005,Terverifikasi
EVT002,PRT001,Gol,TIM004,PLY031,PLY029,16,Babak 1,Gol dengan assist PLY029,Terverifikasi
EVT003,PRT001,Kartu Kuning,TIM001,PLY003,,16,Babak 1,Pelanggaran taktis,Terverifikasi
EVT004,PRT001,Gol,TIM001,PLY007,PLY006,24,Babak 2,Gol dengan assist PLY006,Terverifikasi
EVT005,PRT001,Gol,TIM001,PLY008,,31,Babak 2,Gol tanpa assist tercatat,Terverifikasi
EVT006,PRT002,Gol,TIM002,PLY015,PLY013,9,Babak 1,Gol dengan assist PLY013,Terverifikasi
EVT007,PRT002,Gol,TIM003,PLY023,PLY021,16,Babak 1,Gol dengan assist PLY021,Terverifikasi
EVT008,PRT002,Gol,TIM002,PLY013,PLY014,24,Babak 2,Gol dengan assist PLY014,Terverifikasi
EVT009,PRT002,Kartu Kuning,TIM003,PLY019,,28,Babak 2,Pelanggaran taktis,Terverifikasi
EVT010,PRT002,Gol,TIM003,PLY021,,31,Babak 2,Gol tanpa assist tercatat,Terverifikasi
EVT011,PRT003,Gol,TIM005,PLY039,PLY037,11,Babak 1,Gol dengan assist PLY037,Terverifikasi
EVT012,PRT003,Gol,TIM008,PLY063,PLY061,20,Babak 1,Gol dengan assist PLY061,Terverifikasi
EVT013,PRT003,Gol,TIM005,PLY037,PLY038,29,Babak 2,Gol dengan assist PLY038,Terverifikasi
EVT014,PRT003,Kartu Kuning,TIM005,PLY035,,31,Babak 2,Pelanggaran taktis,Terverifikasi
EVT015,PRT004,Gol,TIM006,PLY047,,14,Babak 1,Gol tanpa assist tercatat,Terverifikasi
EVT016,PRT004,Kartu Kuning,TIM006,PLY043,,22,Babak 2,Pelanggaran taktis,Terverifikasi
EVT017,PRT004,Gol,TIM007,PLY055,PLY053,26,Babak 2,Gol dengan assist PLY053,Terverifikasi
EVT018,PRT005,Gol,TIM001,PLY005,PLY003,9,Babak 1,Gol dengan assist PLY003,Terverifikasi
EVT019,PRT005,Gol,TIM003,PLY023,PLY022,16,Babak 1,Gol dengan assist PLY022,Terverifikasi
EVT020,PRT005,Gol,TIM001,PLY007,,24,Babak 2,Gol tanpa assist tercatat,Terverifikasi
EVT021,PRT005,Gol,TIM003,PLY024,PLY019,31,Babak 2,Gol dengan assist PLY019,Terverifikasi
EVT022,PRT005,Kartu Kuning,TIM001,PLY004,,35,Babak 2,Pelanggaran taktis,Terverifikasi
EVT023,PRT006,Gol,TIM004,PLY029,PLY030,11,Babak 1,Gol dengan assist PLY030,Terverifikasi
EVT024,PRT006,Kartu Kuning,TIM004,PLY027,,19,Babak 1,Pelanggaran taktis,Terverifikasi
EVT025,PRT006,Gol,TIM002,PLY015,PLY011,20,Babak 1,Gol dengan assist PLY011,Terverifikasi
EVT026,PRT006,Gol,TIM002,PLY016,,29,Babak 2,Gol tanpa assist tercatat,Terverifikasi
EVT027,PRT007,Gol,TIM005,PLY039,PLY035,11,Babak 1,Gol dengan assist PLY035,Terverifikasi
EVT028,PRT007,Gol,TIM007,PLY053,PLY054,20,Babak 1,Gol dengan assist PLY054,Terverifikasi
EVT029,PRT007,Gol,TIM007,PLY055,PLY051,29,Babak 2,Gol dengan assist PLY051,Terverifikasi
EVT030,PRT007,Kartu Kuning,TIM007,PLY051,,30,Babak 2,Pelanggaran taktis,Terverifikasi
EVT031,PRT008,Gol,TIM008,PLY061,,9,Babak 1,Gol tanpa assist tercatat,Terverifikasi
EVT032,PRT008,Gol,TIM006,PLY045,PLY046,16,Babak 1,Gol dengan assist PLY046,Terverifikasi
EVT033,PRT008,Kartu Kuning,TIM008,PLY059,,17,Babak 1,Pelanggaran taktis,Terverifikasi
EVT034,PRT008,Gol,TIM008,PLY063,PLY062,24,Babak 2,Gol dengan assist PLY062,Terverifikasi
EVT035,PRT008,Gol,TIM006,PLY047,PLY043,31,Babak 2,Gol dengan assist PLY043,Terverifikasi
EVT036,PRT009,Gol,TIM001,PLY006,,11,Babak 1,Gol tanpa assist tercatat,Terverifikasi
EVT037,PRT009,Gol,TIM002,PLY015,PLY016,20,Babak 1,Gol dengan assist PLY016,Terverifikasi
EVT038,PRT009,Gol,TIM002,PLY014,PLY013,29,Babak 2,Gol dengan assist PLY013,Terverifikasi
EVT039,PRT009,Kartu Kuning,TIM002,PLY011,,33,Babak 2,Pelanggaran taktis,Terverifikasi
EVT040,PRT010,Gol,TIM003,PLY023,PLY024,8,Babak 1,Gol dengan assist PLY024,Terverifikasi
EVT041,PRT010,Gol,TIM004,PLY031,,14,Babak 1,Gol tanpa assist tercatat,Terverifikasi
EVT042,PRT010,Gol,TIM003,PLY022,PLY021,20,Babak 1,Gol dengan assist PLY021,Terverifikasi
EVT043,PRT010,Gol,TIM004,PLY032,PLY027,26,Babak 2,Gol dengan assist PLY027,Terverifikasi
EVT044,PRT010,Kartu Kuning,TIM003,PLY020,,26,Babak 2,Pelanggaran taktis,Terverifikasi
EVT045,PRT010,Gol,TIM003,PLY023,PLY022,32,Babak 2,Gol dengan assist PLY022,Terverifikasi
EVT046,PRT011,Gol,TIM005,PLY040,,8,Babak 1,Gol tanpa assist tercatat,Terverifikasi
EVT047,PRT011,Gol,TIM006,PLY048,PLY045,14,Babak 1,Gol dengan assist PLY045,Terverifikasi
EVT048,PRT011,Gol,TIM005,PLY039,PLY040,20,Babak 1,Gol dengan assist PLY040,Terverifikasi
EVT049,PRT011,Gol,TIM006,PLY043,PLY046,26,Babak 2,Gol dengan assist PLY046,Terverifikasi
EVT050,PRT011,Gol,TIM005,PLY035,,32,Babak 2,Gol tanpa assist tercatat,Terverifikasi
EVT051,PRT012,Gol,TIM007,PLY056,PLY053,11,Babak 1,Gol dengan assist PLY053,Terverifikasi
EVT052,PRT012,Gol,TIM008,PLY064,PLY059,20,Babak 1,Gol dengan assist PLY059,Terverifikasi
EVT053,PRT012,Gol,TIM007,PLY055,PLY054,29,Babak 2,Gol dengan assist PLY054,Terverifikasi
EVT054,PRT013,Gol,TIM002,PLY015,,9,Babak 1,Gol tanpa assist tercatat,Terverifikasi
EVT055,PRT013,Gol,TIM005,PLY037,PLY038,16,Babak 1,Gol dengan assist PLY038,Terverifikasi
EVT056,PRT013,Gol,TIM002,PLY011,PLY014,24,Babak 2,Gol dengan assist PLY014,Terverifikasi
EVT057,PRT013,Gol,TIM005,PLY040,PLY035,31,Babak 2,Gol dengan assist PLY035,Terverifikasi
EVT058,PRT013,Kartu Kuning,TIM005,PLY036,,37,Babak 2,Pelanggaran taktis,Terverifikasi
EVT059,PRT014,Gol,TIM007,PLY051,,9,Babak 1,Gol tanpa assist tercatat,Terverifikasi
EVT060,PRT014,Gol,TIM003,PLY019,PLY024,16,Babak 1,Gol dengan assist PLY024,Terverifikasi
EVT061,PRT014,Gol,TIM007,PLY053,PLY051,24,Babak 2,Gol dengan assist PLY051,Terverifikasi
EVT062,PRT014,Gol,TIM007,PLY056,PLY053,31,Babak 2,Gol dengan assist PLY053,Terverifikasi
EVT063,PRT015,Gol,TIM005,PLY038,,8,Babak 1,Gol tanpa assist tercatat,Terverifikasi
EVT064,PRT015,Gol,TIM003,PLY024,PLY021,14,Babak 1,Gol dengan assist PLY021,Terverifikasi
EVT065,PRT015,Gol,TIM005,PLY039,PLY040,20,Babak 1,Gol dengan assist PLY040,Terverifikasi
EVT066,PRT015,Gol,TIM003,PLY021,PLY022,26,Babak 2,Gol dengan assist PLY022,Terverifikasi
EVT067,PRT015,Gol,TIM003,PLY023,,32,Babak 2,Gol tanpa assist tercatat,Terverifikasi
EVT068,PRT016,Gol,TIM002,PLY016,PLY011,11,Babak 1,Gol dengan assist PLY011,Terverifikasi
EVT069,PRT016,Gol,TIM007,PLY055,PLY054,20,Babak 1,Gol dengan assist PLY054,Terverifikasi
EVT070,PRT016,Gol,TIM002,PLY015,PLY016,29,Babak 2,Gol dengan assist PLY016,Terverifikasi
EVT071,PRT016,Kartu Kuning,TIM007,PLY052,,29,Babak 2,Pelanggaran taktis,Terverifikasi
```

## Lampiran C — Identitas 64 Pemain

Foto Drive tidak dimasukkan ke source code. Gunakan fallback inisial.

```csv
pemain_id,nama_tampilan,posisi_utama
PLY001,Rizky Aditya,Kiper
PLY002,Fikri Ramadhan,Kiper
PLY003,Deni Kurniawan,Anchor
PLY004,Yoga Pratama,Anchor
PLY005,Arif Maulana,Flank
PLY006,Reza Firmansyah,Flank
PLY007,Bayu Saputra,Pivot
PLY008,Ilham Nugraha,Pivot
PLY009,Aldi Setiawan,Kiper
PLY010,Naufal Rasyid,Kiper
PLY011,Rendi Hermawan,Anchor
PLY012,Irfan Fauzi,Anchor
PLY013,Andika Permana,Flank
PLY014,Farhan Akmal,Flank
PLY015,Tegar Mahendra,Pivot
PLY016,Wahyu Hidayat,Pivot
PLY017,Aditya Fadillah,Kiper
PLY018,Galih Prakoso,Kiper
PLY019,Rizal Akbar,Anchor
PLY020,Hendra Gunawan,Anchor
PLY021,Fauzan Rahman,Flank
PLY022,Daffa Kurnia,Flank
PLY023,Agung Firmansyah,Pivot
PLY024,Miftah Ramadhan,Pivot
PLY025,Eko Prasetyo,Kiper
PLY026,Raka Setiaji,Kiper
PLY027,Dimas Ardiansyah,Anchor
PLY028,Yudi Hartono,Anchor
PLY029,Fikri Hidayat,Flank
PLY030,Rian Nugroho,Flank
PLY031,Bagas Firmansyah,Pivot
PLY032,Sandi Kurnia,Pivot
PLY033,Arman Hakim,Kiper
PLY034,Rifki Ananda,Kiper
PLY035,Yusuf Ramadhan,Anchor
PLY036,Dede Firmansyah,Anchor
PLY037,Imam Fauzan,Flank
PLY038,Hilman Akbar,Flank
PLY039,Jajang Kurnia,Pivot
PLY040,Aulia Rahman,Pivot
PLY041,Fajar Nugraha,Kiper
PLY042,Ilham Setiawan,Kiper
PLY043,Dadan Hermawan,Anchor
PLY044,Robby Kurniawan,Anchor
PLY045,Zaki Maulana,Flank
PLY046,Revan Firmansyah,Flank
PLY047,Guntur Prakoso,Pivot
PLY048,Nanda Ramadhan,Pivot
PLY049,Akmal Fadli,Kiper
PLY050,Rafi Maulana,Kiper
PLY051,Fathan Ramadhan,Anchor
PLY052,Naufal Kurnia,Anchor
PLY053,Rizwan Hakim,Flank
PLY054,Daffa Akbar,Flank
PLY055,Alif Firmansyah,Pivot
PLY056,Ghani Pratama,Pivot
PLY057,Asep Kurnia,Kiper
PLY058,Diki Ramadhan,Kiper
PLY059,Soleh Hidayat,Anchor
PLY060,Rizwan Firmansyah,Anchor
PLY061,Dani Maulana,Flank
PLY062,Gian Nugraha,Flank
PLY063,Irfan Prakoso,Pivot
PLY064,Taufik Rahman,Pivot
```

## Lampiran D — Roster Identity Terdaftar

Data berikut hanya untuk identitas nomor, posisi, kapten, dan kiper. Data ini **bukan lineup pertandingan**.

```csv
tim_id,pemain_id,nomor_punggung,posisi,is_kapten,is_kiper
TIM001,PLY001,1,Kiper,false,true
TIM001,PLY002,12,Kiper,false,true
TIM001,PLY003,4,Anchor,true,false
TIM001,PLY004,5,Anchor,false,false
TIM001,PLY005,7,Flank,false,false
TIM001,PLY006,11,Flank,false,false
TIM001,PLY007,9,Pivot,false,false
TIM001,PLY008,10,Pivot,false,false
TIM002,PLY009,1,Kiper,false,true
TIM002,PLY010,12,Kiper,false,true
TIM002,PLY011,4,Anchor,true,false
TIM002,PLY012,5,Anchor,false,false
TIM002,PLY013,7,Flank,false,false
TIM002,PLY014,11,Flank,false,false
TIM002,PLY015,9,Pivot,false,false
TIM002,PLY016,10,Pivot,false,false
TIM003,PLY017,1,Kiper,false,true
TIM003,PLY018,12,Kiper,false,true
TIM003,PLY019,4,Anchor,true,false
TIM003,PLY020,5,Anchor,false,false
TIM003,PLY021,7,Flank,false,false
TIM003,PLY022,11,Flank,false,false
TIM003,PLY023,9,Pivot,false,false
TIM003,PLY024,10,Pivot,false,false
TIM004,PLY025,1,Kiper,false,true
TIM004,PLY026,12,Kiper,false,true
TIM004,PLY027,4,Anchor,true,false
TIM004,PLY028,5,Anchor,false,false
TIM004,PLY029,7,Flank,false,false
TIM004,PLY030,11,Flank,false,false
TIM004,PLY031,9,Pivot,false,false
TIM004,PLY032,10,Pivot,false,false
TIM005,PLY033,1,Kiper,false,true
TIM005,PLY034,12,Kiper,false,true
TIM005,PLY035,4,Anchor,true,false
TIM005,PLY036,5,Anchor,false,false
TIM005,PLY037,7,Flank,false,false
TIM005,PLY038,11,Flank,false,false
TIM005,PLY039,9,Pivot,false,false
TIM005,PLY040,10,Pivot,false,false
TIM006,PLY041,1,Kiper,false,true
TIM006,PLY042,12,Kiper,false,true
TIM006,PLY043,4,Anchor,true,false
TIM006,PLY044,5,Anchor,false,false
TIM006,PLY045,7,Flank,false,false
TIM006,PLY046,11,Flank,false,false
TIM006,PLY047,9,Pivot,false,false
TIM006,PLY048,10,Pivot,false,false
TIM007,PLY049,1,Kiper,false,true
TIM007,PLY050,12,Kiper,false,true
TIM007,PLY051,4,Anchor,true,false
TIM007,PLY052,5,Anchor,false,false
TIM007,PLY053,7,Flank,false,false
TIM007,PLY054,11,Flank,false,false
TIM007,PLY055,9,Pivot,false,false
TIM007,PLY056,10,Pivot,false,false
TIM008,PLY057,1,Kiper,false,true
TIM008,PLY058,12,Kiper,false,true
TIM008,PLY059,4,Anchor,true,false
TIM008,PLY060,5,Anchor,false,false
TIM008,PLY061,7,Flank,false,false
TIM008,PLY062,11,Flank,false,false
TIM008,PLY063,9,Pivot,false,false
TIM008,PLY064,10,Pivot,false,false
```

## Lampiran E — Official Tim

```csv
ofisial_id,tim_id,nama,peran
OFI001,TIM001,Hadi Supriatna,Pelatih Kepala
OFI002,TIM001,Dedi Mulyana,Asisten Pelatih
OFI003,TIM001,Raka Pratama,Manajer Tim
OFI004,TIM002,Budi Kurnia,Pelatih Kepala
OFI005,TIM002,Asep Suhendar,Asisten Pelatih
OFI006,TIM002,Dimas Saputra,Manajer Tim
OFI007,TIM003,Yayan Suryana,Pelatih Kepala
OFI008,TIM003,Rudi Setiawan,Asisten Pelatih
OFI009,TIM003,Fajar Hidayat,Manajer Tim
OFI010,TIM004,Dadang Iskandar,Pelatih Kepala
OFI011,TIM004,Hendri Kusnadi,Asisten Pelatih
OFI012,TIM004,Ardi Nugraha,Manajer Tim
OFI013,TIM005,Maman Sudrajat,Pelatih Kepala
OFI014,TIM005,Iwan Ridwan,Asisten Pelatih
OFI015,TIM005,Yusuf Maulana,Manajer Tim
OFI016,TIM006,Cecep Haryadi,Pelatih Kepala
OFI017,TIM006,Agus Salim,Asisten Pelatih
OFI018,TIM006,Gilang Ramadhan,Manajer Tim
OFI019,TIM007,Rachmat Heryana,Pelatih Kepala
OFI020,TIM007,Egi Sulaeman,Asisten Pelatih
OFI021,TIM007,Asep Firmansyah,Manajer Tim
OFI022,TIM008,Ujang Saepudin,Pelatih Kepala
OFI023,TIM008,Joni Herdiansyah,Asisten Pelatih
OFI024,TIM008,Rizky Kurniawan,Manajer Tim
```

## Lampiran F — Perangkat Pertandingan

Foto Drive tidak di-hotlink. Gunakan fallback inisial.

```csv
perangkat_id,nama_lengkap,kompetensi
PDK001,Haris Setyawan,Wasit/Timekeeper
PDK002,Rendra Purnama,Wasit/Timekeeper
PDK003,Asep Saepudin,Wasit/Timekeeper
PDK004,Doni Mulyana,Wasit/Timekeeper
PDK005,Yayan Suherman,Pengawas Pertandingan
PDK006,Rudi Hartanto,Pengawas Pertandingan
PDK007,Maya Lestari,Petugas Meja
PDK008,Siti Nurhayati,Petugas Meja
```

## Lampiran G — 80 Penugasan Perangkat

```csv
penugasan_id,pertandingan_id,perangkat_id,peran,status_penugasan
TGS001,PRT001,PDK001,Wasit 1,Terverifikasi
TGS002,PRT001,PDK002,Wasit 2,Terverifikasi
TGS003,PRT001,PDK003,Timekeeper,Terverifikasi
TGS004,PRT001,PDK005,Pengawas Pertandingan,Terverifikasi
TGS005,PRT001,PDK007,Petugas Meja,Terverifikasi
TGS006,PRT002,PDK002,Wasit 1,Terverifikasi
TGS007,PRT002,PDK003,Wasit 2,Terverifikasi
TGS008,PRT002,PDK004,Timekeeper,Terverifikasi
TGS009,PRT002,PDK006,Pengawas Pertandingan,Terverifikasi
TGS010,PRT002,PDK008,Petugas Meja,Terverifikasi
TGS011,PRT003,PDK003,Wasit 1,Terverifikasi
TGS012,PRT003,PDK004,Wasit 2,Terverifikasi
TGS013,PRT003,PDK001,Timekeeper,Terverifikasi
TGS014,PRT003,PDK005,Pengawas Pertandingan,Terverifikasi
TGS015,PRT003,PDK007,Petugas Meja,Terverifikasi
TGS016,PRT004,PDK004,Wasit 1,Terverifikasi
TGS017,PRT004,PDK001,Wasit 2,Terverifikasi
TGS018,PRT004,PDK002,Timekeeper,Terverifikasi
TGS019,PRT004,PDK006,Pengawas Pertandingan,Terverifikasi
TGS020,PRT004,PDK008,Petugas Meja,Terverifikasi
TGS021,PRT005,PDK001,Wasit 1,Terverifikasi
TGS022,PRT005,PDK002,Wasit 2,Terverifikasi
TGS023,PRT005,PDK003,Timekeeper,Terverifikasi
TGS024,PRT005,PDK005,Pengawas Pertandingan,Terverifikasi
TGS025,PRT005,PDK007,Petugas Meja,Terverifikasi
TGS026,PRT006,PDK002,Wasit 1,Terverifikasi
TGS027,PRT006,PDK003,Wasit 2,Terverifikasi
TGS028,PRT006,PDK004,Timekeeper,Terverifikasi
TGS029,PRT006,PDK006,Pengawas Pertandingan,Terverifikasi
TGS030,PRT006,PDK008,Petugas Meja,Terverifikasi
TGS031,PRT007,PDK003,Wasit 1,Terverifikasi
TGS032,PRT007,PDK004,Wasit 2,Terverifikasi
TGS033,PRT007,PDK001,Timekeeper,Terverifikasi
TGS034,PRT007,PDK005,Pengawas Pertandingan,Terverifikasi
TGS035,PRT007,PDK007,Petugas Meja,Terverifikasi
TGS036,PRT008,PDK004,Wasit 1,Terverifikasi
TGS037,PRT008,PDK001,Wasit 2,Terverifikasi
TGS038,PRT008,PDK002,Timekeeper,Terverifikasi
TGS039,PRT008,PDK006,Pengawas Pertandingan,Terverifikasi
TGS040,PRT008,PDK008,Petugas Meja,Terverifikasi
TGS041,PRT009,PDK001,Wasit 1,Terverifikasi
TGS042,PRT009,PDK002,Wasit 2,Terverifikasi
TGS043,PRT009,PDK003,Timekeeper,Terverifikasi
TGS044,PRT009,PDK005,Pengawas Pertandingan,Terverifikasi
TGS045,PRT009,PDK007,Petugas Meja,Terverifikasi
TGS046,PRT010,PDK002,Wasit 1,Terverifikasi
TGS047,PRT010,PDK003,Wasit 2,Terverifikasi
TGS048,PRT010,PDK004,Timekeeper,Terverifikasi
TGS049,PRT010,PDK006,Pengawas Pertandingan,Terverifikasi
TGS050,PRT010,PDK008,Petugas Meja,Terverifikasi
TGS051,PRT011,PDK003,Wasit 1,Terverifikasi
TGS052,PRT011,PDK004,Wasit 2,Terverifikasi
TGS053,PRT011,PDK001,Timekeeper,Terverifikasi
TGS054,PRT011,PDK005,Pengawas Pertandingan,Terverifikasi
TGS055,PRT011,PDK007,Petugas Meja,Terverifikasi
TGS056,PRT012,PDK004,Wasit 1,Terverifikasi
TGS057,PRT012,PDK001,Wasit 2,Terverifikasi
TGS058,PRT012,PDK002,Timekeeper,Terverifikasi
TGS059,PRT012,PDK006,Pengawas Pertandingan,Terverifikasi
TGS060,PRT012,PDK008,Petugas Meja,Terverifikasi
TGS061,PRT013,PDK001,Wasit 1,Terverifikasi
TGS062,PRT013,PDK002,Wasit 2,Terverifikasi
TGS063,PRT013,PDK003,Timekeeper,Terverifikasi
TGS064,PRT013,PDK005,Pengawas Pertandingan,Terverifikasi
TGS065,PRT013,PDK007,Petugas Meja,Terverifikasi
TGS066,PRT014,PDK002,Wasit 1,Terverifikasi
TGS067,PRT014,PDK003,Wasit 2,Terverifikasi
TGS068,PRT014,PDK004,Timekeeper,Terverifikasi
TGS069,PRT014,PDK006,Pengawas Pertandingan,Terverifikasi
TGS070,PRT014,PDK008,Petugas Meja,Terverifikasi
TGS071,PRT015,PDK003,Wasit 1,Terverifikasi
TGS072,PRT015,PDK004,Wasit 2,Terverifikasi
TGS073,PRT015,PDK001,Timekeeper,Terverifikasi
TGS074,PRT015,PDK005,Pengawas Pertandingan,Terverifikasi
TGS075,PRT015,PDK007,Petugas Meja,Terverifikasi
TGS076,PRT016,PDK004,Wasit 1,Terverifikasi
TGS077,PRT016,PDK001,Wasit 2,Terverifikasi
TGS078,PRT016,PDK002,Timekeeper,Terverifikasi
TGS079,PRT016,PDK006,Pengawas Pertandingan,Terverifikasi
TGS080,PRT016,PDK008,Petugas Meja,Terverifikasi
```
