import React from 'react';

import * as S from './styles';

import Qr from 'qrcode.react';

import { Navigate } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';


const QrCode: React.ElementType = () => {
    const [mac, setMac] = React.useState<string>();
    const [redirect, setRedirect] = React.useState<boolean>();
    async function SaveMac() {
        
        if(!mac){
            alert("Você precisa informar o macaddress !");
        } else {
            await localStorage.setItem('@todo/macaddress', mac!);
            setRedirect(true);
        }

    }
    
    React.useEffect(() => {
        if(redirect) {
            window.location.reload();
        }
    }, [redirect]) 

    return (
        <S.Container>
            {redirect && <Navigate to="/"/>}
            <Header/>
            <S.Content>
                <h1>CAPTURE O QR CODE PELO CELULAR !</h1>
                <p>suas atividades serão sincronizadas com a do seu celular!</p>
                <S.QrCodeArea>
                    <Qr value="getmacaddress" size={350}/>
                </S.QrCodeArea>
                <S.ValidationCode>
                    <span>Digite a numeração que apareceu no celular</span>
                    <input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMac(e.target.value)} value={mac}/>
                    <button type="button" onClick={SaveMac}>SINCRONIZAR</button>
                </S.ValidationCode>

            </S.Content>
            <Footer/>
        </S.Container>
    )
}

export default QrCode;