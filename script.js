const joinButton = document.getElementById("join-button");
const contactButton = document.getElementById("contact-button");
const menuButton = document.getElementById("burger");
const sidebar = document.getElementById("sidebar");

joinButton.addEventListener("click", function() {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLScsZly0w_K9R29_qE7P4U7flbXDGvxsTNogWU0UPm-Bacl9lw/viewform", '_blank');
});

contactButton.addEventListener("click", function() {
    window.open("https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTKWltDmGxqxgXlpRCZxmjpGcBsjJqDXjTXsMzlWhHqlFgjBkMhmPptvSVJBBDJKNsSRxq", '_blank');
});

menuButton.addEventListener("change", function () {
    if (menuButton.checked) {
        sidebar.style.transform = "translateX(0)";
    } else {
        sidebar.style.transform = "translateX(100%)";
    }
});