let savedDeck = [];

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
    // deckLoad()
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
  deckLoad();
});

let cardClear = () => {
  $("#gif, #playerName, #playerID, #playerHeight, #playerweight, #playerteam, #playercity").html("");
};

let deckLoad = () => {
  savedDeck=[];
  $.get("/api/playerbase", function (data) {
    console.log("deckload data being loaded from db", data)
    savedDeck = data;
    // savedDeck.push(data)
    console.log("deckload", savedDeck)
    if (data.length !== 0) {
      $(".decklist").empty()
      for (const i in data) {
        var cardItem = $("<li class='CardDeckItem'>");
        cardItem.append("<p>" + data[i].player_name + "<button data-id='" + data[i].id + "' class='deckcard' id='deckcard'> View Card </button></p>");

        $(".decklist").prepend(cardItem);
      }
    }
  })
  console.log(savedDeck)
  return savedDeck
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
 deckLoad();