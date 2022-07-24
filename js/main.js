// Dark Or Light Mode
document.getElementById("toggle").addEventListener("click", function(){
    document.getElementsByTagName("body")[0].classList.toggle("dark-theme");
});


// Colors
document.querySelector(".switcher-btn").onclick = function(){
    document.querySelector(".color-switcher").classList.toggle("active");
};

let themeButtons = document.querySelectorAll(".theme-buttons");
themeButtons.forEach(color => {
    color.addEventListener("click", () => {
        let dataColor = color.getAttribute('data-color');
        document.querySelector(':root').style.setProperty("--min-colorLight", dataColor);
        document.querySelector(':root').style.setProperty("--min-colorDark", dataColor);
    })
})