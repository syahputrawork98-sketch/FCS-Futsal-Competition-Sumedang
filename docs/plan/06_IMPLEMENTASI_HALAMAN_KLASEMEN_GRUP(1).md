# PLAN 06 — IMPLEMENTASI HALAMAN KLASEMEN GRUP

> **Nama file:** `06_IMPLEMENTASI_HALAMAN_KLASEMEN_GRUP.md`  
> **Status dokumen:** DISETUJUI  
> **Versi:** 1.0  
> **Status implementasi:** SIAP DIIMPLEMENTASIKAN  
> **Tanggal dibuat:** 2026-07-24  
> **Tanggal diperbarui:** 2026-07-24  
> **Base commit:** `759d1d967c21d53c38fbd3a2bc0251761549604d`  
> **Repository:** `syahputrawork98-sketch/FCS-Futsal-Competition-Sumedang`  
> **Penyusun:** Pengguna bersama ChatGPT  
> **Pelaksana implementasi:** Gemini melalui Antigravity  
> **Area:** Client / Next.js App Router / Data Prototype Lokal  
> **Kode halaman:** `STD-01`  
> **Route utama:** `/klasemen`

---

## 1. Identitas Pekerjaan

- **Judul pekerjaan:** Implementasi Halaman Klasemen Grup
- **Nomor plan:** 06
- **Kode halaman:** STD-01
- **Nama halaman:** Klasemen Grup
- **Kelompok navigasi:** Klasemen
- **Prioritas:** P0
- **Template perencanaan:** T04
- **Mode prototype:** Pasca-turnamen
- **Kompetisi:** FCS Industrial Cup Sumedang 2026
- **Kategori:** Umum Putra
- **Bahasa antarmuka:** Bahasa Indonesia
- **Framework:** Next.js 16 App Router
- **Bahasa implementasi:** TypeScript
- **Styling:** CSS Modules dan token visual yang sudah tersedia
- **Data runtime:** Data prototype lokal terverifikasi

Dokumen ini telah disetujui pengguna dan menjadi instruksi implementasi final untuk Plan 06.

---

## 2. Ringkasan Pekerjaan

Plan ini mengatur implementasi halaman publik `STD-01 — Klasemen Grup` pada route `/klasemen`.

Halaman harus menampilkan klasemen Grup A dan Grup B berdasarkan hasil resmi pertandingan fase grup yang sudah tersedia pada dataset pertandingan repository.

Angka klasemen tidak boleh diketik manual dan tidak boleh disimpan sebagai dataset runtime kedua. Statistik klasemen harus diturunkan secara deterministik dari data pertandingan menggunakan resolver atau domain function khusus.

Halaman juga harus:

- menampilkan status klasemen final atau sementara;
- menampilkan aturan poin dan tie-break yang benar-benar disetujui;
- menampilkan status lolos atau gugur;
- mendukung desktop, tablet, dan mobile;
- menyediakan loading, error, empty, partial, dan unresolved state;
- mengaktifkan integrasi menuju halaman Klasemen dari halaman Pertandingan;
- mengaktifkan preview klasemen pada Beranda menggunakan hasil derivasi yang sama;
- tidak mengaktifkan link menuju halaman yang belum tersedia;
- tidak mengubah data pertandingan, skor, tim, grup, atau fase gugur.

---

## 3. Latar Belakang

Plan 04 telah menyelesaikan halaman daftar Jadwal dan Hasil pada route `/pertandingan`.

Plan 05 telah menyelesaikan halaman Detail Pertandingan pada route `/pertandingan/[matchId]` dan telah lulus audit pada commit:

```text
759d1d967c21d53c38fbd3a2bc0251761549604d
```

Dataset aktif sudah memuat:

- 8 tim;
- 2 grup;
- 16 pertandingan;
- 12 pertandingan fase grup;
- 4 pertandingan fase gugur;
- seluruh pertandingan fase grup selesai;
- seluruh hasil fase grup berstatus resmi;
- 71 kejadian pertandingan terverifikasi.

Konfigurasi navigasi repository sudah mengarah ke `/klasemen`, tetapi route tersebut belum tersedia.

Halaman Pertandingan masih menampilkan Klasemen sebagai fitur “Segera tersedia”.

Beranda sudah memiliki komponen preview klasemen, tetapi sumber datanya masih berstatus kosong.

Plan 06 diperlukan untuk:

1. membuat halaman klasemen yang nyata dan konsisten dengan pertandingan;
2. menghilangkan status “belum tersedia” pada bagian klasemen yang sudah dapat dihitung;
3. menjaga satu sumber kebenaran data;
4. menyiapkan dasar data yang akan digunakan Plan 07 — Bracket Fase Gugur.

---

## 4. Keputusan yang Sudah Disetujui

Keputusan berikut bersifat mengikat untuk Plan 06.

### 4.1 Sumber Klasemen

Klasemen dihitung dari `matchesPrototypeData`.

Klasemen tidak disimpan sebagai angka manual pada file data baru.

### 4.2 Sistem Poin

```text
Menang = 3 poin
Seri   = 1 poin
Kalah  = 0 poin
```

### 4.3 Urutan Pemeringkatan

Urutan pemeringkatan aktif:

1. total poin;
2. selisih gol;
3. gol memasukkan.

Head-to-head, fair play, undian, keputusan panitia, nama tim, dan ID tim tidak boleh digunakan sebagai tie-break resmi pada Plan 06.

### 4.4 Tie yang Belum Dapat Diputuskan

Apabila dua atau lebih tim tetap sama setelah poin, selisih gol, dan gol memasukkan:

- jangan mengarang aturan tambahan;
- jangan menentukan posisi resmi berdasarkan alfabet;
- jangan menentukan posisi resmi berdasarkan ID;
- tandai pemeringkatan sebagai belum dapat diputuskan;
- tampilkan status tekstual seperti `Menunggu keputusan`;
- jangan menetapkan kelolosan final bagi tim yang posisinya masih memengaruhi batas kelolosan.

Stable order boleh digunakan secara internal hanya untuk menjaga render deterministik, tetapi stable order tersebut bukan posisi resmi dan tidak boleh ditampilkan sebagai keputusan klasemen.

### 4.5 Kelolosan

Dua tim teratas dari setiap grup lolos ke semifinal.

Jumlah tim lolos pada dataset prototype:

```text
2 tim per grup
4 tim keseluruhan
```

### 4.6 Layout Desktop

- Grup A dan Grup B ditampilkan berurutan secara vertikal.
- Tabel desktop menampilkan seluruh kolom utama.
- Penjelasan kelolosan, tie-break, legenda, dan navigasi terkait dapat ditempatkan pada panel pendamping atau di bawah tabel.
- Jangan memaksa dua tabel lengkap berdampingan apabila mengurangi keterbacaan.

### 4.7 Layout Mobile

- Gunakan tab Grup A dan Grup B.
- Hanya satu grup aktif per tampilan mobile.
- Kolom utama: Pos, Tim, M, SG, Poin.
- Statistik tambahan dibuka melalui expandable row.
- Status Lolos, Gugur, atau Menunggu Keputusan tetap terlihat.
- Jangan menggunakan horizontal scroll sebagai pola utama.

### 4.8 Query Parameter Grup

Gunakan ID grup resmi:

```text
/klasemen?grup=GRPA
/klasemen?grup=GRPB
```

Jangan menggunakan nilai buatan yang tidak sama dengan dataset, seperti `A` atau `B`, sebagai sumber utama filter.

### 4.9 Integrasi Beranda

Preview klasemen pada Beranda harus diisi dari resolver klasemen yang sama.

Jangan menyalin angka klasemen ke `home-prototype-data.ts`.

### 4.10 Integrasi Halaman Pertandingan

Aktifkan link Klasemen menuju `/klasemen`.

Bracket tetap berstatus belum tersedia sampai Plan 07 selesai.

### 4.11 Detail Tim

Route Detail Tim belum tersedia.

Nama tim pada Plan 06 ditampilkan sebagai teks, bukan link mati.

### 4.12 Structured Data

Jangan menggunakan `SportsEvent` untuk halaman klasemen.

Structured data yang diizinkan hanya `BreadcrumbList`, apabila seluruh URL dapat dibentuk secara valid dari `NEXT_PUBLIC_SITE_URL`.

Jika base URL tidak tersedia atau tidak valid, structured data berbasis URL dan canonical harus dihilangkan tanpa menyebabkan error.

---

## 5. Tujuan

Pekerjaan ini bertujuan untuk:

1. menyediakan halaman klasemen resmi untuk Grup A dan Grup B;
2. menghitung statistik tim dari hasil resmi pertandingan fase grup;
3. memastikan angka klasemen selalu konsisten dengan dataset pertandingan;
4. menampilkan status final, sementara, belum dimulai, partial, empty, error, dan unresolved;
5. menjelaskan aturan poin, kelolosan, dan tie-break secara transparan;
6. menyediakan tampilan tabel semantik dan mudah dibaca;
7. menyediakan pengalaman mobile tanpa horizontal scroll utama;
8. mengaktifkan akses Klasemen dari navigasi, Beranda, dan halaman Pertandingan;
9. menghindari duplikasi data klasemen;
10. menyediakan validasi integritas untuk relasi tim, grup, pertandingan, skor, dan hasil derivasi;
11. mempertahankan seluruh fungsi Plan 04 dan Plan 05;
12. menyiapkan dasar data yang dapat digunakan kembali oleh Plan 07.

---

## 6. Referensi Google Drive

Gemini harus membaca file plan ini sebagai instruksi utama.

Referensi berikut digunakan untuk memahami konteks dan visual. Apabila terjadi konflik, keputusan dalam file Plan 06 yang sudah disetujui pengguna menjadi acuan implementasi.

| No. | Dokumen/Aset | Lokasi | Kegunaan |
|---:|---|---|---|
| 1 | Alur Kerja Perencanaan dan Implementasi Website | `01_ALUR_KERJA_PERENCANAAN_DAN_IMPLEMENTASI_WEBSITE.md` | Aturan pembagian kerja, validasi, Git, dan audit |
| 2 | Template Plan Implementasi Website | `02_TEMPLATE_PLAN_IMPLEMENTASI_WEBSITE.md` | Struktur dokumentasi plan |
| 3 | Spesifikasi Halaman Klasemen Grup | `STD-01_SPESIFIKASI_HALAMAN_KLASEMEN_GRUP.md` | Tujuan, struktur, state, dan konten halaman |
| 4 | Pemetaan Data Klasemen Grup | `STD-01_PEMETAAN_DATA_KLASEMEN_GRUP.csv` | Relasi section, komponen, dan sumber data |
| 5 | Daftar Referensi Klasemen Grup | `STD-01_DAFTAR_REFERENSI.md` | Indeks sumber halaman |
| 6 | Wireframe Klasemen Grup | `STD-01_WIREFRAME_KLASEMEN_GRUP.pdf` | Referensi visual desktop dan mobile |
| 7 | Spesifikasi Komponen UI Klasemen | `STD-01_SPESIFIKASI_KOMPONEN_UI.md` | Struktur komponen, responsif, dan aksesibilitas |
| 8 | Pusat Data dan Konfigurasi | Google Sheets aktif FCS | Aturan poin, grup, jumlah tim, dan tie-break |
| 9 | Database Pertandingan | Google Sheets aktif FCS | Sumber audit pertandingan dan snapshot klasemen |

### 6.1 Peringatan Penggunaan Wireframe

Nilai, nama tim, dan angka klasemen pada PDF wireframe bersifat ilustratif.

Jangan menyalin:

- nama tim ilustratif;
- angka poin ilustratif;
- skor ilustratif;
- urutan tim ilustratif;
- aturan tie-break contoh yang tidak ada pada konfigurasi aktif.

Wireframe hanya menjadi sumber kebenaran untuk:

- hierarki visual;
- posisi section;
- urutan informasi;
- bentuk tabel;
- perilaku desktop dan mobile;
- prioritas kolom.

---

## 7. Base Commit dan Kondisi Awal Repository

### 7.1 Base Commit

Seluruh implementasi Plan 06 harus dimulai dari:

```text
759d1d967c21d53c38fbd3a2bc0251761549604d
```

Commit message base:

```text
fix(matches): validate match group and site URL
```

Gemini harus memeriksa bahwa working tree dan source code yang dibaca sesuai dengan base commit atau turunannya yang tidak mengandung perubahan lain di luar scope.

Gemini tidak boleh menjalankan perintah Git untuk memeriksa, memindahkan, atau mengubah branch.

### 7.2 Teknologi Aktif

```text
Next.js 16.2.11
React 19.2.4
TypeScript 5
CSS Modules
lucide-react
App Router
```

### 7.3 Script Validasi Aktif

```text
npm run type-check
npm run lint
npm run build
```

Perintah dijalankan dari folder `client/`.

### 7.4 Data Utama yang Sudah Tersedia

```text
client/src/features/matches/data/matches-prototype-data.ts
client/src/features/matches/data/match-events-prototype-data.ts
client/src/features/matches/data/match-participants-prototype-data.ts
client/src/features/matches/data/match-officials-prototype-data.ts
client/src/features/matches/types/matches.types.ts
client/src/features/matches/types/match-detail.types.ts
client/src/features/matches/lib/validate-match-prototype-data.ts
client/src/features/matches/lib/resolve-match-detail.ts
```

### 7.5 Kondisi Navigasi

`client/src/config/navigation.ts` sudah memiliki:

```text
Klasemen → /klasemen
matchPaths → /klasemen dan /bracket
```

Tidak perlu mengganti nama menu atau route.

### 7.6 Kondisi Halaman Pertandingan

Halaman Pertandingan memiliki:

- route `/pertandingan`;
- filter `fase`;
- filter `grup`;
- komponen Competition Context;
- Related Navigation;
- Klasemen masih ditampilkan sebagai disabled/upcoming item.

### 7.7 Kondisi Beranda

Beranda memiliki:

- `StandingsPreviewSection`;
- tabel klasemen desktop;
- tab klasemen mobile;
- state loading, error, empty, dan ready;
- action menuju `/klasemen`;
- data klasemen masih berstatus `empty`.

---

## 8. Fakta Dataset Prototype

Data berikut harus dipertahankan.

### 8.1 Kompetisi

```text
ID edisi          : EDI2026
Nama              : FCS Industrial Cup Sumedang 2026
Kategori          : Umum Putra
Jumlah tim        : 8
Jumlah grup       : 2
Jumlah laga       : 16
Fase grup         : FAS01
Grup A            : GRPA
Grup B            : GRPB
```

### 8.2 Jumlah Pertandingan Fase Grup

Jumlah pertandingan fase grup harus diverifikasi dari dataset menggunakan:

```text
match.phaseId === groupPhase.id
match.groupId !== null
```

Pada dataset aktif hasilnya harus:

```text
12 pertandingan fase grup
6 pertandingan Grup A
6 pertandingan Grup B
```

Jangan hanya menggunakan nomor pertandingan untuk menentukan fase grup.

### 8.3 Kondisi Hasil

Pada dataset aktif:

```text
12 dari 12 pertandingan fase grup selesai
12 dari 12 hasil berstatus official
12 dari 12 pertandingan memiliki skor lengkap
```

Maka status klasemen aktif adalah:

```text
final
```

### 8.4 Hasil Akhir yang Diharapkan

Hasil derivasi dataset aktif harus sama dengan tabel berikut.

#### Grup A

| Pos | Tim | M | Mng | S | K | GM | GK | SG | Poin | Status |
|---:|---|---:|---:|---:|---:|---:|---:|---:|---:|---|
| 1 | Cakra Textile FC | 3 | 2 | 1 | 0 | 6 | 4 | +2 | 7 | Lolos |
| 2 | Tirta Pangan FC | 3 | 1 | 2 | 0 | 7 | 6 | +1 | 5 | Lolos |
| 3 | Sinar Logam FC | 3 | 1 | 1 | 1 | 6 | 5 | +1 | 4 | Gugur |
| 4 | Karya Mesin FC | 3 | 0 | 0 | 3 | 4 | 8 | −4 | 0 | Gugur |

#### Grup B

| Pos | Tim | M | Mng | S | K | GM | GK | SG | Poin | Status |
|---:|---|---:|---:|---:|---:|---:|---:|---:|---:|---|
| 1 | Tekma Futsal | 3 | 2 | 1 | 0 | 5 | 3 | +2 | 7 | Lolos |
| 2 | Bumi Energi FC | 3 | 2 | 0 | 1 | 6 | 5 | +1 | 6 | Lolos |
| 3 | Prima Pack FC | 3 | 0 | 2 | 1 | 5 | 6 | −1 | 2 | Gugur |
| 4 | Tanjungsari United | 3 | 0 | 1 | 2 | 4 | 6 | −2 | 1 | Gugur |

Tabel tersebut adalah acceptance result untuk dataset aktif.

Angka tersebut tidak boleh dijadikan array manual sebagai jalan pintas.

---

## 9. Sumber Kebenaran Runtime

Sumber kebenaran runtime Plan 06:

```text
matchesPrototypeData.competition
matchesPrototypeData.phases
matchesPrototypeData.groups
matchesPrototypeData.teams
matchesPrototypeData.matches
```

Sumber konfigurasi lokal klasemen boleh dibuat untuk nilai yang belum berada di dataset pertandingan:

```text
poinMenang = 3
poinSeri = 1
poinKalah = 0
timLolosPerGrup = 2
tieBreak = goalDifference, goalsFor
```

Konfigurasi tersebut harus:

- terpisah dari komponen UI;
- memiliki tipe yang jelas;
- mudah diganti untuk kompetisi lain;
- tidak berisi angka klasemen akhir;
- tidak berisi urutan tim akhir;
- tidak berisi skor pertandingan;
- tidak berisi pasangan semifinal hardcode.

---

## 10. Strategi Arsitektur Data

### 11.0 Keputusan Utama

Gunakan derivasi dari pertandingan.

```text
matchesPrototypeData
        ↓
validasi integritas
        ↓
filter pertandingan grup yang dapat dihitung
        ↓
akumulasi statistik tim
        ↓
sorting berdasarkan konfigurasi
        ↓
resolusi tie
        ↓
status kelolosan
        ↓
page data dan preview Beranda
```

### 10.2 Larangan Snapshot Runtime Kedua

Jangan membuat file seperti:

```text
standings-prototype-data.ts
group-standings-data.ts
final-standings.ts
```

apabila file tersebut hanya berisi angka klasemen manual.

File data hanya boleh dibuat untuk konfigurasi aturan, bukan hasil akhir.

### 10.3 Posisi Perhitungan

Perhitungan harus berada pada fungsi domain/resolver.

Komponen UI hanya boleh:

- menerima data;
- memformat nilai;
- mengatur tampilan;
- mengelola tab atau expandable row;
- menampilkan state.

Komponen UI tidak boleh mengulang algoritma klasemen.

---

## 11. Tipe Data yang Direkomendasikan

Nama akhir dapat disesuaikan dengan pola repository, tetapi tanggung jawab tipe harus tetap tersedia.

```ts
type StandingsStatus =
  | "not_started"
  | "provisional"
  | "final"
  | "partial"
  | "unavailable";

type RankingResolution =
  | "resolved"
  | "unresolved_tie";

type QualificationStatus =
  | "qualified"
  | "eliminated"
  | "pending"
  | "unknown";

type StandingsPointsConfig = {
  win: number;
  draw: number;
  loss: number;
};

type StandingsTieBreakKey =
  | "goalDifference"
  | "goalsFor";

type StandingsConfig = {
  groupPhaseId: string;
  points: StandingsPointsConfig;
  qualifiedTeamsPerGroup: number;
  tieBreakOrder: StandingsTieBreakKey[];
};

type StandingsTeamRow = {
  team: MatchTeam;
  groupId: string;
  position: number | null;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  qualificationStatus: QualificationStatus;
  rankingResolution: RankingResolution;
};

type GroupStandings = {
  group: MatchGroup;
  rows: StandingsTeamRow[];
  status: StandingsStatus;
  totalMatches: number;
  completedOfficialMatches: number;
  hasUnresolvedTie: boolean;
};

type StandingsPageData = {
  competition: CompetitionMetadata;
  status: StandingsStatus;
  groups: GroupStandings[];
  totalGroupMatches: number;
  completedOfficialGroupMatches: number;
  qualifiedTeamCount: number | null;
  config: StandingsConfig;
  warnings: StandingsDataWarning[];
};
```

Tipe dapat diperluas apabila diperlukan untuk partial state, tetapi jangan membuat struktur yang menggandakan data pertandingan.

---

## 12. Aturan Pertandingan yang Dihitung

Pertandingan masuk perhitungan klasemen resmi hanya jika seluruh kondisi berikut terpenuhi:

```text
phaseId sesuai fase bertipe group
groupId valid
status === "finished"
resultStatus === "official"
teamAScore !== null
teamBScore !== null
teamAId valid
teamBId valid
kedua tim merupakan anggota groupId pertandingan
```

### 12.1 Pertandingan Provisional

Jika pertandingan:

```text
status === "finished"
resultStatus === "provisional"
```

maka pertandingan tidak masuk klasemen resmi.

Halaman boleh menampilkan peringatan bahwa terdapat hasil provisional yang belum dihitung.

### 12.2 Pertandingan Belum Selesai

Status berikut tidak dihitung:

```text
scheduled
live
postponed
cancelled
```

Cancelled tidak dihitung kecuali pada masa depan terdapat keputusan bisnis lain. Plan 06 tidak menambah aturan walkover atau skor administratif.

### 12.3 Skor Null

Jika salah satu skor null:

- jangan menganggap nilainya nol;
- jangan menghitung pertandingan;
- tandai data sebagai incomplete atau partial bila seharusnya pertandingan sudah selesai.

### 12.4 Adu Penalti

Adu penalti tidak digunakan dalam klasemen grup.

Pertandingan fase grup tidak boleh memiliki `penaltyResult`.

---

## 13. Formula Perhitungan

Untuk setiap tim dalam grup:

```text
Main = Menang + Seri + Kalah
Selisih Gol = Gol Memasukkan - Gol Kebobolan
Poin = (Menang × 3) + (Seri × 1) + (Kalah × 0)
```

### 13.1 Menang

Jika skor tim lebih besar daripada skor lawan:

```text
won += 1
points += 3
```

### 13.2 Seri

Jika skor sama:

```text
drawn += 1
points += 1
```

### 13.3 Kalah

Jika skor tim lebih kecil:

```text
lost += 1
points += 0
```

### 13.4 Gol

Untuk setiap pertandingan resmi yang dihitung:

```text
goalsFor += skor tim
goalsAgainst += skor lawan
```

---

## 14. Sorting dan Tie-Break

### 14.1 Urutan Sorting Resmi

```text
1. points descending
2. goalDifference descending
3. goalsFor descending
```

### 14.2 Deteksi Tie yang Belum Diputuskan

Setelah tiga pembanding resmi digunakan, kelompok tim yang masih memiliki nilai sama harus ditandai:

```text
rankingResolution = "unresolved_tie"
```

### 14.3 Stable Render Order

Resolver boleh menjaga urutan render deterministik menggunakan urutan awal tim dalam grup.

Namun:

- stable order bukan tie-break;
- stable order tidak boleh menetapkan posisi resmi;
- stable order tidak boleh menetapkan status lolos final jika tie melewati garis kelolosan.

### 14.4 Posisi pada Tie Unresolved

Jika tie tidak memengaruhi garis kelolosan, implementasi tetap harus menunjukkan bahwa urutan belum resmi.

Jika tie memengaruhi garis kelolosan:

```text
position = null
qualificationStatus = "pending"
```

Tampilkan label:

```text
Menunggu keputusan
```

Dataset aktif tidak memiliki tie unresolved.

---

## 15. Status Klasemen

### 15.1 Not Started

Gunakan `not_started` apabila:

- grup dan tim tersedia;
- belum ada pertandingan resmi yang selesai.

Tampilkan:

- nama grup dan tim;
- nilai statistik sebagai `—`, bukan otomatis nol, apabila tabel awal nol belum ditetapkan sebagai keputusan produk;
- label `Kompetisi belum dimulai`.

Untuk dataset aktif state ini tidak tampil.

### 15.2 Provisional

Gunakan `provisional` apabila:

- ada pertandingan resmi yang sudah selesai;
- masih terdapat pertandingan fase grup yang belum selesai atau belum resmi;
- tidak ada kerusakan data fatal.

Tampilkan:

- klasemen dari hasil official yang sudah selesai;
- jumlah selesai dari total pertandingan;
- label `Klasemen Sementara`;
- status kelolosan `Zona Lolos`, `Menunggu Hasil`, atau `pending` sesuai kondisi.

Jangan memberi label `Lolos` final sebelum fase grup final.

### 15.3 Final

Gunakan `final` apabila:

- seluruh pertandingan fase grup pada dataset selesai;
- seluruh hasil yang harus dihitung berstatus official;
- seluruh skor lengkap;
- tidak ada tie unresolved yang memengaruhi posisi;
- validasi integritas lulus.

Dataset aktif harus menghasilkan `final`.

### 15.4 Partial

Gunakan `partial` apabila:

- satu grup valid tetapi grup lain rusak;
- sebagian baris tim tidak dapat dihitung;
- skor selesai tidak lengkap;
- referensi tim atau grup hilang;
- terdapat data yang seharusnya tersedia tetapi tidak konsisten.

Tampilkan data valid.

Jangan mengisi data rusak dengan angka nol.

### 15.5 Unavailable atau Empty

Gunakan state empty/unavailable apabila:

- kompetisi dan grup valid;
- tidak ada data pertandingan yang dapat digunakan;
- klasemen belum dapat disusun.

Berikan tautan aman ke `/pertandingan`.

### 15.6 Error

Gunakan error boundary jika resolver melempar error yang tidak dapat dipulihkan.

Navigasi global harus tetap tampil.

---

## 16. Validasi Integritas

Buat validator khusus klasemen atau standings.

Validator boleh memanggil `validateMatchPrototypeData()` untuk memastikan data Plan 05 tetap valid.

### 16.1 Validasi Fase dan Grup

Pastikan:

- `FAS01` ada;
- tipe fase adalah `group`;
- `GRPA` dan `GRPB` mengarah ke fase grup;
- urutan grup unik;
- ID grup unik.

Jangan menjadikan nama `FAS01`, `GRPA`, atau `GRPB` sebagai satu-satunya logika universal. Gunakan konfigurasi dan relasi tipe.

### 16.2 Validasi Tim

Pastikan:

- setiap tim memiliki ID unik;
- setiap tim merujuk grup valid;
- setiap tim hanya berada pada satu grup aktif;
- dataset prototype berisi 8 tim;
- masing-masing grup prototype berisi 4 tim.

### 16.3 Validasi Pertandingan Grup

Pastikan:

- terdapat 12 pertandingan grup pada dataset aktif;
- masing-masing grup memiliki 6 pertandingan;
- `match.groupId` valid;
- `match.phaseId` sama dengan `group.phaseId`;
- `teamA.groupId === match.groupId`;
- `teamB.groupId === match.groupId`;
- team A tidak sama dengan team B;
- tidak ada pasangan tim yang bertanding dua kali pada fase grup prototype;
- setiap tim bermain tepat 3 pertandingan pada dataset final;
- pertandingan grup tidak memiliki penalty result;
- hasil official finished memiliki dua skor non-null.

### 16.4 Validasi Hasil Derivasi

Untuk setiap row:

```text
played === won + drawn + lost
goalDifference === goalsFor - goalsAgainst
points === won * 3 + drawn * 1 + lost * 0
```

Untuk setiap pertandingan yang dihitung:

- satu main ditambahkan kepada kedua tim;
- total goalsFor seluruh grup sama dengan total goalsAgainst seluruh grup.

### 16.5 Validasi Posisi

Pastikan:

- posisi hanya tersedia untuk ranking resolved;
- posisi unik dalam grup apabila tidak ada unresolved tie;
- posisi berada dalam rentang jumlah tim;
- jumlah tim berstatus qualified sama dengan konfigurasi saat klasemen final dan ranking resolved.

### 16.6 Perilaku Validator

Untuk pelanggaran fatal:

- lempar error dengan pesan internal yang jelas;
- jangan tampilkan detail teknis kepada publik.

Untuk warning yang tidak fatal:

- kembalikan warning terstruktur;
- tampilkan partial/provisional notice jika relevan.

---

## 17. Resolver Halaman

Buat resolver khusus, misalnya:

```text
resolveStandingsPageData()
```

Nama dapat menyesuaikan pola repository.

Resolver bertanggung jawab untuk:

1. menjalankan validasi data;
2. menemukan fase grup berdasarkan konfigurasi;
3. mengambil grup aktif;
4. mengambil tim setiap grup;
5. mengambil semua pertandingan fase grup;
6. menentukan pertandingan yang dapat dihitung;
7. menghitung row setiap tim;
8. menyortir row;
9. mendeteksi unresolved tie;
10. menentukan posisi;
11. menentukan status kelolosan;
12. menentukan status setiap grup;
13. menentukan status keseluruhan halaman;
14. menghitung jumlah pertandingan selesai;
15. menghitung jumlah tim lolos;
16. menyediakan data yang dapat digunakan halaman utama dan preview Beranda.

Resolver tidak boleh bergantung pada viewport.

Resolver tidak boleh membaca `window`.

Resolver tidak boleh melakukan fetch palsu.

Resolver tidak boleh menggunakan delay buatan.

---

## 18. Resolver Preview Beranda

Preview Beranda harus menggunakan hasil dari resolver klasemen yang sama.

Boleh dibuat adapter seperti:

```text
mapStandingsPageDataToHomePreview()
```

Adapter hanya memetakan:

- posisi;
- team;
- main;
- selisih gol;
- poin;
- status kelolosan.

Adapter tidak boleh menghitung ulang klasemen.

`home-prototype-data.ts` tidak boleh memiliki array angka klasemen manual.

Jika resolver klasemen gagal:

- preview Beranda menggunakan state error;
- jangan menyebabkan seluruh Beranda gagal dirender jika pola arsitektur yang ada memungkinkan section-level error.

---

## 19. Route dan App Router

### 19.1 Route Utama

Buat:

```text
client/src/app/klasemen/page.tsx
```

Route bersifat statis.

Tidak ada dynamic segment.

### 19.2 Search Params

Dukung:

```text
?grup=GRPA
?grup=GRPB
```

Perilaku:

- tanpa query: desktop menampilkan semua grup, mobile membuka grup pertama;
- query valid: grup terkait menjadi aktif;
- query tidak valid: abaikan dengan aman dan kembali ke default;
- query invalid tidak menghasilkan 404;
- jangan melakukan case conversion yang menciptakan nilai ID baru tanpa kebutuhan;
- canonical tetap `/klasemen`, bukan setiap variasi query.

### 19.3 Loading

Buat:

```text
client/src/app/klasemen/loading.tsx
```

Loading harus menggunakan skeleton yang mencerminkan:

- header;
- summary;
- navigasi grup;
- tabel;
- panel informasi.

Jangan menggunakan spinner tunggal di halaman kosong.

### 19.4 Error

Buat:

```text
client/src/app/klasemen/error.tsx
```

Error component harus:

- menjadi client component;
- menerima `reset`;
- menyediakan tombol `Coba Lagi`;
- tidak menampilkan stack trace;
- mempertahankan header dan footer dari root layout.

### 19.5 Not Found

Route statis `/klasemen` tidak membutuhkan `not-found.tsx` khusus Plan 06.

Jangan membuat not-found state buatan untuk query grup yang tidak valid.

---

## 20. Metadata dan Canonical

Metadata minimum:

```text
Title:
Klasemen Grup — FCS Industrial Cup Sumedang 2026

Description:
Lihat klasemen akhir Grup A dan Grup B FCS Industrial Cup Sumedang 2026, lengkap dengan poin, selisih gol, dan status kelolosan.
```

Gunakan pola title repository agar tidak terjadi duplikasi suffix yang tidak perlu.

### 21.0 Canonical URL

Canonical yang diharapkan:

```text
/klasemen
```

Canonical absolut hanya dibuat jika `NEXT_PUBLIC_SITE_URL`:

- tersedia;
- setelah trim tidak kosong;
- dapat diparse dengan `new URL()`;
- memiliki protokol `http:` atau `https:`;
- memiliki hostname.

Jangan menggunakan fallback:

```text
localhost
example.com
domain asumsi
```

Query parameter grup tidak masuk canonical.

### 20.2 Open Graph

Tambahkan:

- title;
- description;
- type website;
- URL hanya jika base URL valid.

Jangan membuat gambar Open Graph palsu.

---

## 21. Structured Data

Structured data yang diizinkan:

```text
BreadcrumbList
```

Contoh breadcrumb:

```text
Beranda → Klasemen
```

Syarat:

- gunakan URL absolut valid;
- hilangkan structured data jika base URL tidak tersedia;
- serialize dengan aman;
- jangan menggunakan `SportsEvent`;
- jangan menggunakan schema yang tidak sesuai hanya untuk memenuhi checklist.

---

## 22. Struktur Halaman

Urutan halaman:

1. Breadcrumb
2. Page Header
3. Competition Context
4. Standings Status Summary
5. Group Navigation
6. Group A Standings
7. Group B Standings
8. Qualification Explanation
9. Tie-Break Rules
10. Standings Abbreviation Legend
11. Related Navigation
12. Prototype Data Notice

Header dan footer global berasal dari root layout dan tidak dibuat ulang.

---

## 23. Page Header

Konten minimum:

```text
Eyebrow:
Klasemen

Title:
Klasemen Grup

Description:
Lihat posisi akhir seluruh tim pada fase grup FCS Industrial Cup Sumedang 2026.

Meta:
2 grup • Klasemen Final
```

Breadcrumb:

```text
Beranda / Klasemen
```

Aksesibilitas:

- gunakan elemen `nav`;
- `aria-label="Breadcrumb"`;
- current page menggunakan `aria-current="page"`.

---

## 24. Competition Context

Tampilkan ringkas:

- nama kompetisi;
- kategori;
- rentang tanggal;
- status kompetisi;
- jumlah tim;
- jumlah grup;
- link ke seluruh pertandingan.

Link pertandingan:

```text
/pertandingan
```

Bracket belum aktif.

Jangan membuat tombol bracket yang mengarah ke route mati.

Bracket dapat:

- disembunyikan; atau
- ditampilkan sebagai label non-interaktif `Segera tersedia`.

Pilih pola yang konsisten dengan halaman Pertandingan.

---

## 25. Standings Status Summary

Pada dataset aktif tampilkan:

```text
Klasemen Final
12 dari 12 pertandingan fase grup selesai
4 tim lolos ke semifinal
Sumber: hasil pertandingan resmi
```

Jangan menampilkan waktu pembaruan palsu.

Jika tidak ada field `updatedAt` runtime yang benar:

- sembunyikan informasi pembaruan;
- jangan menggunakan tanggal hardcode hanya untuk mengisi UI.

---

## 26. Group Navigation

### 26.1 Desktop

Tampilkan:

```text
Semua Grup
Grup A
Grup B
```

Perilaku:

- `Semua Grup` menghapus query `grup`;
- Grup A memakai `?grup=GRPA`;
- Grup B memakai `?grup=GRPB`;
- perubahan query tidak menyebabkan full reload;
- fokus tetap masuk akal;
- URL dapat disalin.

Tanpa query, semua grup terlihat.

Dengan query valid, boleh:

- menampilkan hanya grup aktif; atau
- menyorot dan membawa fokus ke grup aktif.

Untuk konsistensi sederhana dengan mobile dan semantics “filter grup”, rekomendasi Plan 06 adalah menampilkan hanya grup aktif saat query tersedia.

### 26.2 Mobile

Gunakan tab Grup A dan Grup B.

Tanpa query:

```text
GRPA aktif
```

Saat tab berubah:

- update query URL;
- gunakan `router.replace`;
- gunakan `scroll: false` jika sesuai;
- jangan memakai `window.innerWidth` untuk menentukan render awal.

### 26.3 ARIA Tab

Gunakan pola tab yang benar:

- `role="tablist"`;
- setiap tab `role="tab"`;
- `aria-selected`;
- `aria-controls`;
- panel `role="tabpanel"`;
- panel `aria-labelledby`;
- keyboard Arrow Left dan Arrow Right jika pola tab kustom diterapkan.

Boleh menggunakan tombol biasa dengan semantic yang baik apabila seluruh pola tab lengkap tidak dibuat. Jangan menambahkan role tab secara setengah-setengah.

---

## 27. Group Standings Section

Setiap grup menampilkan:

- nama grup;
- jumlah tim;
- status grup;
- jumlah pertandingan selesai;
- tabel klasemen;
- link pertandingan grup.

Link pertandingan:

```text
Grup A:
/pertandingan?fase=FAS01&grup=GRPA

Grup B:
/pertandingan?fase=FAS01&grup=GRPB
```

Jangan menggunakan `href="#"`.

---

## 28. Tabel Desktop

Kolom:

```text
Pos | Tim | M | Mng | S | K | GM | GK | SG | Poin | Status
```

### 28.1 Semantik Tabel

Gunakan:

- `<table>`;
- `<caption>`;
- `<thead>`;
- `<tbody>`;
- `<th scope="col">`;
- nama tim dapat menggunakan `<th scope="row">`.

Caption harus menjelaskan grup, misalnya:

```text
Klasemen final Grup A
```

### 28.2 Tim

Team cell menampilkan:

- logo atau fallback;
- nama lengkap;
- nama singkat bila diperlukan.

Karena Detail Tim belum tersedia:

- nama tim bukan link;
- jangan membuat `/tim/[teamId]`;
- jangan membuat href palsu.

### 28.3 Posisi

- tampilkan angka posisi jika resolved;
- tampilkan `—` atau label yang jelas jika unresolved;
- jangan menampilkan indikator perubahan posisi pada Plan 06.

### 28.4 Selisih Gol

Format:

```text
positif → +2
nol     → 0
negatif → -4
null    → —
```

Gunakan tanda minus ASCII atau typographic yang konsisten. Pastikan screen reader mendapat konteks melalui header kolom dan legenda.

### 28.5 Poin

- gunakan penekanan visual;
- tidak dihitung di komponen;
- null tidak berubah menjadi nol.

### 28.6 Status

Status tekstual:

```text
Lolos
Gugur
Zona Lolos
Menunggu Hasil
Menunggu Keputusan
Belum Ditentukan
```

Gunakan hanya status yang relevan dengan state.

Warna hanya penguat.

---

## 29. Tabel Mobile dan Expandable Row

Kolom selalu terlihat:

```text
Pos | Tim | M | SG | Poin
```

Setiap row menyediakan detail tambahan:

- menang;
- seri;
- kalah;
- gol memasukkan;
- gol kebobolan;
- status kelolosan.

### 29.1 Toggle

Toggle harus:

- menggunakan `<button type="button">`;
- mempunyai label deskriptif;
- menggunakan `aria-expanded`;
- menggunakan `aria-controls`;
- panel detail memiliki ID unik;
- fokus keyboard terlihat.

Contoh accessible label:

```text
Lihat statistik lengkap Cakra Textile FC
```

### 29.2 Tidak Ada Horizontal Scroll Utama

Jangan menjadikan `overflow-x: auto` sebagai solusi utama mobile.

Jika ada kondisi ekstrem:

- prioritaskan wrapping;
- nama tim maksimal dua baris;
- gunakan shortName jika perlu;
- pertahankan nama lengkap untuk aksesibilitas melalui accessible text.

---

## 30. Aturan Kelolosan

Tampilkan section:

```text
Dua tim teratas dari setiap grup lolos ke semifinal.
Juara Grup A menghadapi runner-up Grup B.
Juara Grup B menghadapi runner-up Grup A.
```

Aturan pairing tersebut harus berasal dari konfigurasi atau hasil hubungan dataset fase berikutnya, bukan dari teks yang digunakan untuk menghitung bracket.

Plan 06 hanya menjelaskan hubungan.

Plan 06 tidak membuat bracket.

CTA Bracket:

- jangan aktif;
- dapat disembunyikan;
- atau tampil non-interaktif sebagai `Bracket segera tersedia`.

---

## 31. Aturan Tie-Break di UI

Tampilkan aturan aktif:

```text
Jika dua tim memiliki poin sama:
1. Selisih gol
2. Gol memasukkan

Jika masih sama, posisi menunggu aturan atau keputusan resmi tambahan.
```

Jangan menampilkan sebagai aturan aktif:

- head-to-head;
- fair play;
- undian;
- keputusan panitia sebagai langkah otomatis.

Accordion boleh digunakan.

Jika accordion digunakan:

- button memakai `aria-expanded`;
- konten tetap tersedia di DOM;
- jangan menyembunyikan aturan penting hanya melalui hover.

---

## 32. Legenda Singkatan

Tampilkan legenda yang mudah ditemukan:

| Singkatan | Arti |
|---|---|
| Pos | Posisi |
| M | Main |
| Mng | Menang |
| S | Seri |
| K | Kalah |
| GM | Gol Memasukkan |
| GK | Gol Kebobolan |
| SG | Selisih Gol |
| Poin | Total Poin |

Header tabel boleh menggunakan:

- `abbr title`;
- visually hidden full label;
- atau kombinasi dengan legenda.

Jangan bergantung hanya pada atribut `title`.

---

## 33. Related Navigation

Tautan aktif:

```text
Semua Pertandingan → /pertandingan
```

Tautan kondisi:

```text
Klasemen → tidak perlu menautkan ke halaman yang sama
Bracket → belum aktif
Daftar Tim → belum aktif jika route belum tersedia
Statistik → belum aktif jika route belum tersedia
```

Jangan membuat route mati.

---

## 34. Prototype Data Notice

Gunakan notice yang konsisten dengan halaman Pertandingan:

```text
Simulasi Prototype FCS:
Seluruh klasemen, hasil, dan status kelolosan pada halaman ini berasal dari data simulasi terverifikasi untuk keperluan evaluasi prototype FCS Industrial Cup Sumedang 2026.
```

Jangan menyatakan data sebagai hasil turnamen nyata.

---

## 35. State Komponen

### 35.1 Loading State

Skeleton minimum:

- breadcrumb dan title;
- summary;
- tab grup;
- header tabel;
- empat row tabel;
- panel aturan.

### 35.2 Empty State

Konten:

```text
Klasemen belum tersedia
Hasil fase grup belum cukup untuk menyusun klasemen.
```

CTA:

```text
Lihat Pertandingan
```

### 35.3 Partial State

Tampilkan:

```text
Data klasemen belum lengkap
Sebagian data pertandingan tidak dapat dihitung.
```

- tampilkan grup atau row yang valid;
- nilai yang hilang menjadi `—`;
- jangan menjadikan seluruh halaman kosong jika satu bagian masih valid.

### 35.4 Error State

Tampilkan:

```text
Klasemen gagal dimuat
Silakan coba lagi.
```

Tombol:

```text
Coba Lagi
```

### 35.5 Unresolved Tie State

Tampilkan notice pada grup yang terkena:

```text
Posisi beberapa tim belum dapat diputuskan dengan aturan tie-break aktif.
```

Jangan menyembunyikan masalah data.

---

## 36. Integrasi Navigasi Global

`client/src/config/navigation.ts` sudah benar.

Jangan mengubah route `/klasemen`.

Periksa:

- menu Klasemen aktif pada `/klasemen`;
- menu Klasemen tetap aktif pada variasi query;
- desktop navigation menampilkan `aria-current="page"`;
- mobile navigation menampilkan status aktif;
- `/bracket` tetap masuk kelompok Klasemen untuk Plan 07.

Perubahan konfigurasi navigasi hanya dilakukan jika ditemukan bug nyata.

---

## 37. Integrasi Halaman Pertandingan

Periksa dan ubah komponen berikut sesuai kebutuhan:

```text
client/src/features/matches/components/competition-context.tsx
client/src/features/matches/components/related-navigation.tsx
```

### 37.1 Competition Context

Ubah item Klasemen dari disabled pill menjadi link aktif:

```text
/klasemen
```

Bracket tetap disabled.

### 37.2 Related Navigation

Ubah kartu Klasemen dari disabled menjadi link aktif.

Pertahankan:

- Bracket sebagai upcoming;
- Daftar Tim sebagai upcoming jika route belum tersedia.

Gunakan `Link` Next.js.

Jangan mengaktifkan route yang belum dibuat.

---

## 38. Integrasi Beranda

### 38.1 Data

Ubah state klasemen Beranda dari empty menjadi ready berdasarkan resolver Plan 06.

Jangan membuat array manual.

### 38.2 Komponen Preview

Reuse:

```text
StandingsPreviewSection
StandingsTable
StandingsTabs
```

Perubahan hanya dilakukan jika diperlukan untuk:

- menerima hasil adapter;
- memformat selisih gol positif;
- mempertahankan loading/error/empty;
- memastikan status kelolosan benar.

### 38.3 Link

CTA:

```text
Lihat Klasemen Lengkap → /klasemen
```

sudah tersedia dan harus tetap bekerja.

### 38.4 Batas Scope Beranda

Jangan:

- mengubah urutan seluruh section Beranda;
- mengubah hero;
- mengubah pertandingan final;
- mengubah awards;
- mengisi section lain yang masih empty;
- melakukan refactor besar `home-prototype-data.ts`.

---

## 39. Komponen yang Dapat Digunakan Ulang

Prioritaskan komponen dan pola yang sudah ada:

```text
PageContainer
SectionHeading
TeamLogoFallback
ActionLink
IconButton
HomeSectionSkeleton
HomeEmptyState
HomeErrorState
breadcrumb pattern dari MatchPageHeader
loading pattern halaman Pertandingan
error boundary pattern halaman Pertandingan
```

Reuse tidak berarti memaksakan komponen preview menjadi full table.

Full page standings boleh memiliki komponen sendiri karena:

- kolom lebih banyak;
- state lebih kompleks;
- expandable mobile row;
- aturan tie-break;
- status partial dan unresolved;
- filter query.

---

## 40. Struktur File yang Direkomendasikan

Gemini boleh menyesuaikan nama kecil agar konsisten dengan repository. Tanggung jawab setiap file harus tetap jelas.

```text
client/src/app/klasemen/
├── page.tsx
├── loading.tsx
└── error.tsx

client/src/features/standings/
├── standings-page.tsx
├── standings-page.module.css
├── types/
│   └── standings.types.ts
├── data/
│   └── standings-config.ts
├── lib/
│   ├── derive-group-standings.ts
│   ├── resolve-standings-page.ts
│   ├── validate-standings-prototype-data.ts
│   ├── standings-search-params.ts
│   └── map-standings-to-home-preview.ts
└── components/
    ├── standings-page-header.tsx
    ├── standings-page-header.module.css
    ├── standings-summary.tsx
    ├── standings-summary.module.css
    ├── group-navigation.tsx
    ├── group-navigation.module.css
    ├── group-standings-section.tsx
    ├── group-standings-section.module.css
    ├── standings-table.tsx
    ├── standings-table.module.css
    ├── mobile-standings-row-details.tsx
    ├── qualification-explanation.tsx
    ├── tiebreaker-rules.tsx
    ├── standings-legend.tsx
    ├── standings-related-navigation.tsx
    ├── standings-loading-skeleton.tsx
    ├── standings-empty-state.tsx
    ├── standings-partial-state.tsx
    └── standings-error-state.tsx
```

Tidak wajib membuat satu file untuk setiap nama di atas apabila beberapa komponen kecil lebih masuk akal digabung.

Jangan membuat satu file raksasa yang mencampur:

- derivasi;
- resolver;
- query;
- UI;
- validasi;
- metadata.

---

## 41. File Existing yang Kemungkinan Diubah

Daftar awal:

```text
client/src/features/matches/components/competition-context.tsx
client/src/features/matches/components/competition-context.module.css
client/src/features/matches/components/related-navigation.tsx
client/src/features/matches/components/related-navigation.module.css

client/src/features/home/data/home-prototype-data.ts
client/src/features/home/components/standings-table.tsx
client/src/features/home/components/standings-table.module.css
```

File Beranda hanya diubah bila dibutuhkan untuk adapter dan formatting.

`client/src/config/navigation.ts` hanya diperiksa; tidak perlu diubah jika sudah benar.

---

## 42. File yang Tidak Boleh Diubah

Jangan mengubah isi data utama berikut:

```text
client/src/features/matches/data/matches-prototype-data.ts
client/src/features/matches/data/match-events-prototype-data.ts
client/src/features/matches/data/match-participants-prototype-data.ts
client/src/features/matches/data/match-officials-prototype-data.ts
```

Jangan mengubah:

- skor pertandingan;
- status hasil;
- status pertandingan;
- tim;
- grup;
- fase;
- nomor pertandingan;
- penalty result;
- kejadian laga;
- pemain;
- official;
- assignment perangkat.

Jangan mengubah tanpa kebutuhan langsung:

```text
client/src/app/pertandingan/[matchId]/**
client/src/features/matches/lib/resolve-match-detail.ts
client/src/features/matches/types/match-detail.types.ts
```

Jangan mengubah:

```text
server/**
package.json
package-lock.json atau lockfile lain
next.config.*
tsconfig.json
eslint config
README.md
docs selain file plan yang ditempatkan pengguna
05 — DOKUMEN TEKNIS WEBSITE
```

Jangan membuat backend.

---

## 43. Aturan Responsive

### 43.1 Desktop

Target:

```text
>= 1024px
```

Perilaku:

- seluruh kolom terlihat;
- grup berurutan;
- tidak ada horizontal scroll pada ukuran desktop normal;
- panel informasi tidak menekan tabel terlalu sempit.

### 43.2 Tablet

Target:

```text
sekitar 768px–1023px
```

Perilaku:

- grup tetap berurutan;
- kolom dapat dipadatkan;
- layout panel dapat turun ke bawah;
- tabel tetap terbaca.

### 43.3 Mobile

Target:

```text
< 768px
```

Perilaku:

- satu grup aktif;
- tab tetap dapat digunakan;
- expandable row;
- nama tim maksimal dua baris;
- status kelolosan terlihat;
- tidak ada horizontal scroll utama;
- tap target minimum nyaman.

### 43.4 Hydration Safety

Jangan menentukan struktur render dengan:

```text
window.innerWidth
matchMedia pada render awal tanpa guard
nilai acak
Date.now()
```

Gunakan:

- CSS media query;
- client state deterministik;
- query parameter;
- server data yang stabil.

---

## 44. Aksesibilitas

Persyaratan wajib:

1. hanya satu `h1`;
2. heading section berurutan;
3. breadcrumb semantik;
4. tabel semantik;
5. caption setiap tabel;
6. header menggunakan scope;
7. singkatan dijelaskan;
8. status tidak hanya menggunakan warna;
9. logo memiliki alt text;
10. fokus keyboard terlihat;
11. tab dapat digunakan keyboard;
12. expandable row menggunakan ARIA;
13. CTA memiliki label jelas;
14. error message dapat dibaca screen reader;
15. summary perubahan filter menggunakan `aria-live` bila relevan;
16. tidak ada clickable `div`;
17. tidak ada link kosong;
18. tidak ada `href="#"`;
19. icon dekoratif menggunakan `aria-hidden="true"`;
20. nama tim tetap tersedia sebagai teks lengkap.

---

## 45. Visual dan Styling

Ikuti:

- arah visual Modern dan Premium;
- identitas FCS yang sudah tersedia;
- CSS variables aktif;
- typography global;
- spacing konsisten;
- border radius dan shadow yang sudah digunakan halaman Pertandingan dan Beranda.

Jangan:

- memperkenalkan design system baru;
- menambah warna acak;
- menggunakan inline style berulang;
- menyalin seluruh wireframe secara literal;
- menambah gradient atau animasi besar tanpa referensi;
- mengubah header/footer global.

Zona lolos boleh menggunakan:

- accent line;
- background lembut;
- badge;
- kombinasi visual.

Tetap wajib memiliki label teks.

---

## 46. Performa

- seluruh klasemen berasal dari satu dataset lokal;
- jangan melakukan request per tim;
- jangan melakukan request per grup;
- derivasi boleh di-cache pada module-level apabila aman;
- hindari menghitung ulang algoritma pada setiap komponen;
- gunakan `useMemo` hanya jika dibutuhkan;
- jangan menambahkan state client untuk data yang dapat disiapkan server;
- logo menggunakan pola yang sudah tersedia;
- jangan menambah dependency tabel;
- jangan menambah library state management.

Dataset kecil. Hindari optimisasi kompleks yang tidak diperlukan.

---

## 47. Aturan Dependency

Jangan menambah dependency baru.

Gunakan dependency yang sudah tersedia:

```text
next
react
react-dom
lucide-react
```

Jangan:

- menambah table library;
- menambah chart library;
- menambah schema library;
- menambah query-state library;
- menambah testing framework pada Plan 06;
- melakukan upgrade dependency.

---

## 48. Aturan Server dan API

Plan 06 tidak mengubah server.

Jangan membuat:

- endpoint klasemen;
- API route palsu;
- server action palsu;
- fetch ke URL kosong;
- mock network request;
- delay simulasi;
- loading berbasis `setTimeout`.

Data berasal dari module lokal repository.

---

## 49. Urutan Implementasi Wajib

Gemini harus mengerjakan dengan urutan berikut.

### 49.1 Pemeriksaan Awal

- baca seluruh Plan 06;
- periksa base commit;
- periksa struktur App Router;
- periksa data pertandingan;
- periksa komponen Beranda;
- periksa integrasi halaman Pertandingan;
- catat file yang akan dibuat dan diubah;
- jangan melakukan perubahan Git.

### 49.2 Tipe dan Konfigurasi

- buat tipe standings;
- buat konfigurasi poin;
- buat konfigurasi kelolosan;
- buat konfigurasi tie-break;
- jangan masukkan angka klasemen final.

### 49.3 Validator

- buat validator standings;
- reuse validator pertandingan;
- tambahkan validasi team-group-match;
- tambahkan validasi jumlah dan pasangan pertandingan;
- tambahkan validasi hasil derivasi.

### 49.4 Derivation Function

- buat fungsi murni untuk satu grup;
- hitung seluruh statistik;
- sorting;
- unresolved tie;
- posisi;
- qualification status.

### 49.5 Resolver Halaman

- gabungkan seluruh grup;
- tentukan status page;
- hitung summary;
- sediakan warnings;
- sediakan output untuk UI.

### 49.6 Adapter Beranda

- map output resolver;
- jangan hitung ulang;
- jangan hardcode angka.

### 49.7 Komponen UI Dasar

- page header;
- competition context;
- summary;
- group navigation;
- group section;
- table desktop.

### 49.8 Mobile

- tab;
- active group dari query;
- expandable row;
- ARIA;
- no horizontal scroll.

### 49.9 Informasi Pendukung

- aturan kelolosan;
- tie-break;
- legenda;
- related navigation;
- simulation notice.

### 49.10 App Router

- page;
- loading;
- error;
- metadata;
- optional BreadcrumbList.

### 49.11 Integrasi Pertandingan

- aktifkan Klasemen;
- pertahankan Bracket disabled;
- pertahankan Tim disabled.

### 49.12 Integrasi Beranda

- ubah standings preview menjadi ready dari resolver;
- verifikasi desktop dan mobile;
- pertahankan state component.

### 49.13 Validasi Akhir

Jalankan dari folder `client/`:

```bash
npm run type-check
npm run lint
npm run build
```

Perbaiki error yang muncul dan masih berada dalam scope.

Jangan mengubah dependency atau konfigurasi untuk menutupi error.

---

## 50. Pengujian Manual yang Harus Disarankan Gemini

Gemini harus menyertakan checklist pengujian berikut dalam laporan.

### 51.0 Route

- `/klasemen` terbuka;
- `/klasemen?grup=GRPA` terbuka;
- `/klasemen?grup=GRPB` terbuka;
- query grup invalid kembali ke default;
- refresh pada URL query tetap stabil.

### 50.2 Data

- 12 dari 12 pertandingan selesai;
- Grup A memiliki empat tim;
- Grup B memiliki empat tim;
- setiap tim bermain tiga kali;
- poin dan gol sesuai acceptance table;
- empat tim berstatus Lolos;
- tidak ada data knockout yang masuk klasemen.

### 50.3 Desktop

- seluruh kolom terlihat;
- tidak ada overflow;
- Grup A dan Grup B berurutan;
- link pertandingan grup bekerja;
- menu Klasemen aktif.

### 50.4 Mobile

- Grup A aktif awal;
- tab Grup B bekerja;
- expandable row bekerja;
- keyboard/focus bekerja;
- nama tim tidak terpotong parah;
- tidak ada horizontal scroll utama.

### 50.5 Beranda

- preview klasemen tidak lagi empty;
- Grup A dan Grup B benar;
- CTA ke `/klasemen` bekerja;
- tidak ada angka manual berbeda.

### 50.6 Pertandingan

- link Klasemen aktif;
- link Bracket tetap tidak aktif;
- halaman `/pertandingan` tidak rusak;
- detail pertandingan `PRT001` dan `PRT016` tetap terbuka.

### 50.7 State

Lakukan pemeriksaan kode terhadap:

- loading;
- empty;
- partial;
- error;
- unresolved tie.

Dataset aktif tidak wajib dimutasi untuk mendemonstrasikan state.

Jangan mengubah dataset permanen hanya untuk pengujian.

### 50.8 Metadata

- title benar;
- description benar;
- canonical hanya muncul jika site URL valid;
- canonical tanpa query grup;
- tidak ada schema SportsEvent;
- JSON-LD tidak rusak.

---

## 51. Kriteria Penerimaan

Implementasi memenuhi Plan 06 apabila:

1. `/klasemen` tersedia;
2. page code sesuai STD-01;
3. data dihitung dari pertandingan;
4. tidak ada dataset klasemen manual;
5. 12 pertandingan grup terverifikasi;
6. seluruh hasil final sesuai acceptance table;
7. sistem poin 3–1–0;
8. sorting memakai poin, SG, GM;
9. tidak ada head-to-head buatan;
10. unresolved tie ditangani;
11. status final terlihat;
12. dua tim tiap grup berstatus Lolos;
13. Grup A dan Grup B tampil;
14. desktop menampilkan semua kolom;
15. mobile memakai tab;
16. mobile memakai expandable row;
17. tabel semantik;
18. legenda tersedia;
19. status tidak hanya warna;
20. link pertandingan grup aman;
21. tidak ada link Detail Tim;
22. tidak ada link Bracket aktif;
23. link Klasemen dari Pertandingan aktif;
24. preview klasemen Beranda aktif;
25. loading tersedia;
26. empty tersedia;
27. partial tersedia;
28. error tersedia;
29. canonical aman;
30. structured data sesuai keputusan;
31. tidak ada dependency baru;
32. tidak ada backend baru;
33. tidak ada skor atau data pertandingan berubah;
34. Plan 05 tetap berfungsi;
35. type-check lulus;
36. lint lulus;
37. build lulus;
38. laporan Gemini lengkap;
39. tidak ada tindakan Git dilakukan.

---

## 52. Definition of Done

Plan 06 dinyatakan selesai pada tingkat implementasi Gemini apabila:

- seluruh scope diterapkan;
- semua acceptance criteria terpenuhi menurut pemeriksaan implementasi;
- type-check lulus;
- lint lulus;
- build lulus;
- laporan aktual diberikan;
- tidak ada Git command dijalankan.

Plan 06 belum dinyatakan selesai secara proyek sebelum:

1. pengguna melakukan pengujian lokal;
2. pengguna melakukan commit dan push;
3. pengguna mengirim SHA;
4. ChatGPT mengaudit SHA;
5. audit memberikan verdict lulus.

---

## 53. Larangan Umum

Gemini dilarang:

- mengarang klasemen;
- menyalin angka wireframe;
- membuat snapshot runtime manual;
- mengarang tie-break;
- memakai alfabet sebagai posisi resmi;
- memakai ID sebagai posisi resmi;
- menganggap provisional sebagai official;
- menganggap skor null sebagai nol;
- mengubah skor;
- mengubah tim;
- mengubah grup;
- mengubah fase;
- mengubah fase gugur;
- membuat bracket;
- membuat Detail Tim;
- membuat API;
- membuat backend;
- membuat fetch palsu;
- membuat delay palsu;
- menambah dependency;
- mengubah package configuration;
- melakukan refactor besar Pertandingan;
- melakukan refactor besar Detail Pertandingan;
- mengubah data kejadian;
- mengubah metadata Plan 05;
- mengisi folder Dokumen Teknis Website;
- mengubah file dokumentasi lain;
- melakukan deployment;
- menjalankan tindakan Git.

---

## 54. Larangan Tindakan Git

Gemini tidak boleh menjalankan:

```text
git add
git commit
git push
git pull
git fetch
git checkout
git switch
git merge
git rebase
git reset
git revert
git clean
git stash
git tag
gh pr create
```

Gemini tidak boleh:

- membuat branch;
- berpindah branch;
- membuat commit;
- push;
- pull;
- merge;
- rebase;
- reset;
- membuat pull request;
- mengubah riwayat Git.

Commit dan push hanya dilakukan pengguna.

---

## 55. Validasi Teknis Wajib

Berbeda dari tindakan Git, validasi teknis wajib dijalankan oleh Gemini.

Dari folder `client/`:

```bash
npm run type-check
npm run lint
npm run build
```

Gemini harus melaporkan output aktual:

- sukses atau gagal;
- command yang dijalankan;
- error yang ditemukan;
- perbaikan yang dilakukan;
- hasil akhir setelah perbaikan.

Jangan hanya menulis “seharusnya lulus”.

Jangan mengklaim lulus tanpa menjalankan command.

---

## 56. Format Laporan Gemini

Gemini harus memberikan laporan dengan format berikut.

```text
LAPORAN IMPLEMENTASI PLAN 06

1. Base commit yang digunakan
2. Ringkasan implementasi
3. File baru
4. File yang diubah
5. File yang diperiksa tetapi tidak diubah
6. Penjelasan sumber data klasemen
7. Penjelasan formula dan tie-break
8. Hasil derivasi Grup A
9. Hasil derivasi Grup B
10. Penanganan loading, empty, partial, error, dan unresolved tie
11. Integrasi halaman Pertandingan
12. Integrasi Beranda
13. Aksesibilitas
14. Responsive behavior
15. Metadata dan structured data
16. Hasil npm run type-check
17. Hasil npm run lint
18. Hasil npm run build
19. Risiko atau keterbatasan
20. Bagian yang tidak dikerjakan
21. Konfirmasi tidak ada dependency baru
22. Konfirmasi tidak ada data pertandingan diubah
23. Konfirmasi tidak ada tindakan Git dilakukan
```

Laporan harus menyebut hasil aktual, bukan rencana.

Akhiri laporan dengan:

```text
Berhenti setelah implementasi, validasi, dan laporan selesai.
```

---

## 57. Format Audit SHA oleh ChatGPT

Setelah pengguna mengirim SHA, audit harus mencakup:

1. commit ditemukan;
2. parent/base commit;
3. daftar seluruh file berubah;
4. kesesuaian dengan Plan 06;
5. file di luar scope;
6. data pertandingan tidak berubah;
7. jumlah laga grup;
8. formula;
9. hasil Grup A;
10. hasil Grup B;
11. unresolved tie;
12. route;
13. query parameter;
14. navigasi;
15. integrasi Pertandingan;
16. integrasi Beranda;
17. loading;
18. error;
19. empty;
20. partial;
21. aksesibilitas;
22. responsive behavior dari kode;
23. metadata;
24. canonical;
25. structured data;
26. dead link;
27. dependency;
28. type-check;
29. lint;
30. build;
31. tindakan di luar izin;
32. data buatan.

Verdict audit:

```text
LULUS
LULUS DENGAN CATATAN
PERLU PERBAIKAN KECIL
BELUM LULUS — REVISI WAJIB
```

Commit tidak boleh diluluskan hanya berdasarkan laporan Gemini.

---

## 58. Risiko Implementasi

### 58.1 Duplikasi Data

Risiko:

- klasemen dibuat sebagai array manual;
- Beranda mempunyai angka berbeda dari halaman Klasemen.

Mitigasi:

- satu resolver;
- adapter preview;
- tidak ada snapshot runtime manual.

### 58.2 Tie-Break Buatan

Risiko:

- developer memakai nama atau ID sebagai fallback;
- head-to-head dimasukkan karena ada di wireframe.

Mitigasi:

- unresolved tie state;
- aturan aktif hanya poin, SG, GM.

### 58.3 Hasil Tidak Resmi

Risiko:

- provisional ikut dihitung;
- live match ikut dihitung.

Mitigasi:

- filter ketat official + finished + skor lengkap.

### 58.4 Relasi Grup Rusak

Risiko:

- pertandingan dikaitkan dengan grup yang benar, tetapi tim berasal dari grup lain.

Mitigasi:

- validator team-group-match.

### 58.5 Hydration Mismatch

Risiko:

- desktop/mobile ditentukan dari `window` saat render.

Mitigasi:

- CSS media query;
- query parameter;
- initial state deterministik.

### 58.6 Link Mati

Risiko:

- Detail Tim atau Bracket aktif sebelum route tersedia.

Mitigasi:

- text-only team;
- bracket hidden/disabled.

### 58.7 Scope Creep

Risiko:

- Plan 07 ikut dikerjakan;
- halaman Pertandingan direfactor besar.

Mitigasi:

- daftar file tidak boleh diubah;
- non-scope eksplisit.

---

## 59. Hasil Akhir yang Diharapkan

Setelah implementasi dan validasi:

```text
/klasemen
├── Klasemen Grup A
├── Klasemen Grup B
├── Summary 12/12
├── 4 tim lolos
├── Aturan kelolosan
├── Tie-break aktif
├── Legenda
├── Loading
├── Empty
├── Partial
├── Error
└── Responsive mobile
```

Integrasi:

```text
Beranda
└── Preview Klasemen Aktif

Pertandingan
├── Competition Context → Klasemen aktif
└── Related Navigation → Klasemen aktif

Navigasi Global
└── Klasemen → /klasemen
```

Plan 07 tetap belum dikerjakan.

---

## 60. Status Persetujuan

Dokumen ini berstatus:

```text
DISETUJUI
```

Versi:

```text
1.0
```

Status implementasi:

```text
SIAP DIIMPLEMENTASIKAN
```

Dokumen telah disetujui pengguna pada 2026-07-24.

Ketentuan berikut tetap berlaku:

- pertahankan base commit yang telah dikonfirmasi;
- status belum boleh diubah menjadi selesai;
- instruksi implementasi Gemini dibuat terpisah sesuai workflow proyek;
- Plan 07 belum boleh dimulai sebelum Plan 06 diimplementasikan dan diaudit.

Plan baru boleh dinyatakan selesai setelah implementasi, validasi, commit pengguna, pengiriman SHA, dan audit ChatGPT lulus.
