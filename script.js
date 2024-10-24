(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })
  
  cw1.addEventListener("click", function () {
    answer.innerText = "Loading..."
    fetch(`https://jsonplaceholder.typicode.com/posts/`)
      .then(response => response.json())
      .then(array => {
        id++;
        answer.innerHTML = "";
        console.log(array)
        for (let post of array) {
          const elem = document.createElement("div")
          const title = document.createElement("h3");
          const user = document.createElement("p");
          const postid = document.createElement("p");
          const text = document.createElement("p");
          title.innerText = post.title;
          user.innerText = `User ID: ${post.userId}`;
          text.innerText = post.body;
          postid.innerText = post.id;

          elem.appendChild(postid);
          elem.appendChild(title);
          elem.appendChild(user);
          elem.appendChild(text);
          answer.appendChild(elem);
        }
      })
  })

  cw2.addEventListener("click", function () {
    //TODO
  })

  cw3.addEventListener("click", function () {
    //TODO
  })

})();
