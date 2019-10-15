'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Candies', [
      {
        name: "Skittles",
        color: "assorted",
        rating: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    {
        name: "Pocky",
        color: "Strawberry",
        rating: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    
    {
        name: "Gobstoppers",
        color: "assorted",
        rating: 6,
        createdAt: new Date(),
        updatedAt: new Date()
    },

    {
      name: "Jaw Breakers",
      color: "red",
      rating: 8,
      createdAt: new Date(),
      updatedAt: new Date()
  },

    {
      name: "Cry Babies",
      color: "assorted",
      rating: 7,
      createdAt: new Date(),
      updatedAt: new Date()
  }


  ], {});
},

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Candies', null, {});
  }
};