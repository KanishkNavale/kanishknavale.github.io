
// Handle Event Listeners
document.addEventListener('DOMContentLoaded', function () {
    const messageTrigger = document.getElementById('message-trigger');

    // Set the background image URL while checking cache
    const intro = document.getElementById('intro-image');
    const imageUrl = 'images/dyson.gif';

    const img = new Image();

    img.onload = function () {
        intro.style.backgroundImage = `url(${imageUrl})`;
        intro.style.backgroundPosition = 'center';
        intro.style.animation = 'fadeIn 3s';
    };

    img.src = imageUrl;

});



