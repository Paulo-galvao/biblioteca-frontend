import { url_api } from "../js/env.js";

checkUser();

async function checkUser() {
  const token = localStorage.getItem("token");
  
  try {
    const response = await fetch(`${url_api}/users/dashboard`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    document.querySelector("p").innerHTML = `Usuário: ${data.user.name}`;
  } catch (error) {
    console.log(error);
  }
}
