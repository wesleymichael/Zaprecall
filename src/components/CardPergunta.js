import styled from "styled-components";

export function CardExibido({statusCard, card, mostrarResposta, seta_virar}){
    return (
        <ExibirPergunta statusCard={statusCard}>
            <h1 data-test="flashcard-text">{card.question}</h1>
            <button onClick={() => mostrarResposta(card)} data-test="turn-btn">
                <img src={seta_virar} alt="virar"/>
            </button>
        </ExibirPergunta>
    );
}

export const ExibirPergunta = styled.div`
    display: ${ (props) => props.statusCard === 'exibir_pergunta' ? 'flex' : 'none'};
    width: 300px;
    min-height: 131px;
    margin: 25px auto;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    position: relative;
    z-index: 0;
    align-items: flex-start;
    word-break: break-word;

    h1{
        font-family: 'Recursive';
        font-weight: 400;
        margin-top: 15px;
        margin-bottom: 60px;
    }

    button{
        border: none;
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