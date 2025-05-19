

// function handleClick(){
//     fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle")
//     .then(response => response.json())
//     .then(data => console.log(data))
// }

// document.getElementById("new-deck").addEventListener('click', handleClick)

// function message(){
//     console.log("I finally ran")
// }

// setTimeout(message, 2000)

// function checkPet(user){
//     return user.hasPet === true
// }

// const people = [
//     {name: "JAck", hasPet: true, age: 12},
//     {name: "Jill", hasPet: false, age: 18},
//     {name: "Alice", hasPet: true, age: 22},
//     {name: "Bob", hasPet: false, age: 32}
// ]

// const result = people.filter(checkPet)

// console.log(result)

// function checkAge(user){
//     return user.age >= 18
// }

// const Age = people.filter(checkAge)

// console.log(Age)

const people = [
    {name: "JAck", hasPet: true, age: 12},
    {name: "Jill", hasPet: false, age: 18},
    {name: "Alice", hasPet: true, age: 22},
    {name: "Bob", hasPet: false, age: 32}
]

function checkPet(person){
    return person.hasPet
}

function filterArray(array, callBack){
    let resultArray = []
    for(let item of array){
        const shoudBeIncluded = callBack(item)

        if(shoudBeIncluded){
            resultArray.push(item)
        }
    }
    return resultArray
}

const peopleWithPet = filterArray(people,checkPet)
console.log(peopleWithPet)

