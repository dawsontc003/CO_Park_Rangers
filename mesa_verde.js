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
      // Park Info
      $("#mvInfo").append(data.data[0].description);

      // Park Address
      $("#mvAddress").append(
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
      $("#mvCost").append(
        " $" +
          data.data[0].entranceFees[5].cost +
          " - $" +
          data.data[0].entranceFees[0].cost
      );

      //Park schedule updates
      $("#mvUpdates").append(" " + data.data[0].operatingHours[0].description);

      //Park weather
      $("#mvWeather").append(" " + data.data[0].weatherInfo);

      //Park Activities
      for (var i = 0; i < 5; i++) {
        var activity = Math.floor(
          Math.random() * data.data[0].activities.length
        );
        $("#mvActivities").append(
          "<li>" +
            "- " +
            data.data[0].activities[activity].name +
            "</li>" +
            "<br />"
        );
      }
    });

  var userComment = JSON.parse(localStorage.getItem("mvComments")) || [];
  $("#mvButton").on("click", function (event) {
    event.preventDefault();
    var value = $("#mvComment").val();
    userComment.push(value);
    localStorage.setItem("mvComments", JSON.stringify(userComment));
    $("#mvComment").val("");
    location.reload();
  });

  for (var i = 0; i < userComment.length; i++) {
    $("#mvCommentSection").append(userComment[i] + "<hr />");
  }
});
