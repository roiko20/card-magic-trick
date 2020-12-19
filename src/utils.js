// const cardValues = [
//     '2',
//     '3',
//     '4',
//     '5',
//     '6',
//     '7',
//     '8',
//     '9',
//     '10',
//     'JACK',
//     'QUEEN',
//     'KING',
//     'ACE'
// ];

export const concatWithComma = ({...cards}, length) => {
    let res = '';
    for (let i = 0 ; i < length ; i++) {
        res = res + `${cards[i].code}`;
        if (i !== 20){
            res = res + `,`;
        }
    }

    return res;
};

export const createPilesCardStrings = ({...cards}, length) => {
    let cardString1 = '';
    let cardString2 = '';
    let cardString3 = '';
    let i=0;
    let j=1;
    for ( let z=2 ; z < length ; z=z+3 ) {
        cardString1 = cardString1 + `${cards[i].code}`;
        cardString2 = cardString2 + `${cards[j].code}`;
        cardString3 = cardString3 + `${cards[z].code}`;
        if (i !== 18){
            cardString1 = cardString1 + `,`;
            cardString2 = cardString2 + `,`;
            cardString3 = cardString3 + `,`;
        }
        i=i+3;
        j=j+3;
    }

    return [cardString1,cardString2,cardString3];
}

export const createMainPileCardString = (cardStringFirstPile, cardStringSecondPile, cardStringThirdPile, selectedPile) => {
    let res = '';
    if (selectedPile === "firstPile") {
        res = cardStringSecondPile + `,` + cardStringFirstPile + `,` + cardStringThirdPile;
    }
    else if (selectedPile === "secondPile") {
        res = cardStringFirstPile + `,` + cardStringSecondPile + `,` + cardStringThirdPile;
    }
    else {
        res = cardStringFirstPile + `,` + cardStringThirdPile + `,` + cardStringSecondPile;
    }

    return res;
}
