const domCache = {}
const cacheDom = selector => {
  return domCache[selector] || (domCache[selector] = document.querySelector(selector))
}

export {
  cacheDom
}
