import { useEffect, useState } from 'react';
import './Partida.css';
import { LuPlusCircle } from "react-icons/lu";

const Partida = ({ jogadorSelecionado }) => {
    
    const [newGame, setNewGame] = useState(false);
    const [p1, setP1] = useState({})
    const [p2, setP2] = useState({})
    const [pickOrder, setPickOrder] = useState(false)

 
    useEffect(() => {
        if (pickOrder) {
            setP1(jogadorSelecionado)
            setPickOrder(false)
        } else {
            setP2(jogadorSelecionado)
            setPickOrder(true)
        }
    }, [jogadorSelecionado])



    const iniciarNovoJogo = () => {
        setNewGame(true);
        console.log('hue')
    };



    return (
        <div className='partida'>
            {newGame ? (
                <form className='partida'>
                    <div className='partida_jogador'>
                        <div>
                            {p1.NOME}
                        </div> 
                    </div>
                    <div className='partida_controle'>
                    
                        {Object.keys(p2).length === 0 ? <div className='partida_x'>X</div> :
                            <div className='partida_fight'>Iniciar</div>}
                        
                    </div>
                    <div className='partida_jogador'>
                        <div>
                            {p2.NOME}
                        </div>
                    </div>
                    
                </form>
            ) : (
                
                <button className='partida_start' onClick={iniciarNovoJogo}><LuPlusCircle size={150}/></button>
            )}
        </div>
    );
};

export default Partida;
