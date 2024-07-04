document.addEventListener("DOMContentLoaded", function() {
    var backButton = document.getElementById('back-button');
    if (backButton) {
        backButton.addEventListener('click', function(event) {
            event.preventDefault();
            window.history.back();
        });
    }
});
