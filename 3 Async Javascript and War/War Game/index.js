
let deckId

function handleClick(){
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle")
    .then(response => response.json())
    .then(data =>{ 
        console.log(data)
        deckId = data.deck_id
        console.log(deckId)

})
}

document.getElementById("new-deck").addEventListener('click', handleClick)


document.getElementById("draw-card").addEventListener('click', () =>{
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
    .then(res => res.json())
    .then(data => {
        handleClick()
        console.log(data)
    })
})



