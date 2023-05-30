let firstCard = 0;
let secondCard = 0;
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let player = {
    name: "Per",
    chips: 145
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips;



function startGame(){
    
    isAlive = true;
    firstCard = getRandomCard();
    secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function getRandomCard(){
    let num =  Math.floor(Math.random()*13)+1;
    if(num==1){
        return 11;
    }else if(num>=11){
        return 10;
    }else{
        return num;
    }
}


function renderGame(){
    sumEl.textContent = sum;
    cardsEl.textContent = ""
    for(i=0; i<cards.length; i++){

        cardsEl.textContent += cards[i] + " ";
    }

    
    
    if(sum < 21){
        message = "Do you want to draw a new card?";
    } else if (sum ===21){
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
    
}

function newCard(){
    if( isAlive=== true && hasBlackJack === false){
        console.log("Drawing a new card form the deck!")
        let thirdCard = getRandomCard();
        cards.push(thirdCard);
        sum += thirdCard;
        renderGame();
    }
    
}