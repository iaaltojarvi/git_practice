import React, { useState, useEffect } from 'react';
import { quotes } from './quotes';
import logo from './images/mp_logo.png'
import './App.css';

function App() {

  const [cardsClicked, setCardsClicked] = useState(quotes)
  const [changed, setChanged] = useState(false)

  const handleCardClick = (obj) => {
    console.log(obj.id)
    const id = obj.id
    const ind = cardsClicked.findIndex((c => c.id === id))
    cardsClicked[ind].open = !cardsClicked[ind].open
    setChanged(true)
  }

  useEffect(() => {
    if (changed) {
      setCardsClicked(cardsClicked)
      setChanged(false)
    }
  }, [cardsClicked, changed])

  return (
    <div className="view">
      <h1 className="title">Click card to start memo game</h1>
      <div className="game">
        {cardsClicked.map((c) =>
          <div className="cardContainer" key={c.quote} onClick={() => handleCardClick(c)}>
            <div className="card">
              {c.open ?
                <h6 className="quoteText">{c.quote}</h6>
                : <img src={logo} alt="Monty Python logo" width="250" />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
