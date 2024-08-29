document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form[action='/login']");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();        
        const inputUsername = document.getElementById("username").value;
        const inputPassword = document.getElementById("password").value;
        const storedUsername = localStorage.getItem("username");
        const storedPassword = localStorage.getItem("password");
        if (inputUsername === storedUsername && inputPassword === storedPassword) {
            window.location.href = "index.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
    if (window.location.pathname.includes("index.html")) {
        const username = localStorage.getItem("username");
        if (username) {
            const welcomeSection = document.createElement("section");
            welcomeSection.className = "welcome-section";
            welcomeSection.innerHTML = `
                <h2>Welcome back, ${username}!</h2>
                <p>We're glad to see you again!</p>
            `;
            const mainContent = document.querySelector("main");
            mainContent.insertBefore(welcomeSection, mainContent.firstChild);
        }
    }
});