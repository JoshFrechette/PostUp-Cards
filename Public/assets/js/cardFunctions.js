let deckLoad = () => {
  let savedDeck=[];
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
  return savedDeck
}

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

let cardClear = () => {
  $("#gif, #playerName, #playerID, #playerHeight, #playerweight, #playerteam, #playercity").html("");
}

export { deckLoad, newCard, cardClear };