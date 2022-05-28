$(document).ready(function() {
    $('.nav__burger').click(function(event) {
        $('.nav__burger,.nav__header__menu,.nav__header_logo img,.foundation,.foundation__post__II').toggleClass('active');
        $('body').toggleClass('lock')
    });
});