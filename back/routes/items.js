const express = require('express')
const db = require('../db')
const router = express.Router()

router.get('/', (req, res) => {
  const query = 'SELECT * FROM items'
  db.query(query, (err, items) => {
    if (err) {
      console.error(err)
      return res.status(500).json({error: 'incorrect query'})
    }
    res.json(items)
  })
})

router.post('/', (req, res) => {
  const {name, picture} = req.body
  const query = 'INSERT INTO items (name, picture) VALUES (?, ?)'
  db.query(query, [name, picture], (err, result) => {
    if (err) {
      console.error(err)
      return res.status(500).json({error: 'incorrect query'})
    }
    res.json(result)
  })
})

module.exports = router
