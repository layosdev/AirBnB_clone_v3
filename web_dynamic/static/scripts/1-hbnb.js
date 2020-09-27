const $ = window.$;

$(function () {
  const amenityList = {};
  $('.amenities ul li').on('change', 'input[type=checkbox]', function () {
    if ($(this).is(':checked')) {
      amenityList[$(this).attr('data-name')] = $(this).attr('data-id');
    } else {
      delete amenityList[$(this).attr('data-name')];
    }
    const amenityKeys = Object.keys(amenityList);
    $('.amenities h4').text(amenityKeys.join(', '));
  });
});
