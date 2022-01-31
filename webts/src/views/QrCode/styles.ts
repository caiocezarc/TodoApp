import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; 
`

export const Content = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        color: #EE6B26;
    }
    p {
        color: #20295F;
    }


`
export const QrCodeArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const ValidationCode = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;

    span {
        text-transform: uppercase;
        font-weight: bold;
    }

    input {
        font-size: 16px;
        padding: 10px;
        text-align: center;
    }
    button {
        padding: 10px;
        margin-top: 10px;
        background: #EE6B26;
        border: none;
        border-radius: 10px;
        font-weight: bold;
        font-size: 18px;
        color: #FFF;
        cursor: pointer;

        &:hover {
            opacity: 0.5;
            background: #20295F;
        }   
    }
`