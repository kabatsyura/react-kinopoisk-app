import "./Button.css";

export function Button({ name }) {
  return (
    <>
      <button className="button">{name}</button>
    </>
  );
}
