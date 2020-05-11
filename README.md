<h1 align="center">PostUp Cards</h1>
<p align="center">Virtual Card Collecting Fun!</p>



# Pitch
--------------------------------------
PostUp Cards lets the user build their own deck of virtual NBA player cards that they can access online.

# User Story
--------------------------------------
As a kid, I used to love collecting sports cards. You could look at your favourite players stats quickly and have that info close at hand. However, a card collection takes space and is hard to keep with you at all times. What if you could create a digital form of sports cards made to your specific request?

# Overview
---------------------------------------

This application uses [balldontlie API](https://www.balldontlie.io/#introduction) to retrieve the selected player's season stats and [giphy API](https://developers.giphy.com/docs/api/) to post a GIF of that player on the virtual card. The user's cards are then saved in their deck via an SQL database.

# User Directions
-----------------------------------------
* The user enters the desired player's name in the search box and clicks on search.
* The user then decides whether to add the card to their "Deck" by clicking on "Save Card" or clicking on "Clear" to clear card field and start a new search.
* The user clicks on "View/Refresh Deck" in order to view their "Deck" and to reload the "Deck" when a new card is added.

# Built With
---------------------------------------
* HTML5, CSS3, JavaScript
* Foundation.css
* Handlebars
* Node
* Express
* MySql
* Sequelize

# APIs used
----------------------------------------
* Ball Don't Lie
* Giphy

# Preview
-----------------------------------------

![PostUp Cards App](./Public/assets/images/PostUpCards.gif)


# Deployment

Heroku
https://postup-cards.herokuapp.com/

GitHub
https://github.com/JoshFrechette/PostUp-Cards.git

# Team

* Shaili Shah
    - Role: API calls
    - Portfolio:

* Gavin Wimalachandran 
    - Role: Front End - Handlebars.js, 
    - Portfolio: https://gavin-wimalachandran.netlify.com

* Khalil Mouna
    - Role: Deployment and Testing, 
    - Portfolio:

* Josh Fréchette
    - Role: Project Manager, Sequelize and Database functions
    - Portfolio: https://joshfdesign-react-portfolio.herokuapp.com/
