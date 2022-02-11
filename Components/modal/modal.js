const modals = document.querySelectorAll(".modal-sm, .modal-md, .modal-lg");
const modalOpeners = document.querySelectorAll(".modal-handler");

modals.forEach((modal) => {
    modal.classList.add("modal-closed");
    modal.querySelectorAll(".modal-close-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            modal.classList.add("modal-closed");
        });
    });
});

modalOpeners.forEach((btn) => {
    btn.addEventListener("click", () => {
        modals.forEach((modal) => {
            if (btn.getAttribute("for") === modal.getAttribute("id")) {
                modal.classList.remove("modal-closed");
            }
        });
    });
});
