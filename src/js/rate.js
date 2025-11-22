export function rate(book, value) {
  const div = document.createElement("div");

  switch (true) {
    case book.rate >= 0 && book.rate <= 9:
      div.innerHTML = `
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <span>(${(value/10).toString().replace(".", ",")})</span>
                        `;
      break;
    case book.rate >= 10 && book.rate <= 19:
      div.innerHTML = `
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <span>(${(value/10).toString().replace(".", ",")})</span>
                        `;
      break;
    case book.rate >= 20 && book.rate <= 29:
      div.innerHTML = `
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <span>(${(value/10).toString().replace(".", ",")})</span>
                        `;
      break;
    case book.rate >= 30 && book.rate <= 39:
      div.innerHTML = `
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <span>(${(value/10).toString().replace(".", ",")})</span>
                        `;
      break;
    case book.rate >= 40 && book.rate <= 49:
      div.innerHTML = `
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star"></i>
                            <span>(${(value/10).toString().replace(".", ",")})</span>
                        `;
      break;
    case book.rate == 50:
      div.innerHTML = `
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <span>(${(value/10).toString().replace(".", ",")})</span>
                        `;
      break;
    default:
      break;
  }

  return div;
}
