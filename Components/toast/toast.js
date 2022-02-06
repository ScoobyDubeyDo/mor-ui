const toasts = document.querySelectorAll(".auto-close-toast");
toasts.forEach((toast) => {
    toast.classList.remove("auto-close-toast");
    setTimeout(() => {
        toast.classList.add("auto-close-toast");
    }, 5000);
});
