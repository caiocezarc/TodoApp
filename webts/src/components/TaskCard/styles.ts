import styled from 'styled-components';

interface ContainerProps {
    done: boolean;
}


export const Container = styled.div<ContainerProps>`
    width: 250px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 20px;
    box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.73);
    border-radius: 5px;
    cursor: pointer;
    opacity: ${(props) => props.done ? 0.5 : 1};

    transition: all 0.3s ease;

    &:hover {
        opacity: 0.5;
    }
    
`

export const TopCard = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    img {
        width: 80px;   
        height: 80px; 
    }
    
    h3 {
        color: #000;
        margin-top: 10px;
    }
`

export const BottomCard = styled.div`
    width: 100%;
    display: flex;
    margin-top: 20px;
    justify-content: space-around;

    strong {
        color; #EE6B26;
        font-weight: bold;
    }

    span {
        color: #707070;
    }

`