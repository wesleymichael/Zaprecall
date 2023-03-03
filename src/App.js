import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TelaInicial from "./components/TelaInicial";
import GlobalStyle from "./styles/GlobalStyle";
import Questions from "./components/Questions";
import deck from "./deck";

export default function App() {
  const [respondidos, setRespondidos] = useState(0);
  const tamanhoDeck = deck.length;

  function contador(){
    setRespondidos(respondidos+1);
  }

  return (
    <>
      <GlobalStyle />
      <TelaInicial />
      <Header/>
      <Questions deck={deck} contador={contador} />
      <Footer respondidos={respondidos} total={tamanhoDeck} />
    </>
  );
}