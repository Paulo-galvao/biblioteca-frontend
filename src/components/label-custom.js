class LabelCustom extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <label 
                for=${this.getAttribute("for")} 
                class="block py-2">
                    ${this.getAttribute("content")}
            </label>
        `
        
    }
}

customElements.define("label-custom", LabelCustom);