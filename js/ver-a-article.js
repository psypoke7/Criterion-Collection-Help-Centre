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


// Nav Bar Hamburger menu
document.addEventListener('DOMContentLoaded', function() {
    // Target the hamburger menu
    var hamburger = document.querySelector('.show-for-small-only');
    var navLinks = document.getElementById('topbar-responsive');
// Add CSS design elements to Hamburger Menu
    var style = document.createElement('style');
    style.textContent = `
        @media screen and (max-width: 639px) {
            #topbar-responsive {
                display: none;
                width: 100%;
            }
            #topbar-responsive.is-open {
                display: block;
            }
            .show-for-small-only {
                cursor: pointer;
                user-select: none;
                padding: 8px;
            }
            .show-for-small-only:hover {
                background-color: rgba(0,0,0,0.1);
            }
        }
    `;
    document.head.appendChild(style);
    // Clickable Hamburger Menu
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('is-open');
        });
    }
});


// Text Size Control - Based on GeeksforGeeks approach
// Reference: https://www.geeksforgeeks.org/allow-users-to-change-font-size-of-a-webpage-using-javascript/
(function() {
    // Wait for page to load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    function init() {
        createTextControl();
        setupEventListeners();
    }
    function createTextControl() {
        // Create the control HTML (similar to GeeksforGeeks button approach)
        var controlDiv = document.createElement('div');
        controlDiv.className = 'gfg-text-control';
        controlDiv.innerHTML = 
            '<span class="control-label">Text Size:</span>' +
            '<button type="button" class="gfg-btn" onclick="changeSizeByBtn(\'14px\')" id="gfg-decrease">A-</button>' +
            '<button type="button" class="gfg-btn" onclick="changeSizeByBtn(\'16px\')" id="gfg-normal">A</button>' +
            '<button type="button" class="gfg-btn" onclick="changeSizeByBtn(\'22px\')" id="gfg-increase">A+</button>';
        // Insert at the beginning of main
        var mainElement = document.querySelector('main');
        if (mainElement) {
            mainElement.insertBefore(controlDiv, mainElement.firstChild);
        }
        // Inject CSS styles
        var styleTag = document.createElement('style');
        styleTag.textContent = 
            '.gfg-text-control {' +
                'background: #f5f5f5;' +
                'border: 1px solid #ddd;' +
                'border-radius: 4px;' +
                'padding: 10px 15px;' +
                'margin: 15px 0;' +
                'display: flex;' +
                'align-items: center;' +
                'gap: 8px;' +
                'flex-wrap: wrap;' +
                'text-align: center;' +
            '}' +
            '.control-label {' +
                'font-weight: 600;' +
                'color: #333;' +
                'font-size: 14px;' +
            '}' +
            '.gfg-btn {' +
                'background: #b4841e;' +
                'color: white;' +
                'border: none;' +
                'padding: 5px 12px;' +
                'border-radius: 3px;' +
                'cursor: pointer;' +
                'font-size: 13px;' +
                'font-weight: 500;' +
                'min-width: 35px;' +
                'transition: background 0.2s;' +
            '}' +
            '.gfg-btn:hover {' +
                'background: #34495e;' +
            '}' +
            '@media (max-width: 640px) {' +
                '.gfg-text-control { justify-content: center; }' +
            '}';
        document.head.appendChild(styleTag);
    }
    function setupEventListeners() {
        window.changeSizeByBtn = function(baseSize) {
            var container = document.querySelector('main');
            if (container) {
                var basePx = parseInt(baseSize);
                // H1 is 2x our default font size
                var h1Size = (basePx * 2) + 'px';
                // H2 is 1.5x our default font size
                var h2Size = (basePx * 1.5) + 'px';
                // P uses the same size
                var pSize = basePx + 'px';
                // Apply to h1 size
                var h1Elements = container.querySelectorAll('h1');
                h1Elements.forEach(function(element) {
                    element.style.fontSize = h1Size;
                });
                // Apply to h2 size
                var h2Elements = container.querySelectorAll('h2');
                h2Elements.forEach(function(element) {
                    element.style.fontSize = h2Size;
                });
                // Apply to p and li sizes
                var textElements = container.querySelectorAll('p, li');
                textElements.forEach(function(element) {
                    element.style.fontSize = pSize;
                });
            }
        };
        // Set initial font size to normal
        changeSizeByBtn('16px');
    }
})();




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
 

 
 

 
