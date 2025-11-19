import { url_api } from "/src/js/env.js";

const token = localStorage.getItem("token");
const guest = document.getElementById("guest");
const user = document.getElementById("user");
const loggedUser = document.getElementById("logged-user");

const response = await fetch(`${url_api}/users/dashboard`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

const data = await response.json();

if (!token) {
  // não logado

  //user invisivel
  user.classList.add("hidden");
  user.classList.remove("visible");

  //guest visivel
  guest.classList.add("visible");
  guest.classList.remove("hidden");
} else {
  // logado

  // user visivel
  user.classList.add("visible");
  user.classList.remove("hidden");

  // guest invisivel
  guest.classList.add("hidden");
  guest.classList.remove("visible");

  loggedUser.innerText = data.user.name;
}
