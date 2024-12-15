// Get the image and details elements
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const details = document.getElementById("details");

// Function to show details and reposition images
function showDetails() {
    details.classList.add("show"); // Add the "show" class to display the details

    // Apply glowing effect and scale for each image with unique colors
    image1.style.transform = "scale(1.3)";
    image1.style.boxShadow = "0 0 20px 5px rgba(18, 231, 89, 0.8)"; // Green glow for the first image

    image2.style.transform = "translate(-686px, 400px) scale(1.3)";
    image2.style.boxShadow = "0 0 20px 5px rgba(48, 227, 233, 0.84)"; // Cyan glow for the second image

    image3.style.transform = "translate(-700px, 400px) scale(1.3)";
    image3.style.boxShadow = "0 0 20px 5px rgba(247, 211, 6, 0.8)"; // Yellow glow for the third image
}

// Function to hide details and reset image positions and sizes
function hideDetails() {
    details.classList.remove("show"); // Remove the "show" class to hide the details

    // Reset scale and remove glowing effect for each image
    image1.style.transform = "scale(1)";
    image1.style.boxShadow = "none";

    image2.style.transform = "translate(0, 0) scale(1)";
    image2.style.boxShadow = "none";

    image3.style.transform = "translate(0, 0) scale(1)";
    image3.style.boxShadow = "none";
}

// Display details when the cursor enters the image
image1.addEventListener("mouseenter", showDetails);

// Hide details when the cursor leaves the image
image1.addEventListener("mouseleave", hideDetails);