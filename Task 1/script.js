// JavaScript for collapsible menu
document.querySelectorAll(".collapsible").forEach(item => {
    item.addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});

// Advanced JavaScript for responsive scaling
function adjustScreenWidth() {
    const width = window.innerWidth;
    let scale = 1;

    if (width >= 992 && width <= 1600) {
        scale = 0.9;
    } else if (width >= 700 && width <= 767) {
        scale = 0.8;
    } else if (width >= 600 && width <= 700) {
        scale = 0.75;
    } else if (width <= 600) {
        scale = 0.5;
    }

    document.body.style.transform = `scale(${scale})`;
    document.body.style.transformOrigin = '0 0';
}

window.addEventListener("resize", adjustScreenWidth);
document.addEventListener("DOMContentLoaded", adjustScreenWidth);
