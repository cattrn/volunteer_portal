const express = require('express')
const router = express.Router()
const db = require('../database')

router.get('/users', (req, res) => {
  db.any("SELECT id, firstname, lastname FROM users ORDER BY firstname ASC")
  .then((users) => {
    res.json(users)
  })
  .catch((err) => {
    res.json(err)
  })
})

router.get('/current-user', (req, res) => {
  db.one("SELECT id, firstname, lastname, contact_number, email, primary_team, position, employee_status, city, commencement_date, active, return date, last_login, user_role, avatar FROM users WHERE id = 1") // TODO: current user
  .then((user) => {
    res.json(user)
  })
  .catch((err) => {
    res.json(err)
  })
})


module.exports = router