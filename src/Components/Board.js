import React , { Component } from 'react';
import {createDeck, dealInPile, drawCardsFromDeck, listCardsInFirstPile, listCardsInSecondPile, listCardsInThirdPile , createMainPile , drawPilesCardsFromMainPile} from '../api';
import { CardsWrapper , InstructionsLayout , PileWrapper , ButtonWrapper , Button } from '../Layout.components';
import { createMainPileCardString } from "../utils";
import Card from './Card';
import PileCard from './PileCard';
import Instructions from './Instructions.js'
import ButtonsTab from './ButtonsTab'

import { createPilesCardStrings } from '../utils.js';

export default class Board extends Component {
    state = {
        deckId: null,
        firstPileName: "firstPile",
        secondPileName: "secondPile",
        thirdPileName: "thirdPile",
        selectedPile: null,
        selectedCard: null,
        cards: [],
        cardsInFirstPile: [],
        cardsInSecondPile: [],
        cardsInThirdPile: [],
        cardStringFirstPile: null,
        cardStringSecondPile: null,
        cardStringThirdPile: null,
        phase: 0
    };

async componentDidMount() {
        const { cards , deckId } = await createDeck();
        this.setState({
            deckId,
            cards
        });
    }

handleClickReady = async () => {
        const cards = this.state.cards;
        const cardStringsArray = createPilesCardStrings(cards,21);
        const cardStringFirstPile = cardStringsArray[0];
        const cardStringSecondPile = cardStringsArray[1];
        const cardStringThirdPile = cardStringsArray[2];
        await drawCardsFromDeck(this.state.deckId);
        await dealInPile(this.state.deckId , this.state.firstPileName, cardStringFirstPile);
        await dealInPile(this.state.deckId , this.state.secondPileName, cardStringSecondPile);
        await dealInPile(this.state.deckId , this.state.thirdPileName, cardStringThirdPile);
        const { cards : cardsFirstPile } = await listCardsInFirstPile(this.state.deckId);
        const { cards : cardsSecondPile } = await listCardsInSecondPile(this.state.deckId);
        const { cards : cardsThirdPile } = await listCardsInThirdPile(this.state.deckId);

        this.setState( {
            cardsInFirstPile : cardsFirstPile,
            cardsInSecondPile : cardsSecondPile,
            cardsInThirdPile: cardsThirdPile,
            cardStringFirstPile,
            cardStringSecondPile,
            cardStringThirdPile,
            phase: 1
        })
    };

handleClickPile = async ({target: {name: selectedPile}}) => {
        const newDeckCardString = createMainPileCardString(this.state.cardStringFirstPile , this.state.cardStringSecondPile , this.state.cardStringThirdPile , selectedPile);
        await createMainPile(this.state.deckId, newDeckCardString);
        const { cards } = await drawPilesCardsFromMainPile(this.state.deckId);
        const cardStringsArray = createPilesCardStrings(cards,21);
        const cardStringFirstPile = cardStringsArray[0];
        const cardStringSecondPile = cardStringsArray[1];
        const cardStringThirdPile = cardStringsArray[2];
        await dealInPile(this.state.deckId , this.state.firstPileName, cardStringFirstPile);
        await dealInPile(this.state.deckId , this.state.secondPileName, cardStringSecondPile);
        await dealInPile(this.state.deckId , this.state.thirdPileName, cardStringThirdPile);
        const { cards : cardsFirstPile } = await listCardsInFirstPile(this.state.deckId);
        const { cards : cardsSecondPile } = await listCardsInSecondPile(this.state.deckId);
        const { cards : cardsThirdPile } = await listCardsInThirdPile(this.state.deckId);
        await this.setState(prevState => {
            return {
                selectedPile,
                cards,
                cardsInFirstPile : cardsFirstPile,
                cardsInSecondPile : cardsSecondPile,
                cardsInThirdPile: cardsThirdPile,
                cardStringFirstPile,
                cardStringSecondPile,
                cardStringThirdPile,
                phase: prevState.phase + 1
            }
        })
        if (this.state.phase === 4) {
            const selectedCard = this.state.cardsInSecondPile[3].image;
            await this.setState( {
                selectedCard
            })
        }
    };

handleClickRestart = async () => {
    const { cards , deckId } = await createDeck();
    this.setState({
        phase: 0,
        deckId,
        cards
    });
};

render() {
    const {cards} = this.state;
    const cardComponents = cards.map(card => <Card key={card.code} imageUrl={card.image} class={"deckCard"}/>);
    const {cardsInFirstPile} = this.state;
    const firstPileComponents = cardsInFirstPile.map(card => <PileCard key={card.code} imageUrl={card.image}/>);
    const {cardsInSecondPile} = this.state;
    const secondPileComponents = cardsInSecondPile.map(card => <PileCard key={card.code} imageUrl={card.image}/>);
    const {cardsInThirdPile} = this.state;
    const thirdPileComponents = cardsInThirdPile.map(card => <PileCard key={card.code} imageUrl={card.image}/>);
        return (
            <div>
                <InstructionsLayout>
                    <Instructions phase={this.state.phase}/>
                </InstructionsLayout>
                    {this.state.phase <1 && <ButtonWrapper><Button name={"deckButton"} onClick={this.handleClickReady}>Ready</Button></ButtonWrapper>}
                    {this.state.phase >= 1 && this.state.phase < 4 && <ButtonsTab handleClickPile={this.handleClickPile}/>}
                {this.state.phase < 1 &&
                <CardsWrapper>
                    {cardComponents}
                </CardsWrapper>}
                {this.state.phase >= 1 && this.state.phase < 4 &&
                <div className="pilesDiv">
                    <PileWrapper>
                         {firstPileComponents}
                    </PileWrapper>
                    <PileWrapper>
                         {secondPileComponents}
                    </PileWrapper>
                    <PileWrapper>
                        {thirdPileComponents}
                    </PileWrapper>
                </div>}
                {this.state.phase >= 4 &&
                    <CardsWrapper class={"finalCard"}>
                        <Card imageUrl={this.state.selectedCard} class={"finalCard"}/>
                    </CardsWrapper>}
                {this.state.phase >= 4 &&
                    <ButtonWrapper><Button name={"deckButton"} onClick={this.handleClickRestart}>Restart</Button></ButtonWrapper>}
            </div>
        )
    }
}
