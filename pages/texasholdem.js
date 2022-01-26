import React, { useState, useEffect } from "react";
import PlayingCards from "../components/card";
import { PokerHand } from "../components/player";
import Dealer from "../utils/dealer";
import Deck from "../utils/deck";
import Player from "../utils/player";

export default function TexasHoldEm() {
  const [cards, setCards] = useState();
  const [table, setTable] = useState([]);
  const [flip, setFlip] = useState(true);
  const [name, setName] = useState("");
  const [players, setPlayers] = useState([]);
  const [turn, setTurn] = useState(1);

  useEffect(() => {
    setCards(new Deck());
  }, []);

  useEffect(() => {
    console.log("\n\n******current state*******");
    console.log("cards", cards);
    console.log("table", table);
    console.log("players", players);
    console.log("*************************\n\n");
  });

  const handleSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    console.log(name);
    try {
      setPlayers([...players, new Player(name)]);

      setName("");
    } catch (e) {
      alert("Couldn't add player");
    }
    console.log(players);
  };

  const deal = () => {
    if (turn === 1) {
      setTable([...table, ...cards.drawCards(3)]);
    }
  };

  return (
    <div>
      Texas Hold Em
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <button onClick={deal}>Deal</button>
      <div className="table">
        {/* {<PokerHand card={table} />} */}
        <div className="playingCards">
          {table.map((c) => {
            return <PokerHand card={c} />;
          })}
        </div>
      </div>
    </div>
  );
}
