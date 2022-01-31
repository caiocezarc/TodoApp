import React from 'react';
import  * as S from './styles';
import ITaskData from '../../types/task.type';
import isConnected from '../../utils/isConnected';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';

interface HeaderProps {
    clickNotification: () => void;
}

const Header: React.ElementType = ({ clickNotification } : HeaderProps) => {
    const [lateCount, setLateCount] = React.useState<number>();

    async function lateVerify(){
        await api.get<Array<ITaskData>>(`/task/filter/late/${isConnected}`)
        .then(response => {
            setLateCount(response.data.length);
        })
        .catch(error => error);
    }

    async function Logout() {
        await localStorage.removeItem('@todo/macaddress');
        window.location.reload();
    }

    React.useEffect(() => {
        lateVerify();
    })

    return (
       <S.Container>
           <S.LeftSide>
            <img src={logo} alt="Logo"/>
           </S.LeftSide>
           
           <S.RightSide>

            <Link to="/">INÍCIO</Link>
            <span className="dividir"></span>
            <Link to="/task">NOVA TAREFA</Link>
            <span className="dividir"></span>
            {
                !isConnected ? 
                <Link to="/qrcode">SINCRONIZAR CELULAR</Link>
                :
                <button type="button" onClick={Logout}>SAIR</button>
            }

        {    
        lateCount! > 0 &&
            <>
                <span className="dividir"></span>
                <button id="notification" onClick={() => clickNotification && clickNotification()}>
                    <img src={bell} alt="Notificação"/>
                    <span>{lateCount}</span>
                </button>
            </>}


           </S.RightSide>
       </S.Container>
       
    )
}

export default Header;