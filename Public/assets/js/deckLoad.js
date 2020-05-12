export let deckLoad = () => {
    $.get("/api/playerbase", function (data) {
      savedDeck.push(data)
  
      if (data.length !== 0) {
        $(".decklist").empty()
        for (const i in data) { 
          var cardItem = $("<li class='CardDeckItem'>");
          cardItem.append("<p>" + data[i].player_name + "<button data-id='" + data[i].id + "' class='deckcard' id='deckcard'> View Card </button></p>");
  
          $(".decklist").prepend(cardItem);
        }
      }
    })
    console.log("after onLoad", savedDeck)
  };