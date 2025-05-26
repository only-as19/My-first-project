const author = document.getElementById("author")

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
  .then(res => res.json())
  .then(data => {
    console.log(data)
    document.body.style.backgroundImage = `url(bg.jpg)`
    author.innerText = `By : Asad`
    

  })
  .catch(err => {
    console.log("some")
    document.body.style.backgroundImage = `url(${data.urls.full})`
    author.innerText = `By : Jason Ortego`
  })

fetch91("https://api.coingecko.com/api/v3/coins/dogecoin")
.then(res => {
  if(!res.ok){
    throw Error("Somthing went Wrong")
  }
  return res.json()
})
.then(data => {
  
})
.catch(er => console.error(err))
  
