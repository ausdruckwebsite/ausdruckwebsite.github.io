document.addEventListener("DOMContentLoaded", function() {
    const isFullscreenAllowed = localStorage.getItem('fullscreenAllowed') === 'true';
    if (isFullscreenAllowed) {
        document.querySelectorAll('.embedded-media').forEach(function(iframe) {
            iframe.addEventListener('click', function() {
                window.location.href = iframe.dataset.fullscreenLink;
            });
        });
    } else {
        const fullscreenModal = document.getElementById('fullscreen-modal');
        fullscreenModal.style.display = 'block';
        
        document.getElementById('accept-fullscreen').addEventListener('click', function() {
            localStorage.setItem('fullscreenAllowed', 'true');
            fullscreenModal.style.display = 'none';
        });

        document.getElementById('decline-fullscreen').addEventListener('click', function() {
            fullscreenModal.style.display = 'none';
        });
    }

    const orientation = document.body.dataset.orientation;
    const fullscreen = document.body.dataset.fullscreen === 'true';
    if (fullscreen) {
        if (orientation === 'landscape') {
            document.documentElement.requestFullscreen();
        } else {
            document.documentElement.style.height = '100vh';
            document.documentElement.style.width = '100vw';
            document.documentElement.style.overflow = 'hidden';
            document.documentElement.style.position = 'fixed';
            document.documentElement.style.top = '0';
            document.documentElement.style.left = '0';
        }
    }
});