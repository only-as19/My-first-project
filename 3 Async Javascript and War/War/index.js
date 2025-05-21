
let deckId
const cardContainer =  document.getElementById('cards')
const newDeck = document.getElementById("new-deck")
const drawCard = document.getElementById("draw-card")
const callWinner = document.getElementById("callWinner")


function handleClick(){
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle")
    .then(response => response.json())
    .then(data =>{ 
        console.log(data)
        deckId = data.deck_id
        console.log(deckId)

})
}

newDeck.addEventListener('click', handleClick)


drawCard.addEventListener('click', () =>{
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
    .then(res => res.json())
    .then(data => {
        console.log(data.cards)
        cardContainer.children[0].innerHTML = `
        <img src=${data.cards[0].image} class="h-full w-full" />
        `
       cardContainer.children[1].innerHTML = `
        <img src=${data.cards[1].image} class="h-full w-full" />
        `
        const winnerText = determineWinner(data.cards[0],data.cards[1])
        console.log(winnerText)
        callWinner.textContent = winnerText
    })
})


function determineWinner(card1,card2){
    const valueOption = ["2","3","4","5","6","7","8","9","10","JACK","QUEEN","KING","ACE",]
    const card1ValueIndex = valueOption.indexOf(card1.value)
    const card2ValueIndex = valueOption.indexOf(card2.value)
    if(card1ValueIndex > card2ValueIndex){
        return "Card 1 wins"
    }else if(card1ValueIndex < card2ValueIndex){
        return "Card 2 wins"
    }else{
        return "War"
    }
}

const card1Obj = { value: "7" };
const card2Obj = { value: "9" };