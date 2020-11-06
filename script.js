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

    $("#main-img-sd").attr("src", data.data[7].images[0].url);
  });

fetch(
  "https://api.unsplash.com/search/photos?page=1&query=landscape&client_id=jrk9GXC5TeN0m9Y_9-R_CqS0848U9z9wZR0OgeU94GM"
)
  .then(function (response2) {
    return response2.json();
  })
  .then(function (data2) {
    $("#main-img-bc").attr(
      "src",
      data2.results[1].tags[2].source.cover_photo.urls.small
    );
    console.log(data2.results[9].tags[1].source.cover_photo.urls.small);
    $("#main-img-sd").attr(
      "src",
      data2.results[1].tags[2].source.cover_photo.urls.small
    );
    console.log(data2.results[1].tags[2].source.cover_photo.urls.small);
    $("#main-img-mv").attr(
      "src",
      data2.results[2].tags[2].source.cover_photo.urls.small
    );
    console.log(data2.results[2].tags[2].source.cover_photo.urls.small);
    $("#main-img-rm").attr(
      "src",
      data2.results[7].tags[2].source.cover_photo.urls.regular
    );
    console.log(data2.results[7].tags[2].source.cover_photo.urls.regular);
  });
