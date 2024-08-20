const generateDeck = () => {
  const deck = [];
  const suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
  const cards = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
    "Ace",
  ];

  for (card of cards) {
    for (suit of suits) {
      deck.push({ card: card, suit: suit });
    }
  }
  return deck;
};

const myDeck = generateDeck();

const drawCard = () => {
  const randomIndex = Math.floor(Math.random() * myDeck.length);
  const card = myDeck[randomIndex];
  myDeck.splice(randomIndex, 1);
  return card;
};

const myCard = drawCard();
console.log(myCard);
console.log(myDeck.length);

const playerHand = [];
const dealerHand = [];

playerHand.push(drawCard(myDeck));
playerHand.push(drawCard(myDeck));
dealerHand.push(drawCard(myDeck));
dealerHand.push(drawCard(myDeck));

console.log(playerHand);
console.log(dealerHand);

const  




















\\


\\\\\\\\\\\\\\;';;;;;;checkScore = (hand) => {
  let total = 0;
  for (const cardObject of hand) {
    if (cardObject.card === "King") {
      total += 10;
    } else if (cardObject.card === "Queen") {
      total += 10;
    } else if (cardObject.card == "Jack") {
      total += 10;
    } else if (cardObject.card === "Ace") {
      total += 1;
    } else {
      total = Number(cardObject.card);
    }
  }
  console.log(total);
};

checkScore(playerHand);

while (true) {
  //deal player card
  //check if player bust over 21
  // check if player hits 21
  //deal player
  //check if player bust over 21
  //check if player hits 21
}
