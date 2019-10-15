const { Router } = require('express');
const { Candy } = require('../models');


const createCandy = async (req, res) => {
    try {
      const candy = await Candy.create(req.body);
      return res.status(201).json({
        candy
      });
    } catch (err) {
      return res.status(500).json({ err: err.message });
    }
  };
  
  const getCandies = async (req, res) => {
    try {
      const candies = await Candy.findAll();
      return res.status(200).json({ candies });
    } catch (err) {
      return res.status(500).send(err.message);
    }
  };
  
  const getCandyById = async (req, res) => {
    try {
      const { id } = req.params;
      const candy = await Candy.findOne({
        where: { id: id },
      });
      if (candy) {
        return res.status(200).json({ candy });
      }
      return res.status(404).send('Candy not found');
    } catch (err) {
      return res.status(500).send(err.message);
    }
  };

  const getCandyByName = async (req, res) => {
    try {
      const { name } = req.params;
      const candy = await Candy.findOne({
        where: { name: name },
      });
      if (candy) {
        return res.status(200).json({ candy });
      }
      return res.status(404).send('Candy not found');
    } catch (err) {
      return res.status(500).send(err.message);
    }
  };
  
  const updateCandy = async (req, res) => {
    try {
      const { id } = req.params;
      const [updated] = await Candy.update(req.body, {
        where: { id: id }
      });
      if (updated) {
        const updatedCandy = await Candy.findOne({ where: { id: id } });
        return res.status(200).json({ candy: updatedCandy });
      }
      throw new Error('Candy not found');
    } catch (err) {
      return res.status(500).send(err.message);
    }
  };
  
  const deleteCandy = async (req, res) => {
    try {
      const { id } = req.params;
      const del_candy = await Candy.destroy({
        where: { id: id }
      });
      if (del_candy) {
        return res.status(204).send('Deleted');
      }
      throw new Error('Candy not found');
    } catch (err) {
      return res.status(500).send(err.message);
    }
  };

  module.exports = { 
    createCandy,
    getCandies,
    getCandyById,
    getCandyByName,
    updateCandy,
    deleteCandy
  }