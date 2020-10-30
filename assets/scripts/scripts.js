const itemActive = document.querySelector('.active .nav-link');
const itemActiveImgContent = itemActive.querySelector('img');

itemActive.addEventListener('mouseover', () => {
    itemActiveImgContent.setAttribute('src', 'assets/images/icons/Chest.gif');
});

itemActive.addEventListener('mouseout', () => {
    itemActiveImgContent.setAttribute('src', 'assets/images/icons/Chest.png');
});

const dropdown = document.querySelector('.dropdown')
const dropdownButton = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdown.addEventListener('mouseover', () => {
    dropdownMenu.style.display = 'block';
});
    
dropdown.addEventListener('mouseout', () => {
    dropdownMenu.style.display = 'none';
});

(function($) {
    $('.nav-item .nav-link').click(function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
                targetOffset = $(id).offset().top;
        $('html, body').animate({
            scrollTop: targetOffset
        }, 500)
    });
})(jQuery);
