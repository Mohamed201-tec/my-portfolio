document.addEventListener("DOMContentLoaded", function () {
    let popup = document.getElementById("certificatesPopup");
    let openButton = document.getElementById("openCerts");
    let closeButton = document.querySelector(".close");

    popup.style.display = "none";

    if (popup && openButton && closeButton) {
        
        openButton.addEventListener("click", function () {
            popup.style.display = "flex";
        });

       
        closeButton.addEventListener("click", function () {
            popup.style.display = "none";
        });

        
        popup.addEventListener("click", function (e) {
            if (e.target === popup) {
                popup.style.display = "none";
            }
        });
    } else {
        console.error("One or more elements are missing from the HTML!");
    }
});