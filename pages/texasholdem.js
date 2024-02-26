import React, { useState, useEffect } from 'react';
import PlayingCards from '../components/card';
import { PokerHand, PokerTable } from '../components/player';
import Dealer from '../utils/dealer';
import Deck from '../utils/deck';
import Player from '../utils/player';

export default function TexasHoldEm() {
  const [cards, setCards] = useState();
  const [table, setTable] = useState([]);
  const [flip, setFlip] = useState(true);
  const [name, setName] = useState('');
  const [players, setPlayers] = useState([]);
  const [turn, setTurn] = useState(0);
  const [play, setPlay] = useState(false);
  const [newGame, setNewGame] = useState(false);

  useEffect(() => {
    setCards(new Deck());
  }, []);

  useEffect(() => {}, [players]);

  useEffect(() => {
    if (play) {
      if (turn === 0) {
        players.map((player) => {
          console.log(player);
          player.getCard(cards, 2);
        });

        setPlayers([...players]);
        setTurn(1);
      }
      if (turn === 1) {
        setTable([...table, ...cards.drawCards(3)]);
        setTurn(2);
        setPlay(false);
      }
      if (turn === 2) {
        setTable([...table, ...cards.drawCards(1)]);
        setTurn(3);
        setPlay(false);
      }
      if (turn === 3) {
        setTable([...table, ...cards.drawCards(1)]);
        setTurn(4);
        setPlay(false);
      }
    }
  }, [turn, play]);

  useEffect(() => {
    console.log(newGame);
    if (newGame) {
      players.map((player) => {
        player.hand = [];
      });
      setTable([]);
      setTurn(0);
      setNewGame(!newGame);
    }
  }, [newGame, turn]);

  useEffect(() => {
    console.log('\n\n******current state*******');
    console.log('cards', cards);
    console.log('table', table);
    console.log('players', players);
    console.log('turn', turn);
    console.log('play', play);
    console.log('New Game', newGame);
    console.log('*************************\n\n');
  });

  const handleSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    console.log(name);
    try {
      const p1 = new Player(name);
      p1.money = 100;

      setPlayers([...players, p1]);

      setName('');
    } catch (e) {
      alert("Couldn't add player");
    }
    console.log(players);
  };

  // const newGame = () => {
  //   if (newGame) {
  //     setTable([]);
  //     setTurn(1);
  //   }
  // };

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
      <button onClick={() => setPlay(!play)} disabled={turn == 4}>
        Deal
      </button>
      <button
        onClick={() => setNewGame(!newGame)}
        disabled={turn != 4}
      >
        New Game
      </button>
      <div
        className="table"
        style={{ padding: '2rem 10vw 2rem 10vw' }}
      >
        {/* {<PokerHand card={table} />} */}
        <div className="playingCards" style={{ display: 'flex' }}>
          {table.map((c, index) => {
            return <PokerTable key={index} card={c} />;
          })}
        </div>
      </div>
      <div
        className="players"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        {players.map((player, index) => {
          return (
            <div className={`${player.name}`}>
              {player.name}
              <div className="playingCards">
                <PokerHand
                  key={index}
                  cards={player.hand}
                  flip={flip}
                />
                {player.money}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
