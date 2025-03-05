document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".fade-in").forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }, index * 500);
    });
});

function playVideo(container) {
    let video = container.querySelector(".hover-video");
    video.style.opacity = "1";
    video.play();
}

function pauseVideo(container) {
    let video = container.querySelector(".hover-video");
    video.pause();
    video.currentTime = 0; // Restart the video when mouse leaves
    video.style.opacity = "0";
}

function redirectTo(url) {
    window.location.href = url;
}

function toggleMenu() {
    const menu = document.getElementById("menu-overlay");
    menu.classList.toggle("open");
}