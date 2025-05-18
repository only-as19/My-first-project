

let postsArray = []
const titleInput = document.getElementById("blog-title")
const bodyInput = document.getElementById("blog-post")
const myForm = document.getElementById("new-post")

function renderPost(){
 let html = ""

    for (let post of postsArray){
        html += `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <hr>
        `
    }
    document.getElementById("blog-list").innerHTML = html
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
.then(response => response.json())
.then(data => {
    postsArray = data.slice(0 , 5)
    console.log(postsArray)
   renderPost()
    })


    myForm.addEventListener('submit', function(e){
        e.preventDefault()
        const postTitle = titleInput.value
        const postBody = bodyInput.value
        
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
    .then(post => {
            postsArray.unshift(post)
            renderPost()
            myForm.reset()
    })
    })