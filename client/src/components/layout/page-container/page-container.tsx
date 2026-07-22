import React from "react";
import styles from "./page-container.module.css";

type PageContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section";
};

export function PageContainer({ children, className = "", as: Component = "div" }: PageContainerProps) {
  return (
    <Component className={`${styles.container} ${className}`.trim()}>
      {children}
    </Component>
  );
}
