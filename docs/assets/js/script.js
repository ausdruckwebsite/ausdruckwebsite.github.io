document.addEventListener('DOMContentLoaded', function() {
    var container = document.getElementById('fullscreen-container');
    var modal = document.getElementById('fullscreen-modal');
    var acceptButton = document.getElementById('accept-fullscreen');
    var declineButton = document.getElementById('decline-fullscreen');
    var dontAskAgainCheckbox = document.getElementById('dont-ask-again');
    var exitFullscreenButton = document.getElementById('exit-fullscreen-button');

    // Logging for debugging
    console.log('DOM fully loaded and parsed');

    // Function to exit fullscreen mode
    function exitFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
    }

    // Function to enter fullscreen mode
    function enterFullscreen(element) {
        if (element.requestFullscreen) {
            element.requestFullscreen().catch(err => {
                console.log('Fullscreen request failed:', err);
            });
        } else if (element.mozRequestFullScreen) { // Firefox
            element.mozRequestFullScreen().catch(err => {
                console.log('Fullscreen request failed:', err);
            });
        } else if (element.webkitRequestFullscreen) { // Chrome, Safari and Opera
            element.webkitRequestFullscreen().catch(err => {
                console.log('Fullscreen request failed:', err);
            });
        } else if (element.msRequestFullscreen) { // IE/Edge
            element.msRequestFullscreen().catch(err => {
                console.log('Fullscreen request failed:', err);
            });
        } else {
            console.log('Fullscreen API is not supported.');
        }
    }

    // Check if user has previously accepted fullscreen consent
    var fullscreenConsent = localStorage.getItem('fullscreenConsent');
    console.log('Fullscreen consent:', fullscreenConsent);

    // If not accepted before, show the modal
    if (!fullscreenConsent) {
        modal.style.display = 'block';
    } else {
        console.log('Entering fullscreen mode');
        enterFullscreen(container);
    }

    // Event listener for accept button
    acceptButton.addEventListener('click', function() {
        console.log('Accept button clicked');
        // Set localStorage to remember user's choice
        if (dontAskAgainCheckbox.checked) {
            localStorage.setItem('fullscreenConsent', 'true');
        }
        modal.style.display = 'none';
        enterFullscreen(container);
    });

    // Event listener for decline button
    declineButton.addEventListener('click', function() {
        console.log('Decline button clicked');
        modal.style.display = 'none';
    });

    // Event listener for exit fullscreen button
    exitFullscreenButton.addEventListener('click', function() {
        console.log('Exit fullscreen button clicked');
        exitFullscreen();
    });
});