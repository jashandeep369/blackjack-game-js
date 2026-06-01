let cards = []
let sum = 0
let blackjack = false
let isalive = false
let message = ""    

let Card = document.getElementById("card-el") 
let Sum = document.getElementById("sum-el")
let Message = document.getElementById("message-el")
let player = {
    name: "Jashan",
    chips: 145
   
}
points = document.querySelector("#player-el")

function getRandomCard() {
    let random_num = Math.floor(Math.random() * 13) + 1
    if (random_num === 1) {
        return 11
    }
    else if (random_num > 10) {
        return 10
    }
    else   {
        return random_num
    }

}

function startgame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    isalive = true
    rendergame()
    points.textContent = player.name + ": $"+player.chips

}

function rendergame() {
    Card.textContent = "Cards: "
    for (let i = 0 ;i < cards.length ; i++) {
        Card.textContent += cards[i] + " "
    }
    Sum.textContent = "Sum: "+sum  
  
    if (sum < 21) {
       message = "you want to draw a new card?"
    }
    else if (sum === 21) {
       message = "you got the blackjack!!"
        blackjack = true
    }
    else {
       message = "you're out"
        isalive = false
    

    }
  
    Message.textContent = message
}

function newcard() {
    if (isalive && blackjack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)}
    rendergame()

} 