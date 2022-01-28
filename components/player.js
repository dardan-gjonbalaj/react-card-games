import PlayingCards from "../components/card";
import Blackjack from "../utils/games/blackjack";
import React, { useEffect, useState } from "react";

export function Player(props) {
  // if (props.player.hand.length === 0) {
  //   return <div>{props.player.name}</div>;
  // }

  return (
    <div className={props.player.name}>
      {props.name}
      {console.log(props.isActive, props.player.name)}
      <div className="playingCards">
        <ul className="hand">
          {props.player.hand.map((card) => {
            return (
              <li key={`${card.rank}-${card.suit}`}>
                <PlayingCards hand={card} />
              </li>
            );
          })}
        </ul>
      </div>
      {props.player.value}
      {props.player.bust && <div>Busted!!</div>}
      {props.player.bj && <div>Blackjack!!</div>}
      <button onClick={props.hit} disabled={!props.isActive}>
        Hit
      </button>
      <button onClick={props.stand} disabled={!props.isActive}>
        Stand
      </button>
    </div>
  );
}

export function DealerHand(props) {
  console.log(props);
  return (
    <div>
      {props.player.name}
      <div className="playingCards">
        <ul className="hand">
          {props.player.hand.map((card, i) => {
            return (
              <li key={`${card.rank}-${card.suit}`}>
                <PlayingCards
                  hand={card}
                  isFlipped={!props.isActive && i === 1}
                />
              </li>
            );
          })}
        </ul>
        {props.player.value ? props.player.value : null}
      </div>
    </div>
  );
}

export function PokerTable(props) {
  {
    console.log(props);
  }
  return (
    <div key={`${props.card.rank}-${props.card.suit}`}>
      <PlayingCards hand={props.card} />
    </div>
  );
}

export function PokerHand(props) {
  {
    console.log(props);
  }
  return (
    <ul className="hand">
      {props.cards.map((card) => {
        console.log(card);
        return (
          <li key={`${card.rank}-${card.suit}`}>
            <PlayingCards hand={card} isFlipped={!props.flip} />
          </li>
        );
      })}
    </ul>
  );
}
