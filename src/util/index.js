const domCache = {}
const cacheDom = selector => {
  return domCache[selector] || (domCache[selector] = document.querySelector(selector))
}

const scrollIntoView = el => window.innerHeight - el.offsetHeight - el.getBoundingClientRect().top > 150

export {
  cacheDom,
  scrollIntoView,
}
