# Rowfy
Dynamically add/remove table row using jquery

## Usage

>Html
```
  <table class="table table-striped table-hover rowfy">
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Phone</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><input type="text" name="name[]"></td>
        <td><input type="text" name="age[]"></td>
        <td><input type="text" name="phone[]"></td>
      </tr>      
    </tbody>
  </table>
  ```
  
  >Script
  ```
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
  ```
