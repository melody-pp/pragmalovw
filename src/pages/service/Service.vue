<template>
  <div>
    <white-logo/>
    <img class="w100" :src="unit.image">
    <p class="secondPageParagraphOnlyTitle serviceColor margin136">{{unit.title}}</p>
    <div class="serviceList">
      <div class="verticalLine"></div>
      <service-item v-for="(item, index) of items" v-bind="item" :key="index"/>
    </div>
    <bottom-service v-bind="bottomItem"/>
    <p class="secondPageParagraphOnlyTitle" style="color:#878a8a;margin: 90px 0;">更多。</p>
    <div class="similarCases">
      <case-item v-for="item of similarCases" v-bind="item" :key="item.id"/>
    </div>
  </div>
</template>

<script>
  import ServiceItem from './ServiceItem'
  import BottomService from './BottomService'
  import WhiteLogo from '../public/WhiteLogo'
  import { similarCaseMixin } from '../../mixins'

  export default {
    mixins: [similarCaseMixin],
    components: {ServiceItem, BottomService, WhiteLogo},
    data () {
      return {
        similarNum: 3,
        tjImgKey: 'tj_thumb',
        items: [
          {
            imgUrl: require('../../assets/service/planning.png'),
            gifUrl: require('../../assets/service/planning.gif'),
            color: '#e86a1d',
          },
          {
            imgUrl: require('../../assets/service/Custom.png'),
            gifUrl: require('../../assets/service/Custom.gif'),
            color: '#ec8f9d',
          },
          {
            imgUrl: require('../../assets/service/overseas.png'),
            gifUrl: require('../../assets/service/overseas.gif'),
            color: '#878a89',
          },
          {
            imgUrl: require('../../assets/service/celebrate.png'),
            gifUrl: require('../../assets/service/celebrate.gif'),
            color: '#725ca0',
          },
          {
            imgUrl: require('../../assets/service/party.png'),
            gifUrl: require('../../assets/service/party.gif'),
            color: '#e66a1d',
          },
          {
            imgUrl: require('../../assets/service/affection.png'),
            gifUrl: require('../../assets/service/affection.gif'),
            color: '#ed909e',
          },
        ],
        bottomItem: {
          imgUrl: require('../../assets/service/photography.png'),
          gifUrl: require('../../assets/service/photography.gif'),
          color: '#735ca3',
        }
      }
    },
    created () {
      this.axios.get('/api/get_category').then(res => {
        res.data.forEach((item, i) => {
          const _item = this.items[i] || this.bottomItem

          _item.title = item.catname
          _item.content = item.catcontent.split('\n')
        })
        this.$forceUpdate()
      })
    },
    computed: {
      unit () {
        return this.$store.getters.getUnit('service')
      },
    },
  }
</script>

<style scoped lang="scss">
  .serviceList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    position: relative;
    border-top: 1px solid #d4d4d4;
    border-bottom: 1px solid #d4d4d4;
  }

  .verticalLine {
    width: 1px;
    height: 100%;
    background-color: #d4d4d4;
    position: absolute;
    padding: 0;
  }
</style>
