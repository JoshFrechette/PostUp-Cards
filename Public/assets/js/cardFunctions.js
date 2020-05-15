let deckLoad = () => {

  $.get("/api/playerbase", function (data) {
    if (data.length !== 0) {
      $(".decklist").empty()
      for (const i in data) {
        var cardItem = $("<li class='CardDeckItem'>");
        cardItem.append("<p>" + data[i].player_name + "<button data-id='" + data[i].player_id + "' class='deckcard' id='deckcard'> View Card </button></p>");

        $(".decklist").prepend(cardItem);
      }
    }
  })
}

let newCard = () => {
  var newCard = {
// Info from front of card
    playerID: $("#playerID").text().trim(),
    playerName: $("#playerName").text().trim(),
    playerPos: $("#playerPos").text().trim(),
    playerHeight: $("#playerHeight").text().trim(),
    playerWeight: $("#playerweight").text().trim(),
    playerTeam: $("#playerteam").text().trim(),
    playerCity: $("#playercity").text().trim(),
    playerGIF: $("#plyr_gif").attr('src').trim(),
//info from back of card
    playerStatsSeason: $("#playerStatsSeason").text().trim(),
    playerStatsTeam: $("#playerStatsTeam").text().trim(),
    playerGP: $("#playerGP").text().trim(),
    playerFGPer: $("#playerFGPer").text().trim(),
    playerFTPer: $("#playerFTPer").text().trim(),
    playerReb: $("#playerReb").text().trim(),
    playerAst: $("#playerAst").text().trim(),
    playerStl: $("#playerStl").text().trim(),
    playerBlk: $("#playerBlk").text().trim(),
    playerPts: $("#playerPts").text().trim(),
    playerAvg: $("#playerAvg").text().trim()
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
  $("#gif, #playerName, #playerID, #playerHeight, #playerweight, #playerteam, #playercity, #teamLogo, #playerStatsSeason, #playerStatsTeam, #playerGP, #playerFGPer, #playerFTPer, #playerReb, #playerAst, #playerStl, #playerBlk, #playerPts, #playerAvg").html("");
}

export { deckLoad, newCard, cardClear, noCardRepeat };