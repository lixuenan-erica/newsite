document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a[data-target]");
    const pages = document.querySelectorAll(".page");
    const header = document.querySelector("header");

    function showPage(targetId) {
        pages.forEach((page) => {
            page.classList.toggle("active", page.id === targetId);
        });

        if (header) {
            header.style.display = targetId === "about" ? "block" : "none";
        }
    }

    links.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            showPage(link.dataset.target);
        });
    });

    showPage("about");
});
