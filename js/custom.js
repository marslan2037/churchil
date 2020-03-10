/**
 * Created by Base29 on 4/21/2016.
 */

jQuery(document).ready(function ($) {

    // Field Label
    $('input[type="text"], input[type="tel"], input[type="email"]').focus(function () {
        if (this.value == this.defaultValue) {
            this.value = '';
        }
        if (this.value != this.defaultValue) {
            this.select();
        }
    });
    $('input[type="text"], input[type="tel"], input[type="email"]').blur(function () {
        if (this.value == '') {
            this.value = this.defaultValue;
        }
    });
    $('textarea').focus(function () {
        if (this.value == this.defaultValue) {
            this.value = '';
        }
        if (this.value != this.defaultValue) {
            this.select();
        }
    });
    $('textarea').blur(function () {
        if (this.value == '') {
            this.value = this.defaultValue;
        }
    });

    // Mobile menu toggle
    $('.mobile_menu_toggle').click(function () {
        $('#swm_nav > ul').slideToggle();
        return false;
    });

    // Fancy Select Option
    $('.cForm').wrap('<div class="cForm-wrap">');
    $('.cForm-wrap').append('<span>Select One...</span>');
    $('.cForm-wrap select').css({opacity: 0});
    $('.cForm-wrap select').change(function () {
        var selectedID = $(this).attr('id');
        var selectedVal = $(this).val();
        $('#' + selectedID).parent().find('span').text(selectedVal);

    });

});