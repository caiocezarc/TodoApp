import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 60px;
    background: #20295F;
    display: flex;
    border-bottom: 5px solid #EE6B26;
`


export const LeftSide = styled.div`
    width: 50%;
    heigth: 70px;
    display: flex;
    align-items: center;
    padding-left: 10px;

    img {
        width: 80px;
        heigth: 40px;
    }

`

export const RightSide = styled.div`
    width: 50%;
    heigth: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    a, button{
        color: #FFF;
        font-size: 14px;
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px;

        &:hover{
            color: #EE6B26;
        }

    }

    #notification {
        img {
            width: 20px;
            heigth: 30px;           
        }

        span {
            background: #FFF;
            color: #EE6B26;
            padding: 2px 6px;
            border-radius: 50%;
            position: relative;
            top: -13px;
            right: 5px;
        }

        &:hover{
            opacity: 0.5;
        }

    }
    .dividir::after{
        content: "|";
        margin: 0 10px;
        color: #FFF;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }
`