window.onload = function() {
    document.querySelector("#header").addEventListener("mouseover", function() {
        this.style.color = "#00FF00";
    });
    document.querySelector("#header").addEventListener("mouseout", function() {
        this.style.color = "#FFA500";
    });
};
