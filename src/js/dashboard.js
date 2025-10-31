import { url_api } from "../js/env.js";

checkUser();

async function checkUser() {
  const token = localStorage.getItem("token");

  const title = document.querySelector("title");
  const name = document.getElementById("name");
  const username = document.getElementById("username");
  const books = document.getElementById("books");
  
  try {
    const response = await fetch(`${url_api}/users/dashboard`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if(response.status === 401) {
      window.location.href = "../auth/login.html";
    }
    
    const data = await response.json();
    console.log(data);
    

    title.innerText = data.user.name;
    name.innerHTML = `Usuário: ${data.user.name}`;
    username.innerHTML = `Username: ${data.user.username}`;

    data.books.forEach(function(book) {
      console.log(book);
      const li = document.createElement("li");
      li.innerHTML = `<a href="../books/show.html?id=${book.id}"> - ${book.title}(${book.written_by}<a/>)`;
      books.appendChild(li);
    })
    

  } catch (error) {
    console.log(error);
  }
}
