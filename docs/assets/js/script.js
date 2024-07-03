document.addEventListener('DOMContentLoaded', function() {
    var container = document.getElementById('fullscreen-container');

    if (container.requestFullscreen) {
        container.requestFullscreen().catch(err => {
            console.log(err);
        });
    } else if (container.mozRequestFullScreen) { // Firefox
        container.mozRequestFullScreen().catch(err => {
            console.log(err);
        });
    } else if (container.webkitRequestFullscreen) { // Chrome, Safari and Opera
        container.webkitRequestFullscreen().catch(err => {
            console.log(err);
        });
    } else if (container.msRequestFullscreen) { // IE/Edge
        container.msRequestFullscreen().catch(err => {
            console.log(err);
        });
    }
});

document.getElementById('play-button').addEventListener('click', function() {
    var container = document.getElementById('fullscreen-container');
    var mediaElement = container.querySelector('img, video, audio');
    var exitButton = document.getElementById('exit-fullscreen-button');

    if (mediaElement) {
        if (mediaElement.tagName.toLowerCase() === 'video' || mediaElement.tagName.toLowerCase() === 'audio') {
            mediaElement.play();
        }
        mediaElement.style.display = 'block';
    }

    exitButton.style.display = 'block';
    this.style.display = 'none';
});

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