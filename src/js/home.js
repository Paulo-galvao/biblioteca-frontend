import { url_api } from "./env.js";

const bookList = document.getElementById("book-list");

fetch(url_api + "/users")
  .then(function (response) {
    if (!response.ok) {
      console.log("Erro ao buscar dados da API");
    }
    return response.json();
  })
  .then(function (response) {

    response.data.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = item.name;
      bookList.appendChild(li);
    });
  })
  .catch(function (error) {
    console.log(error.message);
  });
