const theme = {

    init: function () {

        theme.switchButton = document.querySelector("#theme-switch");
        theme.body = document.querySelector("body");
        theme.header = document.querySelector("header");
        theme.btn = document.querySelector(".bi");
        theme.main = document.querySelector("main");

        theme.switchButton.addEventListener("click", theme.handleClickDark);
    },

    handleClickDark: function () {
        theme.body.classList.toggle("theme-dark");
        theme.header.classList.toggle("dark-font");
        theme.main.classList.toggle("dark-font");

        if (theme.btn.classList.contains("bi-moon-fill")) {
            theme.btn.classList.remove("bi-moon-fill");
            theme.btn.classList.add("bi-sun-fill");
        } else if (theme.btn.classList.contains("bi-sun-fill")) {
            theme.btn.classList.remove("bi-sun-fill");
            theme.btn.classList.add("bi-moon-fill");
        }
    },
}

theme.init();
