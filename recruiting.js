const menuButton = document.getElementById("burger");
const sidebar = document.getElementById("sidebar");
const application = document.getElementById("application");
const mailingList = document.getElementById("mailing-list");
const instagram = document.getElementById("instagram");
const linkedin = document.getElementById("linkedin");

menuButton.addEventListener("change", function () {
    if (menuButton.checked) {
        sidebar.style.transform = "translateX(0)";
    } else {
        sidebar.style.transform = "translateX(100%)";
    }
});

application.addEventListener("click", function() {
    window.open("https://forms.gle/hsvRuDubSPt1rTMe6", '_blank');
});

mailingList.addEventListener("click", function() {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLScsZly0w_K9R29_qE7P4U7flbXDGvxsTNogWU0UPm-Bacl9lw/viewform", '_blank');
});

instagram.addEventListener("click", function() {
    window.open("https://www.instagram.com/umich_mdc/profilecard/?igsh=c2ljNTBldDll2eGQx", '_blank');
});

linkedin.addEventListener("click", function() {
    window.open("https://www.linkedin.com/company/michigan-data-consulting/", '_blank');
});
