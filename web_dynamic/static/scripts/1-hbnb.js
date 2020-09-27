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
