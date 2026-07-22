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
