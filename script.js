document.addEventListener("DOMContentLoaded", function () {
    // Handle login form submission
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const username = document.getElementById("username").value;
            const bio = document.getElementById("bio").value;
            const skills = document.getElementById("skills").value;

            // Store data in sessionStorage
            sessionStorage.setItem("username", username);
            sessionStorage.setItem("bio", bio);
            sessionStorage.setItem("skills", skills);

            // Redirect to portfolio page
            window.location.href = "portfolio.html";
        });
    }

    // Display stored data in portfolio
    if (window.location.pathname.includes("portfolio.html")) {
        const storedName = sessionStorage.getItem("username");
        const storedBio = sessionStorage.getItem("bio");
        const storedSkills = sessionStorage.getItem("skills");

        if (storedName) {
            document.getElementById("displayName").textContent = storedName;
        } else {
            window.location.href = "login.html"; // Redirect back to login if no name found
        }

        if (storedBio) {
            document.getElementById("displayBio").textContent = storedBio;
        }

        if (storedSkills) {
            document.getElementById("displaySkills").textContent = storedSkills;
        }
    }

    // Handle logout
    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            sessionStorage.clear(); // Clear all stored data
            window.location.href = "login.html"; // Redirect to login page
        });
    }
});
