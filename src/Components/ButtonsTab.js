import React from 'react';
import { PileButtonsWrapper , Button } from '../Layout.components';

const ButtonsTab = ({ handleClickPile }) => (
    <PileButtonsWrapper>
        <Button name="firstPile" onClick={handleClickPile}>First Pile</Button>
        <Button name="secondPile" onClick={handleClickPile}>Second Pile</Button>
        <Button name="thirdPile" onClick={handleClickPile}>Third Pile</Button>
    </PileButtonsWrapper>
)

export default ButtonsTab;
