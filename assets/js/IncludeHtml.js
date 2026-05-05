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
        // Dispatch quand même pour ne pas bloquer le compteur
        this.dispatchEvent(new CustomEvent("included", { bubbles: true }));
      }
    } catch (fetchError) {
      console.error("Inclusion failed:", fetchError);
      // Dispatch quand même pour ne pas bloquer le compteur
      this.dispatchEvent(new CustomEvent("included", { bubbles: true }));
    }
  }
}

customElements.define("include-html", IncludeComponent);

// Attendre que le DOM soit chargé avant de compter les includes
document.addEventListener("DOMContentLoaded", () => {
  const totalIncludes = document.querySelectorAll("include-html").length;
  console.log("📦 Total includes à charger:", totalIncludes);

  let loadedIncludes = 0;

  document.addEventListener("included", () => {
    loadedIncludes++;
    console.log(`✓ Include chargé ${loadedIncludes}/${totalIncludes}`);

    if (loadedIncludes === totalIncludes) {
      console.log("✅ Tous les includes sont chargés !");
      document.dispatchEvent(new CustomEvent("html-includes-done"));
    }
  });
});
