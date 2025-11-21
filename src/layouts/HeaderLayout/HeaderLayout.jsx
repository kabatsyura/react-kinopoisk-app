import styles from "./HeaderLayout.module.css";

export function HeaderLayout({ children }) {
  return <div className={styles["header-layout"]}>{children}</div>;
}
