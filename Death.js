
document.addEventListener("DOMContentLoaded", function () {
    console.log("Death.js loaded successfully.");
    const ekgLine = document.querySelector('.ekg');
    if (ekgLine) {
        setInterval(() => {
            ekgLine.classList.toggle('active');
        }, 2000); // Example: Toggle every 2 seconds
    }
});
