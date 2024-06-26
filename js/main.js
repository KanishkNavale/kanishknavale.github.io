document.addEventListener('DOMContentLoaded', function () {

    const intro = document.getElementById('banner');
    const imageUrl = 'images/dyson.gif';

    const img = new Image();
    img.src = imageUrl;

    var initialScale = 1.0;
    var maxScale = initialScale * 2.0;

    function adjustBannerImageSize() {
        var windowWidth = window.innerWidth;

        if (windowWidth < 768) {
            initialScale = 2.0;
            maxScale = initialScale * 2.0;

        } else {
            initialScale = 1.0;
            maxScale = initialScale * 2.0;
        }

        intro.style.backgroundImage = `url(${imageUrl})`;
        intro.style.backgroundPosition = 'center';
        intro.style.animation = 'fadeIn 3s';
        intro.style.backgroundSize = `${initialScale * 100}%`;

    }

    img.onload = adjustBannerImageSize();

    window.addEventListener('scroll', function () {

        let scrollPosition = window.scrollY;
        let scale = initialScale + (scrollPosition / 1000);

        if (scale < initialScale) scale = initialScale;
        if (scale > maxScale) scale = maxScale;

        intro.style.backgroundSize = `${scale * 100}%`;
        intro.style.opacity = 1 - (scrollPosition / 1000);

    });

    window.addEventListener('resize', adjustBannerImageSize);

});
