import styled from "styled-components";
import Question from "./Question";
import { useState } from "react";

export default function Questions({deck}){
    const [respondidos, setRespondidos] = useState([])

    return(
        <ContainerQuestions>
            {deck.map( (card, i) => (
                <Question 
                    key={i}
                    card={card}
                    cont={i+1}
                    respondidos={respondidos}
                    setRespondidos={setRespondidos}
                />
            ))}
        </ContainerQuestions>
    )
}

const ContainerQuestions = styled.div`
    margin-top: 130px;
    margin-bottom: 95px;
`