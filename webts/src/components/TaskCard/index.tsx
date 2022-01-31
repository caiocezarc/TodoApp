import React, { useMemo } from 'react';
import * as S from './styles';

import { format } from 'date-fns';

import typeIcons from '../../utils/typeIcons.js';



interface TaskCardProps {
    type: number;
    title: string;
    when: string;
    done: boolean;
}

const TaskCard: React.ElementType =  ({ type, title, when, done}: TaskCardProps) => {

   const date = useMemo(() => format(new Date(when), "dd/MM/yyyy"), [when]);
   const hour = useMemo(() => format(new Date(when), "HH:mm"), [when]);

    return (
        <S.Container done={done}>
            <S.TopCard>
                <img src={typeIcons[type]} alt="Ícone da tarefa"></img>
                <h3>{title}</h3>
            </S.TopCard>
            <S.BottomCard>
                <strong>{date}</strong>
                <span>{hour}</span>
            </S.BottomCard>
        </S.Container>
    )
}

export default TaskCard;