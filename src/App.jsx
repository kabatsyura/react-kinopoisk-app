import "./App.css";
import "@fontsource/poppins";
import { Header } from "./components/Header/Header";
import { Paragraph } from "./components/Paragraph/Paragraph";
import { Button } from "./components/Button/Button";

function App() {
  return (
    <>
      <Header header={"Поиск"} />
      <Paragraph
        text={
          "Введите название фильма, сериала или мультфильма для поиска и добавления в избранное."
        }
        fontSize={"16px"}
      />
      <Button name={"Искать"} />
    </>
  );
}

export default App;
