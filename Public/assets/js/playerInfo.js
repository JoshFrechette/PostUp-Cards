
function playerInformation() {
  var player = $("#SearchPlayer").val();
  NBAPlayerInfo(player);
  NBAPlayerGif(player);
};
var key ="NOrybviPafhsVNwUf5V1x96NAM664s7W"
function NBAPlayerGif(player){
  var gifs = "http://api.giphy.com/v1/gifs/search?q=" + player + "&api_key=NOrybviPafhsVNwUf5V1x96NAM664s7W&limit=5";
  $.ajax({
              url: gifs,
              method: "GET"
              }).then(function(gifs) {
                $("#card").append("<img src="+gifs.data[0].images.original.url+">");
                //$("#playerID").text("Player's id: " + response.data[0].id);
                NBAPlayerInfo(player);
})
}

function NBAPlayerInfo(player){
  var ballDontLie = "https://cors-anywhere.herokuapp.com/https://balldontlie.io/api/v1/players?search=" + player;
  $.ajax({
              url: ballDontLie,
              method: "GET"
              }).then(function(response) {
                $("#card-portrait").append("<li id=playerID></li>");
                $("#playerID").text("Player's id: " + response.data[0].id);

                $("#card-portrait").append("<li id=playerName></li>");
                $("#playerName").text("Player's name: " + response.data[0].first_name + " " + response.data[0].last_name);

                $("#card-portrait").append("<li id=playerHeight></li>");
                $("#playerHeight").text("Player's height: " + response.data[0].height_feet + "ft");

                $("#card-portrait").append("<li id=playerweight></li>");
                $("#playerweight").text("Player's weight: " + response.data[0].weight_pounds + "lbs");

                $("#card-portrait").append("<li id=playerteam></li>");
                $("#playerteam").text("Player's team: " + response.data[0].team.full_name);

                $("#card-portrait").append("<li id=playercity></li>");
                $("#playercity").text("Player's city: " + response.data[0].team.city);
                
                  var playerID = response.data[0].id;

                  var playerStatatstics = "https://cors-anywhere.herokuapp.com/https://balldontlie.io/api/v1/stats?player_ids[]=" + playerID + "&seasons[]=2019";
                  $.ajax({
                      url: playerStatatstics,
                      method: "GET"
                      }).then(function(playerStats) {
                          console.log(playerStats);
                      })

              })
              

          }

