const author = document.getElementById("author")
const currency = document.getElementById("currency")
const crypto =document.getElementById("crypto")
let time
const displayTime = document.getElementById("time")

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
  .then(res => res.json())
  .then(data => {
    console.log(data)
    document.body.style.backgroundImage = `url(bg.jpg)`
    author.innerText = `By : Asad`
    

  })
  .catch(err => {
    console.log("some")
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1522140607231-7c05952eb779?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDgyODEzMTF8&ixlib=rb-4.1.0&q=85)`
    author.innerText = `By : Jason Ortego`
  })

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
.then(res => {
  if(!res.ok){
    throw Error("Somthing went Wrong")
  }
  return res.json()
})
.then(data => {
  console.log(data)
    crypto.innerHTML += 
    `
    <img src="${data.image.small}">
    <span class="ml-2">${data.name}</span>
    `
    currency.innerHTML +=
    `
    <p>🎯: ${data.market_data.current_price.usd}</p>
    <p>👆: ${data.market_data.high_24h.usd}</p>
    <p>👇: ${data.market_data.low_24h.usd}</p>
    `

})
.catch(err => console.error(err))



function timeChange() {
  const d = new Date();
  const time = d.toLocaleTimeString('en-US', { timeStyle: 'medium' });
  displayTime.innerText = time;
}

setInterval(timeChange, 1000);
timeChange();

  
