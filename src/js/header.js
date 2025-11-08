import { url_api } from "/src/js/env.js";

const token = localStorage.getItem("token");
const guest = document.getElementById("guest");
const user = document.getElementById("user");
const loggedUser = document.getElementById("logged-user");

const response = await fetch(`${url_api}/users/dashboard`, {
    method: "GET",
    headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
    },
});

if (response.ok) {
    const data = await response.json();
    if (data.logged) {
    guest.classList.remove("visible");
    guest.classList.add("hidden");
    loggedUser.innerText = data.user.name;
    user.classList.remove("hidden");
    user.classList.add("visible");
    } else {
    guest.classList.remove("hidden");
    guest.classList.add("visible");
    }
    
}