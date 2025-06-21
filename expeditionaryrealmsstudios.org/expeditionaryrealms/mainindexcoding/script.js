// Example JavaScript functionality

document.addEventListener("DOMContentLoaded", function () {
    // Welcome message in the console
    console.log("Welcome to Expeditionary Realms!");

    // Check if footer link exists before adding event listener
    const footerLink = document.querySelector("footer a");

    if (footerLink) {
        footerLink.addEventListener("click", function (event) {
            event.preventDefault();

            // Toast-style notification instead of alert for better UX
            showToast("Chatbot functionality coming soon!");
        });
    }

    // Function to display a toast notification
    function showToast(message) {
        const toast = document.createElement("div");
        toast.textContent = message;
        toast.style.position = "fixed";
        toast.style.bottom = "20px";
        toast.style.left = "50%";
        toast.style.transform = "translateX(-50%)";
        toast.style.backgroundColor = "#333";
        toast.style.color = "#fff";
        toast.style.padding = "10px 20px";
        toast.style.borderRadius = "5px";
        toast.style.zIndex = "1000";
        toast.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
        toast.style.opacity = "0";
        toast.style.transition = "opacity 0.5s";

        document.body.appendChild(toast);

        // Fade in the toast
        setTimeout(() => {
            toast.style.opacity = "1";
        }, 100);

        // Fade out and remove toast after a few seconds
        setTimeout(() => {
            toast.style.opacity = "0";
            setTimeout(() => {
                toast.remove();
            }, 500);
        }, 3000);
    }
});
