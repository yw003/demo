<template>
  <div class="footer">
    <div class="footer-inner">
      <div class="footer-bd">
        <div class="logo"></div>
        <div class="footer-links">
          <p>青少年编程</p>
          <div class="links">
            <ul>
              <li>
                <a href="#">首页</a>
              </li>
              <li>
                <a href="#">实验室</a>
              </li>
              <li>
                <a href="#">课程</a>
              </li>
              <li>
                <a href="#">名师团</a>
              </li>
              <li>
                <a href="#">校园</a>
              </li>
              <li>
                <a href="#">社区</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">追梦营</a>
              </li>
              <li>
                <a href="#">CodingDay</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="link-you">
          <p>友情链接</p>
          <div class="list">
            <ul>
              <li>
                <a href="#">腾讯游戏追梦计划</a>
              </li>
              <li>
                <a href="#">小鹅营地</a>
              </li>
              <li>
                <a href="#">智启学堂</a>
              </li>
              <li>
                <a href="#">腾讯工蜂</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-qrcode">
          <div>
            <img src="../assets/qrcode.png" alt />
          </div>
          <p>关注扣叮公众号</p>
          <p>携手创造孩子未来</p>
        </div>
      </div>
      <div class="footer-bt">
        <p>Copyright © 1998 - 2022 Tencent. All Rights Reserved. 腾讯公司 版权所有</p>
        <p class="bt-link">
          <a href="#">服务协议</a>
          <span>|</span>
          <a href="#">隐私政策</a>
          <span>|</span>
          <a href="#">版权保护投诉指引</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
.footer {
  background: #fff;
  padding: 35px 0;
  font-size: 14px;
  margin-top: 100px;
  .footer-inner {
    width: 1200px;
    margin: 0 auto;
    .footer-bd {
      display: flex;
      .logo {
        background: url("../assets/back.png") no-repeat;
        width: 180px;
        height: 52px;
      }
      .footer-links {
        margin: 0 40px 0 180px;
        > p {
          font-size: 16px;
          color: rgba(74, 89, 111, 0.6);
          margin-bottom: 12px;
        }
        .links {
          display: flex;
          > ul {
            min-width: 130px;
            margin-right: 40px;
            > li {
              line-height: 28px;
              > a {
                color: #4a596f;
              }
              > a:hover {
                color: #2d81f6;
              }
            }
          }
        }
      }
      .link-you {
        > p {
          font-size: 16px;
          color: rgba(74, 89, 111, 0.6);
          margin-bottom: 12px;
        }
        .list {
          > ul {
            width: 130px;
            > li {
              line-height: 28px;
              > a {
                color: #4a596f;
              }
              > a:hover {
                color: #2d81f6;
              }
            }
          }
        }
      }
      .footer-qrcode {
        margin-left: auto;
        > p {
          text-align: center;
          color: rgba(74, 89, 111, 0.6);
        }
      }
    }
    .footer-bt {
      display: flex;
      height: 60px;
      align-items: center;
      border-top: 1px solid #eff3f8;
      margin-top: 30px;
      justify-content: space-between;
      > p {
        color: #4a596f;
      }
      .bt-link {
        > a {
          color: #4a596f;
        }
        >span{
            margin: 0 10px;
        }
      }
    }
  }
}
</style>