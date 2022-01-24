class Card {
  constructor(rank, suit) {
    if (isNaN(rank) || !Number.isInteger(rank)) {
      throw Error("ENTER A WHOLE NUMBER");
    }
    if (rank > 13 || rank < 1) {
      throw Error("ENTER A PROPER CARD RANK");
    }
    if (isNaN(suit) || !Number.isInteger(suit)) {
      throw Error("ENTER A REAL SUIT");
    }
    if (suit < 1 || suit > 4) {
      throw Error("ENTER A PROPER SUIT");
    }

    this.rank = rank;
    this.suit = suit;
  }
}
export default Card;
