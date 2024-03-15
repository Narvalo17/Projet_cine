var darkModeSwitch = document.getElementById("darkModeSwitch");
darkModeSwitch.addEventListener("change", function() {
    if (this.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});
function enableDarkMode() {
    document.body.classList.add("dark-mode");
}
function disableDarkMode() {
    document.body.classList.remove("dark-mode");
}
