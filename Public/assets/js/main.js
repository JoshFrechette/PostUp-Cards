import { playerInformation , NBAPlayerGif, NBAPlayerInfo, playerStatistics, seasonStats} from "./playerInfo.js";
import { deckLoad, newCard, cardClear, noCardRepeat, cardDelete} from "./cardFunctions.js";
import { logoSelect } from "./logoSelect.js";
// import { newUser, userLogin } from "./loginFunctions.js";

var userID;

//onload events
window.addEventListener('load', (e) => {
  e.preventDefault();
  deckLoad(userID);
});
// $('.deckview').onload = deckLoad(userID);

//Nav Buttons
$("#loginpage").on("click", (e) => {
  location.replace("/signinpage");
});
$("#signuppage").on("click", () => {
  location.replace("/signuppage");
});
$("#logout").on("click", (e) => {
  location.replace("/");
});
// with auth working, may not need anymore...
// $("#create-button").on("click", () => {
//   location.replace("/create");
// });

//Auth Buttons
$("#signin").on("click", (e) => {
  e.preventDefault();
  userLogin();
  return userID;
});
$("#signup").on("click", (e) => {
  e.preventDefault();
  newUser();
});

//Card Function Buttons
$("#submit").on("click", () => {
  console.log(userID)
  playerInformation();
    $("#SearchPlayer").val('');
    $("#gif, #playerName, #playerID, #playerHeight, #playerweight, #playerteam, #playercity, #teamLogo").html("");
    deckLoad(userID);
});
$("#save-card").on("click", (event) => {
  event.preventDefault();
  let plyrID = Number($("#playerID").text().trim());
  noCardRepeat(plyrID, userID);
});
$("#clear").on("click", () => {
  cardClear();
});

//Deck actions
//Card delete is a work in progress...
$(".decklist").on("click", ".deckcarddelete", function (e) {
  console.log("delete card")
  e.preventDefault();
  var id = $(this).attr("data-id")
  cardDelete(id)
});
$(".decklist").on("click", ".deckcardshow", function (e) {
  e.preventDefault();
  $("#gif, #playerName, #playerID, #playerHeight, #playerweight, #playerteam, #playercity, #teamLogo").html("");

  var id = $(this).attr("data-id");

  $.get("/api/playerbase/" + id, function(data) {

    let teamLogoURL = logoSelect(data.player_team);

    $("#gif").append("<img src=" + data.img_src + " id=plyr_gif>");

    $("#playerName").html(data.player_name);

    $("#playerPos").html(data.player_pos);

    $("#playerID").html(data.player_id);

    $("#playerHeight").html(data.player_height);

    $("#playerweight").html(data.player_weight);

    $("#playerteam").html(data.player_team);

    $("#playercity").html(data.player_city);

    $("#teamLogo").append("<img src=" + teamLogoURL + " id=nbaLogo>");

  })
  // Enter code to get player season info here
  $.get("/api/playerstats/" + id, function (data) {

    $("#playerStatsSeason").html(data.season);

    $("#playerStatsTeam").html(data.player_team);

    $("#playerGP").html(data.player_gp);

    $("#playerFGPer").html(data.player_fg);

    $("#playerFTPer").html(data.player_ft);

    $("#playerReb").html(data.player_reb);

    $("#playerAst").html(data.player_ast);

    $("#playerStl").html(data.player_stl);

    $("#playerBlk").html(data.player_blk);

    $("#playerPts").html(data.player_pts);

    $("#playerAvg").html(data.player_avg);

  })
});

let newUser = () => {
  var newUser = {
      email: $("#uname").val(),
      password: $("#pword").val(),
  };
  console.log(newUser)
  $.post("/api/users", newUser)
}

let userLogin = (event) => {
  // event.preventDefault();
  var userData = {
      email: $("#uname").val(),
      password: $("#pword").val(),
  };
  if (!userData.email || !userData.password) {
  console.log('email and password dont match')
  alert('email and password dont match')
      return;
  }
  // If we have an email and password we run the loginUser function and clear the form
  loginUser(userData.email, userData.password);
  $("#uname").val("");
  $("#pword").val("");
};

// loginUser does a post to our "api/login" route and if successful, redirects us the the members page
function loginUser(email, password) {
  $.post("/api/login", {
    email: email,
    password: password
  })
    .then(function (res) {
      // $.get("/api/user_data", {
      //     email: res.email,
      //     id: res.id
      // })
      // console.log(res.email, res.id)
      userID = res.id;
      window.location.replace("/create")

      // window.onload = deckLoad(userID);
      console.log(userID)
      // deckLoad(userID)
      // If there's an error, log the error
    })
    .then(function () {
      deckLoad(userID)
    })
    .catch(function (err) {
      console.log(err);
    })
  // $('.deckview').onload = deckLoad(userID);
  return userID;
}


