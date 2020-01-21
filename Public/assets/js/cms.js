$(document).ready(function () {
    var bodyInput = $("#body");
    var playerId = $("#playerID");
    var allInput = $("#playeStatsseason");
    var cardSave = $("#generate");
    $(cardSave).on("submit", function handleCardSave(event) {
        event.preventDefault();


        var newCardBase = {
            player_id: playerId.val().trim()

        };
        console.log(newCardBase);

        submitCard(newCardBase)

    });


let submitCard = (Post) => {
    $.post("/api/posts/", Post)
 }
});