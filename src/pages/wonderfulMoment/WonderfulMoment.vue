<template>
  <div>
    <white-logo/>
    <img class="w100" :src="unit.image">
    <p class="secondPageParagraphOnlyTitle wonderfulMomentColor margin152">{{unit.title}}</p>
    <div class="casesBox clearfix">
      <case-item v-for="item of goodtime" :key="item.id" width="50%" :id="item.id"
                 :imgUrl="item.ej_content" :title="item.ej_title" :content="item.ej_description[0]"/>
    </div>
  </div>
</template>
<script>
  import CaseItem from '../public/CaseItem'
  import WhiteLogo from '../public/WhiteLogo'

  export default {
    components: {CaseItem, WhiteLogo},
    computed: {
      unit () {
        return this.$store.getters.getUnit('greate')
      },
      goodtime () {
        return this.$store.state.goodtime
      }
    }
  }
</script>
<style scoped lang="scss">
  .margin152 {
    margin: 152px 0;
  }

  .casesBox {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
