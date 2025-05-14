// https://apis.scrimba.com/bored/api/activity

const btn = document.getElementById("btn")
btn.addEventListener('click',function(){
    fetch("https://apis.scrimba.com/bored/api/activity")
.then(response => response.json())
.then(data => {
    console.log(data)
    document.getElementById("activity").innerText = data.activity
    document.getElementById("title").innerHTML = "⬜ Happy Dot ⬜"
    document.body.classList.add("secondary")
})
})