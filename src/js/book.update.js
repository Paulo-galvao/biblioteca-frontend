import { url_api } from "/src/js/env.js";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

document.querySelector("form").addEventListener("submit", update);

book();
async function book() {
  const title = document.getElementById("title").firstElementChild;
  const written_by = document.getElementById("written_by").firstElementChild;
  const description = document.getElementById("description");
  const first_published = document.getElementById("first_published").firstElementChild;
  const url_img = document.getElementById("url_img").firstElementChild;

  const response = await fetch(`${url_api}/books/${id}`);

  const data = await response.json();
  const book = data.data[0];

  title.value = book.title;
  written_by.value = book.written_by;
  description.value = book.description;
  first_published.value = book.first_published.split("T")[0];
  url_img.value = book.url_img;
}

async function update(e) {
  e.preventDefault();

  const token = localStorage.getItem("token");

  const title = e.target.title.value;
  const written_by = e.target.written_by.value;
  const description = e.target.description.value;
  const first_published = e.target.first_published.value;
  const url_img = e.target.url_img.value;
  const error = document.getElementById("error");

  try {
    const response = await fetch(`${url_api}/books/${id}`, {
      method: "PUT",
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
      alert("Atualização concluída com sucesso");
      window.location.href = "/src/pages/users/dashboard.html";
    }
  } catch (error) {
    console.log(error);
  }
}
