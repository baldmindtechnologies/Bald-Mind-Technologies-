const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const contactButton = document.getElementById("contactButton");
if (contactButton) {
  contactButton.addEventListener("click", () => {
    const user = "admin";
    const host = "baldmindtechnologies.com";
    window.location.href = `mailto:${user}@${host}?subject=Bald%20Mind%20Technologies%20Inquiry`;
  });
}
