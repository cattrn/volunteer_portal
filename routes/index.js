const express = require('express')
const router = express.Router()
const db = require('../database')

router.get('/', (req, res) => {
  db.any("SELECT id, firstname, lastname FROM users ORDER BY firstname ASC")
  .then((users) => {
    db.any("SELECT id, team_name FROM teams ORDER BY team_name")
    .then((teams) => {
      db.one("SELECT firstname, lastname, contact_number, email, primary_team, position, employee_status, city, TO_CHAR(commencement_date, 'DD/MM/YYYY') commencement_date, CASE WHEN active = true THEN 'Yes' ELSE 'No' END active, avatar FROM users WHERE id = 1")
    // TODO: current user
    .then((currentUser) => {
      const emailDomain = currentUser.email.split('@')[1]
      res.render('pages/index', { 
        currentUser: currentUser,
        users: users,
        teams: teams,
        emailDomain: emailDomain
      })
    })
    .catch((err) => {
      res.json(err)
    })


    })
    .catch((err) => {
      res.json(err)
    })
    
  })
  .catch((err) => {
    res.json(err)
  })
  
});

module.exports = router;
