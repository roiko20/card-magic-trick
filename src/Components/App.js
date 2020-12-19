import React from 'react';
import '../App.css';
import { Header , Wrapper  } from '../Layout.components';
import Board from './Board'

const App = () =>
  (
    <div className="App">
        <Wrapper>
            <Header>Card Magic Trick<img className={"headerIcon"} alt={"cardIcon"} src="https://img.icons8.com/dusk/80/000000/cards.png"/></Header>
            <Board/>
        </Wrapper>
    </div>
  )

export default App;
