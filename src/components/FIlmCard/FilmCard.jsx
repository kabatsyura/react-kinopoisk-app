import styles from "./FilmCard.module.css";

export function FilmCard({ film }) {
  return (
    <a className={styles["film-card__body"]} key={film.id}>
      <img
        className={styles["film-card__poster"]}
        src={film.image}
        alt={film.title}
      />
      <div className={styles["film-card__rating"]}>
        <img src="/star-rating-icon.svg" alt="Рейтинг" />
        {film.rating}
      </div>
      <h3 className={styles["film-card__header"]}>{film.title}</h3>
      <button className={styles["film-card__button"]}>
        <img src="/like-icon.svg" alt="Лайк" />
        <span>В избранное</span>
      </button>
    </a>
  );
}
