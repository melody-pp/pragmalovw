function broadcast (children, eventName, params) {
  children && children.forEach(child => {
    let context = child.context
    context && context.$emit.apply(context, [eventName].concat(params))
    broadcast(child.children, eventName, params)
  })
}

function addEventListener (el, eventName, callback, useCapture) {
  if (el.addEventListener) {
    el.addEventListener(eventName, callback, !!useCapture)
  } else {
    el.attachEvent('on' + eventName, callback)
  }
}

function noop () {}

class Fullpage {
  constructor (el, options, vnode) {
    this.assignOpts(options)
    this.el = el
    this.startY = 0
    this.direction = -1
    this.vnode = vnode
    this.opts.isMoving = false
    this.curIndex = this.opts.start
    this.parentEle = this.el.parentNode
    this.pageEles = this.el.children
    this.total = this.pageEles.length

    this.el.classList.add('fullpage-wp')
    this.parentEle.classList.add('fullpage-container')
    this.initScrollDirection()
    this.initEvent(el)

    window.setTimeout(() => {
      this.resize()

      if (this.curIndex === 0) {
        this.toggleAnimate(this.curIndex)
      } else {
        this.moveTo(this.curIndex, false)
      }
    })
  }

  resize () {
    this.width = this.opts.width || this.el.offsetWidth
    this.height = this.opts.height || this.el.offsetHeight

    for (let i = 0, len = this.pageEles.length; i < len; i++) {
      let pageEle = this.pageEles[i]

      pageEle.setAttribute('data-id', i)
      pageEle.classList.add('page')
      pageEle.style.height = this.height + 'px'
    }
  }

  setOptions (options) {
    this.assignOpts(options, this.opts)
  }

  toggleAnimate (curIndex) {
    broadcast(this.vnode.children, 'toogle.animate', curIndex)
  }

  assignOpts (opts = {}, o = Fullpage.defaultOptions) {
    this.opts = Object.assign(o, opts)
  }

  initScrollDirection () {
    this.opts.dir === 'v' || this.el.classList.add('fullpage-wp-h')
  }

  initEvent (el) {
    const _this = this

    //****************************************//
    //          deal wheel event              //
    //****************************************//
    let isBusy = false
    const interval = 400
    addEventListener(el, 'wheel', function (e) {
      if (_this.opts.isMoving) {
        return false
      }

      if (isBusy) {
        return
      }

      isBusy = true
      setTimeout(() => isBusy = false, interval)

      const dir = _this.opts.dir
      const sub = _this.direction = dir === 'v' ? e.deltaY : e.deltaX
      const der = sub > 0 ? 1 : sub < 0 ? -1 : 0
      const curIndex = der + _this.curIndex

      _this.moveTo(curIndex, true)
    })
    addEventListener(el, 'transitionend', function () {
      _this.toggleAnimate(_this.curIndex)
      _this.opts.afterChange.call(_this, _this.pageEles[_this.curIndex], _this.curIndex)
      _this.opts.isMoving = false
    })

    // resize
    addEventListener(window, 'resize', function () {
      if (el.offsetHeight !== _this.height) {
        _this.resize()
      }
    })
  }

  move (dist) {
    let xPx = 0
    let yPx = 0
    this.opts.dir === 'v' ? (yPx = dist) : (xPx = dist)

    this.el.style.cssText += `;transform: translate3d(${xPx}px, ${yPx}px, 0px);`
  }

  moveTo (curIndex, anim) {
    if (this.opts.overflow === 'scroll' && !Fullpage.iSWhetherEnds(this.pageEles[this.curIndex], this.direction)) {
      return
    }

    if (!(curIndex >= 0 && curIndex < this.total)) {
      if (this.opts.loop) {
        curIndex = this.curIndex = curIndex < 0 ? this.total - 1 : 0
      } else {
        this.curIndex = curIndex < 0 ? 0 : this.total - 1
        return
      }
    }
    //beforeChange return false cancel slide
    const flag = this.opts.beforeChange.call(this, this.pageEles[this.curIndex], this.curIndex, curIndex)
    if (flag === false) {
      return false
    }

    const dist = this.opts.dir === 'v' ? curIndex * -this.height : curIndex * -this.width
    this.curIndex = curIndex
    this.opts.isMoving = true

    if (anim) {
      this.el.classList.add(this.opts.animateClass)
    } else {
      this.el.classList.remove(this.opts.animateClass)
    }

    this.move(dist)
  }

  movePrev () {
    this.moveTo(this.curIndex - 1, true)
  }

  moveNext () {
    this.moveTo(this.curIndex + 1, true)
  }

  update () {
    this.pageEles = this.el.children
    this.total = this.pageEles.length
    this.resize()
  }

  destroy () {}

  static iSWhetherEnds (target, direction) {
    if (direction > 0) {
      return target.scrollTop <= 0
    } else {
      const height = target.getBoundingClientRect().height

      //@TODO wechat devtool v0.7.0 scrollTop 1px less than actual
      return target.scrollTop + height > target.scrollHeight - 1
    }
  }

  static defaultOptions = {
    start: 0,
    duration: 500,
    loop: false,
    dir: 'v',
    der: 0.1,
    isMoving: false,
    /**
     * beforeChange
     * @params element      {Element} current element
     * @params currentIndex {Number}  current number
     * @params next         {Number}  next number
     * @type {Boolean}
     */
    beforeChange: noop,
    /**
     * afterChange
     * @params
     * @params element      {Element} current element
     * @params currentIndex {Number}  current number
     * @type {Boolean}
     */
    afterChange: noop,
    animateClass: 'anim',
    /*
     *    There are scroll bars in the page,
     *    `auto` Detect any element in page
     *    `scroll` Only detect current page
     *    `hidden` ignores the scroll bar in the page
     *
     *   @default hidden
     */
    overflow: 'hidden'
  }
}

class Animate {
  constructor (el, binding, vnode) {
    const vm = vnode.context
    const animate = binding.value

    el.style.opacity = '0'
    vm.$on('toogle.animate', curIndex => {
      const curPage = +el.parentNode.getAttribute('data-id')

      if (curIndex === curPage) {
        Animate.addAnimated(el, animate)
      } else {
        el.style.opacity = '0'
        Animate.removeAnimated(el, animate)
      }
    })
  }

  static addAnimated (el, animate) {
    const delay = animate.delay || 0
    el.classList.add('animated')

    window.setTimeout(() => {
      el.style.opacity = '1'
      el.classList.add(animate.value)
    }, delay)
  }

  static removeAnimated (el, animate) {
    const cls = el.getAttribute('class')
    cls && cls.includes('animated') && el.classList.remove(animate.value)
  }
}

export default {
  install: function install (Vue, options) {
    Vue.directive('fullpage', {
      inserted: function inserted (el, binding, vnode) {
        if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
          return
        }

        const opts = binding.value || {}
        el.$fullpage = new Fullpage(el, opts, vnode)
        el.$fullpage.$update = () => Vue.nextTick(() => el.$fullpage.update())
      },

      componentUpdated: function componentUpdated (el, binding, vnode) {
        const opts = binding.value || {}
        const that = el.$fullpage

        that.setOptions(opts)
      }
    })

    Vue.directive('animate', {
      inserted: function inserted (el, binding, vnode) {
        el.$animate = new Animate(el, binding || {}, vnode)
      }
    })
  }
}
