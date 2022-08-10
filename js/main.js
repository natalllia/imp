$(function () {
    var $overlay = $('.overlay'),
        $overlay2 = $('.overlay-2'),
        $overlay3 = $('.no-time_overlay'),
        $header = $('.header'),
        $menuDropdown = $('.header_dropdown'),
        $moreContactsLink = $('.header_more-contacts-link'),
        $moreContacts = $('.header_more-contacts'),
        $moreContactsClose = $('.header_more-contacts-close'),
        $mobileMenuBtn = $('.header_mobile-toggle'),
        $mobileMenu = $('.header_mobile-menu'),
        $body = $('body'),
        $tagsSelectBtn = $('.main_tags-select-btn'),
        $tagsShowBtn = $('.main_tags-show-btn'),
        $tagsLink = $('.main_tags-link'),
        $noTimePopup = $('.no-time_popup'),
        $noTimeClose = $('.no-time_popup-close'),
        $noTimeLink = $('.main_article-no-time-link'),
        $subscribe = $('.main_subscribe'),
        $subscribePos = $('.main_subscribe').offset();

    $('.intro_features-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        dots: true,
        arrows: false,
        responsive: [{
            breakpoint: 767,
            settings: 'unslick'
        }]
    });

    $menuDropdown.on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).toggleClass('show');
        $overlay.toggleClass('show');
    });

    $moreContactsLink.on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $moreContacts.toggleClass('show');
        $overlay2.toggleClass('show');
    });

    $moreContactsClose.on('click', function () {
        $moreContacts.removeClass('show');
        $overlay2.removeClass('show');
    });

    $overlay.on('click', function () {
        $moreContacts.removeClass('show');
        $overlay.removeClass('show');
        $menuDropdown.removeClass('show');
        $mobileMenu.removeClass('show');
    });

    $overlay2.on('click', function () {
        $moreContacts.removeClass('show');
        $overlay2.removeClass('show');
    });

    $mobileMenuBtn.on('click', function () {
        $mobileMenu.toggleClass('show');
        $overlay.toggleClass('show');
    });

    $tagsSelectBtn.on('click', function () {
        $body.addClass('tags-show');

        $tagsLink.on('click', function (e) {
            e.preventDefault();
            if ($(this).prev().find('.main_tags-checkbox_input').prop('checked')) {
                $(this).prev().find('.main_tags-checkbox_input').prop('checked', false);
                $(this).removeClass('active');
            } else {
                $(this).prev().find('.main_tags-checkbox_input').prop('checked', true);
                $(this).addClass('active');
            }
        });

        $('.main_tags-checkbox_box').on('click', function () {
            if ($(this).parent().siblings('.main_tags-link').hasClass('active')) {
                $(this).parent().siblings('.main_tags-link').removeClass('active')
            } else {
                $(this).parent().siblings('.main_tags-link').addClass('active')
            }
        });
    });

    $noTimeLink.on('click', function (e) {
        e.preventDefault();
        $overlay3.addClass('show');
        $noTimePopup.addClass('show');
    });

    $overlay3.on('click', function () {
        $noTimePopup.removeClass('show');
        $overlay3.removeClass('show');
    });

    $noTimeClose.on('click', function () {
        $noTimePopup.removeClass('show');
        $overlay3.removeClass('show');
    });
});