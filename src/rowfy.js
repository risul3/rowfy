$(document).on('click', '.rowfy-addrow', function(){
  var rowfyable = $(this).closest('table');
  var lastRow = $('tbody tr:last', rowfyable).clone();
  $('input', lastRow).val('');
  $('tbody', rowfyable).append(lastRow);
  $(button).removeClass('rowfy-addrow').addClass('rowfy-deleterow').text('-');
});

$(document).on('click', '.rowfy-deleterow', function(){
  $(this).closest('tr').remove();
});

$('.rowfy').each(function(){
  $('tbody', this).find('tr').each(function(){
    var row = $(this);
    if(row.is(":last-child")){
      row.append('<td><button class="btn btn-sm rowfy-addrow">+</button></td>');
    } else {
      row.append('<td><button class="btn btn-sm rowfy-deleterow">x</button></td>');
    }
  });
});