<template>
  <div>
    <span class="iconsTogether whiteLogo"></span>
    <img class="w100" src="../../assets/wonderfulMoment/pic_top.jpg">
    <p class="secondPageParagraphOnlyTitle wonderfulMomentColor margin152">动心，而且心动</p>
    <div class="casesBox clearfix">
      <item-card v-for="(item, index) of items" v-bind="item" :key="index"/>
    </div>
  </div>
</template>
<script>
  import ItemCard from './ItemCard'

  export default {
    components: {ItemCard},
    data () {
      return {
        items: [
          {
            imgUrl: require('../../assets/wonderfulMoment/case10 (1).jpg'),
            title: 'Poomlcap',
            content: '蜡烛配合鲜花路引，赋予了花儿重新的繁花似锦，春天一点点到来万物复苏，滋润着花蕊和你泛红的脸颊，浪漫从远方弥漫而至，随着时间流逝，温度一点点回升，生命从此被赋予不一样的意义。'
          },
          {
            imgUrl: require('../../assets/wonderfulMoment/case10 (2).jpg'),
            title: '这是标题。',
            content: '蜡烛配合鲜花路引，赋予了花儿重新的繁花似锦，春天一点点到来万物复苏，滋润着花蕊和你泛红的脸颊，浪漫从远方弥漫而至，随着时间流逝，温度一点点回升，生命从此被赋予不一样的意义。'
          },
          {
            imgUrl: require('../../assets/wonderfulMoment/case10 (3).jpg'),
            title: '这是标题。',
            content: '蜡烛配合鲜花路引，赋予了花儿重新的繁花似锦，春天一点点到来万物复苏，滋润着花蕊和你泛红的脸颊，浪漫从远方弥漫而至，随着时间流逝，温度一点点回升，生命从此被赋予不一样的意义。'
          },
          {
            imgUrl: require('../../assets/wonderfulMoment/case10 (4).jpg'),
            title: '这是标题。',
            content: '蜡烛配合鲜花路引，赋予了花儿重新的繁花似锦，春天一点点到来万物复苏，滋润着花蕊和你泛红的脸颊，浪漫从远方弥漫而至，随着时间流逝，温度一点点回升，生命从此被赋予不一样的意义。'
          },
          {
            imgUrl: require('../../assets/wonderfulMoment/case10 (5).jpg'),
            title: '这是标题。',
            content: '蜡烛配合鲜花路引，赋予了花儿重新的繁花似锦，春天一点点到来万物复苏，滋润着花蕊和你泛红的脸颊，浪漫从远方弥漫而至，随着时间流逝，温度一点点回升，生命从此被赋予不一样的意义。'
          },
          {
            imgUrl: require('../../assets/wonderfulMoment/case10 (6).jpg'),
            title: '这是标题。',
            content: '蜡烛配合鲜花路引，赋予了花儿重新的繁花似锦，春天一点点到来万物复苏，滋润着花蕊和你泛红的脸颊，浪漫从远方弥漫而至，随着时间流逝，温度一点点回升，生命从此被赋予不一样的意义。'
          },
          {
            imgUrl: require('../../assets/wonderfulMoment/case10 (7).jpg'),
            title: '这是标题。',
            content: '蜡烛配合鲜花路引，赋予了花儿重新的繁花似锦，春天一点点到来万物复苏，滋润着花蕊和你泛红的脸颊，浪漫从远方弥漫而至，随着时间流逝，温度一点点回升，生命从此被赋予不一样的意义。'
          },
          {
            imgUrl: require('../../assets/wonderfulMoment/case10 (8).jpg'),
            title: '这是标题。',
            content: '蜡烛配合鲜花路引，赋予了花儿重新的繁花似锦，春天一点点到来万物复苏，滋润着花蕊和你泛红的脸颊，浪漫从远方弥漫而至，随着时间流逝，温度一点点回升，生命从此被赋予不一样的意义。'
          },
          {
            imgUrl: require('../../assets/wonderfulMoment/case10 (9).jpg'),
            title: '这是标题。',
            content: '蜡烛配合鲜花路引，赋予了花儿重新的繁花似锦，春天一点点到来万物复苏，滋润着花蕊和你泛红的脸颊，浪漫从远方弥漫而至，随着时间流逝，温度一点点回升，生命从此被赋予不一样的意义。'
          },
          {
            imgUrl: require('../../assets/wonderfulMoment/case10 (10).jpg'),
            title: '这是标题。',
            content: '蜡烛配合鲜花路引，赋予了花儿重新的繁花似锦，春天一点点到来万物复苏，滋润着花蕊和你泛红的脸颊，浪漫从远方弥漫而至，随着时间流逝，温度一点点回升，生命从此被赋予不一样的意义。'
          },
        ]
      }
    },
  }
</script>
<style scoped lang="scss">
  .margin152 {
    margin: 152px 0;
  }
</style>
