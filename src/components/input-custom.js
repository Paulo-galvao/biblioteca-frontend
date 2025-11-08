class InputCustom extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <input 
                name=${this.getAttribute("name")} 
                type="${this.getAttribute("type")}"    
                id="${this.getAttribute("id")}"  
                class="bg-gray-700 w-72 py-1 outline-0 focus:outline-2 outline-purple-700" 
            />
        `
    }
}

customElements.define("input-custom", InputCustom);

