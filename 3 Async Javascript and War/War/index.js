
let deckId
const cardContainer =  document.getElementById('cards')
const newDeck = document.getElementById("new-deck")
const drawCard = document.getElementById("draw-card")


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
    })
})



