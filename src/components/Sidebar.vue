<template>
  <div class="sidebar" :class="[show?'showSide':'xiaoshi']">
    <transition>
      <div class="main">
        <ul>
          <li>
            <a href="#">
              <i class="iconfont" style="margin-right:5px">&#xea5a;</i>
              <br />实验室
            </a>
          </li>
          <li>
            <a href="#">
              <i class="iconfont" style="margin-right:5px">&#xea5a;</i>
              <br />回顶部
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      scrollTopHeight: '', //页面滚动的高度
      show: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  watch: {
    scrollTopHeight() {
      if (this.scrollTopHeight > 600) {
        this.show = true
      } else {
        this.show = false
      }
    }
  },
  methods: {
    handleScroll() {
      let top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      this.scrollTopHeight = top
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}
.showSide {
  opacity: 1 !important;
}
.xiaoshi {
//   opacity: 0 !important;
  animation: window-close 0.2s 1 !important;
  transform: translateY(-10px);
  @keyframes window-close {
    0% {
      transform: translateY(0px);
      opacity: 1
    }
    20% {
      transform: translateY(10px);
    }
    40% {
      transform: translateY(20px);
    }
    60% {
      transform: translateY(30px);
    }
    80% {
      transform: translateY(60px);
    }
    100% {
      transform: translateY(70px);
      opacity: 0
    }
  }
}
.sidebar {
  width: 110px;
  height: 200px;
  position: fixed;
  bottom: 80px;
  right: 1%;
  z-index: 13;
  opacity: 0;
  animation: window-open 0.2s 1;
  .main {
    width: 60px;
    margin: 0 auto;
    border-radius: 8px;
    background: #fff;
    > ul {
      width: 60px;
      //   background: #fff;
      //   border-radius: 8px;
      //   box-shadow: 0px 0px 4px rgb(74 89 111 / 20%);
      > li:not(:last-child) {
        border-bottom: 1px solid #eff3f8;
      }
      > li {
        width: 60px;
        height: 68px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        > a {
          text-decoration: none;
          color: rgba(74, 89, 111, 0.6);
          font-size: 12px;
        }
      }
    }
  }
  @keyframes window-open {
    0% {
      bottom: 0;
    }
    20% {
      bottom: 20px;
    }
    40% {
      bottom: 30px;
    }
    60% {
      bottom: 50px;
    }
    80% {
      bottom: 60px;
    }
    100% {
      bottom: 80px;
    }
  }
}
</style>