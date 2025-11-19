class ButtonCustom extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <button 
                class="w-72 py-2 px-8 bg-gray-500 cursor-pointer hover:bg-gray-400 hover:text-gray-800 duration-600" 
                id=${this.getAttribute("id")}
                type=${this.getAttribute("type")}
            >${this.getAttribute("content")}</button>
        `;
    }
}

customElements.define("button-custom", ButtonCustom);

