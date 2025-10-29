import { url_api } from "../js/env.js";

document.querySelector("form").addEventListener("submit", login);

async function login(e) {
  e.preventDefault();

  const username = e.target.username.value;
  const password = e.target.password.value;
  const error = document.getElementById("error");

  try {
    const response = await fetch(`${url_api}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if(response.ok === false) {

      error.classList.remove("hidden");
      error.classList.add("block");
      error.innerHTML = data.message;

    } else {
      
      if(error.classList.contains("block")) {
        error.classList.remove("block");
        error.classList.add("hidden");
      }

      localStorage.setItem("token", data.token);
      window.location.href = "../users/dashboard.html";
    }

  } catch (error) {
    console.log(error);
  }
}