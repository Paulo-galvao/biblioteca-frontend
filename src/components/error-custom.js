class ErrorCustom extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div 
                id="error" 
                class="invisible error py-2 w-screen text-center">
                    error message
            </div>
        `;
    }
}

customElements.define("error-custom", ErrorCustom);