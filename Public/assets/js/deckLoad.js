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
  console.log(savedDeck)
  return savedDeck
}

export { deckLoad };