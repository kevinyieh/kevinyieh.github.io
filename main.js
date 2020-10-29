document.addEventListener("DOMContentLoaded", () => {
    function hideNav(){
        modal.classList.add("hidden");
        navContainer.classList.remove("on-screen");
        navContent.classList.remove("on-screen");
    }
    const burger = document.getElementById("burger");
    const navContainer = document.getElementById("nav-container");
    const modal = document.getElementById("nav-modal-backdrop");
    const navContent = document.getElementById("nav-content");
    const close = document.getElementById("close");

    close.addEventListener("mousedown", e => {
        hideNav();
    })
    burger.addEventListener("mousedown", e => {
        modal.classList.remove("hidden");
        navContainer.classList.add("on-screen");
        navContent.classList.add("on-screen");
    })
    modal.addEventListener("mousedown", e => {
        if(e.target === modal) {
            hideNav();
        }
    })

    const home = document.getElementById("nav-home");
    const projects = document.getElementById("nav-projects");
    const techSkills = document.getElementById("nav-tech-skills");
    const extendedBio = document.getElementById("nav-extended-bio");

    home.addEventListener("mousedown", e => {
        hideNav();
        scrollToTop();
    })
    projects.addEventListener("mousedown", e => {
        hideNav();
        const projectSection = document.getElementById("projects-section");
        projectSection.scrollIntoView({behavior: 'smooth',block: 'start'})
    })
    techSkills.addEventListener("mousedown", e => {
        hideNav();
        const technologies = document.getElementById("technologies");
        technologies.scrollIntoView({behavior: 'smooth',block: 'start'})
    })
    extendedBio.addEventListener("mousedown", e => {
        hideNav();
        const extBio = document.getElementById("extended-bio");
        extBio.scrollIntoView({behavior: 'smooth',block: 'start'})
    })
})

function scrollToTop(){
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
};
