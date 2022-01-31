import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Form = styled.div`
    width: 50%;
    margin-bottom: 70px;
`

export const TypeIcons = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
    button {
        border: none;
        background: none;
    }

    .inative {
        opacity: 0.7;
    }

    img {
        width: 40px;
        height: 40px;
        margin: 10px;
        cursor: pointer;

        &:hover {
            opacity: 0.5;
        }
    }
`


export const Input = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    span {
        color: #707070;
        margin: 5px 0;
    }
    input {
        font-size: 16px;
        padding: 8px;
        border: none;
        border-bottom: 1px solid #EE6B26;
    }
`

export const TextArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    span {
        color: #707070;
        margin: 5px 0;
    }
    textarea {
        font-size: 16px;
        padding: 8px;
        border: 1px solid #EE6B26;
        border-radius: 8px;
        resize: none;
    }
`

export const Options = styled.div`
    display: flex;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;
        font-weight: bold;
        color: #EE6B26;
        font-size: 16px;
    }

    button {
        font-weight: bold;
        color: #20295F;
        border: none;
        background: none;
        font-size: 16px;
        cursor: pointer;

        &:hover {
            opacity: 0.5;
        }

    }

`


export const Save = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    button {
        width: 100%;
        padding: 20px;
        background: #EE6B26;
        color: #FFF; 
        font-weight: bold;
        font-size: 16px;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        
        &:hover {
            opacity: 0.5;
        }
    }
`