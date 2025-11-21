import styles from "./Header.module.css";

export function Header({ header }) {
  return (
    <>
      <h1 className={styles["header"]}>{header}</h1>
    </>
  );
}
