<template>
  <div class="header">
    <div class="logo">
      <a href="https://zhuimeng.qq.com/" class="header-logo"></a>
      <span class="logo-line"></span>
      <a href class="header-logo1"></a>
    </div>
    <ul class="menu">
      <li v-for="item in navDataList" :key="item.id">
        <a href="#">{{item.title}}</a>
      </li>
      <li class="last">
        <a href="#">赛事活动</a>
        <ul class="dropdown">
          <li>
            <a href="#">2022年NOC扣叮创意编程</a>
          </li>
          <li>
            <a href="#">深圳创客节创意编程赛</a>
          </li>
          <li>
            <a href="#">龙岗区第十四届中小学生科技奥林匹克竞赛活动</a>
          </li>
        </ul>
      </li>
    </ul>
    <div class="tool">
      <button class="btn">
        立即创作
        <ul class="tool-dropdown">
          <li>
            <a href="#">
              <i class="iconfont" style="margin-right:5px">&#xea5a;</i>创意实验室
            </a>
          </li>
          <li>
            <a href="#">
              <i class="iconfont" style="margin-right:5px">&#xe601;</i>Python实验室
            </a>
          </li>
          <li>
            <a href="#">
              <i class="iconfont" style="margin-right:5px">&#xea5a;</i>3D实验室
            </a>
          </li>
          <li>
            <a href="#">
              <i class="iconfont" style="margin-right:5px">&#xea5a;</i>人工智能实验室
            </a>
          </li>
          <li>
            <a href="#">
              <i class="iconfont" style="margin-right:5px">&#xe601;</i>游戏实验室
            </a>
          </li>
          <li>
            <a href="#">
              <i class="iconfont" style="margin-right:5px">&#xea5a;</i>艺术(P5)实验室
            </a>
          </li>
          <li>
            <a href="#">
              <i class="iconfont" style="margin-right:5px">&#xea5a;</i>硬件实验室
            </a>
          </li>
          <li>
            <a href="#">
              <i class="iconfont" style="margin-right:5px">&#xea5a;</i>JS实验室
            </a>
          </li>
        </ul>
      </button>
      <button class="login" @click="login">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      navDataList: [
        { id: '01', title: '首页' },
        { id: '02', title: '实验室' },
        { id: '03', title: '课程' },
        { id: '04', title: '名师团' },
        { id: '05', title: '校园' },
        { id: '06', title: '社区' },
        { id: '07', title: '追梦营' },
        { id: '08', title: 'CodingDay' },
      ]
    }
  },
  methods: {
    login() {
      alert('登录')
    }
  },
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
ul {
  list-style: none;
}
.header .menu > li:last-child > a::after {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 4px 0 4px;
  border-color: #0080ff transparent transparent transparent;
  display: inline-block;
  content: "";
  margin-left: 6px;
  transition: all 200ms;
  vertical-align: 2px;
}
.header .menu > li:last-child:hover > a::after {
  transform: rotate(180deg);
}
.header {
  display: flex;
  background: #fff;
  height: 60px;
  .logo {
    padding-left: 40px;
    height: 60px;
    display: flex;
    align-items: center;
    .header-logo {
      background-image: url("../assets/logo.png");
      width: 180px;
      height: 52px;
      background-size: 180px 52px;
      display: block;
    }
    .logo-line {
      height: 25px;
      width: 1px;
      background: #d4dce8;
      display: block;
      margin: 0 10px;
    }
    .header-logo1 {
      background-image: url("../assets/logo2.png");
      width: 133px;
      height: 57px;
      background-size: 133px 57px;
    }
  }
  .menu {
    margin-left: 20px;
    display: flex;
    align-items: center;
    > li:not(:last-child) {
      border-radius: 26px;
      transition: all 200ms;
      position: relative;
      a {
        color: #4a596f;
        padding: 0 28px;
        line-height: 42px;
        display: block;
      }
      a:hover {
        background: #eff3f8;
        border-radius: 26px;
      }
    }
    .last {
      border-radius: 26px;
      transition: all 200ms;
      position: relative;
      > a {
        padding: 0 28px;
        line-height: 42px;
        display: block;
      }
      .dropdown {
        position: absolute;
        z-index: 101;
        background: #fff;
        box-shadow: 0 4px 20px rgb(77 90 109 / 40%);
        border-radius: 8px;
        width: 178px;
        top: 36px;
        left: 50%;
        margin-left: -89px;
        display: none;
        li {
          //   line-height: 43px !important;
          padding: 10px 8px;
          > a {
            font-size: 14px;
            color: #4a596f;
          }
        }
        li:hover {
          //   line-height: 43px !important;
          background: #d4dce8;
          z-index: 103;
          position: relative;
          > a {
            font-size: 14px;
            color: #009cff;
          }
        }
      }
      .dropdown::after {
        content: "";
        display: block;
        width: 10px;
        height: 10px;
        background-color: #fff;
        right: 38%;
        top: -5px;
        position: absolute;
        transform: rotate(45deg);
        z-index: 100;
      }
    }
    .last:hover {
      .dropdown {
        display: block;
      }
    }
  }
  .tool {
    position: absolute;
    right: 40px;
    top: 0;
    height: 60px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    .login {
      margin: 0 0 0 20px;
      line-height: 60px;
      color: #4a596f;
      border: none;
      background: none;
      font-size: 16px;
      cursor: pointer;
    }
    .btn {
      transition: all 0.5s ease;
      width: 112px;
      line-height: 34px;
      background-color: #0080ff;
      border-radius: 17px;
      color: #fff;
      text-align: center;
      font-size: 16px;
      cursor: pointer;
      border: none;
      .tool-dropdown {
        position: absolute;
        z-index: 101;
        background: #fff;
        box-shadow: 0 4px 20px rgb(77 90 109 / 40%);
        border-radius: 8px;
        width: 178px;
        top: 49px;
        left: 33%;
        margin-left: -89px;
        display: none;
        > li {
          line-height: 43px;
          > a {
            padding: 0 20px;
            font-size: 14px;
            color: #4a596f;
            display: block;
            display: flex;
            flex-flow: row wrap;
          }
        }
        > li:hover {
          line-height: 43px;
          background: #f0f3f7;
        }
      }
    }
    .btn:hover {
      background-color: #009cff;
      .tool-dropdown {
        animation: all 1s 1;
        display: block;
      }
    }
    .btn::after {
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 6px 4px 0 4px;
      border-color: #fff transparent transparent transparent;
      display: inline-block;
      content: "";
      margin-left: 6px;
      transition: all 200ms;
      vertical-align: 2px;
    }
    .btn:hover::after {
      transform: rotate(180deg);
    }
  }
}
</style>
