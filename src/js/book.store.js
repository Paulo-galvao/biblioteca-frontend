import { url_api } from "/src/js/env.js";

document.querySelector("form").addEventListener("submit", store);
const error = document.getElementById("error");

async function store(e) {
  e.preventDefault();

  const token = localStorage.getItem("token");

  const title = e.target.title.value;
  const written_by = e.target.written_by.value;
  const description = e.target.description.value;
  const first_published = e.target.first_published.value;
  const url_img = e.target.url_img.value;

  try {
    const response = await fetch(`${url_api}/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title,
        written_by,
        description,
        first_published,
        url_img,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      error.classList.remove("invisible");
      error.innerHTML = data.message;
    } else {
      alert("Nova publicação concluída com sucesso");
      window.location.href = "/src/pages/users/dashboard.html";
    }
  } catch (error) {
    console.log(error);
  }
}
