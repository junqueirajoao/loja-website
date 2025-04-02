const express = require('express');
const productCategories = express.Router();    
const mysql = require('mysql2');
const PORT = 5001;

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'loja',
  port: 3306,
  multipleStatements: true,
});

productCategories.get('/', (req, res) => {
    pool.query('select * from categories', (error, categories) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.status(200).send(categories);
      }
    });
  });

  module.exports = productCategories;