import styles from "./Logo.module.css";

export function Logo() {
  return (
    <img src="/logo-icon.svg" alt="Логотип" className={styles["logo-icon"]} />
  );
}
