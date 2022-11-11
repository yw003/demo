<template>
  <div class="header">
    <!-- 导航 -->
    <Nav></Nav>
    <!-- 轮播 -->
    <Car />
    <!-- 头条 -->
    <div class="notice">
      <i class="spr"></i>
      <p class="text">{{list[currentIndex].title}}</p>
      <i class="hot">Hot</i>
    </div>
    <!-- 编程好工具 -->
    <Labs />
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Car from '../components/Car.vue'
import Labs from '../components/Labs.vue'
export default {
  name: "Home",
  components: {
    Nav,
    Car,
    Labs
  },
  data() {
    return {
      list: [
        { id: '00', title: '腾讯编程课进村，这是孩子们创作的“APP”' },
        { id: '01', title: '2021腾讯追梦营嘉年华圆满落幕' },
        { id: '02', title: '立项四年，腾讯互娱如何做编程教育' },
        { id: '03', title: '2021腾讯追梦营嘉年华圆满落幕' }
      ],
      currentIndex: 0,
      timer: null
    }
  },
  mounted() {
    this.run()
  },
  methods: {
    run() {
      this.timer = setInterval(() => {
        this.currentIndex++
      }, 3500)
    }
  }
}
</script>

<style lang="scss">
.header {
  .notice {
    height: 70px;
    width: 1200px;
    margin: 0 auto;
    background: #fff;
    border-radius: 0 0 12px 12px;
    padding: 0 35px;
    display: flex;
    align-items: center;
    .spr {
      display: inline-block;
      background-image: url("../assets/精灵图.png");
      background-position: 0px -40px;
      width: 138px;
      height: 22px;
    }
    .hot {
      background: #eb676a;
      width: 36px;
      height: 16px;
      border-radius: 8px 8px 8px 0;
      text-align: center;
      font-size: 12px;
      line-height: 16px;
      color: #fff;
    }
    .text {
      margin: 0 10px 0 14px;
      cursor: pointer;
    }
  }
}
</style>