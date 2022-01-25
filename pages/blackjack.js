import PlayingCards from "../components/card";
import Blackjack from "../utils/games/blackjack";
import { Player, DealerHand } from "../components/player";
import React, { useState, useEffect } from "react";
import Dealer from "../utils/dealer";

const blackjack = new Blackjack();

export default function Bjack() {
  const [cards, setCards] = useState(null);
  const [players, setPlayers] = useState([]);
  const [dealer, setDealer] = useState(blackjack.dealer);
  const [activePlayer, setActivePlayer] = useState(null);
  const [dealt, setDealt] = useState(false);
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  const dealerPlay = () => {
    if (blackjack.check21(dealer)) {
      <b>Blackjack!</b>;
    }
    if (blackjack.dealer.value < 17) {
      blackjack.hit(dealer);
      console.log(dealer, "before hit");
      setDealer(dealer);
      console.log("hit");
      console.log(dealer, "after hit");
    }
  };

  useEffect(() => {
    console.log("\n\n******current state*******");
    console.log("blackjack", blackjack);
    console.log("cards", cards);
    console.log("players", players);
    console.log("dealt", dealt);
    console.log("name", name);
    console.log("count", count);
    console.log("Active Player", activePlayer);
    console.log("dealer", dealer);
    console.log("*************************\n\n");
  });

  useEffect(() => {
    setCards(blackjack.deck.cards);
  }, []);

  useEffect(() => {
    if (dealt && count === 0) {
      setActivePlayer(dealer);
      dealerPlay();
    }
  }, [count]);

  useEffect(() => {
    if (dealt) {
      setPlayers([...players]);
      setCount(players.length);
      setActivePlayer(players[players.length - 1]);
    }
  }, [dealt]);

  const handleSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    console.log(name);
    console.log(blackjack.players);
    try {
      blackjack.addPlayer(name);
      console.log(blackjack.getPlayer(name));
      console.log(blackjack.players);
      setPlayers([...players, blackjack.getPlayer(name)]);
      //setplayers: (players) => [...players, blackjack.getPlayer(name)];
      console.log(players);

      setName("");
    } catch (e) {
      alert("This player already exists!");
    }
    console.log(blackjack, "blackjack print");
  };

  const deal = () => {
    blackjack.dealCards();
    setDealt(true);
  };

  const hit = () => {
    //blackjack.hit(activePlayer);
    blackjack.hit(activePlayer);
    setPlayers([...players]);
  };

  const stand = () => {
    console.log("player ", activePlayer.name, " choose to stand");
    // setPlayers([...players]);
    const newCount = count - 1;
    setCount(newCount);
    setActivePlayer(players[newCount - 1]);
  };

  return (
    <div>
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
      <div className="Dealer">
        <DealerHand
          key={"Dealer"}
          player={dealer}
          hand={dealer.hand}
          isActive={activePlayer ? dealer.name === activePlayer.name : false}
        />
      </div>
      <div className="players">
        {players.map((player) => {
          return (
            <Player
              key={player.name}
              player={player}
              hand={player.hand}
              hit={hit}
              stand={stand}
              isActive={
                activePlayer ? activePlayer.name === player.name : false
              }
            />
          );
        })}
      </div>
      <button onClick={deal} disabled={dealt}>
        Deal
      </button>
    </div>
  );
}
