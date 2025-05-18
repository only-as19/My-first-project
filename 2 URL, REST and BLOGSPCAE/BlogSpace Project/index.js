
fetch("https://apis.scrimba.com/jsonplaceholder/posts")
.then(response => response.json())
.then(data => {
    console.log(data)
    const postsArray = data.slice(0 , 5)
    console.log(postsArray)
    })