<template>
  <div>
    <span class="iconsTogether whiteLogo"></span>
    <img class="w100" :src="unit.image">
    <p class="secondPageParagraphOnlyTitle serviceColor margin136">{{unit.title}}</p>
    <div class="serviceList">
      <div class="verticalLine"></div>
      <service-item v-for="(item, index) of items" v-bind="item" :key="index"/>
    </div>
    <bottom-service v-bind="bottomItem"/>
    <p class="secondPageParagraphOnlyTitle" style="color:#878a8a;margin: 90px 0;">更多。</p>
    <div class="similarCases">
      <div>
        <img src="../../assets/service/pic_1.jpg">
      </div>
      <div>
        <img src="../../assets/service/pic_2.jpg">
      </div>
      <div>
        <img src="../../assets/service/pic_3.jpg">
      </div>
    </div>
  </div>
</template>

<script>
  import ServiceItem from './ServiceItem'
  import BottomService from './BottomService'

  export default {
    components: {ServiceItem, BottomService},
    data () {
      return {
        items: [
          {
            imgUrl: require('../../assets/service/planning.png'),
            gifUrl: require('../../assets/service/planning.gif'),
            color: '#e86a1d',
            title: '求婚策划',
            content: [
              '有求婚策划人这个角色出现，就是为了令整个求婚更加特别，',
              '资金分配更加适宜，预算使用得更加合适灵活。策划人这个角色就是让你们借助他们的经验，',
              '为你这个一生只有一次的盛典，安排得完完满满！'
            ]
          },
          {
            imgUrl: require('../../assets/service/Custom.png'),
            gifUrl: require('../../assets/service/Custom.gif'),
            color: '#ec8f9d',
            title: '定制婚礼',
            content: [
              '替新人度身订做一个婚礼计划，从复古到当代，从亚洲到欧洲，',
              '包括婚礼程序安排、各大小开支、场地布置等等...',
              '婚礼策划统筹师亦会全程跟进婚礼安排进度，令婚礼尽善尽美!'
            ]
          },
          {
            imgUrl: require('../../assets/service/overseas.png'),
            gifUrl: require('../../assets/service/overseas.gif'),
            color: '#878a89',
            title: '海外婚礼',
            content: ['世界有大，幸福就有多远。']
          },
          {
            imgUrl: require('../../assets/service/celebrate.png'),
            gifUrl: require('../../assets/service/celebrate.gif'),
            color: '#725ca0',
            title: '庆祝活动',
            content: [
              '除了生活，我们还需要庆祝一下生活，遇到节日，遇到赞美，遇到活动，',
              '仪式感是人们表达内心情感最直接的方式，让这一天和其他一天不同，让这一时刻和某一时刻不同，',
              '仪式感无处不在，这些仪式感就让我们来帮你们完成吧！'
            ]
          },
          {
            imgUrl: require('../../assets/service/party.png'),
            gifUrl: require('../../assets/service/party.gif'),
            color: '#e66a1d',
            title: '聚会活动',
            content: [
              '活络的气氛，轻松的集体活动，聚会的场景在不断更迭，',
              '但从未发生变化的是，聚会是一件愉快事儿。',
              '我们能够在一起的日子，就是要在一起。让愉快只是愉快，欢喜也只是欢喜。'
            ]
          },
          {
            imgUrl: require('../../assets/service/affection.png'),
            gifUrl: require('../../assets/service/affection.gif'),
            color: '#ed909e',
            title: '亲情活动',
            content: [
              '生活似乎总是在忙碌，因为忙碌所以忽略，生活是一个连续不断的东西却又有头有尾，',
              '停一下吧，给时间一点时间，趁着宝宝宴、寿宴、和纪念日等机会和家人欢聚，',
              '记住此时此刻快乐的我们。'
            ]
          },
        ],
        bottomItem: {
          imgUrl: require('../../assets/service/photography.png'),
          gifUrl: require('../../assets/service/photography.gif'),
          color: '#735ca3',
          title: '海外婚纱映像',
          content: [
            '映像是一份时间的触动，场景、灯光、色彩、温度、守恒、都在，看到感受到，无论从一个地方到另外一个地方，',
            '很美，很真，我们被我们记录，我们被我们坚持。',
            '重要的不是映像师，而是你和你。'
          ]
        }
      }
    },
    computed:{
      unit () {
        return this.$store.getters.getUnit('service')
      },
    }
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
