import { sample } from '../util'
import CaseItem from '../pages/public/CaseItem'

export const similarCaseMixin = {
  components: {CaseItem},
  computed: {
    similarCases () {
      const items = this.$store.state.goodtime
      const result = []
      while (result.length < Math.min(this.similarNum, items.length)) {
        const item = sample(items)
        item.id === this.detailId || result.some(exItem => exItem.id === item.id) || result.push(item)
      }

      return this.cleanCase(result)
    }
  },
  methods: {
    cleanCase (items) {
      return items.map(item => ({
        id: item.id,
        imgUrl: item[this.tjImgKey],
        title: item.ej_title,
        content: item.ej_description
      }))
    }
  },
  watch: {
    $route: {
      deep: true,
      handler () {
        this.$forceUpdate()
      }
    }
  }
}
