
function playerInformation() {
  var player = $("#SearchPlayer").val();
  NBAPlayerInfo(player);
};

function NBAPlayerInfo(player){
  var ballDontLie = "https://cors-anywhere.herokuapp.com/https://balldontlie.io/api/v1/players?search=" + player;
  $.ajax({
              url: ballDontLie,
              method: "GET"
              }).then(function(response) {
                $("#card").append("<div class=col id=playerID></div>");
                $("#playerID").text("Player's id: " + response.data[0].id);

                $("#card").append("<div class=col id=playerName></div>");
                $("#playerName").text("Player's name: " + response.data[0].first_name + " " + response.data[0].last_name);

                $("#card").append("<div class=col id=playerHeight></div>");
                $("#playerHeight").text("Player's height: " + response.data[0].height_feet + "ft");

                $("#card").append("<div class=col id=playerweight></div>");
                $("#playerweight").text("Player's weight: " + response.data[0].weight_pounds + "lbs");

                $("#card").append("<div class=col id=playerteam></div>");
                $("#playerteam").text("Player's team: " + response.data[0].team.full_name);

                $("#card").append("<div class=col id=playercity></div>");
                $("#playercity").text("Player's city: " + response.data[0].team.city);
                
                  var playerID = response.data[0].id;

                  var playerStatatstics = "https://cors-anywhere.herokuapp.com/https://balldontlie.io/api/v1/stats?player_ids[]=" + playerID + "&seasons[]=2019";
                  $.ajax({
                      url: playerStatatstics,
                      method: "GET"
                      }).then(function(playerStats) {
                          console.log(playerStats);
                      })

              })
              

          }


   
   
   // $("#submit").click(function() {
    //   console.log('inside');
    //   var playerName = $("#SearchPlayer").val();
    //   console.log(playerName);
    // })  
//       // Send the POST request.
//       $.ajax("/api/burgers", {
//         type: "POST",
//         data: newBurger
//       }).then(
//         function() {
//           console.log("created new burger");
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });
//     $(".devourButton").click((event)=>{
//       console.log(event.target);
  
//       $.ajax("/api/burgers/"+event.target.value,{
//         type:"PUT",
//         data:{
//           devoured:1
//         }
//       }).then(()=>{
//         $(`.${event.target.className}`).remove();
//         location.reload();
//       })
//     })
//   });

