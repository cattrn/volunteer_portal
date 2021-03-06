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

// all hours
const loadAllHours = (pageNumber) => {
  $.getJSON(`/api/all-hours/${pageNumber}`)
  .then(({ rows, pages }) => {
    const template = Handlebars.templates['allHours.hbs']
    $('.page-content').html(
      template({
        rows: rows,
        pages: pages
      })
    )
    displayPagination({rows, pages}, pageNumber)
  })
  .catch((err) => {
    $('.page-content').html(err.message)
  })
}

// members
const loadMembers = () => {
  $.getJSON("/api/directory")
  .then((users) => {
    const template = Handlebars.templates['members.hbs']
    $('.page-content').html(
      template({
        users: users
      })
    )
  })
  .catch((err) => {
    $('.page-content').html(err.message)
  })
}

// resources
const loadResources = () => {
  $.getJSON("/api/current-user")
  .then((currentUser) => {
    const template = Handlebars.templates['resources.hbs']
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

// edit profile
const loadEditProfile = () => {
  $.getJSON("/api/current-user")
  .then((currentUser) => {
    const template = Handlebars.templates['editProfile.hbs']
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