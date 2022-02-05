const bars = document.querySelector(".ham-burger");
const list = document.querySelector(".menu-bar");
bars.addEventListener("click", () => {
    list.style.top === "" ? (list.style.top = "0px") : (list.style.top = "");
});
