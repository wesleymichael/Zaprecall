import { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import deck from "./deck";
import TelaInicial from "./components/TelaInicial";
import Header from "./components/Header";
import Questions from "./components/Questions";
import Footer from "./components/Footer";

export default function App() {
  const [respondidos, setRespondidos] = useState(0);
  const [statusApp, setStatusApp] = useState('tela_inicial');
  const [filaRespostas, setFilaRespostas] = useState([])
  const [algumaErrada, setAlgumaErrada] = useState(false);
  const tamanhoDeck = deck.length;

  function contador(){
    setRespondidos(respondidos+1);
  }

  return (
    <>
      <GlobalStyle />
      <TelaInicial statusApp={statusApp} setStatusApp={setStatusApp} />

      <TelaZapRecall statusApp={statusApp} >
        <Header />
        <Questions
          deck={deck}
          contador={contador}
          filaRespostas={filaRespostas}
          setFilaRespostas={setFilaRespostas}
          setAlgumaErrada={setAlgumaErrada}
        />
        <Footer 
          respondidos={respondidos}
          total={tamanhoDeck}
          filaRespostas={filaRespostas}
          algumaErrada={algumaErrada}
        />
      </TelaZapRecall>
    </>
  );
}

const TelaZapRecall = styled.div`
  display: ${props => props.statusApp === 'tela_inicial' ? 'none' : ''};
`