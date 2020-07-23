let teamLogo ='';

let logoSelect = (playerTeam) => {

    switch (playerTeam) {
        case 'Atlanta Hawks':
            teamLogo = "https://content.sportslogos.net/logos/6/220/full/9168_atlanta_hawks-primary-2016.png";
            break;
        case 'Boston Celtics':
            teamLogo = "https://content.sportslogos.net/logos/6/213/full/slhg02hbef3j1ov4lsnwyol5o.png";
            break;
        case 'Brooklyn Nets':
            teamLogo = "https://content.sportslogos.net/logos/6/3786/full/137_brooklyn-nets-primary-2013.png";
            break;
        case 'Charlotte Hornets':
            teamLogo = "https://content.sportslogos.net/logos/6/5120/full/1926_charlotte__hornets_-primary-2015.png";
            break;
        case 'Chicago Bulls':
            teamLogo = "https://content.sportslogos.net/logos/6/221/full/hj3gmh82w9hffmeh3fjm5h874.png";
            break;
        case 'Cleveland Cavaliers':
            teamLogo = "https://content.sportslogos.net/logos/6/222/full/6921_cleveland_cavaliers-primary-2018.png";
            break;
        case 'Dallas Mavericks':
            teamLogo = "https://content.sportslogos.net/logos/6/228/full/3463_dallas_mavericks-primary-2018.png";
            break;
        case 'Denver Nuggets':
            teamLogo = "https://content.sportslogos.net/logos/6/229/full/8926_denver_nuggets-primary-2019.png";
            break;
        case 'Detroit Pistons':
            teamLogo = "https://content.sportslogos.net/logos/6/223/full/2164_detroit_pistons-primary-2018.png";
            break;
        case 'Golden State Warriors':
            teamLogo = "https://content.sportslogos.net/logos/6/235/full/3152_golden_state_warriors-primary-2020.png";
            break;
        case 'Houston Rockets':
            teamLogo = "https://content.sportslogos.net/logos/6/230/full/6830_houston_rockets-primary-2020.png";
            break;
        case 'Indiana Pacers':
            teamLogo = "https://content.sportslogos.net/logos/6/224/full/4812_indiana_pacers-primary-2018.png";
            break;
        case 'Los Angeles Clippers':
            teamLogo = "https://content.sportslogos.net/logos/6/236/full/5462_los_angeles_clippers-primary-2016.png";
            break;
        case 'Los Angeles Lakers':
            teamLogo = "https://content.sportslogos.net/logos/6/237/full/uig7aiht8jnpl1szbi57zzlsh.png";
            break;
        case 'Memphis Grizzlies':
            teamLogo = "https://content.sportslogos.net/logos/6/231/full/4373_memphis_grizzlies-primary-2019.png";
            break;
        case 'Miami Heat':
            teamLogo = "https://content.sportslogos.net/logos/6/214/full/burm5gh2wvjti3xhei5h16k8e.gif";
            break;
        case 'Milwaukee Bucks':
            teamLogo = "https://content.sportslogos.net/logos/6/225/full/8275_milwaukee_bucks-primary-2016.png";
            break;
        case 'Minnesota Timberwolves':
            teamLogo = "https://content.sportslogos.net/logos/6/232/full/9669_minnesota_timberwolves-primary-2018.png";
            break;
        case 'New Orleans Pelicans':
            teamLogo = "https://content.sportslogos.net/logos/6/4962/full/2681_new_orleans_pelicans-primary-2014.png";
            break;
        case 'New York Knicks':
            teamLogo = "https://content.sportslogos.net/logos/6/216/full/2nn48xofg0hms8k326cqdmuis.gif";
            break;
        case 'Oklahoma City Thunder':
            teamLogo = "https://content.sportslogos.net/logos/6/2687/full/khmovcnezy06c3nm05ccn0oj2.png";
            break;
        case 'Orlando Magic':
            teamLogo = "https://content.sportslogos.net/logos/6/217/full/wd9ic7qafgfb0yxs7tem7n5g4.gif";
            break;
        case 'Philadelphia 76ers':
            teamLogo = "https://content.sportslogos.net/logos/6/218/full/7034_philadelphia_76ers-primary-2016.png";
            break;
        case 'Phoenix Suns':
            teamLogo = "https://content.sportslogos.net/logos/6/238/full/4370_phoenix_suns-primary-2014.png";
            break;
        case 'Portland Trail Blazers':
            teamLogo = "https://content.sportslogos.net/logos/6/239/full/9725_portland_trail_blazers-primary-2018.png";
            break;
        case 'Sacramento Kings':
            teamLogo = "https://content.sportslogos.net/logos/6/240/full/4043_sacramento_kings-primary-2017.png";
            break;
        case 'San Antonio Spurs':
            teamLogo = "https://content.sportslogos.net/logos/6/233/full/2547_san_antonio_spurs-primary-2018.png";
            break;
        case 'Toronto Raptors':
            teamLogo = "https://content.sportslogos.net/logos/6/227/full/4578_toronto_raptors-primary-2016.png";
            break;
        case 'Utah Jazz':
            teamLogo = "https://content.sportslogos.net/logos/6/234/full/6749_utah_jazz-primary-2017.png";
            break;
        case 'Washington Wizards':
            teamLogo = "https://content.sportslogos.net/logos/6/219/full/5671_washington_wizards-primary-2016.png";
            break;
            default:
                break;
    }
    return teamLogo;
}

export { logoSelect }