import React, { useState, useEffect } from "react";
import PlayingCards from "../components/card";
import { PokerHand } from "../components/player";
import Dealer from "../utils/dealer";
import Deck from "../utils/deck";

export default function TexasHoldEm() {
  const [cards, setCards] = useState();
  const [flip, setFlip] = useState(true);

  useEffect(() => {
    setCards(new Deck());
  }, []);

  return (
    <div>
      Texas Hold Em
      {cards && console.log(cards)}
    </div>
  );
}
