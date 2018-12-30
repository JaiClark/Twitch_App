$(document).ready(function() {
  console.log("I'm Working");
  console.log("Working");
  console.log("lets");
  
// API key here
  var id="adv38tiy6van3epbh0hr2q6uhdfkk3";

// use the term /users/(insert name here) for description of streamer or use /streams/<channel ID> for status of streamer(online or offline)
  var url="https://api.twitch.tv/kraken/users/kinggothalion?client_id=" + id;

  $.ajax({
      url: url,
      dataType: "jsonp",
      success: function(data){
        console.log(data);
          $(".results").append("<div class='card-body'>" + data.display_name + "</div><br>");
          $(".results").append("<br><div>" + data._links.self + "</br><br>");
      }
  });
});
