const today = new Date()
const hours = today.getHours()
const minutes = today.getMinutes()

function normalizeTime (i) {
  if(i < 10)
    i = `0${i}`

  return i
}

export default {
  hours: normalizeTime(hours),
  minutes: normalizeTime(minutes)
}