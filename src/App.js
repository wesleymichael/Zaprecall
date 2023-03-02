import Footer from "./components/Footer";
import Header from "./components/Header";
import TelaInicial from "./components/TelaInicial";
import GlobalStyle from "./styles/GlobalStyle";
import deck from "./deck";
import Questions from "./components/Questions";
import { useState } from "react";

export default function App() {

  return (
    <>
      <GlobalStyle />
      <TelaInicial />
      <Header/>
      <Questions deck={deck} />
      <Footer />
    </>
  );
}