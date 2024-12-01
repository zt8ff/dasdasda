
document.addEventListener("DOMContentLoaded", function () {
    console.log("JsRadio.js loaded successfully.");
    // Example: Toggle radio button visibility
    document.querySelectorAll('input[type="radio"]').forEach(function (radio) {
        radio.addEventListener('change', function () {
            console.log(`${radio.name} changed to ${radio.value}`);
        });
    });
});
