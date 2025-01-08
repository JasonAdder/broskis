// JavaScript to handle file uploads and gallery updates

document.addEventListener("DOMContentLoaded", () => {
    const uploadForm = document.getElementById("upload-form");
    const mediaGallery = document.getElementById("media-gallery");

    // Handle form submission
    uploadForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent page reload

        const fileInput = document.getElementById("file");
        const file = fileInput.files[0];

        if (file) {
            // Display the uploaded file in the gallery
            const reader = new FileReader();

            reader.onload = (e) => {
                const mediaElement = document.createElement(
                    file.type.startsWith("image/") ? "img" : "video"
                );
                mediaElement.src = e.target.result;
                mediaElement.controls = true; // For videos
                mediaGallery.appendChild(mediaElement);
            };

            reader.readAsDataURL(file);
        } else {
            alert("Please select a file to upload.");
        }

        // Reset the file input
        fileInput.value = "";
    });
});
