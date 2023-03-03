import styled from "styled-components"

export default function Footer({respondidos, total}){
    return (
        <FooterStyled data-test="footer">
            <p>{respondidos}/{total} CONCLUÍDOS</p>
        </FooterStyled>
    )
}


const FooterStyled = styled.footer`
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
`