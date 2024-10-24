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

  const createPost = (post) => {
    const elem = document.createElement("div");
    const title = document.createElement("h2");
    const user = document.createElement("p");
    const postid = document.createElement("p");
    const text = document.createElement("p");

    elem.classList.add("post")
    title.classList.add("post-title")
    text.classList.add("post-body");

    title.innerText = post.title;
    user.innerText = `User ID: ${post.userId}`;
    text.innerText = post.body;
    postid.innerText = post.id;
  
    elem.appendChild(postid);
    elem.appendChild(title);
    elem.appendChild(user);
    elem.appendChild(text);
    return elem;
  };

  let id = 1;
  
  cw1.addEventListener("click", async function () {
    answer.innerText = "Loading..."
    let newPost;
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(post => {
        id++;
        answer.innerHTML = "";
        console.log(post);
        elem = createPost(post);
        answer.appendChild(elem);
        newPost = post;
      });
    answer.append("Processing...")
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        userId: newPost.userId,
        title: newPost.title,
        body: newPost.body,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF=8',
      },
    })
      .then(response => response.json())
      .then(json => {
        answer.innerText = `Dodano post o id ${json.id}`;
      });
  })

  cw2.addEventListener("click", function () {
    alert("Loading...");
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        answer.innerHTML = "";
        for (let post of array) {
          answer.append(createPost(post));
          console.log(`id: ${post.id}\tuserId: ${post.userId}\ttitle: ${post.title}\tbody: ${post.body}`);
        }
      })
  })

  cw3.addEventListener("click", function () {
    //TODO
  })

})();
