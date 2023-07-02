var $table = $('#table')
var total = 0

function getData(number, isAppend) {
  if (!isAppend) {
    total = 0
  }
  var data = []
  for (var i = total; i < total + number; i++) {
    data.push({
      'id': i,
      'name': 'Item ' + i,
      'price': '$' + i
    })
  }
  if (isAppend) {
    total += number
  } else {
    total = number
  }
  $('#total').text(total)
  return data
}

$(function () {
  $table.bootstrapTable({ data: getData(20), id: "1" })

  $("tr").on("click", function() {
    const celula = this.cells[1].innerText
    
    if (celula != "Item Name") {
      alert(celula)
    }
  })

 /*  $('#load').click(function () {
    $table.bootstrapTable('load', getData(10000))
  })

  $('#append').click(function () {
    $table.bootstrapTable('append', getData(10000, true))
  }) */
})