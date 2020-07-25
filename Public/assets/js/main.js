import { playerInformation , NBAPlayerGif, NBAPlayerInfo, playerStatistics, seasonStats} from "./playerInfo.js";
import { deckLoad, newCard, cardClear, noCardRepeat} from "./cardFunctions.js";
import { logoSelect } from "./logoSelect.js";

$("#loginpage").on("click", function () {
  console.log("working")
  location.replace("/signinpage");
});

$("#signuppage").on("click", function () {
  console.log("working");
  location.replace("/signuppage");
});

$("#create-button").on("click", function () {
  console.log("working")
  location.replace("/create");
});

$("#submit").on("click", function () {
  playerInformation();
  $("#SearchPlayer").val('');
  $("#gif, #playerName, #playerID, #playerHeight, #playerweight, #playerteam, #playercity, #teamLogo").html("");
  deckLoad();
});

$("#clear").on("click", function () {
  cardClear();
});

$("#save-card").on("click", function (event) {
  event.preventDefault();
  let plyrID = Number($("#playerID").text().trim());
  noCardRepeat(plyrID);
});

$(".decklist").on("click", ".deckcard", function (event) {
  event.preventDefault();
  $("#gif, #playerName, #playerID, #playerHeight, #playerweight, #playerteam, #playercity, #teamLogo").html("");

  var id = $(this).attr("data-id")

  $.get("/api/playerbase/" + id, function (data) {

    let teamLogoURL = logoSelect(data.player_team);

    $("#gif").append("<img src=" + data.img_src + " id=plyr_gif>");

    $("#playerName").html(data.player_name);

    $("#playerPos").html(data.player_pos);

    $("#playerID").html(data.player_id);

    $("#playerHeight").html(data.player_height);

    $("#playerweight").html(data.player_weight);

    $("#playerteam").html(data.player_team);

    $("#playercity").html(data.player_city);

    $("#teamLogo").append("<img src=" + teamLogoURL + " id=nbaLogo>");

  })
  // Enter code to get player season info here
  $.get("/api/playerstats/" + id, function (data) {

    $("#playerStatsSeason").html(data.season);

    $("#playerStatsTeam").html(data.player_team);

    $("#playerGP").html(data.player_gp);

    $("#playerFGPer").html(data.player_fg);

    $("#playerFTPer").html(data.player_ft);

    $("#playerReb").html(data.player_reb);

    $("#playerAst").html(data.player_ast);

    $("#playerStl").html(data.player_stl);

    $("#playerBlk").html(data.player_blk);

    $("#playerPts").html(data.player_pts);

    $("#playerAvg").html(data.player_avg);

  })
});

deckLoad()