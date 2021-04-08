// on page load
window.addEventListener('DOMContentLoaded', () => {
  loadDashboard()
})

// nav styling
$('nav > div.nav-link').click(function() {
  $(this).addClass('active')
  $(this).siblings().removeClass('active')
})

// dashboard
$('.dashboard-link').click(() => {
  loadDashboard()
})

// my hours
$('.hours-link').click(() => {
  loadMyHours()
})

// edit hours
$('.page-content').on('click', '.edit-log', function() {
  const logId = $(this).attr('class').slice(14)
  loadEditLog(logId)
})

// all hours
$('.allhours-link').click(() => {
  loadAllHours(1)
})

// members
$('.members-link').click(() => {
  loadMembers()
})

// members
$('.resources-link').click(() => {
  loadResources()
})

// edit profile
$('body').on('click', '.edit-profile-link', function() {
  loadEditProfile()
})