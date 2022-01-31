import styled from 'styled-components';

interface ContainerProps {
    actived: boolean;
}

export const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 60px;
    background: ${props => props.actived ? '#EE6B26' : '#20295F'};
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 6px;
    cursor: pointer;

    img {
        width: 25px;
        height: 25px;
    }

    span {
        color: #FFF;
        font-weight: bold;
        align-self: flex-end;
        font-size: 16px;
    }

    &:hover{
        background: #EE6B26;
    }
`

