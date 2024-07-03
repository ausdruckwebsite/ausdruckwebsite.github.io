document.addEventListener('DOMContentLoaded', function() {
    // Check if the page is inside an iframe
    if (window !== window.top) {
        var backButton = document.getElementById('back-button');
        if (backButton) {
            backButton.style.display = 'none'; // Verstecke den Button im iFrame
        }
    }
});