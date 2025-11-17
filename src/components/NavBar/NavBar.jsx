import "./NavBar.css";

export function NavBar() {
  return (
    <div className="nav-bar">
      <a href="#" className="nav-bar__link">
        Поиск фильмов
      </a>
      <a href="#" className="nav-bar__link">
        Мои фильмы
      </a>
      <a href="#" className="nav-bar__link-login">
        <span className="nav-bar__link-login-text">Войти</span>
        <img
          src="/login-icon.svg"
          alt="Авторизация"
          className="nav-bar__link-login-icon"
        />
      </a>
    </div>
  );
}
