import React, { FC } from 'react';
import SecondScreenView from './SecondScreenView';

interface secondscreenProps {
    navigate: any
}

const SecondScreenContainer:FC<secondscreenProps> = ({navigate}):JSX.Element => {
    return <SecondScreenView navigate={navigate} />
};

export default SecondScreenContainer;