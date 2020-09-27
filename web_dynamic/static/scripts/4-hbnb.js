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
    data: '{}',
    type: 'POST',
    dataType: 'json',
    headers: { 'Content-Type': 'application/json' },
    success: function (json) {
      for (const i of json) {
        $('.places').append(
        `<article>
          <div class="title_box">
            <h2>${i.name}</h2>
            <div class="price_by_night">${i.price_by_night}</div>
          </div>
          <div class="information">
            <div class="max_guest">${i.max_guest} Guests</div>
                  <div class="number_rooms">${i.number_rooms} Bedrooms</div>
                  <div class="number_bathrooms">${i.number_bathrooms} Bathrooms</div>
          </div>
                <div class="description">
            ${i.description}
                </div>
        </article>
      `);
      }
    }
  });

  $('.filters button').click(function () {
    $.ajax({
      url: 'http://localhost:5001/api/v1/places_search/',
      data: JSON.stringify({ amenities: Object.values(amenityList) }),
      type: 'POST',
      dataType: 'json',
      headers: { 'Content-Type': 'application/json' },
      success: function (json) {
        $('.places').empty();
        for (const i of json) {
          $('.places').append(
          `<article>
            <div class="title_box">
              <h2>${i.name}</h2>
              <div class="price_by_night">${i.price_by_night}</div>
            </div>
            <div class="information">
              <div class="max_guest">${i.max_guest} Guests</div>
                    <div class="number_rooms">${i.number_rooms} Bedrooms</div>
                    <div class="number_bathrooms">${i.number_bathrooms} Bathrooms</div>
            </div>
                  <div class="description">
              ${i.description}
                  </div>
          </article>
        `);
        }
      }
    });
  });
});
