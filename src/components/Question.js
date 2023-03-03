import { useState } from "react";
import seta_play from "../assets/seta_play.png";
import seta_virar from "../assets/seta_virar.png";
import icone_certo from "../assets/icone_certo.png";
import icone_erro from "../assets/icone_erro.png";
import icone_quase from "../assets/icone_quase.png";
import CardVirado from "./CardVirado";
import {CardExibido} from "./CardPergunta";
import CardResposta from "./CardResposta";

export default function Question({card, numeroPergunta, contador, filaRespostas, setFilaRespostas, setAlgumaErrada}){
    const [statusCard, setStatuscard] = useState('virado');
    //VIRADO, EXIBIR_PERGUNTA, EXIBIR_RESPOSTA, AVALIADO
    const [iconePergunta, setIconePergunta] = useState(seta_play);
    //seta_play, icone_certo, icone_erro, icone_quase
    const [cor, setCor] = useState('#333333');
    const [iconeBtn, setIconeBtn] = useState('play-btn')

    function mostrarPergunta(card){
        setStatuscard('exibir_pergunta');
    }

    function mostrarResposta(card){
        setStatuscard('exibir_resposta');
    }

    function avaliarCard(resultado){
        setStatuscard('avaliado');
        contador();
        switch(resultado){
            case 'erro':
                setIconePergunta(icone_erro);
                setCor('#FF3030');
                setIconeBtn('no-icon');
                filaRespostas.push({src: icone_erro, icone:'no-icon'});
                setFilaRespostas(filaRespostas);
                setAlgumaErrada(true);
                break;
            
            case 'quase':
                setIconePergunta(icone_quase);
                setCor('#FF922E');
                setIconeBtn('partial-icon');
                filaRespostas.push({src: icone_quase, icone:'partial-icon'});
                setFilaRespostas(filaRespostas);
                break;
            
            case 'certo':
                setIconePergunta(icone_certo);
                setCor('#2FBE34');
                setIconeBtn('zap-icon');
                filaRespostas.push({src: icone_certo, icone:'zap-icon'});
                setFilaRespostas(filaRespostas);
                break;

            default:
                break;
        }
    }

    switch (statusCard){
        case 'exibir_pergunta':
            return (
                <div data-test="flashcard">
                    <CardExibido 
                        statusCard={statusCard}
                        card={card}
                        mostrarResposta={mostrarResposta}
                        seta_virar={seta_virar}
                    />
                </div>
            );
        
        case 'exibir_resposta':
            return (
                <div data-test="flashcard">
                    <CardResposta
                        statusCard={statusCard}
                        card={card}
                        avaliarCard={avaliarCard}
                    />
                </div>
            );

        default:
            return (
                <div data-test="flashcard">
                    <CardVirado 
                        statusCard={statusCard}
                        cor={cor}
                        numeroPergunta={numeroPergunta}
                        mostrarPergunta={mostrarPergunta}
                        card={card}
                        iconeBtn={iconeBtn}
                        iconePergunta={iconePergunta}  
                    />
                </div>
            );
    }
}