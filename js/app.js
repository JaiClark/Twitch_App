$(document).ready(function() {
  console.log("I'm Working");
  

  // API key here
  var id = "adv38tiy6van3epbh0hr2q6uhdfkk3";

  // Array of Twitch Streamers

  const streamers = [
    "freecodecamp",
    "kinggothalion",
    "ninja",
    "fl0m",
    "JASONR"
  ];

  // use the term /users/(insert name here) for description of streamer or use /streams/<channel ID> for status of streamer(online or offline)
  var url = "https://api.twitch.tv/kraken/users/kinggothalion?client_id=" + id;


  for (i = 0; i < streamers.length; i++) {
    console.log(streamers[i]);
  }



  function streamFunction() {
    x = $("online");
    x.innerHTML = streamers.map(function(itm, i){
      console.log("https://api.twitch.tv/kraken/users/" + streamers[i] + "?client_id=" + id);
    });
  }
streamFunction();




  $.ajax({
    url: url,
    dataType: "jsonp",
    success: function(data) {
     
    }
  });
});
