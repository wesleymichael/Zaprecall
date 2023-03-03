import styled from "styled-components"
import logo from "../assets/logo.png"

export default function TelaInicial({statusApp, setStatusApp}){
    function iniciarZapRecall(){
        setStatusApp('inicio_ZapRecall')
    }
    return (
        <DivTelaInicial statusApp={statusApp} >
            <img src={logo} alt="logo" />
            <h1>ZapRecall</h1>
            <button onClick={() => iniciarZapRecall()}>Inicial Recall</button>
        </DivTelaInicial>
    );
}

const DivTelaInicial = styled.div`
    display: ${ (props) => props.statusApp === 'tela_inicial' ? 'flex' : 'none'};
    height: 90vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 400;

    img{
        width: 136px;
        height: 161px;
        margin-bottom: 30px;
    }
    h1{
        font-family: 'Righteous';
        font-size: 36px;
        color: #FFFFFF;
        margin-bottom: 30px;
    }
    button{
        width: 246px;
        height: 54px;
        background: #FFFFFF;
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        font-family: 'Recursive';
        font-size: 18px;
        color: #D70900;
    }
`
