export default function PlayingCards(props) {
  const r = ["", "a", 2, 3, 4, 5, 6, 7, 8, 9, 10, "j", "q", "k"];
  const s = ["", "diams", "spades", "hearts", "clubs"];
  if (props.isFlipped) {
    return <div className={` card back`} />;
  }
  return (
    <div
      className={`playingCards ${
        props.hand
          ? typeof r[props.hand.rank] === "string"
            ? "faceImages"
            : ""
          : ""
      } card rank-${props.hand ? r[props.hand.rank] : null} 
      ${props.hand ? s[props.hand.suit] : null}`}
    >
      {console.log(props.hand)}
      <span className="rank">{props.hand ? r[props.hand.rank] : null}</span>
      <span className="suit">
        {props.hand ? props.hand.suit === 1 && "♦" : null}
        {props.hand ? props.hand.suit === 2 && "♠" : null}
        {props.hand ? props.hand.suit === 3 && "♥" : null}
        {props.hand ? props.hand.suit === 4 && "♣" : null}
      </span>
    </div>
  );
}
