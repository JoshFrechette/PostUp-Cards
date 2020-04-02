let savedDeck=[];

$("#save-card").on("click", function (event) {
  console.log("save button clicked")
  event.preventDefault();
  //
  var newCard = {

    playerID: $("#playerID").text().trim(),
    playerName: $("#playerName").text().trim(),
    playerHeight: $("#playerHeight").text().trim(),
    playerWeight: $("#playerweight").text().trim(),
    playerTeam: $("#playerteam").text().trim(),
    playerCity: $("#playercity").text().trim(),
    playerGIF: $("#plyr_gif").attr('src').trim()
  };
  console.log("CMS, newCard ");
  console.log(newCard);

  $.post("/api/new", newCard)
});

$("#VDeck").on("click", function (event) {
  event.preventDefault();
  deckLoad();
});

let deckLoad = () => {
  $.get("/api/playerbase", function (data) {
    console.log(data)
    savedDeck.push(data)

    if (data.length !== 0) {
      $(".decklist").empty()
      for (var i = 0; i < data.length; i++) {

        var cardItem = $("<li class='CardDeckItem'>");
        cardItem.append("<p>" + data[i].player_name + "<button data-id='" + data[i].id + "' class='deckcard' id='deckcard'> View Card </button></p>");

        $(".decklist").prepend(cardItem);
      }
    }
  })
};

$(".decklist").on("click", ".deckcard", function (event) {
  console.log("player button clicked")
  event.preventDefault();
  $("#gif, #playerName, #playerID, #playerHeight, #playerweight, #playerteam, #playercity").html("");

  var id = $(this).attr("data-id")
  console.log(id)


  $.get("/api/playerbase/" + id, function (data) {
    console.log(data)
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