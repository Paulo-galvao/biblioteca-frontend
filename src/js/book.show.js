import {url_api} from "/src/js/env.js"
        
        const params = new URLSearchParams(window.location.search);
        const id = params.get("id"); // id do livro
        
        show();
        
        async function show() {
            const title = document.querySelector("title");
            const booksShow = document.getElementById("books-show");
                   
            try {
                const response = await fetch(`${url_api}/books/${id}`);

                if(!response.ok) {
                    booksShow.innerHTML = `<div>Nenhum resultado encontrado</div>`
                }

                const data = await response.json();
                const book = data.data[0];
                const div = document.createElement("div");

                title.innerText = book.title;

                switch (true) {
                    case book.rate >= 0 && book.rate <= 9:
                        div.innerHTML = `
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                        `;
                        break;
                    case book.rate >= 10 && book.rate <= 19:
                        div.innerHTML = `
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                        `;
                        break;
                    case book.rate >= 20 && book.rate <= 29:
                        div.innerHTML = `
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                        `;
                        break;
                    case book.rate >= 30 && book.rate <= 39:
                        div.innerHTML = `
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                        `;
                        break;
                    case book.rate >= 40 && book.rate <= 49:
                        div.innerHTML = `
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star"></i>
                        `;
                        break;
                    case book.rate == 50:
                        div.innerHTML = `
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                        `;
                        break;
                    default:
                        break;
                }
                
                const card = `
                    <img
                        class="w-3xs"
                        src=${book.url_img} 
                        alt=${book.title} />
                    <div>
                        <h1 class="text-3xl ">${book.title}</h1>
                        <p>${book.written_by}</p>
                        <p>${div.innerHTML}</p>
                        <p>${book.description}</p>
                        <p>Primeira publicação: ${book.first_published.split("T")[0]}</p>
                    </div>
                `;

                booksShow.innerHTML = card;

            } catch (error) {
                console.log(error);
                
            }
        }