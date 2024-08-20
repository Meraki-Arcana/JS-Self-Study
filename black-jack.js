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
  
  
  const drawCard = () => {
    const randomIndex = Math.floor(Math.random() * myDeck.length);
    const card = myDeck[randomIndex];
    myDeck.splice(randomIndex, 1);
    return card;
  };

  const checkScore = (hand) => {
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
    
    return total;
  };
  
  const myCard = drawCard();
  console.log(myCard);
  console.log(myDeck.length);
  
  const myDeck = generateDeck();
  const playerHand = [];
  const dealerHand = [];
  
  playerHand.push(drawCard(myDeck));
  playerHand.push(drawCard(myDeck));
  dealerHand.push(drawCard(myDeck));
  dealerHand.push(drawCard(myDeck));
  
  console.log("Staring Player Hand: ", playerHand)
  console.log("Staring Player Hand: ", checkScore(playerHand))
  console.log("Staring Dealer Hand: ", dealerHand)
  console.log("Staring Player Hand: ", checkScore(dealerHand))
  
  
  checkScore(playerHand);
  
  while (true) {
    //deal player card
    playerHand.push(drawCard(myDeck));
    
    const playerScore = checkScore(playerHand);
    const dealerScore = checkScore(dealerHand);

    //check if player score is OVER 21
    if(playerScore > 21) {
        console.log(`You lose... Your final score was ${playerScore} while the dealer had ${dealerScore}.`)
        break;
    };

    // check if player score HITS 21
    if(playerScore === 21) {
        console.log(`You win! Your final score was ${playerScore} while the dealer had ${dealerScore}.`)
        break;
    }
    //deal player
    dealerHand.push(drawCard(myDeck));

    //check if dealer scores OVER 21
    if(dealerScore > 21) {
        console.log(`You win! Your final score was ${dealerScore} while the player had ${playerScore}.`)
        break;
    }


    //check if dealer HITS 21
    if(dealerScore === 21) {
        console.log(`You lose... Your final score was ${dealerScore} while the player had ${playerScore}.`)
        break;
    }

  }

  console.log("Ending Player Hand: ", playerHand)
  console.log("Ending Player Hand: ", checkScore(playerHand))
  console.log("Ending Dealer Hand: ", dealerHand)
  console.log("Ending Player Hand: ", checkScore(dealerHand))
