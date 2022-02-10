document.querySelectorAll(".rating-input").forEach((element) => {
    element.addEventListener("change", () => {
        document.querySelector(
            ".rating-display"
        ).innerText = `${element.value}/5`;
    });
});
