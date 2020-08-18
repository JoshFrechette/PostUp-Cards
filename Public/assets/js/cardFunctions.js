let thisUserID;

let deckLoad = () => {
  thisUserID = Number(localStorage.getItem('userID'));
  console.log("This user's ID ", thisUserID);
  $.get("/api/playerbase", function (data) {
    console.table(data)
    if (data.length === 0) {
      // alert("You have no cards in your deck!")
      console.log("You have no cards in your deck!");
      // $(".decklist").empty();
    } else {
      for (const i in data) {
        if (data[i].user_id === thisUserID) {
          console.table(data[i].user_id)
          var cardItem = $("<li class='CardDeckItem'>");
          cardItem.append(`<p>${data[i].player_name}
          <button data-id=${data[i].player_id} class='deckcard deckcardshow'><i class="far fa-eye"></i></button>
          <button data-id=${data[i].player_id} class='deckcard deckcarddelete'><i class="far fa-trash-alt"></i></button>
          </p>`);

          $(".decklist").prepend(cardItem);
        // } if (userID !== data[i].userId) {
        //   alert("You have no cards in your deck!")
      //   } else {
      //     alert('Problem loading deck')
        }
      }
    }
  })
}

let newCard = () => {
  console.log("New card ", thisUserID);
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
  console.log(newCard)
  $.post("/api/new", newCard)
  deckLoad();
}

let noCardRepeat = (plyrID) => {
  console.log("at noCardRepeat ", thisUserID);
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