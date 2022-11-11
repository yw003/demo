<template>
  <div class="labs">
    <h2>编程好工具，学习更轻松</h2>
    <p class="info">选择适合你的编程神器</p>
    <div class="labs-content">
      <div class="left">
        <ul>
          <li>
            <div class="icon">
              <img src="../assets/下载.png" alt />
            </div>
            <div>
              <p>腾讯扣叮-编程第一课</p>
              <p>
                <span>6-9岁</span>
                <span>编程启蒙</span>
                <span>计算思维</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Labs"
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}
.labs {
  .info {
    font-size: 16px;
    color: rgba(74, 89, 111, 0.6);
  }
  .labs-content {
    width: 1200px;
    height: 600px;
    margin: 0 auto;
    .left {
      width: 290px;
      background: #009cff;
      border-radius: 12px;
      > ul {
        > li {
          display: flex;
          height: 82px;
          cursor: pointer;
          align-items: center;
          padding: 0 20px;
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
          .icon:hover {
            border-radius: 100%;
            transition: all 200ms;
          }
        }
      }
    }
  }
}
</style>