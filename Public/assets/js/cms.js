$(document).ready(function () {
    var bodyInput = $("#body");
    var playerId = $("#playerID");
    var allInput = $("#playeStatsseason");
    var cardSave = $("#generate");
<<<<<<< HEAD
    $(cardSave).on("click", function handleCardSave(event) {
        event.preventDefault();
        console.log("Submit working?")
=======
    $(cardSave).on("submit", function handleCardSave(event) {
        event.preventDefault();

>>>>>>> master

        var newCardBase = {
            player_id: playerId.val().trim()

        };
        console.log(newCardBase);

        submitCard(newCardBase)

    });

<<<<<<< HEAD
   

let submitCard = (Post) => {
    $.post("/api/posts/", Post)
    
=======

let submitCard = (Post) => {
    $.post("/api/posts/", Post)
>>>>>>> master
 }
});