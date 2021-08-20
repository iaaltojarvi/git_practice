import React from "react";
import logo from "./images/mp_logo.png";
import walk from './images/walk.png'
import "./Card.css";

const Card = ({ onClick, card, index, isFlipped }) => {
    const handleClick = () => {
        !isFlipped && onClick(index);
    };

    return (
        <div
            className="card"
            onClick={handleClick}
        >
            {!isFlipped ?
                <div className="card-font-face">
                    <img width={200} src={logo} alt="Monty Python logo" />
                </div> :
                <div className="card-back-face">
                    {card.quote === "img" ? <img src={walk} height={100} alt="Ministry of silly walk" /> :
                        <p>{card.quote}</p>
                    }
                </div>
            }
        </div>
    );
};

export default Card;