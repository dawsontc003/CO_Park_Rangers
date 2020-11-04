$(document).ready(function () {
  $(".button-collapse").sideNav();

  // fetch for Parks API data
  fetch(
    "https://developer.nps.gov/api/v1/parks?parkCode=meve&api_key=hRggEhs9bPMZKvgi1LwlI8PflCnBJoFdBnLBCJlP"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // console.log(data.data[0].states);
      console.log(
        "Address: " +
          data.data[0].addresses[0].line1 +
          ", " +
          data.data[0].addresses[0].city +
          ", " +
          data.data[0].addresses[0].stateCode +
          " " +
          data.data[0].addresses[0].postalCode
      );
      $("#parkInfoMV").append(
        " " +
          data.data[0].addresses[0].line1 +
          ", " +
          data.data[0].addresses[0].city +
          ", " +
          data.data[0].addresses[0].stateCode +
          " " +
          data.data[0].addresses[0].postalCode
      );
    });
});
