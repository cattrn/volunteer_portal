const express = require('express')
const router = express.Router()
const db = require('../database')

router.get('/', (req, res) => {
  db.one("SELECT firstname, lastname, contact_number, email, primary_team, position, employee_status, city, TO_CHAR(commencement_date, 'DD/MM/YYYY') commencement_date, CASE WHEN active = true THEN 'Yes' ELSE 'No' END active, avatar FROM users WHERE id = 1")
  // TODO: current user
  .then((user) => {
    console.log(user)
    res.render('pages/index', { user })
  })
  .catch((err) => {
    res.json(err)
  })
});

module.exports = router;
