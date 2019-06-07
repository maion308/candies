![Kid and candies](https://raw.git.generalassemb.ly/WDI-Epiphany/node-express-routes-lesson/master/lab/images/candy-kids450x563.jpg)

### Hello, Developer!

You now know how to use CRUD with Express and Sequelize so it's time to do it yourself.

A kid has come to you with an idea for an API to keep track of his candies. You love candies! So, you accept his proposal.
Build your own application from scratch that includes a database, Sequelize, and Express.

1. Start by creating a folder in this repo folder called `candyHw`

1. Inside of `candyHw` run `npm init -y`

1. Build out `models.js`, `resetDb.js`, and `seed.js` files. - Your `seed.js` file should have 5 candies in it.

1. Build out your `server.js` file with your express server


Add the following routes to your `server.js`:

* `/` - Root route, would welcome user and introduce the app
* `/candies` - a **get** route renders a `json` object containing information about ALL candies
* `/candies` - a **post** route that adds a new candy to the database
* `/candies/:id` - a **get** route that renders information about the candy with requested id.
* `/candies/:id` - a **put** (update) route that updates the candy with the requested id
* `/candies/:id` - a **delete** route that deletes the requested candy from the database

Note: You should test these endpoints in Postman not the browser because by default you can only do a get request in the browser.
We need to connect a front end and forms to access create, put, or delete methods.


This homework is due **SUNDAY AT 11PM** 
