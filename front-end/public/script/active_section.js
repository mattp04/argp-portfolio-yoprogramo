
function parseNodeList(nodeList) {
    let htmlElements = [];
    nodeList.forEach(element => {
        htmlElements.push(element);   
    });
    return htmlElements;
}

let main_container = document.querySelector("main");
let navBar = document.querySelector("nav");
let sections = parseNodeList(main_container.querySelectorAll("section"));
let navIcons = parseNodeList(navBar.querySelectorAll(".navigation-icon"));

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

const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            setActiveNavIcon(entry.target.id + "_icon");
        }
    })
}, { threshold: 0.2 });


sections.forEach(section => sectionObserver.observe(section));