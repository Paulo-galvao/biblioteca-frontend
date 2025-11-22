import { url_api } from "/src/js/env.js";
import { rate } from "/src/js/rate.js";

const bookList = document.getElementById("book-list");

const response = await fetch(`${url_api}/books`);
const data = await response.json();
const books = data.data;

console.log(books[1].rate/10);


books.forEach(book => {
  console.log(book.rate);
  const card = document.createElement("div");
  card.innerHTML = `
    
      <a href="">
        <div class="w-36 ">
          <img class="w-36 h-[200px]" src=${book.url_img} alt="">
          <div>
            <h2 class="truncate">${book.title}</h2>
            <p class="text-[13px] text-gray-400">${book.written_by}</p>
            ${rate(book, book.rate).innerHTML}
          </div>
        </div>
      </a>
    
  `;

  bookList.appendChild(card);
  
});