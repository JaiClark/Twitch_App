$(document).ready(function() {
  console.log("I'm Working");

  // API key here
  var id = "adv38tiy6van3epbh0hr2q6uhdfkk3";

  // Array of Twitch Streamers
  var streamers = [
    "JASONR",
    "freecodecamp",
    "kinggothalion",
    "ninja",
    "fl0m"
  ];
  // use the term /users/(insert name here) for description of streamer or use /streams/<channel ID> for status of streamer(online or offline)

    for (var i = 0; i < streamers.length; i++) {
      ajax();
    }


function ajax() {

  $.ajax({
    url: "https://api.twitch.tv/kraken/users/" +
    streamers[i] +
    "?client_id=" +
    id,
    dataType: "jsonp",
    success: function(data) {
      console.log(data);

    }
  });
}
});


 

