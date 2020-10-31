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

    $("#main-img-bc").attr("src", data.data[1].images[1].url);
    $("#main-img-sd").attr("src", data.data[7].images[0].url);
    $("#main-img-mv").attr("src", data.data[9].images[2].url);
    $("#main-img-rm").attr("src", data.data[12].images[0].url);
  });
