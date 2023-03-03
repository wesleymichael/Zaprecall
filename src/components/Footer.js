import styled from "styled-components"

export default function Footer({respondidos, total, filaRespostas}){
    return (
        <FooterStyled data-test="footer">
            <p>{respondidos}/{total} CONCLUÍDOS</p>
            <div>
                {filaRespostas.map( (e) => ( 
                    <img src={e} alt='icone'/>
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
`