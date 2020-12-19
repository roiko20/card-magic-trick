import axios from 'axios';
import { concatWithComma } from './utils.js';

const api =axios.create({
    baseURL: 'https://deckofcardsapi.com/api/deck/'
});

export const createDeck = async () => {
    const { data } = await api.get('new/draw/', {
        params: {
            count: 21
        }
    });

    const { cards } = data;

    const cardsCodesString = concatWithComma({...cards}, 21);
    const { deckId } = await createShuffledPartialDeck(cardsCodesString);

    return { cards , deckId };

};

export const createShuffledPartialDeck = async (cardString) => {
    const { data } = await api.get(`/new/shuffle/`, {
        params: {
            cards: cardString
        }
    });

    const { deck_id : deckId } = data;

    return { deckId };
};

export const dealInPile = async ( deckId , pileName , cardString ) => {

    await api.get(`${deckId}/pile/${pileName}/add/`, {
        params: {
            cards: cardString
        }
    });
};

export const drawCardsFromDeck = async (deckId, cardsToDraw = 21) => {
    await api.get(`${deckId}/draw/`, {
        params: {
            count: cardsToDraw
        }
    })
};

export const listCardsInFirstPile = async (deckId) => {
    const { data } = await api.get(`${deckId}/pile/firstPile/list/`);

    const { piles } = data;
    const { firstPile } = piles;
    const { cards } = firstPile;

    return { cards };
};

export const listCardsInSecondPile = async (deckId) => {
    const { data } = await api.get(`${deckId}/pile/secondPile/list/`);

    const { piles } = data;
    const { secondPile } = piles;
    const { cards } = secondPile;

    return { cards };
};

export const listCardsInThirdPile = async (deckId) => {
    const { data } = await api.get(`${deckId}/pile/thirdPile/list/`);

    const { piles } = data;
    const { thirdPile } = piles;
    const { cards } = thirdPile;

    return { cards };
};

export const createMainPile = async (deckId , cardString) => {
    await api.get(`${deckId}/pile/mainPile/add/`, {
        params: {
            cards: cardString
        }
    });

};

export const drawPilesCardsFromMainPile = async (deckId, cardsToDraw = 21) => {
    const {data} = await api.get(`${deckId}/pile/mainPile/draw/?count=21`, {
        params: {
            count: cardsToDraw
        }
    });

    const { cards } = data;

    return { cards };
};

//
//     const { cards } = data;
//     const cardsCodesString = concatWithComma({...cards});
//     const { deckId : finalDeckId } = await createPartialDeck(cardsCodesString);
//     return { cards , finalDeckId };
//
// };

// export const createPile = async (deckId , pileName , cards) => {
//     const { success } = await api.get(`${deckId}/pile/${pileName}/add/`, {
//         params: {
//             cards: `${cards}`
//         }
//     })
//     // console.log({success});
// };

// export const DrawCardsFromPile = async (deckId, pileName, cardsToDraw = 7) => {
//     const { data } = await api.get(`${deckId}/pile/${pileName}/draw/`, {
//         params: {
//             count: cardsToDraw
//         }
//     });
//
//     const { cards } = data;
//     return {}
// }

