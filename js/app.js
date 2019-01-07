$(document).ready(function() {
  console.log("I'm Working");

  // API key here
  var id = "adv38tiy6van3epbh0hr2q6uhdfkk3";

  // Array of Twitch Streamers
  const streamers = ["freecodecamp", "kinggothalion", "ninja", "fl0m", "JASONR"];

  // use the term /users/(insert name here) for description of streamer or use /streams/<channel ID> for status of streamer(online or offline)

  for (var i = 0; i < streamers.length; i++){
    var url = "https://api.twitch.tv/kraken/users/" + streamers[i] + "?client_id=" + id;

    console.log(url);
  }

  streamer = [];
  streamer[0] = "freecodecamp";
  streamer[1] = "kinggothalion";
  streamer[2] = "ninja";
  streamer[3] = "fl0m";
  streamer[4] = "JASONR";


  $.ajax({
    url: url,
    // data: DataTransfer,
    dataType: "jsonp",
    success: function(data) {

      console.log(data);
      
      // streamers.map(function(itm, i) {
      //   console.log(response);
      // });

    }
  });
});
