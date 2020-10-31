document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".slider");
});
// Or with jQuery
$(document).ready(function () {
  $(".slider").slider();
  $(".button-collapse").sideNav();
});

// fetch for Park API data
fetch(
  "https://developer.nps.gov/api/v1/parks?stateCode=co&api_key=hRggEhs9bPMZKvgi1LwlI8PflCnBJoFdBnLBCJlP"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data.data[0].states);
  });
