document.addEventListener("DOMContentLoaded", () => {
    const detailsButtons = document.querySelectorAll(".details-btn");

    detailsButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const details = button.nextElementSibling;

            // Toggle visibility
            if (details.style.display === "block") {
                details.style.display = "none";
                button.textContent = "Show Details";
            } else {
                details.style.display = "block";
                button.textContent = "Hide Details";
            }
        });
    });
});