

//Empty array to hold the harvested data in the propper for for the front-end
let stats = [];
let avgStats = [];
let multiple = 1;
var shaili = [];


function playerInformation() {
    var player = $("#SearchPlayer").val();
    NBAPlayerGif(player);
    NBAPlayerInfo(player);
};

function NBAPlayerGif(player) {
    var gifs = "http://api.giphy.com/v1/gifs/search?q=" + player + "&api_key=NOrybviPafhsVNwUf5V1x96NAM664s7W&limit=5";
    $.ajax({
        url: gifs,
        method: "GET"
    }).then(function (gifs) {
        $("#card").append("<img src=" + gifs.data[0].images.original.url + ">");
        NBAPlayerInfo(player);
    })
}

function NBAPlayerInfo(player) {
    var ballDontLie = "https://cors-anywhere.herokuapp.com/https://balldontlie.io/api/v1/players?search=" + player;
    $.ajax({
        url: ballDontLie,
        method: "GET"
    }).then(function (response) {
        $("#card").append("<div class=col id=playerName></div>");
        $("#playerName").css({'font-family': "Impact,Charcoal,sans-serif", 'font-size': "xxx-large", 'text-align': 'center', 'color' : 'white'});
        $("#playerName").text(response.data[0].first_name + " " + response.data[0].last_name);

        $("#card").append("<div class=col id=playerID></div>");
        $("#playerID").text("Player's id: " + response.data[0].id);

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
    let d = new Date();
    let currentSeason = d.getUTCFullYear();
    console.log(currentSeason);
    currentSeason = currentSeason - 1;
    var playerStats = "https://cors-anywhere.herokuapp.com/https://balldontlie.io/api/v1/stats?player_ids[]=" + playerID + "&seasons[]=" + currentSeason;
    $.ajax({
        url: playerStats,
        method: "GET"
    }).then(function (data) {
        // console.log(playerStats)
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
        $("#playeStatsseason").text("Season: " + stats[0].Season + " FG_Made: " + stats[0].FG_Made + " FG_Att: " + stats[0].FG_Att + " Three_Pts_Made: " + stats[0].Three_Pts_Made + " Three_Pts_Att: " + stats[0].Three_Pts_Att +
         " FT Made: " + stats[0].FT_Made + " FT Att: " + stats[0].FT_Att + " Off Reb: " + stats[0].Off_Reb + " Def Reb: " + stats[0].Def_Reb + " Asst: " + stats[0].Asst + " Stl: " + stats[0].Stl + " Blk: " + stats[0].Blk + " Pts: " + stats[0].Pts + " AVG: " + stats[0].AVG );


        // $("#card").append("<div class=col id=playeStatsseason></div>");
        // $("#playeStatsseason").text("Season: " + stats[0].Season);

        // $("#card").append("<div class=col id=playeStatsfgm></div>");
        // $("#playeStatsfgm").text("FG_Made: " + stats[0].FG_Made);

        // $("#card").append("<div class=col id=playeStatsfga></div>");
        // $("#playeStatsfga").text("FG_Att: " + stats[0].FG_Att);

        // $("#card").append("<div class=col id=playeStatsfg3m></div>");
        // $("#playeStatsfg3m").text("Three_Pts_Made: " + stats[0].Three_Pts_Made);

        // $("#card").append("<div class=col id=playeStatsfg3a></div>");
        // $("#playeStatsfg3a").text("Three_Pts_Att: " + stats[0].Three_Pts_Att);

        // $("#card").append("<div class=col id=playeStatsftm></div>");
        // $("#playeStatsftm").text("FT_Made: " + stats[0].FT_Made);

        // $("#card").append("<div class=col id=playeStatsfta></div>");
        // $("#playeStatsfta").text("FT_Att: " + stats[0].FT_Att);

        // $("#card").append("<div class=col id=playeStatsoreb></div>");
        // $("#playeStatsoreb").text("Off_Reb: " + stats[0].Off_Reb);

        // $("#card").append("<div class=col id=playeStatsdreb></div>");
        // $("#playeStatsdreb").text("Def_Reb: " + stats[0].Def_Reb);

        // $("#card").append("<div class=col id=playeStatsast></div>");
        // $("#playeStatsast").text("Asst: " + stats[0].Asst);

        // $("#card").append("<div class=col id=playeStatsstl></div>");
        // $("#playeStatsstl").text("Stl: " + stats[0].Stl);

        // $("#card").append("<div class=col id=playeStatsblk></div>");
        // $("#playeStatsblk").text("Blk: " + stats[0].Blk);

        // $("#card").append("<div class=col id=playeStatspts></div>");
        // $("#playeStatspts").text("Pts: " + stats[0].Pts);

        // $("#card").append("<div class=col id=playeStatsavg></div>");
        // $("#playeStatsavg").text("AVG: " + stats[0].AVG);


    })
    seasonStats(currentSeason, playerID);
    // allSeasonStats(currentSeason, playerID);
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
    currentSeason = currentSeason - 1;
    var playerStats = "https://cors-anywhere.herokuapp.com/https://www.balldontlie.io/api/v1/season_averages?season=" + currentSeason + "&player_ids[]=" + playerID;
    $.ajax({
        url: playerStats,
        method: "GET"
    }).then(function (avgData) {
        let seasonAvg = avgData;
        console.log(seasonAvg);
    //Create the JSON for every season
    let plrAvgStats = {

        Season: currentSeason,
        FG_Made_Avg: seasonAvg.data.fgm,
        FG_Att_Avg: seasonAvg.data.fga,
        Three_Pts_Made_Avg: seasonAvg.data.fg3m,
        Three_Pts_Att_Avg: seasonAvg.data.fg3a,
        FT_Made_Avg: seasonAvg.data.ftm,
        FT_Att_Avg: seasonAvg.data.fta,
        Off_Reb_Avg: seasonAvg.data.oreb,
        Def_Reb_Avg: seasonAvg.data.dreb,
        Asst_Avg: seasonAvg.data.ast,
        Stl_Avg: seasonAvg.data.stl,
        Blk_Avg: seasonAvg.data.blk,
        Pts_Avg: seasonAvg.data.pts

    }
    avgStats.push(plrAvgStats);
   
// console.log(avgStats);


    $("#card").append("<div class=col id=plyrAvgSeason></div>");
    $("#plyrAvgSeason").text(" Season: " + currentSeason + " FG Made AVG: " + seasonAvg.data[0].fgm + " FG Att AVG: " + seasonAvg.data[0].fga + " Three Pts Made AVG: " + seasonAvg.data[0].fg3m +
    " Three Pts Att AVG: " + seasonAvg.data[0].fg3a + " FT Made AVG: " + seasonAvg.data[0].ftm + " FT Att AVG: " + seasonAvg.data[0].fta + " Off Reb AVG: " + seasonAvg.data[0].oreb + " Def Reb AVG: " + seasonAvg.data[0].dreb
    + " Asst AVG: " + seasonAvg.data[0].ast + " Stl AVG: " + seasonAvg.data[0].stl + " Blk AVG: " + seasonAvg.data[0].blk + " Pts AVG: " + seasonAvg.data[0].pts);

    // $("#card").append("<div class=col id=plyrAvgSeason></div>");
    //     $("#plyrAvgSeason").text("Season: " + currentSeason);

    //     $("#card").append("<div class=col id=plyrAvgFgm></div>");
    //     $("#plyrAvgFgm").text("FG Made AVG: " + seasonAvg.data[0].fgm);

    //     $("#card").append("<div class=col id=plyrAvgFga></div>");
    //     $("#plyrAvgFga").text("FG Att AVG: " + seasonAvg.data[0].fga);

    //     $("#card").append("<div class=col id=plyrAvgFg3m></div>");
    //     $("#plyrAvgFg3m").text("Three Pts Made AVG: " + seasonAvg.data[0].fg3m);

    //     $("#card").append("<div class=col id=plyrAvgFg3a></div>");
    //     $("#plyrAvgFg3a").text("Three Pts Att AVG: " + seasonAvg.data[0].fg3a);

    //     $("#card").append("<div class=col id=plyrAvgFtm></div>");
    //     $("#plyrAvgFtm").text("FT Made AVG: " + seasonAvg.data[0].ftm);

    //     $("#card").append("<div class=col id=plyrAvgFta></div>");
    //     $("#plyrAvgFta").text("FT Att AVG: " + seasonAvg.data[0].fta);

    //     $("#card").append("<div class=col id=plyrAvgOreb></div>");
    //     $("#plyrAvgOreb").text("Off Reb AVG: " + seasonAvg.data[0].oreb);

    //     $("#card").append("<div class=col id=plyrAvgDreb></div>");
    //     $("#plyrAvgDreb").text("Def Reb AVG: " + seasonAvg.data[0].dreb);

    //     $("#card").append("<div class=col id=plyrAvgAst></div>");
    //     $("#plyrAvgAst").text("Asst AVG: " + seasonAvg.data[0].ast);

    //     $("#card").append("<div class=col id=plyrAvgStl></div>");
    //     $("#plyrAvgStl").text("Stl AVG: " + seasonAvg.data[0].stl);

    //     $("#card").append("<div class=col id=plyrAvgBlk></div>");
    //     $("#plyrAvgBlk").text("Blk AVG: " + seasonAvg.data[0].blk);

    //     $("#card").append("<div class=col id=plyrAvgPts></div>");
    //     $("#plyrAvgPts").text("Pts AVG: " + seasonAvg.data[0].pts);

        // $("#card").append("<div class=col id=playeStatsavg></div>");
        // $("#playeStatsavg").text("AVG: " + stats[0].AVG);

})
}

