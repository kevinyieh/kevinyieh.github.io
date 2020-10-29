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
        window.scrollTo({top: 0, behavior: 'smooth'})
    })
    projects.addEventListener("mousedown", e => {
        hideNav();
        const projectSection = document.getElementById("projects-section");
        scrollToElement(projectSection);
    })
    techSkills.addEventListener("mousedown", e => {
        hideNav();
        const technologies = document.getElementById("technologies");
        scrollToElement(technologies);
    })
    extendedBio.addEventListener("mousedown", e => {
        hideNav();
        const extBio = document.getElementById("extended-bio");
        extBio.scrollIntoView({behavior: 'smooth',block: 'start'})
    })
})

function scrollToElement(element) {
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const top = elementRect - bodyRect - 40;
    window.scrollTo({top: top, behavior: 'smooth'});
}