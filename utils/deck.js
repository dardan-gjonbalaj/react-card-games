import Card from "./card";
class Deck {
  constructor() {
    const cards = [];
    for (let i = 1; i <= 4; i++) {
      for (let j = 1; j <= 13; j++) {
        cards.push(new Card(j, i));
      }
    }
    this.cards = cards;
    this.shuffleDeck();
  }

  shuffleDeck = () => {
    var currentIndex = this.cards.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }

    return this.cards;
  };

  drawCards = (x = 1) => {
    if (this.cards.length === 0 || this.cards === undefined) {
      throw Error("NO MORE CARDS LEFT!");
    }
    if (this.cards.length < x) {
      throw Error(`THERE ARE ONLY ${this.cards.length} CARDS LEFT!`);
    }
    return this.cards.splice(0, x);
  };

  replaceCards = (cards) => {
    if (this.cards.length === 52) {
      throw Error("CANT REPLACE!");
      return this.cards;
    } else {
      this.cards = [...cards, ...this.cards];
      return this.cards;
    }
  };
}
export default Deck;
