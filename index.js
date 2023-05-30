let firstCard = 4;
let secondCard = 9;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")



function startGame(){
    renderGame();
}

function renderGame(){
    sumEl.textContent = sum;
    cardsEl.textContent = cards;
    
    if(sum < 21){
        message = "Do you want to draw a new card?";
    } else if (sum ===21){
        message = "You've got Blackjack!";
        hasBlackJack = True;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
    
}

function newCard(){
    console.log("Drawing a new card form the deck!")
    let thirdCard = 8;
    cards.push(thirdCard);
    sum += thirdCard;
    renderGame();
}