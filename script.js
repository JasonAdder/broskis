document.addEventListener("DOMContentLoaded", () => {
    const categorySelect = document.getElementById("category");
    const subcategorySelect = document.getElementById("subcategory");
    const form = document.getElementById("selection-form");
    const infoContent = document.getElementById("info-content");

    // Predefined data
    const data = {
        printers: {
            deskjet: "Deskjet printers are compact and affordable, suitable for home use.",
            officejet: "Officejet printers are designed for small office settings with higher volume needs.",
            laserjet: "Laserjet printers are fast and efficient, ideal for businesses."
        },
        computers: {
            laptop: "Laptops are portable computers, great for working on the go.",
            desktop: "Desktops are stationary computers, offering more power and customization."
        },
        speakers: {
            default: "Speakers provide audio output for computers, televisions, and more."
        }
    };

    // Populate subcategories based on selected category
    categorySelect.addEventListener("change", () => {
        const category = categorySelect.value;
        subcategorySelect.innerHTML = ""; // Clear previous options

        if (data[category]) {
            for (const subcategory in data[category]) {
                const option = document.createElement("option");
                option.value = subcategory;
                option.textContent = subcategory.charAt(0).toUpperCase() + subcategory.slice(1);
                subcategorySelect.appendChild(option);
            }
        }
    });

    // Handle form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent page reload

        const category = categorySelect.value;
        const subcategory = subcategorySelect.value;

        if (data[category] && data[category][subcategory]) {
            infoContent.textContent = data[category][subcategory];
        } else {
            infoContent.textContent = "No information available for the selected category.";
        }
    });

    // Trigger initial population of subcategories
    categorySelect.dispatchEvent(new Event("change"));
});
