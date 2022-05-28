$(document).ready(function() {
    $('.nav__burger').click(function(event) {
        $('.nav__burger,.nav__header__menu,.head__h1,.head__h6,.head__h1,.nav__header_logo img').toggleClass('active');
        $('body').toggleClass('lock')
    });
});