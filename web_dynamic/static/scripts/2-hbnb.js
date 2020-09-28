const dict = {};
$(document).ready(function () {
  $('input[type=checkbox]').click(function () {
    if ($(this).is(':checked')) {
      dict[$(this).data('id')] = $(this).data('name')
      $('div.amenities h4').text(Object.values(dict).join(', '));
    } else if ($(this).is(':not(:checked)')) {
      delete dict[$(this).data('id')];
      $('div.amenities h4').text(Object.values(dict).join(', '));
    }
  });
});

const url = 'http://0.0.0.0:5001/api/v1/status/';

$.get(url, function (hbnb) {
  if (hbnb.status === 'OK') {
    $('DIV.api_status').addClass('available');
  } else {
    $('DIV.api_status').removeClass('available');
  }
});
