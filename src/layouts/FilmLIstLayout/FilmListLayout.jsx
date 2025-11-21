import styles from "./FilmListLayout.module.css";

export function FilmListLayout({ children }) {
  return <section className={styles["film-list-layout"]}>{children}</section>;
}
