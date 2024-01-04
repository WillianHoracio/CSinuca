import './Menu.css'
import { CiUser } from "react-icons/ci";

const Menu = ({ changeMenu }) => {

    
    const clickMenuItem = (item) => () => {
        changeMenu(item)
    }

    return (
        <div className='menuBar'>

            <div className='menuBar_item' onClick={clickMenuItem('classificacao')}>
                <label>Classificação</label>
            </div>

            <div className='menuBar_item' onClick={clickMenuItem('edicao')}>
                <label> Edição </label>
            </div>

            <div className='menuBar_item' onClick={clickMenuItem('jogar')}>
                <label> Jogar </label>
            </div>
            <div className='menuBar_item' onClick={clickMenuItem('novo jogador')}>
                <label> Novo Jogador </label>
            </div>

            <div className='menuBar_item' onClick={clickMenuItem('login')}>
                    <label>Login</label>
                    <CiUser size={40}/>
            </div>
        </div>
    )
}

export default Menu