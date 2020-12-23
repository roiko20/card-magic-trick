import styled, { keyframes , css } from 'styled-components';
import { fadeIn , tada } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;
const tadaAnimation = keyframes`${tada}`;

export const Header = styled.header`
    width: 100%;
    text-align:center;
    font-size: 46px;
    font-weight: bold;
    color: whitesmoke;
    padding: 15px 0;
    font-family: 'Fredoka One', Arial, Helvetica, sans-serif;
    @media (max-width: 1200px) {
        font-size: 42px;
    }
    @media (max-width: 680px) {
        font-size: 40px;
    }
    @media (max-width: 520px) {
        font-size: 36px;
    }
    @media (max-width: 480px) {
        font-size: 28px;
        padding: 15px 0;
    }
    @media (max-width: 380px) {
        font-size: 22px;
    }
`;

export const CardsWrapper = styled.div`
    animation: ${props => props.class === "finalCard" ? css`1.5s ${fadeInAnimation}` : "none"};
    display: flex;
    justify-content: center;
    margin: auto;
    padding-top: 30px;
    padding-bottom: 70px;
    padding-bottom: ${props => props.class === "finalCard" ? "30px" : "70px"};
    width: 99%;
`;

export const CardLayout = styled.div`
    overflow: hidden;
    align-items: center;
    margin: -6px;
    &:first-child {
        padding-left: 40px;
    }
     &:last-child {
        overflow: visible;
        padding-right: 40px;
    }
    @media (max-width: 480px) {
        padding: 20px 0;
            &:first-child {
                padding-left: 15px;
        }
            &:last-child {
                overflow: visible;
                padding-right: 15px;
        }
    }
`;

export const PileCardLayout = styled.div`
    overflow: hidden;
    align-items: center;
    margin: -3px;
    &:first-child {
         padding-left: 40px;
    }
      &:last-child {
         overflow: visible;
         padding-right: 40px;
    }
    @media (max-width: 1250px) {
      &:first-child {
         padding-left: 25px;
    }
      &:last-child {
         overflow: visible;
         padding-right: 25px;
    }
    }
    @media (max-width: 1100px) {
        margin: auto;
        margin-top: -35px;
        max-height: 100px;
            &:first-child {
                padding-left: 0;
                margin-top:5px;
            }
            &:last-child {
                padding-right: 0;
        }
    }
    @media (max-width: 630px) {
        margin-top: -45px;
    }
    @media (max-width: 380px) {
        margin-top: -55px;
    }
`;

export const InstructionsLayout = styled.div` {
    animation: 1s ${tadaAnimation};
    width: fit-content;
    margin: auto;
    padding: 0 20px;    
    font-size: 20px;
    color: white;
    text-align:center;
    display: flex;
    justify-content: center;
    white-space: pre;
    line-height: 140%;
    font-family: 'Rubik', sans-serif;
    @media (max-width: 1200px) {
        font-size: 18px;
    }
    @media (max-width: 680px) {
        font-size: 18px;
        line-height: 120%;
    }
    @media (max-width: 580px) {
        font-size: 16px;
    }
    @media (max-width: 520px) {
        font-size: 15px;
    }
    @media (max-width: 470px) {
        font-size: 14px;
    }
    @media (max-width: 440px) {
        font-size: 13px;
    }
    @media (max-width: 410px) {
        font-size: 12px;
    }
    @media (max-width: 380px) {
        font-size: 11px;
    }
`;

export const PileWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin:auto;
    padding: 45px 0;
    width: 31%;
    @media (max-width: 1100px) {
        flex-direction: column;
        padding-top: 30px;
        padding-bottom: 180px;
        margin-bottom: 20px;
    }
    @media (max-width: 630px) {
        padding-bottom: 155px;
        margin-bottom: 20px;
    }
    @media (max-width: 515px) {
        padding-bottom: 110px;
        padding-top: 30px;
    }
    @media (max-width: 450px) {
        padding-bottom: 90px;
    }
    @media (max-width: 380px) {
        padding-top: 20px;
        padding-bottom: 60px;
        margin-bottom: 10px;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    width: 10vw;
    margin: auto;
    margin-top: 45px;
    padding-bottom: 20px;
    @media (max-width: 480px) {
        margin-top: 25px;
    }
`;

export const PileButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 60px;
    margin-bottom: 20px;
    @media (max-width: 1515px) {
        margin-top: 85px;
    }
    @media (max-width: 1400px) {
        margin-top: 65px;
        margin-bottom: 10px;
    }
    @media (max-width: 1200px) {
        margin-top: 55px;
        margin-bottom: 10px;
    }
    @media (max-width: 1100px) {
        margin-top: 45px;
        margin-bottom: 0;
    }
    @media (max-width: 740px) {
        margin-top: 35px;
    }
    @media (max-width: 480px) {
        margin-top: 25px;
    }
`;

export const Button =  styled.button`
    background-image: linear-gradient(to right, rgba(54,139,208,1) 0%, rgba(55,180,240,1) 30%, rgba(105,200,245,1) 100%);
    max-width: ${props => props.name !== "deckButton" ? "13%" : "auto"};
    flex: 1 1 auto;
    margin: 10px;
    padding: 17px;
    text-align: center;
    letter-spacing: 0.04em;
    font-family: 'Fredoka One', Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    font-size: 23px;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 2px 2px 8px black;
    border: 0;
    outline: none;
    @media (max-width: 1690px) {
        font-size: ${props => props.name === "deckButton" ? "23px" : "20px"};
    }
    @media (max-width: 1515px) {
        font-size: ${props => props.name === "deckButton" ? "23px" : "18px"};
    }
    @media (max-width: 1400px) {
        font-size: ${props => props.name === "deckButton" ? "20px" : "17px"};
    }
    @media (max-width: 1345px) {
        font-size: ${props => props.name === "deckButton" ? "20px" : "15px"};
        padding: ${props => props.name === "deckButton" ? "17px" : "15px"};
    }
    @media (max-width: 1200px) {
        font-size: ${props => props.name === "deckButton" ? "20px" : "13px"};
        padding: ${props => props.name === "deckButton" ? "17px" : "13px"};
    }
    @media (max-width: 970px) {
        max-width: ${props => props.name !== "deckButton" ? "17%" : "auto"};
    }
    @media (max-width: 740px) {
        max-width: ${props => props.name !== "deckButton" ? "19%" : "auto"};
    }
    @media (max-width: 680px) {
        max-width: ${props => props.name !== "deckButton" ? "25%" : "auto"};
    }
    @media (max-width: 520px) {
        font-size: ${props => props.name === "deckButton" ? "14px" : "12px"};
    }
    @media (max-width: 480px) {
        font-size: ${props => props.name === "deckButton" ? "13px" : "11px"};
        padding: ${props => props.name === "deckButton" ? "14px" : "12px"};
        max-width: ${props => props.name !== "deckButton" ? "28%" : "auto"};
    }
    @media (max-width: 380px) {
        font-size: ${props => props.name === "deckButton" ? "12px" : "11px"};
        padding: ${props => props.name === "deckButton" ? "13px" : "11px"};
        max-width: ${props => props.name !== "deckButton" ? "30%" : "auto"};
    }
    @media (hover: hover) {
         &:hover {
             background-position: right center;
             box-shadow: 5px 5px 10px black;
    }
`;

export const Wrapper = styled.div`
    margin: 40px;
    gradient(243.6deg, #FFFFFF 0.79%, #EAEFFF 100%);
    box-shadow: 0px 0px 46px rgba(0, 0, 0, 0.12);
    border-radius: 20px;
    background: linear-gradient(to left, rgba(94,168,67,1) 0%, rgba(56,149,45,1) 100%);
    @media (max-width: 1400px) {
       min-height: 92vh;
    }
    @media (max-width: 780px) {
        min-height: 93vh;
        margin: 30px;
    }
    @media (max-width: 630px) {
        margin: 20px;
        min-height: 95vh;
    }
    @media (max-width: 480px) {
        margin: 10px;
        min-height: 97vh;
    }
`;
