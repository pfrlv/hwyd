const today = new Date()
const dd = today.getDate()
const mm = today.getMonth()
const yy = today.getFullYear()

const monthName = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.']

export default {
  dd: dd,
  mm: mm,
  month: monthName[mm],
  yy: yy
}
