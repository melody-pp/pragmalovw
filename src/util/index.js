const domCache = {}
const cacheDom = selector => {
  return domCache[selector] || (domCache[selector] = document.querySelector(selector))
}

const scrollIntoView = el => window.innerHeight - el.offsetHeight - el.getBoundingClientRect().top > 100

const sample = items => items[Math.floor(Math.random() * items.length)]

const keepSpace = str => str.replace(/ /g, '&nbsp;')

export {
  cacheDom,
  scrollIntoView,
  sample,
  keepSpace,
}
