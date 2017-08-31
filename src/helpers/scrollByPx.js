const scrollEl = document.querySelector('.clndr-container_desktop')
let scroll = 0

window.addEventListener('wheel', (ev) => {
  if (ev.deltaY < 0) {
    //scrolling up
    scroll = document.querySelector('.clndr-container_desktop').scrollTop - 60
    document.querySelector('.clndr-container_desktop').scrollTo(0, scroll)
  } else if (ev.deltaY > 0) {
    //scrolling down
    scroll = document.querySelector('.clndr-container_desktop').scrollTop + 60
    scrollEl.scroll(0, scroll)
  }
})
