var moment = require('moment');
var now = moment(); //To let the code know when the user created the card request to time the season info correctly

let stats = []; //Empty array to hold the harvested data in the propper for for the front-end

//Dummy data until I can include the API call data or implement the code in another file that will combine it with the API data
let season = playerStats;

let seasonStats = () => {
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
    let playerStats = {
        2019: [
            {
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
        ]
    }
    let JSONplayerStats = JSON.stringify(playerStats)
    stats.push(JSONplayerStats);
    // console.log(stats)
}
// Function to avoid repetitiveness in main function
// let statAdd = (key, value) => {
//     let stat = 0;
// for (const allStats of season.data) {
// }
seasonStats();

module.exports = season_stats;