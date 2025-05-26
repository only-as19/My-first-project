const author = document.getElementById("author")
const crypto =document.getElementById("crypto")

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
    crypto.innerHTML = 
    `
    <img src="${data.image.small}">
    <span class="ml-2">${data.name}</span>
    `
})
.catch(er => console.error(err))
  
