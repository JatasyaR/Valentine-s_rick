document.addEventListener("DOMContentLoaded", function() {
    const element = document.getElementById("no");

    element.addEventListener("click", () => {

        element.style.left = `${Math.floor(Math.random() * 100) - 70}vw`;
        element.style.top = `${Math.floor(Math.random() * 100) - 70}vh`;
    });
});
