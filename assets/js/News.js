document.addEventListener("html-includes-done", () => {
    const gridContainer = document.getElementById("news-grid");
    if (!gridContainer) return;

    // Exemple de donnée (ex: fetch depuis un JSON) (c'est ptn de temporaire)
    const newsData = [
        {
            id: 1,
            title: "Récolte 2026",
            date: "04 Mai 2026",
            excerpt: "Une année record pour le miel de printemps...",
        },
        {
            id: 2,
            title: "Atelier Enfants",
            date: "12 Mai 2026",
            excerpt: "Initiation à la biodiversité pour les plus jeunes.",
        },
    ];

    gridContainer.textContent = "";

    newsData.forEach((article) => {
        const card = createNewsCard(article);
        gridContainer.appendChild(card);
    });
});

function createNewsCard(article) {
    const articleEl = document.createElement("article");
    articleEl.classList.add("news-article", "card");

    const titleEl = document.createElement("h3");
    titleEl.textContent = article.title;

    const excerptEl = document.createElement("p");
    excerptEl.textContent = article.excerpt;

    articleEl.appendChild(titleEl);
    articleEl.appendChild(excerptEl);

    return articleEl;
}
