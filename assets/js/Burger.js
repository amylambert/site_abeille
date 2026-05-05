class BurgerMenu {
  constructor() {
    console.log("🟢 BurgerMenu constructor appelé");
    this.initEventDelegation();
  }

  initEventDelegation() {
    console.log("🟡 initEventDelegation appelé");

    document.addEventListener("click", (event) => {
      console.log("🔴 Click détecté sur:", event.target);

      // ✅ Remonte jusqu'au parent .burger, .close ou .overlay-menu-mobile
      const targetBurger = event.target.closest(".burger");
      const targetClose = event.target.closest(".close");
      const targetOverlay = event.target.closest(".overlay-menu-mobile");

      console.log("Burger trouvé?", targetBurger);
      console.log("Close trouvé?", targetClose);
      console.log("Overlay trouvé?", targetOverlay);

      if (targetBurger || targetClose || targetOverlay) {
        const navigationMenu = document.querySelector(".nav");
        const overlayElement = document.querySelector(".overlay-menu-mobile");

        console.log("Nav trouvée?", navigationMenu);
        console.log("Overlay trouvé?", overlayElement);

        if (navigationMenu) navigationMenu.classList.toggle("open");
        if (overlayElement) overlayElement.classList.toggle("open");

        console.log("✅ Menu togglé !");
      }
    });
  }
}

document.addEventListener("html-includes-done", () => {
  console.log("✅ html-includes-done déclenché");
  console.log("Nav existe?", document.querySelector(".nav"));
  console.log("Burger existe?", document.querySelector(".burger"));

  // Nettoie les classes 'open' au démarrage
  const nav = document.querySelector(".nav");
  const overlay = document.querySelector(".overlay-menu-mobile");

  if (nav) nav.classList.remove("open");
  if (overlay) overlay.classList.remove("open");

  new BurgerMenu();
});
