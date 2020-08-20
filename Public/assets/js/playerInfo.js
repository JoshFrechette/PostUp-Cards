// const axios = require('axios');
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

        //Declaring the variables for the loop
        let fgm = 0;
        let fga = 0;
        let fg3m = 0;
        let fg3a = 0;
        let ftm = 0;
        let fta = 0;
        let oreb = 0;
        let dreb = 0;
        let ast = 0;
        let stl = 0;
        let blk = 0;
        let pts = 0;
        let avg = 0;

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
            Reb: oreb + dreb,
            Ast: ast,
            Stl: stl,
            Blk: blk,
            Pts: pts,
            AVG: avg,
            last: playerStats.data.length - 1

        }
        console.log(stats)

        $("#currStats").html(stats.Season);
        $("#currTeam").html(playerStats.data[stats.last].team.name);
        $("#currGP").html(playerStats.data.length - 1);
        $("#currFGPer").html(stats.FGPer);
        $("#currFTPer").html(stats.FTPer);
        $("#currReb").html(stats.Reb);
        $("#currAst").html(stats.Ast);
        $("#currStl").html(stats.Stl);
        $("#currBlk").html(stats.Blk);
        $("#currPts").html(stats.Pts);
        $("#currAvg").html(stats.AVG);

    })
    seasonStats(currentSeason, playerID)
}

async function seasonStats(currentSeason, playerID) {
    let output = [];
    var i;
    let lastSeason = currentSeason - 1;

    for (i = 0; i < 20; i++) {
        const res = await fetch
            ("https://cors-anywhere.herokuapp.com/https://www.balldontlie.io/api/v1/season_averages?season=" + lastSeason + "&player_ids[]=" + playerID);

        const seasonAvgs = await res.json();

        output.push(seasonAvgs)
        console.log(output);
        lastSeason = lastSeason - 1;
    }
    printStats(output);
}

let printStats = (avgStats) => {
    console.log(avgStats)
    let a = 1;
    for (const i in avgStats) {
        //JSON formatting response, might be able to skip this part if it's more efficient
        let tableAvgStats = {
            Season: avgStats[i].data[0].season,
            GP: avgStats[i].data[0].games_played,
            FGPer: (((avgStats[i].data[0].fg_pct) * 100).toFixed(1)),
            FTPer: (((avgStats[i].data[0].ft_pct) * 100).toFixed(1)),
            RebAvg: avgStats[i].data[0].reb,
            AstAvg: avgStats[i].data[0].ast,
            StlAvg: avgStats[i].data[0].stl,
            BlkAvg: avgStats[i].data[0].blk,
            PtsAvg: avgStats[i].data[0].pts
        }

        //Dynamically create a new row and cells, then populate the cells with the response data
        var table = document.getElementById("seasonAvg");
        var newRow = table.insertRow(a);
        var YRCell = newRow.insertCell(0);
        YRCell.innerHTML = tableAvgStats.Season;
        var GPCell = newRow.insertCell(1);
        GPCell.innerHTML = tableAvgStats.GP;
        var FGCell = newRow.insertCell(2);
        FGCell.innerHTML = tableAvgStats.FGPer;
        var FTCell = newRow.insertCell(3);
        FTCell.innerHTML = tableAvgStats.FTPer;
        var REBCell = newRow.insertCell(4);
        REBCell.innerHTML = tableAvgStats.RebAvg;
        var ASTCell = newRow.insertCell(5);
        ASTCell.innerHTML = tableAvgStats.AstAvg;
        var STLCell = newRow.insertCell(6);
        STLCell.innerHTML = tableAvgStats.StlAvg;
        var BLKCell = newRow.insertCell(7);
        BLKCell.innerHTML = tableAvgStats.BlkAvg;
        var PTSCell = newRow.insertCell(8);
        PTSCell.innerHTML = tableAvgStats.PtsAvg;

    }
    a = a++;
}

export { playerInformation, NBAPlayerGif, NBAPlayerInfo, playerStatistics, seasonStats };