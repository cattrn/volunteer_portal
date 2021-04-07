const express = require('express')
const router = express.Router()
const db = require('../database')

router.get('/my-hours', (req, res) => {
  db.any("SELECT id, owned_by, team, TO_CHAR(start_time, 'YYYY-MM-DD HH24:MM') start_time, TO_CHAR(end_time, 'YYYY-MM-DD HH24:MM') end_time, activity, TO_CHAR(AGE(end_time, start_time), 'HH24:MM') duration FROM volunteer_logs WHERE owned_by = 1 ORDER BY start_time DESC") //TODO: current user
  .then((rows) => {
    res.render('pages/myHours', {
      rows: rows
    })
  })
  .catch((err) => {
    res.send(err.message)
  })
})

// GET request for editing individual logs
router.get('/edit/:id', (req, res) => {
  db.any("SELECT id, team_name FROM teams ORDER BY team_name ASC")
  .then((teams) => {
    db.one(`SELECT id, owned_by, team, TO_CHAR(start_time, 'YYYY-MM-DD"T"HH24:MM') start_time, TO_CHAR(end_time, 'YYYY-MM-DD"T"HH24:MM') end_time, activity FROM volunteer_logs WHERE id = $1 AND owned_by = 1`, [req.params.id]) //TODO: current user
    .then((log) => {
      console.log(log)
      res.render('pages/editLog', {
        teams: teams,
        log: log
      })
    })
    .catch((err) => {
      res.send(err.message)
    })
  })
  .catch((err) => {
    res.send(err.message)
  })
})

// POST request to edit logs
router.post('/edit/:id', (req, res) => {
  console.log(req.params.id)
  console.log(req.body)
  db.none("UPDATE volunteer_logs SET team = $1, start_time = $2, end_time = $3, activity = $4 WHERE id = $5 AND owned_by = 1", [req.body.team, req.body.start_time, req.body.end_time, req.body.activity, req.params.id]) // TODO: current user
  .then(() => {
    res.redirect('/hours/my-hours')
  })
  .catch((err) => {
    res.send(err.message)
  })
})

// submit hours
router.post('/add', (req, res) => {
  db.none("INSERT INTO volunteer_logs(created_by, owned_by, team, start_time, end_time, activity) VALUES ($1, $2, $3, $4, $5, $6)", [1, req.body.id, req.body.team, req.body.start_time, req.body.end_time, req.body.activity ]) // TODO: current user
  .then(() => {
    res.redirect('/')
  })
  .catch((err) => {
    res.json(err)
  })
})

module.exports = router