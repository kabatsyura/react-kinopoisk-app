import { useState } from "react";
import { Button } from "../Button/Button";
import "./SearchForm.css";

export function SearchForm({ placeholder }) {
  const [inputData, setInputData] = useState("");

  const inputChange = (e) => {
    setInputData(e.target.value);
  };

  const searchHandle = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    // console.log(formProps);
  };

  return (
    <form className="search-form" onSubmit={searchHandle}>
      <input
        className="search-form__input"
        type="search"
        name="search"
        value={inputData}
        onChange={inputChange}
        placeholder={placeholder}
      />
      <Button name={"Искать"} />
    </form>
  );
}
