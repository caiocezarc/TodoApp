import React from 'react';
import * as S from './styles';

import filter from '../../assets/filter.png';

interface FilterCardProps  {
    title: string;
    actived: boolean;
}

const FilterCard: React.ElementType = ({title, actived}: FilterCardProps) => {
    return (
        <S.Container actived={actived}>
            <img src={filter} alt="Filter"/>
            <span>{title}</span>
        </S.Container>
    )

}

export default FilterCard;

