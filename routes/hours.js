const express = require('express')
const router = express.Router()
const db = require('../database')


// POST request to edit logs
// TODO: move this to ajax request
router.post('/edit/:id', (req, res) => {
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