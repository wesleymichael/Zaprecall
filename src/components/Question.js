import { useState } from "react";
import styled from "styled-components";
import seta_play from "../assets/seta_play.png";
import seta_virar from "../assets/seta_virar.png";
import icone_certo from "../assets/icone_certo.png";
import icone_erro from "../assets/icone_erro.png";
import icone_quase from "../assets/icone_quase.png";

export default function Question({card, cont, respondidos, setRespondidos}){
    const [statusCard, setStatuscard] = useState('virado');
    //VIRADO, EXIBIR_PERGUNTA, EXIBIR_RESPOSTA, AVALIADO 

    function mostrarPergunta(card){
        setRespondidos([...respondidos, card]);
        setStatuscard('exibir_pergunta')
    }

    function mostrarResposta(card){
        //fazer algo
    }

    return (
        <>
            <Virado statusCard={statusCard}>
                <h1>Pergunta {cont}</h1>
                <button onClick={() => mostrarPergunta(card) }>
                    <img src={seta_play} alt="play"/>
                </button>
            </Virado>
            <ExibirPergunta statusCard={statusCard}>
                <h1>{card.question}</h1>
                <button onClick={() => mostrarResposta(card) }>
                    <img src={seta_virar} alt="virar"/>
                </button>
            </ExibirPergunta>
        </>
    )
}

const Virado = styled.div`
    display: ${ (props) => props.statusCard === 'virado' ? 'flex' : 'none'};
    height: 65px;
    width: 300px;
    margin: 25px auto;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
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

const ExibirPergunta = styled(Virado)`
    display: ${ (props) => props.statusCard === 'exibir_pergunta' ? 'flex' : 'none'};
    height: 131px;
    background: #FFFFD5;
    position: relative;
    z-index: 0;
    align-items: flex-start;

    h1{
        font-weight: 400;
        margin-top: 15px;
    }

    button{
        background-color: #FFFFD5;
        position: absolute;
        bottom: 15px;
        right: 15px;
        img{
            width: 30px;
            height: 20px;
        }
    }
`