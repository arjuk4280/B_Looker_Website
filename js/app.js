/* ==========================================
   B_Looker Website
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("B_Looker Website Loaded");

    /* Smooth animation for cards */

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transition = "0.3s";

        });

    });

    /* Button Click Effect */

    const buttons = document.querySelectorAll(".btn-primary, .btn-secondary");

    buttons.forEach(button => {

        button.addEventListener("click", function () {

            button.style.transform = "scale(0.96)";

            setTimeout(() => {

                button.style.transform = "scale(1)";

            }, 120);

        });

    });

});
