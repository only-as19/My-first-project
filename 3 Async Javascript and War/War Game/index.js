
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






