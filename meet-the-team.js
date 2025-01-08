const menuButton = document.getElementById("burger");


menuButton.addEventListener("change", function () {
    if (menuButton.checked) {
        sidebar.style.transform = "translateX(0)";
    } else {
        sidebar.style.transform = "translateX(100%)";
    }
});