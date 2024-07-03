document.getElementById('exit-fullscreen-button').addEventListener('click', function() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var container = document.getElementById('fullscreen-container');
    var modal = document.getElementById('fullscreen-modal');
    var acceptButton = document.getElementById('accept-fullscreen');
    var declineButton = document.getElementById('decline-fullscreen');
    var dontAskAgainCheckbox = document.getElementById('dont-ask-again');

    if (localStorage.getItem('fullscreenConsent') !== 'true') {
        modal.style.display = 'flex';
    } else {
        enterFullscreen(container);
    }

    acceptButton.addEventListener('click', function() {
        if (dontAskAgainCheckbox.checked) {
            localStorage.setItem('fullscreenConsent', 'true');
        }
        modal.style.display = 'none';
        enterFullscreen(container);
    });

    declineButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    function enterFullscreen(element) {
        if (element.requestFullscreen) {
            element.requestFullscreen().catch(err => {
                console.log(err);
            });
        } else if (element.mozRequestFullScreen) { // Firefox
            element.mozRequestFullScreen().catch(err => {
                console.log(err);
            });
        } else if (element.webkitRequestFullscreen) { // Chrome, Safari and Opera
            element.webkitRequestFullscreen().catch(err => {
                console.log(err);
            });
        } else if (element.msRequestFullscreen) { // IE/Edge
            element.msRequestFullscreen().catch(err => {
                console.log(err);
            });
        }
    }
});