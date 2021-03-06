![Kid and candies](https://raw.git.generalassemb.ly/WDI-Epiphany/node-express-routes-lesson/master/lab/images/candy-kids450x563.jpg)

### Hello, Developer!

You now know how to use CRUD with Express and Sequelize so it's time to do it yourself.

A kid has come to you with an idea for an API to keep track of his candies. You love candies! So, you accept his proposal.
Build your own application from scratch that includes a database, Sequelize, and Express.

1. Inside of this run `npm init -y` and `npx sequelize-cli init`

1. Add a `.gitignore` file to your folder and paste the following inside `node_modules/`

1. Build out `models` and `seed` files using the [Sequelize CLI](https://sequelize.org/master/manual/migrations.html). Your `seed` file should have 5 candies in it.
     * Your database should be called candies_db
     * Your database should have one model called `Candy`
     * Your table should have 3 columns: 
        1) name - type should be string 
        2) color - type should be string 
        3) rating - should be an integer

1. Build out your `server.js` file with your express server
2. Add Router and write your routes in a separate file from `server.js`.


Add the following routes to your `routes` file:

* `/` - Root route, would welcome user and introduce the app
* `/candies` - a **get** route renders a `json` object containing information about ALL candies
* `/candies` - a **post** route that adds a new candy to the database
* `/candies/:id` - a **get** route that renders information about the candy with requested id.
* `/candies/:name` - a **get** route that renders information about the candy with requested name.
* `/candies/:id` - a **put** (update) route that updates the candy with the requested id
* `/candies/:id` - a **delete** route that deletes the requested candy from the database

Note: You should test these endpoints in Postman not the browser because by default you can only do a get request in the browser.

This homework is due **AT 11PM** 
