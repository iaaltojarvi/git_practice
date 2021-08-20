import React, { useState, useEffect, useRef, useCallback } from 'react';
import { quotes } from './quotes';
import Card from './Card';
import Modal from './Modal'
import { shuffleCards } from './helpers/shuffle';
import './App.css';

function App() {

  const [cards, setCards] = useState(quotes)
  const [openCards, setOpenCards] = useState([]);
  const [clearedCards, setClearedCards] = useState({});
  const [win, setWin] = useState(false)
  const [show, setShow] = useState(false)

  const timeout = useRef(null);


  const checkCompletion = useCallback(() => {
    if (Object.keys(clearedCards).length === quotes.length) {
    }
  }, [clearedCards]);


  const evaluate = useCallback(() => {
    const [first, second] = openCards;
    if (cards[first].quote === cards[second].quote) {
      setWin(true)
      setShow(true)
      setClearedCards((prev) => ({ ...prev, [cards[first].quote]: true }));
      setOpenCards([]);
      return;
    }
    timeout.current = setTimeout(() => {
      setOpenCards([]);
    }, 500);
  }, [cards, openCards])

  const handleCardClick = (index) => {
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, index]);
    } else {
      clearTimeout(timeout.current);
      setOpenCards([index]);
    }
  };

  useEffect(() => {
    let timeout = null;
    if (openCards.length === 2) {
      timeout = setTimeout(evaluate, 700);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [openCards, evaluate]);

  useEffect(() => {
    checkCompletion();
  }, [clearedCards, checkCompletion]);

  const checkIsFlipped = (index) => {
    return openCards.includes(index);
  };

  const handleRestart = () => {
    setWin(false)
    setClearedCards({});
    setOpenCards([]);
    setCards(quotes)
    setCards(shuffleCards(quotes));
  };


  return (
    <div className="view">
      {win ? <Modal onClose={() => setShow(false)} show={show} restart={handleRestart}>You won!</Modal> :
        <div>
          <h2 className="title">Click card to start memo game</h2>
          <div className="game">
            {cards.map((c, index) =>
              <Card
                key={index}
                card={c}
                index={index}
                isFlipped={checkIsFlipped(index)}
                onClick={handleCardClick}
              />
            )}
          </div>
        </div>
      }
    </div>
  );
}

export default App;
