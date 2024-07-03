document.addEventListener('DOMContentLoaded', function() {
    var container = document.getElementById('fullscreen-container');
    var exitFullscreenButton = document.getElementById('exit-fullscreen-button');

    // Logging for debugging
    console.log('Fullscreen script loaded');

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

    // Event listener for exit fullscreen button
    if (exitFullscreenButton) {
        exitFullscreenButton.addEventListener('click', function() {
            console.log('Exit fullscreen button clicked');
            exitFullscreen();
        });
    }

    // Export functions to be used by other scripts
    window.myFullscreenLib = {
        enterFullscreen: enterFullscreen
    };
});