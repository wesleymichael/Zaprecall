import styled from "styled-components"
import logo from "../assets/logo.png"

export default function Header() {
    return (
        <HeaderStyled>
            <img src={logo} alt='logo' />
            <h1>ZapRecall</h1>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    width: 100%;
    height: 130px;
    position: fixed;
    top: 0;
    left: 50%;
    translate: -50% 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FB6B6B;

    img{
        width: 52px;
        height: 60px;
    }

    h1{
        display: flex;
        align-items: center;
        text-align: center;
        padding-left: 25px;
        font-family: 'Righteous';
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
    }
`