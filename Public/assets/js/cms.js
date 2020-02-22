$("#save-card").on("click", function(event) {
    console.log("save button clicked")
    event.preventDefault();
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
})
