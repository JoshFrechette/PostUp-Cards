
function playerInformation() {
  var player = $("#SearchPlayer").val();
  NBAPlayerGif(player);
};

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
                $("#card").append("<div class=col id=playerID></div>");
                $("#playerID").text("Player's id: " + response.data[0].id);

                $("#card").append("<div class=col id=playerName></div>");
                $("#playerName").text("Player's name: " + response.data[0].first_name + " " + response.data[0].last_name);

                $("#card").append("<div class=col id=playerHeight></div>");
                $("#playerHeight").text("Player's height: " + response.data[0].height_feet + "ft");

                $("#card").append("<div class=col id=playerweight></div>");
                $("#playerweight").text("Player's weight: " + response.data[0].weight_pounds + "lbs");

                $("#card").append("<div class=col id=playerteam></div>");
                $("#playerteam").text("Player's team: " + response.data[0].team.full_name);

                $("#card").append("<div class=col id=playercity></div>");
                $("#playercity").text("Player's city: " + response.data[0].team.city);
                
                  var playerID = response.data[0].id;
                  playerStatastics(playerID);
                  
              })
           }

function playerStatastics(playerID){
  var playerStatUrl = "https://www.balldontlie.io/api/v1/season_averages?player_ids[]=" + playerID;
                  $.ajax({
                      url: playerStatUrl,
                      method: "GET"
                      }).then(function(playerStatUrl) {
                          console.log(playerStatUrl);

                          $("#card").append("<div class=col id=playeStatsfgm></div>");
                          $("#playeStatsfgm").text("fgm: " + playerStatUrl.data[0].fgm);

                          $("#card").append("<div class=col id=playeStatsfga></div>");
                          $("#playeStatsfga").text("fga: " + playerStatUrl.data[0].fga);

                          $("#card").append("<div class=col id=playeStatsfg3m></div>");
                          $("#playeStatsfg3m").text("fg3m: " + playerStatUrl.data[0].fg3m);

                          $("#card").append("<div class=col id=playeStatsfg3a></div>");
                          $("#playeStatsfg3a").text("fg3a: " + playerStatUrl.data[0].fg3a);

                          $("#card").append("<div class=col id=playeStatsftm></div>");
                          $("#playeStatsftm").text("ftm: " + playerStatUrl.data[0].ftm);

                          $("#card").append("<div class=col id=playeStatsfta></div>");
                          $("#playeStatsfta").text("fta: " + playerStatUrl.data[0].fta);

                          $("#card").append("<div class=col id=playeStatsoreb></div>");
                          $("#playeStatsoreb").text("oreb: " + playerStatUrl.data[0].oreb);

                          $("#card").append("<div class=col id=playeStatsdreb></div>");
                          $("#playeStatsdreb").text("dreb: " + playerStatUrl.data[0].dreb);

                          $("#card").append("<div class=col id=playeStatsast></div>");
                          $("#playeStatsast").text("ast: " + playerStatUrl.data[0].ast);

                          $("#card").append("<div class=col id=playeStatsstl></div>");
                          $("#playeStatsstl").text("stl: " + playerStatUrl.data[0].stl);

                          $("#card").append("<div class=col id=playeStatsblk></div>");
                          $("#playeStatsblk").text("blk: " + playerStatUrl.data[0].blk);

                          $("#card").append("<div class=col id=playeStatspts></div>");
                          $("#playeStatspts").text("pts: " + playerStatUrl.data[0].pts);
                      })
                    }