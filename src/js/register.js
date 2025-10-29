import { url_api } from "../js/env.js";

document.querySelector("form").addEventListener("submit", register);

async function register(e) {
  e.preventDefault();

  const name = e.target.name.value;
  const username = e.target.username.value;
  const password = e.target.password.value;

  try {
    const response = await fetch(`${url_api}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, username, password }),
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
