let thisUserID;

let deckLoad = () => {
  $(".decklist").html("");
  thisUserID = Number(localStorage.getItem('userID'));

  $.get("/api/playerbase", function (data) {
    console.table(data)
    if (data.length === 0) {
      // alert("You have no cards in your deck!")
      console.log("You have no cards in your deck!");
      // $(".decklist").empty();
    } else {
      for (const i in data) {
        if (data[i].user_id === thisUserID) {
          var cardItem = $("<li class='CardDeckItem'>");
          cardItem.append(`<p>${data[i].player_name}
          <button data-id=${data[i].player_id} class='deckcard deckcardshow'><i class="far fa-eye"></i></button>
          <button data-id=${data[i].player_id} class='deckcard deckcarddelete'><i class="far fa-trash-alt"></i></button>
          </p>`);

          $(".decklist").prepend(cardItem);
        } else {
          // alert('Problem loading deck')
        }
      }
    }
  })
}

let newCard = () => {
  var newCard = {
// Info from front of card
    userID: thisUserID,
    playerID: $("#playerID").text().trim(),
    playerName: $("#playerName").text().trim(),
    playerPos: $("#playerPos").text().trim(),
    playerHeight: $("#playerHeight").text().trim(),
    playerWeight: $("#playerweight").text().trim(),
    playerTeam: $("#playerteam").text().trim(),
    playerCity: $("#playercity").text().trim(),
    playerGIF: $("#plyr_gif").attr('src').trim(),
//info from back of card
    playerStatsSeason: $("#currStats").text().trim(),
    playerStatsTeam: $("#currTeam").text().trim(),
    playerGP: $("#currGP").text().trim(),
    playerFGPer: $("#currFGPer").text().trim(),
    playerFTPer: $("#currFTPer").text().trim(),
    playerReb: $("#currReb").text().trim(),
    playerAst: $("#currAst").text().trim(),
    playerStl: $("#currStl").text().trim(),
    playerBlk: $("#currBlk").text().trim(),
    playerPts: $("#currPts").text().trim(),
    playerAvg: $("#currAvg").text().trim()
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

let cardDelete = (idDelete) => {
  console.log("delete card action taken")
}

let cardClear = () => {
  $("#gif, #playerName, #playerID, #playerHeight, #playerweight, #playerteam, #playercity, #teamLogo, #playerStatsSeason, #playerStatsTeam, #playerGP, #playerFGPer, #playerFTPer, #playerReb, #playerAst, #playerStl, #playerBlk, #playerPts, #playerAvg").html("");
}

export { deckLoad, newCard, cardClear, noCardRepeat, cardDelete };