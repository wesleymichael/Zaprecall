import styled from "styled-components";
import party from '../assets/party.png';
import sad from '../assets/sad.png';

export default function Footer({respondidos, total, filaRespostas, algumaErrada}){
    return (
        <FooterStyled data-test="footer">
            <ContainerMensagem respondidos={respondidos} total={total} data-test="finish-text">
                <div>
                    <img src={algumaErrada ? sad : party} alt='icone'/>
                    <p>{algumaErrada ? 'Putz...' : 'Parabéns!'}</p>
                </div>
                <div>
                    {algumaErrada ? 'Ainda faltam alguns... Mas não desanime!' : 'Você não esqueceu de nenhum flashcard!'}
                </div>
            </ContainerMensagem>
            <p>{respondidos}/{total} CONCLUÍDOS</p>
            <div>
                {filaRespostas.map( (e) => ( 
                    <img src={e.src} alt={e.icone} data-test={e.icone}/>
                ) )}
            </div>
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
    width: 100%;
    min-height: 70px;
    position: fixed;
    bottom: 0px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    img{
        padding: 2px;
    }
`;

const ContainerMensagem = styled.div`
    display: ${({respondidos, total}) => respondidos === total ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 222px;
    padding-top: 10px;
    div{
        display: flex;
        text-align: center;
        margin-bottom: 15px;
        p{
            font-weight: 700;
            padding-left: 5px;
        }
    }
`;