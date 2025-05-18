
fetch("https://apis.scrimba.com/jsonplaceholder/posts")
.then(response => response.json())
.then(data => {
    const postsArray = data.slice(0 , 5)
    console.log(postsArray)
    let html = ""

    for (let post of postsArray){
        html += `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <hr>
        `
    }
    document.getElementById("blog-list").innerHTML = html
    })


    document.getElementById("new-post").addEventListener('submit', function(e){
        e.preventDefault()
        const postTitle = document.getElementById("blog-title").value
        const postBody = document.getElementById("blog-post").value
        
        const postData = {
            title : postTitle,
            body : postBody
        }

        fetch("https://apis.scrimba.com/jsonplaceholder/posts"   , {method: "POST", 
            body: JSON.stringify(postData), 
            headers: {
                "Content-Type": "application/json"
            }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    })