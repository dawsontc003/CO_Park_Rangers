$(document).ready(function () {
  $(".button-collapse").sideNav();

  // fetch for Parks API data
  fetch(
    "https://developer.nps.gov/api/v1/parks?parkCode=romo&api_key=hRggEhs9bPMZKvgi1LwlI8PflCnBJoFdBnLBCJlP"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // Park Info
      $("#rmInfo").append(data.data[0].description);

      // Park Address
      $("#rmAddress").append(
        " " +
          data.data[0].addresses[0].line1 +
          ", " +
          data.data[0].addresses[0].city +
          ", " +
          data.data[0].addresses[0].stateCode +
          " " +
          data.data[0].addresses[0].postalCode
      );
      //Park Price
      $("#rmCost").append(
        " $" +
          data.data[0].entranceFees[1].cost +
          " - $" +
          data.data[0].entranceFees[0].cost
      );

      //Park schedule updates ----NOT WORKING FOR SOME REASON, CONSOLE LOG WORKS THOUGH
      $("#rmUpdates").append(" " + data.data[0].operatingHours[0].description);
      console.log(data.data[0].operatingHours[0].description);

      //Park weather
      $("#rmWeather").append(" " + data.data[0].weatherInfo);

      //Park Activities
      for (var i = 0; i < 5; i++) {
        var activity = Math.floor(
          Math.random() * data.data[0].activities.length
        );
        $("#rmActivities").append(
          "<li>" +
            "- " +
            data.data[0].activities[activity].name +
            "</li>" +
            "<br />"
        );
      }
    });

  var userComment = JSON.parse(localStorage.getItem("rmComments")) || [];
  $("#rmButton").on("click", function (event) {
    event.preventDefault();
    var value = $("#rmComment").val();
    userComment.push(value);
    localStorage.setItem("rmComments", JSON.stringify(userComment));
    $("#rmComment").val("");
    location.reload();
  });

  for (var i = 0; i < userComment.length; i++) {
    $("#rmCommentSection").append(userComment[i] + "<hr />");
    console.log(userComment[i]);
  }
});
