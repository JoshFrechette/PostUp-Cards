(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//Setting dependencies
// var moment = require('moment');
//Empty array to hold the harvested data in the propper for for the front-end
let stats = [];

$("#submit").click(playerInformation);

function playerInformation() {
    var player = $("#SearchPlayer").val();
    NBAPlayerGif(player);
    NBAPlayerInfo(player)
};

function NBAPlayerGif(player) {
    var gifs = "http://api.giphy.com/v1/gifs/search?q=" + player + "&api_key=NOrybviPafhsVNwUf5V1x96NAM664s7W&limit=5";
    $.ajax({
        url: gifs,
        method: "GET"
    }).then(function (gifs) {
        $("#card").append("<img src=" + gifs.data[0].images.original.url + ">");
        //$("#playerID").text("Player's id: " + response.data[0].id);
        NBAPlayerInfo(player);
    })
}

function NBAPlayerInfo(player) {
    var ballDontLie = "https://cors-anywhere.herokuapp.com/https://balldontlie.io/api/v1/players?search=" + player;
    $.ajax({
        url: ballDontLie,
        method: "GET"
    }).then(function (response) {
        $("#card").append("<div class=col id=playerID></div>");
        $("#playerID").text("Player's id: " + response.data[0].id);

        $("#card").append("<div class=col id=playerName></div>");
        $("#playerName").text("Player's name: " + response.data[0].first_name + " " + response.data[0].last_name);

        $("#card").append("<div class=col id=playerHeight></div>");
        $("#playerHeight").text("Player's height: " + response.data[0].height_feet + " ft");

        $("#card").append("<div class=col id=playerweight></div>");
        $("#playerweight").text("Player's weight: " + response.data[0].weight_pounds + " lbs");

        $("#card").append("<div class=col id=playerteam></div>");
        $("#playerteam").text("Player's team: " + response.data[0].team.full_name);

        $("#card").append("<div class=col id=playercity></div>");
        $("#playercity").text("Player's city: " + response.data[0].team.city);

        var playerID = response.data[0].id;
        playerStatastics(playerID);

    })
}

function playerStatastics(playerID) {
    let thisYear = moment().format('YYYY');
    console.log(thisYear);
    var currentSeason = thisYear - 1;
    var playerStats = "https://cors-anywhere.herokuapp.com/https://balldontlie.io/api/v1/stats?player_ids[]=" + playerID + "&seasons[]=" + currentSeason;
    $.ajax({
        url: playerStats,
        method: "GET"
    }).then(function (data) {
        console.log(playerStats)
        let season = data;
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
    
        //For loop to combine all of the season stats for the player
        for (const allStats of season.data) {
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
            avg = pts / season.data.length;
        }
        //Create the JSON for every season
        let plyrData = {
    
            Season: currentSeason,
            FG_Made: fgm,
            FG_Att: fga,
            Three_Pts_Made: fg3m,
            Three_Pts_Att: fg3a,
            FT_Made: ftm,
            FT_Att: fta,
            Off_Reb: oreb,
            Def_Reb: dreb,
            Asst: ast,
            Stl: stl,
            Blk: blk,
            Pts: pts,
            AVG: avg
    
        }
        stats.push(plyrData);


        $("#card").append("<div class=col id=playeStatsseason></div>");
        $("#playeStatsseason").text("Season: " + stats[0].Season);

        $("#card").append("<div class=col id=playeStatsfgm></div>");
        $("#playeStatsfgm").text("FG_Made: " + stats[0].FG_Made);

        $("#card").append("<div class=col id=playeStatsfga></div>");
        $("#playeStatsfga").text("FG_Att: " + stats[0].FG_Att);

        $("#card").append("<div class=col id=playeStatsfg3m></div>");
        $("#playeStatsfg3m").text("Three_Pts_Made: " + stats[0].Three_Pts_Made);

        $("#card").append("<div class=col id=playeStatsfg3a></div>");
        $("#playeStatsfg3a").text("Three_Pts_Att: " + stats[0].Three_Pts_Att);

        $("#card").append("<div class=col id=playeStatsftm></div>");
        $("#playeStatsftm").text("FT_Made: " + stats[0].FT_Made);

        $("#card").append("<div class=col id=playeStatsfta></div>");
        $("#playeStatsfta").text("FT_Att: " + stats[0].FT_Att);

        $("#card").append("<div class=col id=playeStatsoreb></div>");
        $("#playeStatsoreb").text("Off_Reb: " + stats[0].Off_Reb);

        $("#card").append("<div class=col id=playeStatsdreb></div>");
        $("#playeStatsdreb").text("Def_Reb: " + stats[0].Def_Reb);

        $("#card").append("<div class=col id=playeStatsast></div>");
        $("#playeStatsast").text("Asst: " + stats[0].Asst);

        $("#card").append("<div class=col id=playeStatsstl></div>");
        $("#playeStatsstl").text("Stl: " + stats[0].Stl);

        $("#card").append("<div class=col id=playeStatsblk></div>");
        $("#playeStatsblk").text("Blk: " + stats[0].Blk);

        $("#card").append("<div class=col id=playeStatspts></div>");
        $("#playeStatspts").text("Pts: " + stats[0].Pts);

        $("#card").append("<div class=col id=playeStatsavg></div>");
        $("#playeStatsavg").text("AVG: " + stats[0].AVG);


    })
}

// let seasonStats = () => {
//     let season = data;
//     //Declaring the variables for the loop
//     let fgm = 0;
//     let fga = 0;
//     let fg3m = 0;
//     let fg3a = 0;
//     let ftm = 0;
//     let fta = 0;
//     let oreb = 0;
//     let dreb = 0;
//     let ast = 0;
//     let stl = 0;
//     let blk = 0;
//     let pts = 0;

//     //For loop to combine all of the season stats for the player
//     for (const allStats of season.data) {
//         fgm += allStats.fgm;
//         fga += allStats.fga;
//         fg3m += allStats.fg3m;
//         fg3a += allStats.fg3a;
//         ftm += allStats.ftm;
//         fta += allStats.fta;
//         oreb += allStats.oreb;
//         dreb += allStats.dreb;
//         ast += allStats.ast;
//         stl += allStats.stl;
//         blk += allStats.blk;
//         pts += allStats.pts;
//         avg = pts / season.data.length;
//     }
//     //Create the JSON for every season
//     let data = {

//         Season: currentSeason,
//         FG_Made: fgm,
//         FG_Att: fga,
//         Three_Pts_Made: fg3m,
//         Three_Pts_Att: fg3a,
//         FT_Made: ftm,
//         FT_Att: fta,
//         Off_Reb: oreb,
//         Def_Reb: dreb,
//         Asst: ast,
//         Stl: stl,
//         Blk: blk,
//         Pts: pts,
//         AVG: avg

//     }
//     stats.push(playerStats);
// }
},{}]},{},[1]);
