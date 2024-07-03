document.addEventListener('DOMContentLoaded', function() {
    // Check if the page is inside an iframe
    if (window !== window.top) {
        var backButton = document.getElementById('back-button');
        var modal = document.getElementById('fullscreen-modal');
        if (backButton) {
            backButton.style.display = 'none'; // Verstecke den Button im iFrame
        }
        if (modal) {
            modal.style.display = 'none'; // Verstecke das Modal im iFrame
        }
    }
});