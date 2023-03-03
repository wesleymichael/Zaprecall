import styled from "styled-components";

export default function CardVirado({statusCard, cor, numeroPergunta, mostrarPergunta, card, iconeBtn, iconePergunta}){
    return(
        <Virado statusCard={statusCard} cor={cor} >
            <h1 data-test="flashcard-text">Pergunta {numeroPergunta}</h1>
            <button onClick={() => mostrarPergunta(card)} disabled={statusCard==='avaliado'} data-test={iconeBtn}>
                <img src={iconePergunta} alt="icone"/>
            </button>
        </Virado>
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