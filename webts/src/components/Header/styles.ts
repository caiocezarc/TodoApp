import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    background: #20295F;
    border-bottom: 5px solid #EE6B26;
`

export const LeftSide = styled.div`
    width: 50%;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 5px;

    img {
        width: 100px;
        height: 40px;
    }

`   
export const RightSide = styled.div`
    width: 50%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    button {
        background: none;
        border: none;
    }

    a, button {
        color: #FFF;
        font-weight: bold;
        font-size: 14px;
        text-decoration: none;
        margin: 0 10px;
        cursor: pointer;

        &:hover {
            color: #EE6B26;
        }
    }

    #notification {
        img {
            width: 20px;
            height: 25px;
        }

        span {
            background: #FFF;
            color: #EE6B26;
            padding: 3px 7px;
            border-radius: 50%;
            position: relative;
            top: -14px;
            right: 7px;
        }

        &:hover {
            opacity: 0.5; 
        }
    }

    .dividir::after {
        content: "|";
        margin: 0 10px;
        color: #FFF;
    }


`