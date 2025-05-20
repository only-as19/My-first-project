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

// const people = [
//     {name: "JAck", hasPet: true, age: 12},
//     {name: "Jill", hasPet: false, age: 18},
//     {name: "Alice", hasPet: true, age: 22},
//     {name: "Bob", hasPet: false, age: 32}
// ]

// function checkPet(person){
//     return person.hasPet
// }

// function filterArray(array, callBack){
//     let resultArray = []
//     for(let item of array){
//         const shoudBeIncluded = callBack(item)

//         if(shoudBeIncluded){
//             resultArray.push(item)
//         }
//     }
//     return resultArray
// }

// const peopleWithPet = filterArray(people,checkPet)
// console.log(peopleWithPet)



// document.getElementById("new-deck").addEventListener('click',function(){
//     console.log("Clicked")
// })


// const voters = [
//     {name: "Joe", email: "joe@jo.com", voted: true},
//     {name: "JA`ne", email: "joe@jo.com", voted: true},
//     {name: "Bo", email: "joe@jo.com", voted: false},
//     {name: "bane", email: "joe@jo.com", voted: false}
// ]


// const votes = voters.filter(vote => vote.voted).map(vote => vote.email)

// Passing basuc value in the chain 
/*
Time to be curios 

What will happen if you don't return "res.json()"
from the first .then block?

What would the next .then () callback recieve as its 
parameter if you returned somrthijng totally diferent?

*/
/*
Challange:
 
Pass the string "World" down to a 3rd .then() CSSLayerBlockRuleand log it to the console inside the bodt of this new 3rd .then () block

*/


fetch("https://apis.scrimba.com/bored/api/activity")
    .then(function(res){
        return "hello"
    })
    .then(function(whatever){
        console.log(whatever)
        return "World"
    })
    .then(function(another){
        console.log(another)
    }) 