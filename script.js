document.addEventListener("DOMContentLoaded", () => {
    const uploadForm = document.getElementById("upload-form");
    const categorySelect = document.getElementById("category");
    const subcategorySelect = document.getElementById("subcategory");
    const itemGallery = document.getElementById("item-gallery");

    // Subcategory options for each category
    const subcategories = {
        printers: ["Deskjet", "Officejet", "Laserjet"],
        computers: ["Laptop", "Desktop"],
        speakers: ["Bluetooth", "Wired"]
    };

    // Handle category change to populate subcategories
    categorySelect.addEventListener("change", () => {
        const category = categorySelect.value;
        subcategorySelect.innerHTML = '<option value="">Select a subcategory</option>'; // Reset subcategory options
        if (category) {
            subcategories[category].forEach(subcategory => {
                const option = document.createElement("option");
                option.value = subcategory.toLowerCase();
                option.textContent = subcategory;
                subcategorySelect.appendChild(option);
            });
        }
    });

    // Handle form submission
    uploadForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent page reload

        const category = categorySelect.value;
        const subcategory = subcategorySelect.value;
        const itemDetails = document.getElementById("item-details").value;

        if (category && subcategory && itemDetails) {
            const itemInfo = document.createElement("div");
            itemInfo.classList.add("item-info");
            itemInfo.innerHTML = `
                <h3>${subcategory} - ${category}</h3>
                <p>${itemDetails}</p>
            `;
            itemGallery.appendChild(itemInfo);
        } else {
            alert("Please fill in all fields.");
        }

        // Reset the form
        uploadForm.reset();
        subcategorySelect.innerHTML = '<option value="">Select a subcategory</option>';
    });
});
