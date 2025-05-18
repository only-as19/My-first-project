// fetch("https://apis.scrimba.com/jsonplaceholder/todos",{method: "GET"})
// Challange

/*
Fetch a list of todos the JSON placeholder AudioParam;

BaseURL: "https://apis.scrimba.com/jsonplaceholder/"
EndPoint: /todos

This time however, explicitly set the request method to GET 
*/

fetch("https://apis.scrimba.com/jsonplaceholder/todos", {method: "POST"})
.then(response => response.json())
.then(data => console.log(data))
 