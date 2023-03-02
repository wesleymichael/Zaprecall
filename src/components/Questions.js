import styled from "styled-components"
import Question from "./Question"

export default function Questions({deck}){

    return(
        <ContainerQuestions>
            {deck.map( (card, i) => (
                <Question key={i} card={card} cont={i+1} />
            ) )}
        </ContainerQuestions>
    )
}

const ContainerQuestions = styled.div`
    margin-top: 130px;
    margin-bottom: 95px;
`