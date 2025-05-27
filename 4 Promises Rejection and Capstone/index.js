const author = document.getElementById("author")
const currency = document.getElementById("currency")
const crypto =document.getElementById("crypto")
let time
const displayTime = document.getElementById("time")
const weather = document.getElementById("weather")
const weather2 = document.getElementById("weather2")

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
  .then(res => res.json())
  .then(data => {
    console.log(data)
    document.body.style.backgroundImage = `url(${data.urls.full})`
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


navigator.geolocation.getCurrentPosition(position => {
  fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
  .then(res => {
    if(!res.ok){
      throw Error("Weathre data not available")
    }
    return res.json()
  })
  .then(data => { 
    console.log(data)
    const iconurl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    // console.log(iconurl)
    weather2.innerHTML = `
      <img class="w-20" src=${iconurl} >
      <p class="m-0 text-2xl -ml-3- font-semibold">${Math.round(data.main.temp)}°C</p>
      `
      weather.innerHTML += `
      <p class="-mt-6 self-center">${data.name}</p>
    `

})
.catch(err => console.error(err))
});
  
