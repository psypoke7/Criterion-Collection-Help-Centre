// Created by Prabhjot, Prachi, Kim, Kristina
$(document).foundation();

$(document).ready(function() {
    var progressHTML = '<div id="loading-progress" style="position: fixed; top: 0; left: 0; width: 100%; background: #f0f0f0; z-index: 9999; height: 4px;">' +
                      '<div id="progress-bar" style="height: 100%; background: #b4841e; width: 0%; transition: width 0.3s;"></div></div>';
    $("body").prepend(progressHTML);

    // Animate progress bar
    var progress = 0;
    var progressInterval = setInterval(function() {
        progress += 20;
        $("#progress-bar").css("width", progress + "%");
        if (progress >= 100) {
            clearInterval(progressInterval);

            // Remove progress bar after completion
            setTimeout(function() {
                $("#loading-progress").fadeOut(300);
            }, 500);
        }
    }, 200);
});

// Cell hover effects
const boxes = document.querySelectorAll(".cell");

boxes.forEach(function(box) {
    box.addEventListener("mouseover", function() {
        box.style.transform = "scale(1.2)";
    });

    box.addEventListener("mouseout", function() {
        box.style.transform = "scale(1)";
    });
});


// making our logo spin and adding a back to top function
document.addEventListener('DOMContentLoaded', function() {
    // Get the logo
    var logo = document.getElementById('logo-img');
    // Add "Back to Top" text under logo (inject HTML)
    var backToTopText = '<div id="back-to-top-text" style="position: fixed; top: 70px; left: 20px; color: #b4841e; font-size: 12px; display: none; z-index: 1001; background: white; padding: 2px 5px; border-radius: 3px; cursor: pointer;">Back to Top</div>';
    document.body.insertAdjacentHTML('beforeend', backToTopText);
    var backText = document.getElementById('back-to-top-text');
    // editing our scroll posistion
    window.addEventListener('scroll', function() {
        // Get how far we've scrolled
        var scrolled = window.pageYOffset;
        // If scrolled more than 100px, show spinning logo and text
        if (scrolled > 100) {
            // Make logo fixed and spin (modify CSS)
            logo.style.position = 'fixed';
            logo.style.top = '20px';
            logo.style.left = '20px';
            logo.style.zIndex = '1000';
            logo.style.transform = 'rotate(360deg)';
            logo.style.transition = 'transform 0.5s ease';
            // Show "Back to Top" text
            backText.style.display = 'block';
        } else {
            // Return to normal position and stop spinning
            logo.style.position = 'static';
            logo.style.transform = 'rotate(0deg)';
            backText.style.display = 'none';
        }
    });
    // CHANGED: Click "Back to Top" text to go back to top (instead of logo)
    backText.addEventListener('click', function() {
        // Smooth scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        // add spin animation to logo when text is clicked
        logo.style.transform = 'rotate(720deg)';
    });
});

// Nav Bar Hamburger menu (Zurb Foundations)
document.addEventListener('DOMContentLoaded', function() {
    // Get hamburger menu and navigation links
    var hamburger = document.querySelector('.material-symbols-outlined');
    var navLinks = document.getElementById('topbar-responsive');

    // Clicking the hamburger menu
    hamburger.addEventListener('click', function() {
        // show/hide menu
        navLinks.classList.toggle('open');
    });
});