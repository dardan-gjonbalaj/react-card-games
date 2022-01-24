class Player {
  constructor(name) {
    this.hand = [];
    this.name = name;
    this.bust = false;
    this.bj = false;
  }

  getCard = (deck, x = 1) => {
    console.log("get card?", this.name);
    const card = deck.drawCards(x);
    this.hand = [...this.hand, ...card];
    return this.hand;
  };

  giveCard = (deck, cards) => {
    deck.replaceCards(cards);
  };
}

export default Player;
