import styles from "./NavBar.module.css";

export function NavBar() {
  return (
    <div className={styles["nav-bar"]}>
      <a href="#" className={styles["nav-bar__link"]}>
        Поиск фильмов
      </a>
      <a href="#" className={styles["nav-bar__link"]}>
        Мои фильмы
      </a>
      <a href="#" className={styles["nav-bar__link-login"]}>
        <span className={styles["nav-bar__link-login-text"]}>Войти</span>
        <img
          src="/login-icon.svg"
          alt="Авторизация"
          className={styles["nav-bar__link-login-icon"]}
        />
      </a>
    </div>
  );
}
