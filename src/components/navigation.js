class Navigation extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <nav class="flex justify-between items-center h-1/10 border-b px-4">

            <div>
                <a href="/index.html">
                    ReadMore
                    <i class="bi bi-book-half relative top-px "></i>    
                </a>
            </div>
            <!-- GUEST -->
            <div id="guest" class="space-x-2">
                <a class="" href="/src/pages/auth/register.html">Registrar</a>
                <a class="" href="/src/pages/auth/login.html">Login</a>
            </div>
            <!-- USER -->
            <div id="user" class="space-x-2 hidden">
                <a id="logged-user" class="" href="/src/pages/users/dashboard.html"
                >User</a
                >
            </div>

        </nav>
    `;
  }
}

customElements.define("navigation-menu", Navigation);
