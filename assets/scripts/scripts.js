// GIF ANIMATE
const itemActive = document.querySelector('.active .nav-link');
const itemActiveImgContent = itemActive.querySelector('img');

itemActive.addEventListener('mouseover', () => {
    itemActiveImgContent.setAttribute('src', 'assets/images/icons/Chest.gif');
});

itemActive.addEventListener('mouseout', () => {
    itemActiveImgContent.setAttribute('src', 'assets/images/icons/Chest.png');
});

// DROPDOWN
const dropdown = document.querySelector('.dropdown')
const dropdownButton = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdown.addEventListener('mouseover', () => {
    dropdownMenu.style.display = 'block';
});
    
dropdown.addEventListener('mouseout', () => {
    dropdownMenu.style.display = 'none';
});

// SCROLL MOOTH
(function($) {
    $('.internal-link a').click(function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
                targetOffset = $(id).offset().top;
        $('html, body').animate({
            scrollTop: targetOffset - 120
        }, 400)
    });
})(jQuery);

// PLAY MUSIC
const music = document.querySelector("#firstPlay");
const buttonPlayMusic = document.querySelector('.play-music');
const buttonDontPlayMusic = document.querySelector('.dont-play-music');
const alertPlayMusic = document.querySelector('.alert-play-music');

buttonPlayMusic.addEventListener('click', () => {
  music.play();
  alertPlayMusic.style.display = 'none';
})

buttonDontPlayMusic.addEventListener('click', () => {
  alertPlayMusic.style.display = 'none';
})