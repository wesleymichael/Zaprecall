import styled from "styled-components"
import logo from "../assets/logo.png"

export default function TelaInicial(){
    return (
        <DivTelaInicial statusTelaInicial={'jogando'} >
            <img src={logo} alt="logo" />
        </DivTelaInicial>
    );
    
}

//Algo assim?
const DivTelaInicial = styled.div`
    display: ${ (props) => props.statusTelaInicial === 'jogando' ? 'none' : 'flex'};
`
