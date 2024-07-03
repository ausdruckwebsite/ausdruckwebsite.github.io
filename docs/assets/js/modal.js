document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('fullscreen-modal');
    var acceptButton = document.getElementById('accept-fullscreen');
    var declineButton = document.getElementById('decline-fullscreen');
    var dontAskAgainCheckbox = document.getElementById('dont-ask-again');
    var container = document.getElementById('fullscreen-container');

    // Logging for debugging
    console.log('Modal script loaded');

    // Check if user has previously accepted fullscreen consent
    var fullscreenConsent = localStorage.getItem('fullscreenConsent');
    console.log('Fullscreen consent:', fullscreenConsent);

    // If not accepted before, show the modal
    if (!fullscreenConsent) {
        if (modal) {
            modal.style.display = 'block';
        }
    } else {
        console.log('Entering fullscreen mode');
        window.myFullscreenLib.enterFullscreen(container);
    }

    // Event listener for accept button
    if (acceptButton) {
        acceptButton.addEventListener('click', function() {
            console.log('Accept button clicked');
            // Set localStorage to remember user's choice
            if (dontAskAgainCheckbox && dontAskAgainCheckbox.checked) {
                localStorage.setItem('fullscreenConsent', 'true');
            }
            if (modal) {
                modal.style.display = 'none';
            }
            window.myFullscreenLib.enterFullscreen(container);
        });
    }

    // Event listener for decline button
    if (declineButton) {
        declineButton.addEventListener('click', function() {
            console.log('Decline button clicked');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    }
});