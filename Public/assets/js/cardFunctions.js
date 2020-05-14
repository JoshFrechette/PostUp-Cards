let deckLoad = () => {

  $.get("/api/playerbase", function (data) {
    if (data.length !== 0) {
      $(".decklist").empty()
      for (const i in data) {
        var cardItem = $("<li class='CardDeckItem'>");
        cardItem.append("<p>" + data[i].player_name + "<button data-id='" + data[i].id + "' class='deckcard' id='deckcard'> View Card </button></p>");

        $(".decklist").prepend(cardItem);
      }
    }
  })
  console.log("deck loaded")
}

let newCard = () => {
  var newCard = {

    playerID: $("#playerID").text().trim(),
    playerName: $("#playerName").text().trim(),
    playerPos: $("#playerPos").text().trim(),
    playerHeight: $("#playerHeight").text().trim(),
    playerWeight: $("#playerweight").text().trim(),
    playerTeam: $("#playerteam").text().trim(),
    playerCity: $("#playercity").text().trim(),
    playerGIF: $("#plyr_gif").attr('src').trim()
  };
  $.post("/api/new", newCard)
  deckLoad();
}

let noCardRepeat = (plyrID) => {
  $.get("/api/playerbase", function (data) {
    if (data.length === 0) {
      newCard();
    } else {
      for (const n in data) {
        if (data[n].player_id === plyrID) {
          alert("You already have this card in your deck!");
          // console.log("card save failed", plyrID, "and", data[n].player_id)
          $("#SearchPlayer").empty();
          cardClear();
          break;
        }
      }
      newCard();
    }
  })
}

let cardClear = () => {
  $("#gif, #playerName, #playerID, #playerHeight, #playerweight, #playerteam, #playercity, #teamLogo").html("");
}

export { deckLoad, newCard, cardClear, noCardRepeat };