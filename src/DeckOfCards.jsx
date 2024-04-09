import { React, useState } from 'react';
import './DeckOfCards.css';
import Card from './Card';

const DECK_OF_CARDS_BASE_URL = "https://deckofcardsapi.com/api/deck";

/** Component for DeckOfCards.
 *
 * Props:
 * - deckId: id of the deck being displayed
 *
 * State:
 * - cards: array of cards drawn from the deck
 * - numRemaining: number of cards remaining in the deck
 *
 * App -> DeckOfCards -> Card
*/

function DeckOfCards({ deckId }) {
    const [cards, setCards] = useState([]);
    // TODO: could maybe refactor to not hold this in state and just check when calling drawCard
    const [numRemaining, setNumRemaining] = useState(null);

    async function drawCard(deckId) {
        const response = await fetch(`${DECK_OF_CARDS_BASE_URL}/${deckId}/draw/?count=1`);
        const data = await response.json();
        setCards(cards => [...cards, data.cards[0]]);
        setNumRemaining(data.remaining);
    }

    function handleClick(evt) {
        if(numRemaining === 0) {
            alert("Error: no cards remaining!");
            return;
        }
        drawCard(deckId);
    }

    return (
      <div className="DeckOfCards">
        <button
        className="DeckOfCards-drawbtn btn btn-secondary"
        onClick={handleClick}
        >Give me a card!</button>
        { cards.map(c => <Card key={c.code} card={c} />) }
      </div>
    );
  };

  export default DeckOfCards;
