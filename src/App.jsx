import { React, useState, useEffect } from 'react';
import './App.css';
import DeckOfCards from './DeckOfCards';

const DECK_OF_CARDS_BASE_URL = "https://deckofcardsapi.com/api/deck";

/** Component for entire page.
 *
 * Props: none
 * State: none
 *
 * App -> DeckOfCards
 *
*/

function App() {
  const [deck, setDeck] = useState({
    id: null,
    isLoading: true,
  });

  useEffect(function fetchDeckWhenMounted() {
    async function fetchDeck() {
      const response = await fetch(`${DECK_OF_CARDS_BASE_URL}/new/shuffle/?deck_count=1`);
      const data = await response.json();
      setDeck({
        id: data.deck_id,
        isLoading: false,
      });
    }
    fetchDeck();
  }, []);

  if (deck.isLoading) return <i>Loading...</i>;

  return (
    <div className="App">
      <DeckOfCards deckId={deck.id}/>
    </div>
  );
};

export default App;
