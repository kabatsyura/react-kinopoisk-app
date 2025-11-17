import "./App.css";
import "@fontsource/poppins";
import { Header } from "./components/Header/Header";
import { Paragraph } from "./components/Paragraph/Paragraph";
import { HeaderLayout } from "./layouts/HeaderLayout/HeaderLayout";
import { SearchForm } from "./components/SearchForm/SearchForm";
import { NavBarLayout } from "./layouts/NavBarLayout/NavBarLayout";
import { Logo } from "./components/Logo/Logo";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBarLayout>
        <Logo />
        <NavBar />
      </NavBarLayout>
      <HeaderLayout>
        <Header header={"Поиск"} />
        <Paragraph
          text={
            "Введите название фильма, сериала или мультфильма для поиска и добавления в избранное."
          }
          fontSize={"16px"}
        />
        <SearchForm placeholder={"Введите название"} />
      </HeaderLayout>
    </>
  );
}

export default App;
