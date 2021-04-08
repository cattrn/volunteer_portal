const express = require('express')
const router = express.Router()
const db = require('../database')


// POST request to edit profile
// TODO: move this to ajax request
router.post('/', (req, res) => {
  db.none("UPDATE users SET firstname = $1, lastname = $2, contact_number = $3, email = $4, city = $5 WHERE id = 1", [req.body.firstname, req.body.lastname, req.body.contact_number, req.body.email, req.body.city]) // TODO: current user
  .then(() => {
    res.redirect('/')
  })
  .catch((err) => {
    res.send(err.message)
  })
})

module.exports = router