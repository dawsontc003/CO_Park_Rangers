//Looks like we have to call a couple of different API's to be able to dive into things

//This first call takes you into the channel info
$(document).ready(function () {
  $.get(
    "https://www.googleapis.com/youtube/v3/channels",
    {
      //Parameters to grab the channel info from the youtube API
      part: "contentDetails",
      forUsername: "GoTraveler",
      key: "AIzaSyCCpNDrXHrF19h_3w2tigEeqLLGiCqoMfQ",
    },
    function (data) {
      // .each to get into the channels uploaded videos - this is where things got weird and I got stuck the first time
      $.each(data.items, function (i, item) {
        console.log(item);
        playId = item.contentDetails.relatedPlaylists.uploads;
        getVids(playId);
      });
    }
  );
});

//This is the second API call (this is the original call i tried before that wasn't working because the above call wasn't made)
//This call actually grabs the videos - now we just need to get it into a player
function getVids(playId) {
  $.get(
    "https://www.googleapis.com/youtube/v3/playlistItems",
    {
      //More parameters - this time actually pulling the videos
      part: "snippet",
      maxResults: 10,
      playlistId: playId,
      key: "AIzaSyCCpNDrXHrF19h_3w2tigEeqLLGiCqoMfQ",
    },
    function (data) {
      $.each(data.items, function (i, item) {
        var output;
        console.log(item);
        vidTitle = item.snippet.title;

        //Down here I was trying to get the video titles to show as a list - just to see if I'm actually getting close to the data I want
        output = "<li> + vidTitle + </li>";
        $("#video").append(output);
      });
    }
  );
}

$.get(
  "https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.channels.list",
  {
    //Parameters to grab the channel info from the youtube API
    part: "id",
    forUsername: "GoTraveler",
    key: "AIzaSyCCpNDrXHrF19h_3w2tigEeqLLGiCqoMfQ",
  }
);

// fetch(
//   "https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.channels.list?part=id&forUsername=GoTraveler&key=AIzaSyCCpNDrXHrF19h_3w2tigEeqLLGiCqoMfQ"
// )
//   .then(function (response) {
//     return response.json();
//     console.log(response);
//   })
//   .then(function (data) {
//     console.log(data);
//   });
