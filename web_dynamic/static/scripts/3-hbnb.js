const $ = window.$;

$(function () {
  const url = 'http://localhost:5001/api/v1/status/';
  $.getJSON(url, function (text) {
    if (text.status === 'OK') {
      $('DIV#api_status').addClass('available');
      $('DIV#api_status').removeClass('circle');
    } else {
      $('DIV#api_status').removeClass('available');
      $('DIV#api_status').addClass('circle');
    }
  });

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

  $.ajax({
    url: 'http://localhost:5001/api/v1/places_search/',
    data: {},
    type: 'POST',
    dataType: 'json',
    headers: { 'Content-Type': 'application/json' },
    success: function (json) {
      for (const i of json) {
        console.log(i);
      }
    }
  });
});
