import styled from "styled-components";
import {ExibirPergunta} from "./CardPergunta";

export default function CardResposta({statusCard, card, avaliarCard}){
    return (
        <ExibirResposta statusCard={statusCard} >
            <h1 data-test="flashcard-text">{card.answer}</h1>
            <div>
                <Button cor={'#FF3030'} onClick={() => avaliarCard('erro')} data-test="no-btn">
                    Não lembrei
                </Button>
                <Button cor={'#FF922E'} onClick={() => avaliarCard('quase')} data-test="partial-btn">
                    Quase não lembrei
                </Button>
                <Button cor={'#2FBE34'} onClick={() => avaliarCard('certo')} data-test="zap-btn">
                    Zap!
                </Button>
            </div>
        </ExibirResposta>
    )
}

const ExibirResposta = styled(ExibirPergunta)`
    display: ${ (props) => props.statusCard === 'exibir_resposta' ? 'flex' : 'none'};
    div{
        position: absolute;
        bottom: 10px;
        right: 0;
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding: 0 10px;

        button{
            position: static;
            background-color: #FF3030;
            border-radius: 5px;
            width: 86px;
            height: 37px;
            font-family: 'Recursive';
            font-weight: 400;
            font-size: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #FFFFFF;
            padding: 10px;
        }
    }
`
const Button = styled.button`
    &&&{
        background-color: ${ (props) => props.cor && props.cor};
    }
`