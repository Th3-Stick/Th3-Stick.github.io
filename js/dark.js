const theme = {

    init: function () {

        theme.switchButton = document.querySelector("#theme-switch");
        theme.body = document.querySelector("body");
        theme.btn = document.querySelector(".bi");
        theme.left = document.querySelector(".leftContainer");
        theme.right = document.querySelector(".rightContainer");

        theme.switchButton.addEventListener("click", theme.handleClickDark);
    },

    handleClickDark: function () {
        theme.body.classList.toggle("theme-dark");

        if (theme.btn.classList.contains("bi-moon-fill")) {
            theme.btn.classList.remove("bi-moon-fill");
            theme.btn.classList.add("bi-sun-fill");
        } else if (theme.btn.classList.contains("bi-sun-fill")) {
            theme.btn.classList.remove("bi-sun-fill");
            theme.btn.classList.add("bi-moon-fill");
        }

        if (theme.left.classList.contains("dark-bloc")) {
            theme.left.classList.remove("dark-bloc");
            theme.right.classList.remove("dark-bloc");
        } else {
            theme.left.classList.add("dark-bloc");
            theme.right.classList.add("dark-bloc");
        }
    },
}

theme.init();
