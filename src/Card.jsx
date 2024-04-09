import React from 'react';
import './Card.css';


/** Component for a single card.
 *
 * Props:
 * - card {code, image, value, suit}
 *
 * State: none
 *
 * DeckOfCards -> Card
 *
*/

function Card({ card }) {
    return (
        <div className="Card">
            <img
                className="Card-image"
                src={card.image}
                alt={`${card.value} of ${card.suit}`} />
        </div>
    );
};

export default Card;