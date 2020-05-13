import { playerInformation , NBAPlayerGif, NBAPlayerInfo, playerStatistics, seasonStats} from "./playerInfo.js";
import { deckLoad } from "./deckLoad.js";

let savedDeck = [];
let baseStats = [];
let stats = [];

$("#submit").on("click", function () {
  playerInformation();
  $("#SearchPlayer").val('');
  $("#gif, #playerName, #playerID, #playerHeight, #playerweight, #playerteam, #playercity").html("");
});

$("#clear").on("click", function () {
  cardClear();
});

$("#save-card").on("click", function (event) {
  event.preventDefault();
  let plyrID = $("#playerID").text().trim();
  let userDeck = savedDeck;
  // console.log(plyrID)
  console.log(userDeck)
  if (userDeck.length === 0) {

    newCard();
    console.log("card is saved")

  } else { 
    for (const n of userDeck) {
      console.log(n)
      console.log("save-card is thinking...", userDeck)
      console.log(userDeck[n].player_id)

       if (userDeck[n].player_id !== plyrID) {
        newCard();
        console.log("card is saved")
      } else {
        console.log("card save fail.")
        // console.log(userDeck[n].player_id)
        alert("You already have this card in your deck!");
        $("#SearchPlayer").empty()
        cardClear();
        // console.log(userDeck[n].player_id)
      }
    }

  }
});

let newCard = () => {
  var newCard = {

    playerID: $("#playerID").text().trim(),
    playerName: $("#playerName").text().trim(),
    playerHeight: $("#playerHeight").text().trim(),
    playerWeight: $("#playerweight").text().trim(),
    playerTeam: $("#playerteam").text().trim(),
    playerCity: $("#playercity").text().trim(),
    playerGIF: $("#plyr_gif").attr('src').trim()
  };
  $.post("/api/new", newCard)
}

// $("#save-card").on("click", function (event) {
//   event.preventDefault();
//   let plyrID = $("#playerID").text().trim();
//   let userDeck = savedDeck[0];
//   console.log(plyrID)
//   console.log(userDeck)
//   if (plyrID === undefined) {
//     alert("The Card is empty, no card to save");
//   } else {
//     for (const n in userDeck) {
//       console.log(userDeck[n].player_id)
//       console.log([n].player_id)
//       if (userDeck[n].player_id === plyrID) {
//         console.log(userDeck[n])
//         alert("You already have this card in your deck!");
//         $("#SearchPlayer").empty()
//         cardClear();
//       } else {
//         // console.log(userDeck[n].player_id)
//         var newCard = {

//           playerID: $("#playerID").text().trim(),
//           playerName: $("#playerName").text().trim(),
//           playerHeight: $("#playerHeight").text().trim(),
//           playerWeight: $("#playerweight").text().trim(),
//           playerTeam: $("#playerteam").text().trim(),
//           playerCity: $("#playercity").text().trim(),
//           playerGIF: $("#plyr_gif").attr('src').trim()
//         };
//         $.post("/api/new", newCard)
//       }
//     }
//     // deckLoad()
//   }
// });

$("#VDeck").on("click", function (event) {
  event.preventDefault();
deckLoad()
});

let cardClear = () => {
  $("#gif, #playerName, #playerID, #playerHeight, #playerweight, #playerteam, #playercity").html("");
};

$(".decklist").on("click", ".deckcard", function (event) {
  event.preventDefault();
  $("#gif, #playerName, #playerID, #playerHeight, #playerweight, #playerteam, #playercity").html("");

  var id = $(this).attr("data-id")

  $.get("/api/playerbase/" + id, function (data) {

    $("#gif").append("<img src=" + data.img_src + " id=plyr_gif>");

    $("#playerName").html(data.player_name);

    $("#playerID").html(data.player_id);

    $("#playerHeight").html(data.player_height);

    $("#playerweight").html(data.player_weight);

    $("#playerteam").html(data.player_team);

    $("#playercity").html(data.player_city);

  })

  // Enter code to get player season info here
});
playerInformation()
deckLoad()