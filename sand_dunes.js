$(document).ready(function () {
  $(".button-collapse").sideNav();

  // fetch for Parks API data
  fetch(
    "https://developer.nps.gov/api/v1/parks?parkCode=grsa&api_key=hRggEhs9bPMZKvgi1LwlI8PflCnBJoFdBnLBCJlP"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Park Info
      $("#sdInfo").append(data.data[0].description);

      // Park Address
      $("#sdAddress").append(
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
      $("#sdCost").append(
        " $" +
          data.data[0].entranceFees[1].cost +
          " - $" +
          data.data[0].entranceFees[0].cost
      );

      //Park schedule updates
      $("#sdHours").append(" " + data.data[0].operatingHours[0].description);

      //Park weather
      $("#sdWeather").append(" " + data.data[0].weatherInfo);

      //Park Activities
      for (var i = 0; i < 5; i++) {
        var activity = Math.floor(
          Math.random() * data.data[0].activities.length
        );
        $("#sdActivities").append(
          "<li>" +
            "- " +
            data.data[0].activities[activity].name +
            "</li>" +
            "<br />"
        );
      }
    });

  var userComment = JSON.parse(localStorage.getItem("sdComments")) || [];
  $("#sdButton").on("click", function (event) {
    event.preventDefault();
    var value = $("#sdComment").val();
    userComment.push(value);
    localStorage.setItem("sdComments", JSON.stringify(userComment));
    $("#sdComment").val("");
    location.reload();
  });

  for (var i = 0; i < userComment.length; i++) {
    $("#sdCommentSection")
      .append(userComment[i] + "<hr />")
      .attr("class", "comment");
  }
});
