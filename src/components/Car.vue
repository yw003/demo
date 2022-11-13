<template>
  <div class="slide">
    <ul>
      <li class="slide_item">
        <a href="#">
          <img :src="CarList[currentIndex].url" alt />
        </a>
      </li>
      <!-- <li class="slide_item" v-for="item in CarList" :key="item.id">
        <a href="#">
          <img :src="item.url" alt />
        </a>
      </li>-->
    </ul>
    <div class="slide-nav">
      <a href="#" class="left" @click="goPage(-1)">
        <i class="iconfont">&#xe608;</i>
      </a>
      <ul>
        <li
          v-for="(item,index) in CarList"
          :key="item.id"
          :class="[item.id == currentIndex ? 'blue':'' ]"
          @click="gotoPage(index)"
          @mouseenter="enter"
          @mouseleave="leave"
        >{{item.title}}</li>
      </ul>
      <a href="#" class="right" @click="goPage(1)">
        <i class="iconfont">&#xe609;</i>
      </a>
    </div>
  </div>
</template>

<script>
import img1 from '@/assets/轮播1.png'
import img2 from '@/assets/轮播2.png'
import img3 from '@/assets/轮播3.jpg'
import img4 from '@/assets/轮播4.jpg'
import img5 from '@/assets/轮播5.jpg'
export default {
  name: 'Car',
  data() {
    return {
      CarList: [
        { id: '00', url: img1, title: '第四届追梦营' },
        { id: '01', url: img2, title: '深圳创客节创意编程赛' },
        { id: '02', url: img3, title: '深圳TGE虚拟机器人挑战赛' },
        { id: '03', url: img4, title: '编程与人工智能活动' },
        { id: '04', url: img5, title: '腾讯游戏年度故事片' },
      ],
      currentIndex: 0,
      timer: null
    }
  },
  mounted() {
    // console.log(this.CarList);
    this.runInv()
  },
  methods: {
    gotoPage(params) {
      //   console.log(params);
      if (this.currentIndex !== 1 || this.currentIndex !== - 1) {
        this.currentIndex = params
      }
    },
    goPage(params) {
      if (this.currentIndex == 4 && params == 1) {
        this.currentIndex = 0
      } else if (this.currentIndex == 0 && params == -1) {
        this.currentIndex = 4
      } else {
        this.currentIndex += params
      }
    },
    runInv() {
      this.timer = setInterval(() => {
        if (this.currentIndex >= 4) {
          this.currentIndex = 0
        } else {
          this.currentIndex++
        }
      }, 2500)
    },
    enter() {
      clearInterval(this.timer)
    },
    leave() {
      this.runInv()
    }
  }
}
</script>

<style scoped lang="scss">
.blue {
  color: #009cff;
  border-bottom: 2px solid #009cff !important;
}
.slide {
  position: relative;
  height: 480px;
  > ul {
    height: 480px;
  }
  .slide-nav {
    width: 1200px;
    position: absolute;
    bottom: 0;
    display: flex;
    left: 50%;
    bottom: 0;
    margin-left: -600px;
    height: 50px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 12px 12px 0 0;
    overflow: hidden;
    align-items: center;
    cursor: pointer;
    > a {
      display: block;
      line-height: 50px;
      width: 50px;
      text-decoration: none;
      text-align: center;
      > i {
        font-size: 20px;
        color: rgba(223, 219, 219, 0.933);
      }
    }
    > a:hover {
      color: #009cff;
      background: #fff;
    }
    > ul {
      list-style: none;
      display: flex;
      flex: 1;
      height: 50px;
      align-items: center;
      li {
        width: 220px;
        line-height: 50px;
        border-right: 1px solid rgba(255, 255, 255, 0.6);
        text-align: center;
        border-bottom: 2px solid transparent;
      }
      li:hover {
        color: #009cff;
      }
    }
  }
}
</style>