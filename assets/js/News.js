document.addEventListener("html-includes-done", () => {
    const gridContainer = document.getElementById("news-grid");
    if (!gridContainer) return;

    // Les vraies données extraites du site de base (j'adore les abeilles)
    const newsData = [
        {
            title: "Décret n° 2025-1377 du 29 décembre 2025",
            text: "Précisant les modalités d'adoption du plan national et des plans départementaux de lutte contre le frelon asiatique à pattes jaunes.",
            linkText: "Télécharger le décret (PDF)",
            url: "https://www.legifrance.gouv.fr/download/pdf?id=gwVEG1YigEmEk7G8bNpQh66LX11H3o62r_82R6Ql5Bg=",
        },
        {
            title: "LOI n° 2025-237 du 14 mars 2025",
            text: "Visant à endiguer la prolifération du frelon asiatique et à préserver la filière apicole.",
            linkText: "Télécharger la loi (PDF)",
            url: "https://www.legifrance.gouv.fr/download/pdf?id=yFHk8BqGhhVbGD-csP_674iX_erjixoTD_Jy3AVXRFk=",
        },
        {
            title: "Quelques précautions pour la saison chaude..!",
            text: "Document informatif sur les bonnes pratiques et les points d'eau pour vos abeilles lors des fortes chaleurs.",
            linkText: "Cliquer pour en savoir plus",
            url: "https://www.abeille-olivetaine.fr/services/storage?type=document&id=5860333&secret=XGwUcgcVLNyaXMVrZhoLxOUidbekKHUp2fGbEbCh&timestamp=1750635170&download=1",
        },
        {
            title: "Le livret de l'apiculteur",
            text: "Livret destiné à ceux qui acquièrent leur première colonie, et à ceux qui veulent se mettre à jour...",
            linkText: "Ouvrir le livret",
            url: "https://www.abeille-olivetaine.fr/services/storage?type=document&id=5160490&secret=f7htO20DowlFAniyCDmEzLWhpZpneVYhbpnyoDWd&timestamp=1776760015&download=1",
        },
        {
            title: "Article sur les ruches cheminées",
            text: "Parution dans la revue « Les jardins du Loiret ».",
            linkText: "Lire l'article",
            url: "https://www.abeille-olivetaine.fr/services/storage?type=document&id=5160478&secret=R1joPb5rYqoMRvNZ57KLED2zof6q0CFfEu0I5hld&timestamp=1776760012&download=1",
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
    articleEl.classList.add("news-article");

    const contentEl = document.createElement("div");
    contentEl.classList.add("news-content");

    const titleEl = document.createElement("h3");
    titleEl.classList.add("news-title");
    titleEl.textContent = article.title;

    const textEl = document.createElement("p");
    textEl.classList.add("news-text");
    textEl.textContent = article.text;

    contentEl.appendChild(titleEl);
    contentEl.appendChild(textEl);

    const linkEl = document.createElement("a");
    linkEl.classList.add("news-link-btn");
    linkEl.textContent = article.linkText;
    linkEl.href = article.url;
    linkEl.target = "_blank"; // Ouvre dans un nouvel onglet (pratique pour les PDF)
    linkEl.rel = "noopener noreferrer"; // Sécurité indispensable quand on utilise target="_blank" (wallah c'est vrai)

    articleEl.appendChild(contentEl);
    articleEl.appendChild(linkEl);

    return articleEl;
}
