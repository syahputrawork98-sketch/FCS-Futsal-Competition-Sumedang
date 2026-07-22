import type { NavigationItem } from "@/types/navigation";

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

export const headerAction = {
  label: "Tentang Kompetisi",
  href: "/tentang",
} as const;
