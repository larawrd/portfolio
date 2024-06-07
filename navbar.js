let lastScrollTop = 0;
window.addEventListener("scroll", function() {
    let navbar = document.querySelector("navbar");
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.classList.add("hidden-navbar");
    } else {
        navbar.classList.remove("hidden-navbar");
    }
    lastScrollTop = scrollTop;
});
