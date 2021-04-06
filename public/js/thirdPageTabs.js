$('ul.about-us').on('click', 'li:not(.active)', function(e) {
    e.preventDefault();
  $(this)
    .addClass('active').siblings().removeClass('active')
    .closest('.main-form__content').find('div.main-form__tab').removeClass('active-tab').eq($(this).index()).addClass('active-tab');
});