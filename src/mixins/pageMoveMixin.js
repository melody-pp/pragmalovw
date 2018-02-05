import { TimelineLite } from 'gsap'

export const pageMoveMixin = {
  props: ['moveIn'],
  methods: {
    pageMoveIn () {
      /*if (this.pageMoveInTimeline) {
        this.pageMoveInTimeline.restart()
      }
      this.pageMoveInTimeline = new TimelineLite()
      this.pageMoveInTimeline
        .to(this.$refs.page, 1, {scale: .6, autoAlpha: .6})
        .to(this.$refs.page, .3, {scale: 1, autoAlpha: 1})*/
    },
    pageMoveOut () {
      /*if (this.pageMoveOutTimeline) {
        this.pageMoveOutTimeline.restart()
      }

      this.pageMoveOutTimeline = new TimelineLite()
      this.pageMoveOutTimeline
        .to(this.$refs.page, .3, {scale: .8, autoAlpha: .8})
        .to(this.$refs.page, .5, {scale: .2, autoAlpha: .2})*/
    }
  },
  watch: {
    moveIn (newVal) {
      newVal
        ? (this.pageMoveIn(), this.animate())
        : this.pageMoveOut()
    }
  }
}
