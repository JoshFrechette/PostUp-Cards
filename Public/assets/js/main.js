import { playerInformation , NBAPlayerGif, NBAPlayerInfo, playerStatistics, seasonStats} from "./playerInfo.js";
import { deckLoad, newCard, cardClear, noCardRepeat} from "./cardFunctions.js";
import { logoSelect } from "./logoSelect.js";

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
    console.log(teamLogoURL);

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
});

deckLoad()