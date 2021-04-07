// convert current time/date to datetime-local format ("yyyy-MM-ddThh:mm")
function nowToInput() {
  const date = new Date()
  const year = date.getFullYear().toString()
  const month = date.getMonth().toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  const time = date.toString().slice(16, 21)
  return year + '-' + month + '-' + day + 'T' + time
}
