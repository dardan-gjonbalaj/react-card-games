// import { check } from "prettier";
import Player from "../player";
import Deck from "../deck";
import Dealer from "../dealer";

class Blackjack {
  constructor() {
    this.deck = new Deck();
    this.players = [];
    this.dealer = new Dealer();
  }
  addPlayer = (name) => {
    if (
      this.players.find((player) => {
        return player.name === name;
      })
    ) {
      throw Error("Player already exists. Change your name NOW!");
    }
    this.players.push(new Player(name));
  };

  getPlayer = (name) => {
    return this.players.find((player) => {
      return player.name === name;
    });
  };

  removePlayer(name) {
    if (
      !this.players.find((player) => {
        return player.name === name;
      })
    ) {
      throw Error("Player does not exist");
    }
    this.players = this.players.filter((player) => {
      return player.name !== name;
    });
  }

  dealCards() {
    // this.players.forEach((player) => {
    //   player.getCard(this.deck, 1);
    //   player.value = this.getValue(player);
    //   this.dealer.hand.length < 2 ? this.dealer.getCard(this.deck, 1) : null;
    // });

    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < this.players.length; j++) {
        this.players[j].getCard(this.deck);
        this.players[j].value = this.getValue(this.players[j]);
      }
      this.dealer.getCard(this.deck);
    }

    this.dealer.value = this.getValue(this.dealer);

    // this.players.forEach((player) => {
    //   this.check21(player);
    // });
  }

  getValue(player) {
    let sum = 0;
    player.hand.forEach((card) => {
      if (card.rank === 1 || card.rank > 10) {
        let faceCard = this.isFaceCard(card.rank);
        if (faceCard === "A") {
          if (11 + sum <= 21) {
            console.log(faceCard);
            sum += 11;
          } else {
            sum += 1;
          }
        } else {
          sum += 10;
        }
      } else {
        sum += card.rank;
      }
    });
    return sum;
  }
  isFaceCard(card) {
    return card === 1
      ? "A"
      : card === 11
      ? "J"
      : card === 12
      ? "Q"
      : card === 13
      ? "K"
      : card;
  }

  check21(player) {
    player.value === 21 ? (player.bj = true) : false;
  }
  checkBust(player) {
    player.value > 21 ? (player.bust = true) : false;
  }
  hit(player) {
    console.log(player);
    console.log(this);
    player.getCard(this.deck);
    player.value = this.getValue(player);
    //check if player busts on hit, if not they can choose to stand or hit
    if (this.check21(player)) {
      console.log("BLACKJACK!");
      player.bj = true;
    }
    if (this.checkBust(player)) {
      console.log(`BUST! with a value of ${player.value}`);
      player.bust = true;
    }
    return player;
  }
}
export default Blackjack;
