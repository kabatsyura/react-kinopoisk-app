import styles from "./NavBarLayout.module.css";

export function NavBarLayout({ children }) {
  return <nav className={styles["nav-bar-layout"]}>{children}</nav>;
}
