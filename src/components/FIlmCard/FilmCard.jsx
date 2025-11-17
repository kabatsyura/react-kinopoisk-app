import "./FilmCard.css";

export function FilmCard({ film }) {
  return (
    <a className="film-card__body" key={film.id}>
      <img className="film-card__poster" src={film.image} alt={film.title} />
      <div className="film-card__rating">
        <img src="/star-rating-icon.svg" alt="Рейтинг" />
        {film.rating}
      </div>
      <h3 className="film-card__header">{film.title}</h3>
      <button className="film-card__button">
        <img src="/like-icon.svg" alt="Лайк" />
        <span>В избранное</span>
      </button>
    </a>
  );
}
