const express = require('express')
const router = express.Router()
const db = require('../database')

// all user names
router.get('/users', (req, res) => {
  db.any("SELECT id, firstname, lastname FROM users ORDER BY firstname ASC")
  .then((users) => {
    res.json(users)
  })
  .catch((err) => {
    res.json(err)
  })
})

// all user directory
router.get('/directory', (req, res) => {
  db.any("SELECT id, firstname, lastname, email, primary_team, position, city, avatar FROM users ORDER BY primary_team ASC, firstname ASC")
  .then((users) => {
    res.json(users)
  })
  .catch((err) => {
    res.json(err)
  })
})

// current logged in user
router.get('/current-user', (req, res) => {
  db.one("SELECT firstname, lastname, contact_number, email, primary_team, position, employee_status, city, TO_CHAR(commencement_date, 'DD/MM/YYYY') commencement_date, CASE WHEN active = true THEN 'Yes' ELSE 'No' END active, avatar FROM users WHERE id = 1") // TODO: current user
  .then((user) => {
    res.json(user)
  })
  .catch((err) => {
    res.json(err.message)
  })
})

// logged in user hours
router.get('/my-hours', (req, res) => {
  db.any("SELECT id, owned_by, team, TO_CHAR(start_time, 'YYYY-MM-DD HH24:MM') start_time, TO_CHAR(end_time, 'YYYY-MM-DD HH24:MM') end_time, activity, TO_CHAR(AGE(end_time, start_time), 'HH24:MM') duration FROM volunteer_logs WHERE owned_by = 1 ORDER BY start_time DESC") //TODO: current user
  .then((rows) => {
    res.json(rows)
  })
  .catch((err) => {
    res.json(err.message)
  })
})

// all hours
router.get('/all-hours/:id', (req, res) => {
  const resultsPerPage = 20

  db.any("SELECT id FROM volunteer_logs")
  .then((list) => {
    const pages = Math.ceil(list.length / resultsPerPage)

    db.any("SELECT volunteer_logs.id AS id, owned_by, team, TO_CHAR(start_time, 'YYYY-MM-DD HH24:MM') start_time, TO_CHAR(end_time, 'YYYY-MM-DD HH24:MM') end_time, activity, TO_CHAR(AGE(end_time, start_time), 'HH24:MM') duration, firstname, lastname FROM volunteer_logs LEFT JOIN users ON owned_by = users.id ORDER BY start_time DESC LIMIT $1 OFFSET ($1 * $2)", [resultsPerPage, req.params.id - 1])
    .then((rows) => {
      res.json({
        rows: rows,
        pages: pages
      })
    })
    .catch((err) => {
      res.json(err.message)
    })
  })
  .catch((err) => {
    res.json(err.message)
  })
})

// GET request for editing individual logs
router.get('/log/edit/:id', (req, res) => {
  db.any("SELECT id, team_name FROM teams ORDER BY team_name ASC")
  .then((teams) => {
    db.one(`SELECT id, owned_by, team, TO_CHAR(start_time, 'YYYY-MM-DD"T"HH24:MM') start_time, TO_CHAR(end_time, 'YYYY-MM-DD"T"HH24:MM') end_time, activity FROM volunteer_logs WHERE id = $1 AND owned_by = 1`, [req.params.id]) //TODO: current user
    .then((log) => {
      res.json({ teams, log })
    })
    .catch((err) => {
      res.json(err.message)
    })
  })
  .catch((err) => {
    res.json(err.message)
  })
})


module.exports = router