$("#save-card").on("click", function(event) {
    event.preventDefault();

    var newCard = {
        playerID: $("playerID").val().trim(),
        playerName: $("playerName").val().trim(),
        playerHeight: $("playerHeight").val().trim(),
        playerWeight: $("playerweight").val().trim(),
        playerTeam: $("playerteam").val().trim(),
        playerCity: $("city").val().trim()
    };
    console.log(newCard);

    $.post("/api/new", newCard)    
})


// $(document).ready(function () {
//     var bodyInput = $("#body");
//     var playerId = $("#playerID");
//     var allInput = $("#playeStatsseason");
//     var cardSave = $("#generate");
//     $(cardSave).on("click", function handleCardSave(event) {
//         event.preventDefault();
//         console.log("Submit working?")

//         var newCardBase = {
//             player_id: playerId.val().trim()

//         };
//         console.log(newCardBase);

//         submitCard(newCardBase)

//     });

   

// let submitCard = (Post) => {
//     $.post("/api/posts/", Post)
    
//  }
// });