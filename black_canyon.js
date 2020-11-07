$(document).ready(function () {
  $(".button-collapse").sideNav();

  // fetch for Parks API data
  fetch(
    "https://developer.nps.gov/api/v1/parks?parkCode=blca&api_key=hRggEhs9bPMZKvgi1LwlI8PflCnBJoFdBnLBCJlP"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Park Info
      $("#bcInfo").append(data.data[0].description);

      // Park Address
      $("#bcAddress").append(
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
      $("#bcCost").append(
        " $" +
          data.data[0].entranceFees[2].cost +
          " - $" +
          data.data[0].entranceFees[3].cost
      );

      //Park schedule updates
      $("#bcHours").append(" " + data.data[0].operatingHours[0].description);

      //Park weather
      $("#bcWeather").append(" " + data.data[0].weatherInfo);

      //Park Activities
      for (var i = 0; i < 5; i++) {
        var activity = Math.floor(
          Math.random() * data.data[0].activities.length
        );
        $("#bcActivities").append(
          "<li>" +
            "- " +
            data.data[0].activities[activity].name +
            "</li>" +
            "<br />"
        );
      }
    });

  var userComment = JSON.parse(localStorage.getItem("bcComments")) || [];
  $("#bcButton").on("click", function (event) {
    event.preventDefault();
    var value = $("#bcComment").val();
    userComment.push(value);
    localStorage.setItem("bcComments", JSON.stringify(userComment));
    $("#bcComment").val("");
    location.reload();
  });

  for (var i = 0; i < userComment.length; i++) {
    $("#bcCommentSection")
      .append(userComment[i] + "<hr />")
      .attr("class", "comment");
  }
});
