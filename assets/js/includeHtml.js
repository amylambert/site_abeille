class IncludeComponent extends HTMLElement {
    async connectedCallback() {
        const sourceFile = this.getAttribute("source");
        if (!sourceFile) return;

        try {
            const fetchResponse = await fetch(sourceFile);
            if (fetchResponse.ok) {
                this.innerHTML = await fetchResponse.text();
                this.dispatchEvent(new CustomEvent("included", { bubbles: true }));
            } else {
                this.innerHTML = "HTTP Error : " + fetchResponse.status;
            }
        } catch (fetchError) {
            console.error("Inclusion failed:", fetchError);
        }
    }
}

customElements.define("include-html", IncludeComponent);

let totalIncludes = document.querySelectorAll('include-html').length;
let loadedIncludes = 0;

document.addEventListener("included", () => {
    loadedIncludes++;
    if (loadedIncludes === totalIncludes) {
        document.dispatchEvent(new CustomEvent("html-includes-done"));
    }
});