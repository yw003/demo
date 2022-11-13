<template>
  <div class="labs">
    <div style=" text-align: center;">
      <h2>编程好工具，学习更轻松</h2>
      <p class="info">选择适合你的编程神器</p>
    </div>
    <div class="labs-content">
      <div class="left">
        <ul>
          <li
            @click="goDetail(item)"
            @mouseover="mouseOver(item)"
            @mouseleave="mouseLeave(item)"
            :class="[Currentli==item.u_id ?'select':'']"
            v-for="item in list"
            :key="item.u_id"
          >
            <div
              class="icon"
              :style="{'background':Currentli==item.u_id ?item.backColor:''||CurrentliNum == item.u_id ?item.backColor:''}"
              :class="[Currentli==item.u_id ?'selected':'']"
            >
              <img :src="item.img" alt />
            </div>
            <div>
              <p :class="[Currentli==item.u_id ?'blue':'']" class="text-title">{{item.title}}</p>
              <p class="text-tag">
                <span
                  v-for="(pro,index) in item.titleDes"
                  :key="index"
                  :class="[Currentli==item.u_id ?'blue':'']"
                >{{pro}}</span>
              </p>
            </div>
          </li>
        </ul>
        <div class="more" @click="next">
          <div :class="[ flag ? 'up' : 'more-tag']"></div>
        </div>
      </div>
      <div class="right">
        <div class="content-up">
          <div class="intro-left">
            <p>
              <i class="iconfont" style="margin-right:10px;font-size:16px">&#xea5a;</i>
              {{content.contentTitle}}
            </p>
            <p class="intro-left-title">{{content.title}}</p>
            <p class="intro-left-des">{{content.contentDes}}</p>
            <div class="ctrl">
              <a href="#" class="btn" v-if="content.u_id=='02'">立即体验</a>
              <a href="#" class="btn" v-else>立即创作</a>
              <a href="#" class="link">了解更多</a>
              <i class="iconfont">&#xe609;</i>
            </div>
          </div>
          <div class="intro-right">
            <video muted autoplay :src="content.video" style="width: 100%; height: 100%;" loop></video>
          </div>
        </div>
        <div class="content-dowm">
          <div class="hd">
            <span>入门学习</span>
            <span>
              更多案列
              <i class="iconfont">&#xe609;</i>
            </span>
          </div>
          <div class="img">
            <div class="exp">
              <img src="../assets/exp.png" alt />
              <span>一起去旅游</span>
            </div>
            <div class="exp">
              <img src="../assets/exp.png" alt />
              <span>一起去旅游</span>
            </div>
            <div class="exp">
              <img src="../assets/exp.png" alt />
              <span>一起去旅游</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Labs",
  data() {
    return {
      Currentli: 0, // 点击的样式标记
      CurrentliNum: 0, //鼠标划入的
      content: this.labList.pageOne[0],
      flag: false,
      list: this.labList.pageOne,
      showColor: false
    }
  },
  props: {
    labList: { type: Object, default: () => { } }
  },
  mounted() {
  },
  methods: {
    goDetail(params) {
      // console.log(params.u_id);
      this.Currentli = params.u_id
      this.content = params
    },
    mouseOver(params) {
      this.CurrentliNum = params.u_id
    },
    mouseLeave() {

    },
    next() {
      this.flag = !this.flag
      let fin = ''
      let arr = this.labList.pageOne.concat(this.labList.pagetwo)
      if (this.flag) {
        fin = arr.filter((item) => {
          return item.u_id != '00' && item.u_id != '01'
        })
      } else {
        fin = arr.filter((item) => {
          return item.u_id != '07' && item.u_id != '08'
        })
      }
      this.list = fin
    }
  }
}
</script>

<style lang="scss" scoped>
.select {
  // display: block !important
  background: #fff;
}
.select:hover {
  background: #fff !important;
}
.select::before {
  opacity: 1 !important;
}
.blue {
  color: #498ff6 !important;
}
.selected {
  border-radius: 100% !important;
}
ul {
  list-style: none;
}
.labs {
  margin-top: 40px;
  .info {
    font-size: 16px;
    color: rgba(74, 89, 111, 0.6);
  }
  .labs-content {
    width: 1200px;
    height: 600px;
    margin: 0 auto;
    background: #fff;
    border-radius: 12px;
    display: flex;
    margin-top: 26px;
    .left {
      width: 290px;
      background: #009cff;
      border-radius: 12px;
      box-sizing: border-box;
      overflow: hidden;
      > ul {
        > li {
          display: flex;
          height: 82px;
          cursor: pointer;
          align-items: center;
          padding: 0 20px;
          border-bottom: 1px solid #0090ff;
          box-sizing: border-box;
          position: relative;
          .icon {
            margin-right: 14px;
            width: 48px;
            height: 48px;
            background: #fff;
            border-radius: 12px;
            transition: all 200ms;
            align-items: center;
            display: flex;
            justify-content: center;
          }
          .text-title {
            font-size: 18px;
            color: #fff;
          }
          .text-tag > span {
            font-size: 12px;
            margin-right: 4px;
            color: #fff;
          }
        }
        > li:hover {
          background: rgb(255, 255, 255, 0.1);
          .icon {
            border-radius: 100%;
            transition: all 200ms;
            // transform: scale(0.8);
            img {
              transition: all 200ms;
              transform: scale(0.9);
            }
          }
          .text-title {
            color: #ffffffcc;
          }
          .text-tag > span {
            color: #ffffffcc;
          }
        }
        > li::before {
          content: "";
          width: 4px;
          position: absolute;
          left: 0;
          top: 0;
          height: 82px;
          background: #0080ff;
          opacity: 0;
        }
      }
      .more {
        width: 290px;
        height: 26px;
        background: #0080ff;
        border-bottom-left-radius: 12px;
        display: flex;
        justify-content: center;
        position: relative;
        bottom: 0;
        cursor: pointer;
        .more-tag {
          width: 0;
          height: 0;
          border: 8px solid;
          border-color: transparent transparent #fff transparent;
          position: absolute;
        }
        .up {
          top: 25%;
          width: 0;
          height: 0;
          border: 8px solid;
          border-color: #fff transparent transparent transparent;
          position: absolute;
        }
      }
    }
    .right {
      margin-left: 50px;
      width: 810px;
      box-sizing: border-box;
      .content-up {
        width: 812px;
        height: 321px;
        display: flex;
        padding-top: 20px;
        border-bottom: 1px solid rgba(74, 89, 111, 0.1);
        padding-bottom: 20px;
        margin-bottom: 20px;
        box-sizing: border-box;
        .intro-left {
          width: 410px;
          .intro-left-title {
            font-size: 24px;
            margin: 23px 0 12px;
          }
          .intro-left-des {
            color: rgba(74, 89, 111, 0.6);
            line-height: 30px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            height: 90px;
          }
          .ctrl {
            margin-top: 30px;
            display: flex;
            height: 40px;
            align-items: center;
            .btn {
              width: 150px;
              height: 40px;
              line-height: 40px;
              background: #0080ff;
              border-radius: 20px;
              color: #fff;
              text-align: center;
              display: block;
              margin-right: 28px;
              text-decoration: none;
            }
            .link {
              color: #4a596f;
              text-decoration: none;
            }
            .iconfont {
              margin-top: 4px;
              margin-left: 5px;
            }
          }
        }
        .intro-right {
          width: 360px;
          height: 270px;
          border-radius: 8px;
          overflow: hidden;
          position: relative;
          margin-left: 40px;
          border: 1px solid rgba(74, 89, 111, 0.1);
        }
      }
      .content-dowm {
        box-sizing: border-box;
        border-radius: 12px;
        background: #fff;
        .hd {
          height: 34px;
          display: flex;
          justify-content: space-between;
        }
        .img {
          display: flex;
          .exp {
            width: 258px;
            margin-right: 18px;
            overflow: hidden;
            img {
              width: 258px;
              border-radius: 4px;
              overflow: hidden;
              margin-top: 8px;
            }
            > span {
              margin-top: 8px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
            }
          }
          .exp:hover {
            img {
              transition: all 0.5s;
              transform: scale(1.1);
            }
          }
        }
      }
    }
  }
}
</style>