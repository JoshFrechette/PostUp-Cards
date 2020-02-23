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
});

//When the user clicks on one card from his deck view to look at
$(".deckcard").on("click", function(event) {
    $.get("api/:id", function(data) {
        //if () here to see if IDs match up and create an catch

        $("#playerName").html(data.img_src);

        $("#playerName").html(data.player_name);

        $("#playerID").html(data.player_id);

        $("#playerHeight").html(data.player_height);

        $("#playerweight").html(data.player_weight);

        $("#playerteam").html(data.player_team);

        $("#playercity").html(data.player_city);
    })
});

//Loads the name of all the user cards so he can select from them

$(document).ready(function() {
    $.get("/api/all").then(function(data){
        console.log("at cms " + data)

    })
})