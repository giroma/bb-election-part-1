document.addEventListener("DOMContentLoaded", function() {

  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET'
  }).done(function (response) {
    var list = document.querySelector('#list')
    var candidates = response.candidates

    for (var i = 0; i < candidates.length; i++) {

      var item = document.createElement('li')
      item.innerHTML = `${candidates[i].name}: ${candidates[i].votes} votes`
      list.append(item)

    }
  })

});
