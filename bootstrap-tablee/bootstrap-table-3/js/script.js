var $table = $('#table')

$.ajax({
  url: "https://swapi.dev/api/people/1",
  method: "GET",
  datatype: "JSON",
  success: function( result ) {
    $table.bootstrapTable('append', result)
  }
});
