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
    const [iconePergunta, setIconePergunta] = useState(seta_play);
    //seta_play, icone_certo, icone_erro, icone_quase
    const [cor, setCor] = useState('#333333')
    

    function mostrarPergunta(card){
        setRespondidos([...respondidos, card]);
        setStatuscard('exibir_pergunta')
    }

    function mostrarResposta(card){
        setStatuscard('exibir_resposta');
    }

    function avaliarCard(resultado){
        setStatuscard('avaliado');
        switch(resultado){
            case 'erro':
                setIconePergunta(icone_erro);
                setCor('#FF3030');
                break;
            
            case 'quase':
                setIconePergunta(icone_quase);
                setCor('#FF922E');
                break;
            
            case 'certo':
                setIconePergunta(icone_certo);
                setCor('#2FBE34');
                break;

            default:
                break;
        }
    }

    return (
        <>
            <Virado statusCard={statusCard} cor={cor} >
                <h1>Pergunta {cont}</h1>
                <button onClick={() => mostrarPergunta(card)} disabled={statusCard==='avaliado'}>
                    <img src={iconePergunta} alt="icone"/>
                </button>
            </Virado>

            <ExibirPergunta statusCard={statusCard}>
                <h1>{card.question}</h1>
                <button onClick={() => mostrarResposta(card) }>
                    <img src={seta_virar} alt="virar"/>
                </button>
            </ExibirPergunta>

            <ExibirResposta statusCard={statusCard} >
                <h1>{card.answer}</h1>
                <div>
                    <Button cor={'#FF3030'} onClick={() => avaliarCard('erro')}>
                        Não lembrei
                    </Button>
                    <Button cor={'#FF922E'} onClick={() => avaliarCard('quase')} >
                        Quase não lembrei
                    </Button>
                    <Button cor={'#2FBE34'} onClick={() => avaliarCard('certo')} >
                        Zap!
                    </Button>
                </div>
            </ExibirResposta>
        </>
    )
}
const Virado = styled.div`
    display: ${ (props) => (props.statusCard === 'virado' || props.statusCard === 'avaliado') ? 'flex' : 'none'};
    color: ${ (props) => props.cor};
    text-decoration: ${(props) => props.statusCard === 'avaliado' ? "line-through" : 'none'};
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