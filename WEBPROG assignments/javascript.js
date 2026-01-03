console.log("Website Loaded Successfully!");

window.addEventListener("load", () => {
    console.log("Page fully loaded!");
});

function showMessage() {
    alert("Thanks for visiting my website!");
}

function changeHeader() {
    document.getElementById("main-header").innerHTML = "Welcome to My Javascript Enhanced Page!";
}

const tools = ["Python", "SQL", "R"];

for (const tool of tools) {
    console.log(`Tool: ${tool}`);
}

let darkMode = false;

function toggleDarkMode() {
    darkMode = !darkMode;

    const body = document.body;

    if (darkMode) {
        body.classList.add("dark-mode");
        document.getElementById("darkBtn").innerText = "Turn Light Mode";
    } else {
        body.classList.remove("dark-mode");
        document.getElementById("darkBtn").innerText = "Turn Dark Mode";
    }
}
