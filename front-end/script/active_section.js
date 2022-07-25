
function parseNodeList(nodeList) {
    let htmlElements = [];
    nodeList.forEach(element => {
        htmlElements.push(element);   
    });
    return htmlElements;
}

let main_container = document.querySelector("main");
let scrollable_container = document.scrollingElement;
let navBar = document.querySelector("nav");
console.log(scrollable_container);
let sections = parseNodeList(main_container.querySelectorAll("section"));
let navIcons = parseNodeList(navBar.querySelectorAll(".navigation-icon"));

function setActiveNavIcon(index) {
    // Remove .active class to all icons
    navIcons.forEach((icon) => {
        icon.classList.remove("active");
    });

    // Set class .active
    navIcons[index].classList.add("active");
}

const scroll_indicator = document.querySelector(".scroll-position-indicator");
function doSomething(scroll_pos) {
    let max_scroll_pos = scrollable_container.scrollHeight - scrollable_container.clientHeight;
    let scroll_progress = (scroll_pos / max_scroll_pos);
    
    let main_scroll_top = (scrollable_container.scrollHeight * scroll_progress).toFixed(0);
    // scroll_indicator.style.top = ((main_container.scrollHeight-26) * scroll_progress) + "px";
    //scroll_indicator.textContent = `Position: ${main_scroll_top} / ${main_container.scrollHeight}`;
    // scroll_indicator.textContent = `Position: ${scroll_pos} / ${max_scroll_position} (${scroll_progress.toFixed(2)})`;
    for (let i=0; i<sections.length; i++) {
        let section = sections[i];
        if((section.offsetTop+section.offsetHeight) > main_scroll_top) {
            setActiveNavIcon(i);
            break;
        }
    }
}

let last_known_scroll_position = 0;
let ticking = false;


doSomething(scrollable_container.scrollTop);
window.addEventListener('scroll', function (e) {
    last_known_scroll_position = scrollable_container.scrollTop;
    if (!ticking) {
        window.requestAnimationFrame(function () {
            doSomething(last_known_scroll_position);
            ticking = false;
        });
    }
    ticking = true;
});