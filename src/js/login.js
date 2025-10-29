import { url_api } from "../js/env.js";

document.querySelector("form").addEventListener("submit", login);

async function login(e) {
  e.preventDefault();

  const username = e.target.username.value;
  const password = e.target.password.value;

  try {
    const response = await fetch(`${url_api}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    localStorage.setItem("token", data.token);
    window.location.href = "../users/dashboard.html";

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}