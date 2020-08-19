// var axios = require("axios").default;
import { logoSelect } from "./logoSelect.js";

let playerInformation = () => {
    var player = $("#SearchPlayer").val();
    NBAPlayerGif(player);
};

let NBAPlayerGif = (player) => {
    var gifs = "https://api.giphy.com/v1/gifs/search?q=" + player + "&api_key=NOrybviPafhsVNwUf5V1x96NAM664s7W&limit=5";
    $.ajax({
        url: gifs,
        method: "GET"
    }).then(function (gifs) {
        if (!gifs) {
            $("gif").append("<p> No Image Found </p>");
        } else {
            $("#gif").append("<img src=" + gifs.data[0].images.original.url + " id=plyr_gif>");
        }
    })
    NBAPlayerInfo(player);
}

let NBAPlayerInfo = (player) => {
    var ballDontLie = "https://cors-anywhere.herokuapp.com/https://balldontlie.io/api/v1/players?search=" + player;
    $.ajax({
        url: ballDontLie,
        method: "GET"
    }).then(function (response) {
        let teamLogoURL = logoSelect(response.data[0].team.full_name);

        $("#playerName").html(response.data[0].first_name + " " + response.data[0].last_name);
        // $("#playerID").html(response.data[0].id);
        $(".card-divider").html(response.data[0].id);
        $("#playerPos").html(response.data[0].position);
        $("#playerHeight").html(response.data[0].height_feet + "'" + response.data[0].height_inches + "\"");
        $("#playerweight").html(response.data[0].weight_pounds);
        $("#playerteam").html(response.data[0].team.full_name);
        $("#playercity").html(response.data[0].team.city);
        $("#teamLogo").append("<img src=" + teamLogoURL + " id=nbaLogo>");

        var playerID = response.data[0].id;

        playerStatistics(playerID);
    })
}

function playerStatistics(playerID) {
    let d = new Date();
    let currentSeason = (d.getUTCFullYear()) - 1;
    // console.log(currentSeason);
    // add an if conditonal to determine at what point the season is at when the user creates the card
    // currentSeason = currentSeason - 1;
      var playerStats = "https://cors-anywhere.herokuapp.com/https://balldontlie.io/api/v1/stats?player_ids[]=" + playerID + "&seasons[]=" + currentSeason + "&per_page=100";
    $.ajax({
        url: playerStats,
        method: "GET"
    }).then(function (playerStats) {
        console.table("these are all the seasons ", playerStats)
        //Declaring the variables for the loop
        // let fgm = 0;
        // let fga = 0;
        // let fg3m = 0;
        // let fg3a = 0;
        // let ftm = 0;
        // let fta = 0;
        // let oreb = 0;
        // let dreb = 0;
        // let ast = 0;
        // let stl = 0;
        // let blk = 0;
        // let pts = 0;
        // let avg = 0;

        //For loop to combine all of the season stats for the player
        for (const allStats of playerStats.data) {
            fgm += allStats.fgm;
            fga += allStats.fga;
            fg3m += allStats.fg3m;
            fg3a += allStats.fg3a;
            ftm += allStats.ftm;
            fta += allStats.fta;
            oreb += allStats.oreb;
            dreb += allStats.dreb;
            ast += allStats.ast;
            stl += allStats.stl;
            blk += allStats.blk;
            pts += allStats.pts;
            let initavg = pts / playerStats.data.length;
            avg = initavg.toFixed(2);

        }
        //Create the JSON for every season
        let stats = {

            Season: currentSeason,
            FGPer: ((fgm / fga) * 100).toFixed(1),
            FTPer: ((ftm / fta) * 100).toFixed(1),
            // Three_Pts_Made: fg3m,
            // Three_Pts_Att: fg3a,
            // Off_Reb: oreb,
            // Def_Reb: dreb,
            Reb: oreb + dreb,
            Ast: ast,
            Stl: stl,
            Blk: blk,
            Pts: pts,
            AVG: avg,
            last: playerStats.data.length -1

        }
        console.log(stats)

        $("#currStats").html(stats.Season);
        $("#currTeam").html(playerStats.data[stats.last].team.name);
        $("#currGP").html(playerStats.data.length -1);
        $("#currFGPer").html(stats.FGPer);
        $("#currFTPer").html(stats.FTPer);
        $("#currReb").html(stats.Reb);
        $("#currAst").html(stats.Ast);
        $("#currStl").html(stats.Stl);
        $("#currBlk").html(stats.Blk);
        $("#currPts").html(stats.Pts);
        $("#currAvg").html(stats.AVG);

    })
    // seasonStats(currentSeason, playerID)
}

// let allSeasonStats = (currentSeason,playerID) => {
//     let i = 0;
//     do {
//         i += 1;
//         currentSeason = currentSeason - 1;
//         seasonStats(currentSeason, playerID);
//     } while (i<5);
//     }


let seasonStats = (currentSeason, playerID) => {
    let avgStats = [];
    // currentSeason = currentSeason--;

    var playerStats = "https://cors-anywhere.herokuapp.com/https://www.balldontlie.io/api/v1/season_averages?season=" + currentSeason + "&player_ids[]=" + playerID;
    $.ajax({
        url: playerStats,
        method: "GET"
    }).then(function (avgData) {
        let seasonAvg = avgData;
        console.log(seasonAvg);
        //Create the JSON for every season
        let plrAvgStats = {
            //Create the JSON for every season

        }
        avgStats.push(plrAvgStats);

        console.log(avgStats);

    })
    return avgStats;
}

export { playerInformation, NBAPlayerGif, NBAPlayerInfo, playerStatistics, seasonStats };