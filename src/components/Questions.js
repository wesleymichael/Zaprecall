import styled from "styled-components";
import Question from "./Question";

export default function Questions({deck, contador, filaRespostas, setFilaRespostas, setAlgumaErrada}){

    return(
        <ContainerQuestions>
            {deck.map( (card, i) => (
                <Question
                    key={i}
                    card={card}
                    numeroPergunta={i+1}
                    contador={contador}
                    filaRespostas={filaRespostas}
                    setFilaRespostas={setFilaRespostas}
                    setAlgumaErrada={setAlgumaErrada}
                />
            ))}
        </ContainerQuestions>
    )
}

const ContainerQuestions = styled.div`
    margin-top: 130px;
    margin-bottom: 180px;
`