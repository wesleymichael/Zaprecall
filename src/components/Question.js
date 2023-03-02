import styled from "styled-components"
import play from "../assets/seta_play.png"

export default function Question({card, cont}){
    return (
        <QuestionStyled>
            <h1>Pergunta {cont}</h1>
            <button>
                <img src={play} />
            </button>
        </QuestionStyled>
    )
}

const QuestionStyled = styled.div`
    height: 65px;
    width: 300px;
    margin: 25px auto;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;

    h1{
        font-family: 'Recursive';
        font-weight: 700;
        font-size: 16px;
        color: #333333;
    }

    button{
        border: none;
        background-color: white;
    }
`