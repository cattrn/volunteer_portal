// close hour logging on click, doesn't remove figures
$('.close-hour-logging').click(() => {
  $('.hour-logging').addClass('closed')
  $('.page-content').addClass('hour-logging-closed')
  $('.open-hour-logging').removeClass('hidden')
})

// reopen hour logging
$('.open-hour-logging').click(() => {
  $('.hour-logging').removeClass('closed')
  $('.page-content').removeClass('hour-logging-closed')
  $('.open-hour-logging').addClass('hidden')
})

// set input time to now
$('.set-start-time').click(() => {
  $('#start-time').val(nowToInput())
})

$('.set-end-time').click(() => {
  $('#end-time').val(nowToInput())
})