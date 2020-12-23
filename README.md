## Card Magic Trick With ReactJS <img alt="card" src="https://img.icons8.com/dusk/30/000000/cards.png"/><img alt="reactLogo" src="https://img.icons8.com/color/30/000000/react-native.png"/>

### Overview
Suddenly I recalled the magic trick I really enjoyed doing as a kid.
<br/>
Then I thought, why not turn it into a React app?
<br/>
Check out the final result [here](https://roiko20.github.io/card-magic-trick/).

### Installation
Clone this repository
<br/>
`yarn`
<br/>
`yarn start`
<br/>
Runs the app in the development mode.
<br/>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### About
This was my first attempt of creating a React app from scratch, following an idea that came to mind.
<br/>
The cards are fetched and managed using the [deckOfCards](https://deckofcardsapi.com/) API.
<br/>
The APIs are invoked on the client-side, using [Axios](https://github.com/axios/axios).
<br/>
I learned a lot from this experience and it was fun to make it happen, already thinking about my next idea.
<br/><br/>
By following a specific set of actions on a deck of 21 cards, you can always know which card the user picked.
<br/>
For you as the magician to know which card it was, these actions must be performed in a very specific order.
<br/>
This fact made it so that creating the logic of the app, to invoke the correct API at the right time, was the challenging part in the development process.
<br/>
If you want to read more about the concept behind this magic trick, it's right [here](https://en.wikipedia.org/wiki/Twenty-One_Card_Trick).

