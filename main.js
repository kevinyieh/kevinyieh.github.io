document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger");
    const navContainer = document.getElementById("nav-container");
    const modal = document.getElementById("nav-modal-backdrop");
    const navContent = document.getElementById("nav-content");
    const close = document.getElementById("close");

    close.addEventListener("mousedown", e => {
        modal.classList.add("hidden");
        navContainer.classList.remove("on-screen");
        navContent.classList.remove("on-screen");
    })
    burger.addEventListener("mousedown", e => {
        modal.classList.remove("hidden");
        navContainer.classList.add("on-screen");
        navContent.classList.add("on-screen");
    })
    modal.addEventListener("mousedown", e => {
        if(e.target === modal) {
            modal.classList.add("hidden");
            navContainer.classList.remove("on-screen");
            navContent.classList.remove("on-screen");
        }
    })
})