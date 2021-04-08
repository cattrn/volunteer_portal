// dashboad
const loadDashboard = () => {
  $.getJSON("/api/current-user")
  .then((currentUser) => {
    const template = Handlebars.templates['index.hbs']
    $('.page-content').html(
      template({
        currentUser: currentUser
      })
    )
  })
  .catch((err) => {
    $('.page-content').html(err.message)
  })
}

// my hours
const loadMyHours = () => {
  $.getJSON("/api/my-hours")
  .then((rows) => {
    const template = Handlebars.templates['myHours.hbs']
    $('.page-content').html(
      template({
        rows: rows
      })
    )
  })
  .catch((err) => {
    $('.page-content').html(err.message)
  })
}

// edit log
const loadEditLog = (logid) => {
  $.getJSON(`/api/log/edit/${logid}`)
  .then((data) => {
    const template = Handlebars.templates['editLog.hbs']
    $('.page-content').html(
      template({
        teams: data.teams,
        log: data.log
      })
    )
  })
  .catch((err) => {
    $('.page-content').html(err.message)
  })
}