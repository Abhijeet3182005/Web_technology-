// fetch is buiding method used to make http request
// it return the promises

//fetch('url')

// Activity01
fetch("https://jsonplaceholder.typicode.com/users/3")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("Error fetching users:", error);
  });
    


// fech method example 
// use of asychronu and synchro
//fetch user ,display name in html list 
//fetch post show only frist 5 
//create the fake fetch mannually resolve reject aftre 3 sec 
//promises in js 
// stastus in js 
// deff bet callback 


// Activity02
//fetch user ,display name in html list 
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(users => {

    const list = document.getElementById("userList");

    users.forEach(user => {
      let li = document.createElement("li");
      li.textContent = user.name;
      list.appendChild(li);
    });

  });

  // Activity03
// 4. Fetch Posts → Show Only First 5
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(posts => {

    let firstFive = posts.slice(0,5);

    firstFive.forEach(post => {
      console.log(post.title);
    });

  });


//create the fake fetch mannually resolve reject aftre 3 sec 

  function fakeFetch(success) {

  return new Promise((resolve, reject) => {

    setTimeout(() => {

      if(success){
        resolve("Data fetched successfully");
      } else {
        reject("Error fetching data");
      }

    }, 3000);

  });
}

fakeFetch(true)
  .then(data => console.log(data))
  .catch(err => console.log(err));

/*  

| Status    | Meaning             |
| --------- | ------------------- |
| Pending   | Waiting             |
| Fulfilled | Success (`resolve`) |
| Rejected  | Failed (`reject`)   |
*/