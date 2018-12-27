$(document).ready(function() {
  console.log("I'm Working");
  
  var url="https://wind-bow.gomix.me/twitch-api/streams/featured";

  $.ajax({
      url: url,
      dataType: "jsonp",
      success: function(data){
          console.log(data);
      }
  })
});
