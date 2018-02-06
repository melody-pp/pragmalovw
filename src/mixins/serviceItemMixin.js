export const serviceItemMixin = {
  props: ['imgUrl', 'gifUrl', 'color', 'title', 'content'],
  data () {
    return {
      hover: false
    }
  },
  computed: {
    showUrl () {
      return this.hover ? this.gifUrl : this.imgUrl
    },
    backgroundColor () {
      return this.hover ? this.color : '#fff'
    },
    titleColor () {
      return this.hover ? '#fff' : this.color
    },
    contentColor () {
      return this.hover ? 'rgba(255,255,255,.9)' : '#a7a7a7'
    }
  },
  methods: {
    mouseenter () {
      this.hover = true
    },
    mouseleave () {
      this.hover = false
    }
  }
}
