const express = require('express');
const pool = require('../modules/pool');
require('dotenv').config()
const axios = require('axios');
const router = express.Router();

router.get('/', (req, res) => {
  // return all categories
  const queryText = `SELECT * FROM category ORDER BY name ASC`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

router.get('/:searchTerm', (req, res) => {
  const searchText = req.params;
  axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_API_KEY}&tag=&rating=g&search=${searchText}`)
      .then(response => {
          res.send(response.data);
      }).catch( error => {
          res.sendStatus(500);
      })
});

module.exports = router;
