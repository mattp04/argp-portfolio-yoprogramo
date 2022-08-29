let sections = document.querySelectorAll("section");
let navIcons = document.querySelectorAll("nav .navigation-icon");


function setActiveNavIcon(icon_name) {
    // Remove .active class to all icons
    navIcons.forEach((icon) => {
        if (icon.id === icon_name) {
            icon.classList.add("active");
        } else {
            icon.classList.remove("active");
        }
    });
}

function checkActiveSection() {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - document.scrollingElement.clientHeight / 2) {
            current = section.id;
        }
    });
    setActiveNavIcon(current + "_icon");
}

checkActiveSection();
window.addEventListener('scroll', checkActiveSection, { passive: true });