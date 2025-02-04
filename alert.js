// Get form and list container
const form = document.getElementById("missingform");
const missinglist = document.getElementById("missinglist");

// Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent browser reload

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const location = document.getElementById("location").value;
    const description = document.getElementById("description").value;
    const imageInput = document.getElementById("image").files[0]; // Get the file

    const reader = new FileReader();
    reader.onload = function (e) {
        // Create missing person card
        const card = document.createElement("div");
        card.classList.add("missing-card");
        card.innerHTML = `
            
            <div>
            <img src="${e.target.result}" alt="Photo">
                <h3>${name} (Age: ${age})</h3>
                <p>Description: ${description}</p>
                <p>Location: ${location}</p>
            </div>
        `;

        // Append to list
        missinglist.appendChild(card);

        // Clear form details
        form.reset();
    };

    // Read the image file as a Data URL
    if (imageInput) {
        reader.readAsDataURL(imageInput);
    }
});
