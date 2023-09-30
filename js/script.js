
var reloadButton = document.getElementById("reloadButton");


reloadButton.addEventListener("click", function() {
    
    location.reload();
});

var contact = document.getElementsByClassName("contact");


contact.addEventListener("click", function() {
    
    location.reload();
});


const buttons = document.querySelectorAll(".custom-button");


buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
        button.classList.add("hovered");
    });

    button.addEventListener("mouseleave", () => {
        button.classList.remove("hovered");
    });
});
