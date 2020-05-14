let teamLogo ='';

let logoSelect = (playerTeam) => {
    console.log(playerTeam);
    switch (playerTeam) {
        case 'Atlanta Hawks':
            teamLogo = "hawks.png";
            break;
        case 'Boston Celtics':
            teamLogo = "";
            break;
        case 'Brooklyn Nets':
            teamLogo = "";
            break;
        case 'Charlotte Hornets':
            teamLogo = "";
            break;
        case 'Chicago Bulls':
            teamLogo = "";
            break;
        case 'Cleveland Cavaliers':
            teamLogo = "";
            break;
        case 'Dallas Mavericks':
            teamLogo = "";
            break;
        case 'Denver Nuggets':
            teamLogo = "";
            break;
        case 'Detroit Pistons':
            teamLogo = "";
            break;
        case 'Golden State Warriors':
            teamLogo = "";
            break;
        case 'Houston Rockets':
            teamLogo = "";
            break;
        case 'Indiana Pacers':
            teamLogo = "";
            break;
        case 'Los Angeles Clippers':
            teamLogo = "";
            break;
        case 'Los Angeles Lakers':
            teamLogo = "https://content.sportslogos.net/logos/6/237/full/uig7aiht8jnpl1szbi57zzlsh.png";
            break;
        case 'Memphis Grizzlies':
            teamLogo = "";
            break;
        case 'Miami Heat':
            teamLogo = "";
            break;
        case 'Milwaukee Bucks':
            teamLogo = "";
            break;
        case 'Minnesota Timberwolves':
            teamLogo = "";
            break;
        case 'New Orleans Pelicans':
            teamLogo = "";
            break;
        case 'New York Knicks':
            teamLogo = "";
            break;
        case 'Oklahoma City Thunder':
            teamLogo = "";
            break;
        case 'Orlando Magic':
            teamLogo = "";
            break;
        case 'Philadelphia 76ers':
            teamLogo = "";
            break;
        case 'Phoenix Suns':
            teamLogo = "";
            break;
        case 'Portland Trail Blazers':
            teamLogo = "";
            break;
        case 'Sacramento Kings':
            teamLogo = "";
            break;
        case 'San Antonio Spurs':
            teamLogo = "";
            break;
        case 'Toronto Raptors':
            teamLogo = "";
            break;
        case 'Utah Jazz':
            teamLogo = "";
            break;
        case 'Washington Wizards':
            teamLogo = "";
            break;
            default:
                break;
    }
    console.log(teamLogo)
    return teamLogo;
}

export { logoSelect }