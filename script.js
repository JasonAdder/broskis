document.addEventListener("DOMContentLoaded", () => {
    const categorySelect = document.getElementById("category");
    const subcategorySelect = document.getElementById("subcategory");

    // Predefined data
    const data = {
        printers: ["deskjet", "officejet", "laserjet"],
        computers: ["laptop", "desktop"],
        speakers: []
    };

    // Populate subcategories based on selected category
    categorySelect.addEventListener("change", () => {
        const category = categorySelect.value;
        subcategorySelect.innerHTML = ""; // Clear previous options

        if (data[category]) {
            data[category].forEach((subcategory) => {
                const option = document.createElement("option");
                option.value = subcategory;
                option.textContent = subcategory.charAt(0).toUpperCase() + subcategory.slice(1);
                subcategorySelect.appendChild(option);
            });
        }
    });

    // Trigger initial population of subcategories
    categorySelect.dispatchEvent(new Event("change"));
});
