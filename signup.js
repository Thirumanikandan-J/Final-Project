document.addEventListener("DOMContentLoaded", function () {
    const signUpForm = document.querySelector("form[action='/signup']");
    signUpForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        window.location.href = "index.html";
    });
    if (window.location.pathname.includes("index.html")) {
        const username = localStorage.getItem("username");
        if (username) {
            const welcomeSection = document.createElement("section");
            welcomeSection.className = "welcome-section";
            welcomeSection.innerHTML = `
                <h2>Welcome, ${username}!</h2>
                <p>Thank you for signing up. We're excited to have you with us!</p>
            `;
            const mainContent = document.querySelector("main");
            mainContent.insertBefore(welcomeSection, mainContent.firstChild);
        }
    }
});